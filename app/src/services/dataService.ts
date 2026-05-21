import type {
  DailyRecord,
  PopulationRow,
  RawDailyRecord,
  TransformRequest,
  TransformSeries,
  TransformSeriesContract
} from "../domain/covidData";
import { buildSeries, buildSeriesContract } from "./transforms";
import populationCsvText from "../data/pop2019.csv?raw";

export interface DataServiceInput {
  request: TransformRequest;
}

export interface FetchSeriesContractInput {
  request: TransformRequest;
  location: string;
}

export type DataServiceResult = TransformSeries;

export interface GeographyOption {
  value: number;
  label: string;
}

export interface DataSnapshot {
  records: DailyRecord[];
  population: PopulationRow[];
  stateNamesByFips: Map<number, string>;
  countyNamesByFips: Map<number, string>;
  stateOptions: GeographyOption[];
  dateRange: [string | null, string | null];
}

const COUNTIES_YEARS = ["2020", "2021", "2022"];
const NYT_RAW_BASE = "https://raw.githubusercontent.com/nytimes/covid-19-data/master";

const SHORT_STATE: Record<number, string> = {
  1: "AL",
  2: "AK",
  4: "AZ",
  5: "AR",
  6: "CA",
  8: "CO",
  9: "CT",
  10: "DE",
  11: "DC",
  12: "FL",
  13: "GA",
  15: "HI",
  16: "ID",
  17: "IL",
  18: "IN",
  19: "IA",
  20: "KS",
  21: "KY",
  22: "LA",
  23: "ME",
  24: "MD",
  25: "MA",
  26: "MI",
  27: "MN",
  28: "MS",
  29: "MO",
  30: "MT",
  31: "NE",
  32: "NV",
  33: "NH",
  34: "NJ",
  35: "NM",
  36: "NY",
  37: "NC",
  38: "ND",
  39: "OH",
  40: "OK",
  41: "OR",
  42: "PA",
  44: "RI",
  45: "SC",
  46: "SD",
  47: "TN",
  48: "TX",
  49: "UT",
  50: "VT",
  51: "VA",
  53: "WA",
  54: "WV",
  55: "WI",
  56: "WY",
  60: "AS",
  66: "GU",
  69: "MP",
  72: "PR",
  78: "VI"
};

let snapshotPromise: Promise<DataSnapshot> | null = null;
let cachedSnapshot: DataSnapshot | null = null;

function isFixtureMode(): boolean {
  if (typeof process === "undefined") {
    return false;
  }

  if (process.env.COVID_DASH_REAL_DATA === "1") {
    return false;
  }

  return process.env.NODE_ENV === "test";
}

function parseCsvRows(csvText: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentValue = "";
  let inQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const char = csvText[index] ?? "";

    if (char === '"') {
      const next = csvText[index + 1] ?? "";
      if (inQuotes && next === '"') {
        currentValue += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === ",") {
      currentRow.push(currentValue);
      currentValue = "";
      continue;
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      if (char === "\r" && (csvText[index + 1] ?? "") === "\n") {
        index += 1;
      }
      currentRow.push(currentValue);
      if (currentRow.length > 1 || currentRow[0] !== "") {
        rows.push(currentRow);
      }
      currentRow = [];
      currentValue = "";
      continue;
    }

    currentValue += char;
  }

  if (currentValue.length > 0 || currentRow.length > 0) {
    currentRow.push(currentValue);
    rows.push(currentRow);
  }

  return rows;
}

function parseNumber(value: string): number | null {
  if (value === "") {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function parsePopulation(csvText: string): {
  population: PopulationRow[];
  stateNamesByFips: Map<number, string>;
  countyNamesByFips: Map<number, string>;
  stateOptions: GeographyOption[];
} {
  const rows = parseCsvRows(csvText);
  const body = rows.slice(1);

  const population: PopulationRow[] = [];
  const stateNamesByFips = new Map<number, string>();
  const countyNamesByFips = new Map<number, string>();

  for (const row of body) {
    const fips = parseNumber(row[0] ?? "");
    if (fips == null) {
      continue;
    }

    const pop = parseNumber(row[1] ?? "");
    const state = row[2] ?? "";
    const county = row[3] ?? "";

    population.push({
      fips,
      pop
    });

    if (county === "") {
      stateNamesByFips.set(fips, state);
      continue;
    }

    countyNamesByFips.set(fips, county);
  }

  const stateOptions = [...stateNamesByFips.entries()]
    .sort((left, right) => left[1].localeCompare(right[1]))
    .map(([value, label]) => ({ value, label }));

  return {
    population,
    stateNamesByFips,
    countyNamesByFips,
    stateOptions
  };
}

function rowsToDailyRecords(rows: RawDailyRecord[], stateFipsByName: Map<string, number>): DailyRecord[] {
  const records: DailyRecord[] = [];

  for (const row of rows) {
    const rawFips = row.fips;
    const repaired = rawFips ?? repairMissingFipsFromStateMap(row.state, row.county, stateFipsByName);
    if (repaired == null) {
      continue;
    }

    records.push({
      date: row.date,
      fips: repaired,
      cases: row.cases,
      deaths: row.deaths
    });
  }

  return records.sort((left, right) => {
    if (left.fips !== right.fips) {
      return left.fips - right.fips;
    }

    return left.date.localeCompare(right.date);
  });
}

function parseNytRows(csvText: string, withCounty: boolean): RawDailyRecord[] {
  const rows = parseCsvRows(csvText).slice(1);
  const mapped: RawDailyRecord[] = [];

  for (const row of rows) {
    const date = row[0] ?? "";
    const county = withCounty ? row[1] ?? null : null;
    const state = withCounty ? row[2] ?? "" : row[1] ?? "";
    const fipsIndex = withCounty ? 3 : 2;
    const casesIndex = withCounty ? 4 : 3;
    const deathsIndex = withCounty ? 5 : 4;
    const fips = parseNumber(row[fipsIndex] ?? "");
    const cases = parseNumber(row[casesIndex] ?? "");
    const deaths = parseNumber(row[deathsIndex] ?? "");

    if (date === "" || state === "" || cases == null || deaths == null) {
      continue;
    }

    mapped.push({
      date,
      county,
      state,
      fips,
      cases,
      deaths
    });
  }

  return mapped;
}

function repairMissingFipsFromStateMap(
  state: string,
  county: string | null,
  stateFipsByName: Map<string, number>
): number | null {
  if (state === "New York" && county === "New York City") {
    return 36998;
  }

  if (state === "Missouri" && county === "Kansas City") {
    return 29998;
  }

  if (state === "Missouri" && county === "Joplin") {
    return 29997;
  }

  if (county === "Unknown") {
    const stateFips = stateFipsByName.get(state);
    return stateFips == null ? null : stateFips * 1000 + 999;
  }

  return null;
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

function deriveDateRange(records: DailyRecord[]): [string | null, string | null] {
  if (records.length === 0) {
    return [null, null];
  }

  const dates = records.map((record) => record.date).sort((left, right) => left.localeCompare(right));
  const start = dates[0] ?? null;
  const end = dates[dates.length - 1] ?? null;
  return [start, end];
}

function makeFixtureSnapshot(): DataSnapshot {
  const stateNamesByFips = new Map<number, string>([
    [10, "State 10"],
    [20, "State 20"]
  ]);
  const countyNamesByFips = new Map<number, string>([
    [10, "County 10"],
    [20, "County 20"]
  ]);

  return {
    records: PHASE2_BASELINE_RECORDS,
    population: PHASE2_BASELINE_POPULATION,
    stateNamesByFips,
    countyNamesByFips,
    stateOptions: [
      { value: 10, label: "State 10" },
      { value: 20, label: "State 20" }
    ],
    dateRange: deriveDateRange(PHASE2_BASELINE_RECORDS)
  };
}

async function makeRealSnapshot(): Promise<DataSnapshot> {
  const { population, stateNamesByFips, countyNamesByFips, stateOptions } = parsePopulation(populationCsvText);
  const stateFipsByName = new Map<string, number>(
    [...stateNamesByFips.entries()].map(([fips, stateName]) => [stateName, fips])
  );

  const statesCsv = await fetchText(`${NYT_RAW_BASE}/us-states.csv`);
  const statesRows = parseNytRows(statesCsv, false);

  const countyCsvByYear = await Promise.all(
    COUNTIES_YEARS.map((year) => fetchText(`${NYT_RAW_BASE}/us-counties-${year}.csv`))
  );
  const countyRows = countyCsvByYear.flatMap((csvText) => parseNytRows(csvText, true));

  const records = rowsToDailyRecords([...statesRows, ...countyRows], stateFipsByName);

  return {
    records,
    population,
    stateNamesByFips,
    countyNamesByFips,
    stateOptions,
    dateRange: deriveDateRange(records)
  };
}

export async function loadDataSnapshot(): Promise<DataSnapshot> {
  if (cachedSnapshot != null) {
    return cachedSnapshot;
  }

  if (snapshotPromise != null) {
    return snapshotPromise;
  }

  snapshotPromise = (async () => {
    const snapshot = isFixtureMode() ? makeFixtureSnapshot() : await makeRealSnapshot();
    cachedSnapshot = snapshot;
    snapshotPromise = null;
    return snapshot;
  })().catch((error) => {
    snapshotPromise = null;
    throw error;
  });

  return snapshotPromise;
}

export function getCachedDataSnapshot(): DataSnapshot | null {
  return cachedSnapshot;
}

export function resetDataSnapshotCache(): void {
  snapshotPromise = null;
  cachedSnapshot = null;
}

export function buildSelectionLabel(selectedFips: number[], snapshot: DataSnapshot): string {
  if (selectedFips.length === 0) {
    return "";
  }

  const sorted = [...selectedFips].sort((left, right) => left - right);
  const allStates = sorted.every((fips) => fips < 1000 && !snapshot.countyNamesByFips.has(fips));
  if (allStates) {
    return sorted.map((fips) => SHORT_STATE[fips] ?? String(fips)).join(" + ");
  }

  const allCounties = sorted.every((fips) => fips >= 1000 || snapshot.countyNamesByFips.has(fips));
  if (!allCounties) {
    return "Mixed selection";
  }

  const states = [...new Set(sorted.map((fips) => (fips < 1000 ? fips : Math.floor(fips / 1000))))];
  const sameState = states.length === 1;
  const countyLabels = sorted.map((fips) => snapshot.countyNamesByFips.get(fips) ?? `County ${fips}`);

  if (sameState) {
    const stateCode = SHORT_STATE[states[0] ?? 0] ?? String(states[0] ?? "");
    return `${countyLabels.join(" + ")}, ${stateCode}`;
  }

  return sorted
    .map((fips) => {
      const stateFips = Math.floor(fips / 1000);
      const county = snapshot.countyNamesByFips.get(fips) ?? `County ${fips}`;
      return `${county}, ${SHORT_STATE[stateFips] ?? stateFips}`;
    })
    .join(" + ");
}

export function getCountyOptionsForStates(
  selectedStateFips: number[],
  snapshot: DataSnapshot
): GeographyOption[] {
  if (selectedStateFips.length === 0) {
    return [];
  }

  const selectedStates = new Set(selectedStateFips);
  const sameState = selectedStates.size === 1;
  const countyOptions: GeographyOption[] = [];

  for (const [fips, countyName] of snapshot.countyNamesByFips.entries()) {
    const stateFips = fips < 1000 ? fips : Math.floor(fips / 1000);
    if (!selectedStates.has(stateFips)) {
      continue;
    }

    const stateCode = SHORT_STATE[stateFips] ?? String(stateFips);
    countyOptions.push({
      value: fips,
      label: sameState ? countyName : `${countyName}, ${stateCode}`
    });
  }

  return countyOptions.sort((left, right) => left.label.localeCompare(right.label));
}

export async function fetchSeries(input: DataServiceInput): Promise<DataServiceResult> {
  return buildSeries(input.request);
}

export async function fetchSeriesContract(
  input: FetchSeriesContractInput
): Promise<TransformSeriesContract> {
  return buildSeriesContract(input.request, input.location);
}

export const EMPTY_RECORDS: DailyRecord[] = [];
export const EMPTY_POPULATION: PopulationRow[] = [];

export const PHASE2_BASELINE_RECORDS: DailyRecord[] = [
  { date: "2020-01-01", fips: 10, cases: 10, deaths: 1 },
  { date: "2020-01-01", fips: 20, cases: 5, deaths: 0 },
  { date: "2020-01-02", fips: 10, cases: 20, deaths: 2 },
  { date: "2020-01-02", fips: 20, cases: 9, deaths: 1 },
  { date: "2020-01-03", fips: 10, cases: 35, deaths: 4 },
  { date: "2020-01-03", fips: 20, cases: 15, deaths: 2 }
];

export const PHASE2_BASELINE_POPULATION: PopulationRow[] = [
  { fips: 10, pop: 1000 },
  { fips: 20, pop: 500 }
];

export function createEmptyTransformRequest(): TransformRequest {
  return {
    records: EMPTY_RECORDS,
    selectedFips: [],
    population: EMPTY_POPULATION,
    metricType: "cases",
    valueMode: "diff",
    rollingDays: 7,
    normalizeByPopulation: true,
  };
}

export async function fetchEmptySeries(): Promise<DataServiceResult> {
  return fetchSeries({ request: createEmptyTransformRequest() });
}
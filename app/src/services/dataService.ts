import type {
  DailyRecord,
  PopulationRow,
  RawDailyRecord,
  TransformRequest,
  TransformSeries,
  TransformSeriesContract
} from "../domain/covidData";
import { buildSeries, buildSeriesContract } from "./transforms";
import populationCsvText from "../data/pop2020.csv?raw";

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

export interface ResolvedSnapshotData {
  records: DailyRecord[];
  population: PopulationRow[];
  stateOptions: GeographyOption[];
  dateExtent: [string, string] | null;
}

const EMPTY_RUNTIME_DATA: ResolvedSnapshotData = {
  records: [],
  population: [],
  stateOptions: [],
  dateExtent: null
};

interface SerializedDataSnapshot {
  records: Array<[string, number, number, number]>;
  population: Array<[number, number | null]>;
  stateNamesByFips: Array<[number, string]>;
  countyNamesByFips: Array<[number, string]>;
  stateOptions: GeographyOption[];
  dateRange: [string | null, string | null];
}

const COUNTIES_YEARS = ["2020", "2021", "2022"];
const DEFAULT_NYT_RAW_BASE = "https://raw.githubusercontent.com/nytimes/covid-19-data/master";
const DEFAULT_STATIC_SNAPSHOT_PATH = "data/nyt-snapshot.json.gz";

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

export const STATE_GROUPS: Array<[string, number[]]> = [
  ["all", [
    1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46,
    47, 48, 49, 50, 51, 53, 54, 55, 56, 60, 66, 69, 72, 78
  ]],
  ["lower49", [
    1, 4, 5, 6, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48,
    49, 50, 51, 53, 54, 55, 56
  ]],
  ["northeast", [9, 23, 25, 33, 34, 36, 42, 44, 50]],
  ["midwest", [17, 18, 19, 20, 26, 27, 29, 31, 38, 39, 46, 55]],
  ["south", [1, 5, 10, 11, 12, 13, 21, 22, 24, 28, 37, 40, 45, 47, 48, 51, 54]],
  ["west", [4, 6, 8, 16, 30, 32, 35, 41, 49, 53, 56]]
];

export const FIXTURE_STATE_OPTIONS: GeographyOption[] = [
  { value: 10, label: "State 10" },
  { value: 20, label: "State 20" }
];

export const FIXTURE_COUNTY_OPTIONS: GeographyOption[] = [
  { value: 10, label: "County 10" },
  { value: 20, label: "County 20" }
];

let snapshotPromise: Promise<DataSnapshot> | null = null;
let cachedSnapshot: DataSnapshot | null = null;

interface SnapshotCountyOptionsIndex {
  countiesByState: Map<number, GeographyOption[]>;
  countiesByStateWithCode: Map<number, GeographyOption[]>;
  combinedByStateKey: Map<string, GeographyOption[]>;
}

const countyOptionsIndexCache = new WeakMap<DataSnapshot, SnapshotCountyOptionsIndex>();

function getNytRawBase(): string {
  const configured = import.meta.env.VITE_NYT_RAW_BASE;
  if (typeof configured !== "string" || configured.trim() === "") {
    return DEFAULT_NYT_RAW_BASE;
  }

  return configured.replace(/\/+$/, "");
}

function envFlag(name: string, defaultValue: boolean): boolean {
  const raw = import.meta.env[name];
  if (typeof raw !== "string") {
    return defaultValue;
  }

  const normalized = raw.trim().toLowerCase();
  if (normalized === "" || normalized === "1" || normalized === "true" || normalized === "yes") {
    return true;
  }

  if (normalized === "0" || normalized === "false" || normalized === "no") {
    return false;
  }

  return defaultValue;
}

function shouldPreferStaticSnapshot(): boolean {
  return envFlag("VITE_PREFER_STATIC_SNAPSHOT", true);
}

function shouldAllowRemoteFallback(): boolean {
  return envFlag("VITE_ALLOW_REMOTE_FALLBACK", true);
}

function getStaticSnapshotUrl(): string {
  const configured = import.meta.env.VITE_STATIC_SNAPSHOT_URL;
  const rawPath = typeof configured === "string" && configured.trim() !== ""
    ? configured.trim()
    : DEFAULT_STATIC_SNAPSHOT_PATH;

  if (/^https?:\/\//i.test(rawPath)) {
    return rawPath;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return new URL(rawPath.replace(/^\/+/, ""), window.location.origin + normalizedBase).toString();
}

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

  return records;
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

async function parseStaticJsonResponse(response: Response): Promise<SerializedDataSnapshot> {
  const parsed = (await response.json()) as SerializedDataSnapshot;
  return parsed;
}

async function fetchStaticSnapshotByUrl(url: string): Promise<SerializedDataSnapshot> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`failed to fetch static snapshot ${url}: ${response.status}`);
  }

  if (!url.endsWith(".gz")) {
    return parseStaticJsonResponse(response);
  }

  try {
    const maybeJsonText = await response.clone().text();
    return JSON.parse(maybeJsonText) as SerializedDataSnapshot;
  } catch {
    // The response body is still compressed bytes; fall through to explicit gzip decoding.
  }

  const body = response.body;
  if (typeof DecompressionStream === "undefined" || body == null) {
    throw new Error("gzip static snapshot requires DecompressionStream support");
  }

  const decompressed = body.pipeThrough(new DecompressionStream("gzip"));
  const text = await new Response(decompressed).text();
  return JSON.parse(text) as SerializedDataSnapshot;
}

function deserializeSnapshot(serialized: SerializedDataSnapshot): DataSnapshot {
  return {
    records: serialized.records.map(([date, fips, cases, deaths]) => ({
      date,
      fips,
      cases,
      deaths
    })),
    population: serialized.population.map(([fips, pop]) => ({ fips, pop })),
    stateNamesByFips: new Map(serialized.stateNamesByFips),
    countyNamesByFips: new Map(serialized.countyNamesByFips),
    stateOptions: serialized.stateOptions,
    dateRange: serialized.dateRange
  };
}

async function makeStaticSnapshot(): Promise<DataSnapshot> {
  const url = getStaticSnapshotUrl();
  try {
    const serialized = await fetchStaticSnapshotByUrl(url);
    return deserializeSnapshot(serialized);
  } catch (primaryError) {
    if (!url.endsWith(".gz")) {
      throw primaryError;
    }

    const jsonUrl = url.slice(0, -3);
    const serialized = await fetchStaticSnapshotByUrl(jsonUrl);
    return deserializeSnapshot(serialized);
  }
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

  let start = records[0]?.date ?? null;
  let end = records[0]?.date ?? null;

  for (let index = 1; index < records.length; index += 1) {
    const date = records[index]?.date;
    if (date == null) {
      continue;
    }

    if (start == null || date.localeCompare(start) < 0) {
      start = date;
    }

    if (end == null || date.localeCompare(end) > 0) {
      end = date;
    }
  }

  return [start, end];
}

function toDateExtent(dateRange: [string | null, string | null]): [string, string] | null {
  const [start, end] = dateRange;
  if (start == null || end == null) {
    return null;
  }

  return [start, end];
}

function getSnapshotCountyOptionsIndex(snapshot: DataSnapshot): SnapshotCountyOptionsIndex {
  const cached = countyOptionsIndexCache.get(snapshot);
  if (cached != null) {
    return cached;
  }

  const countiesByState = new Map<number, GeographyOption[]>();
  const countiesByStateWithCode = new Map<number, GeographyOption[]>();

  for (const [fips, countyName] of snapshot.countyNamesByFips.entries()) {
    const stateFips = fips < 1000 ? fips : Math.floor(fips / 1000);
    const stateCode = SHORT_STATE[stateFips] ?? String(stateFips);

    let plain = countiesByState.get(stateFips);
    if (plain == null) {
      plain = [];
      countiesByState.set(stateFips, plain);
    }

    let withCode = countiesByStateWithCode.get(stateFips);
    if (withCode == null) {
      withCode = [];
      countiesByStateWithCode.set(stateFips, withCode);
    }

    plain.push({ value: fips, label: countyName });
    withCode.push({ value: fips, label: `${countyName}, ${stateCode}` });
  }

  for (const options of countiesByState.values()) {
    options.sort((left, right) => left.label.localeCompare(right.label));
  }

  for (const options of countiesByStateWithCode.values()) {
    options.sort((left, right) => left.label.localeCompare(right.label));
  }

  const index: SnapshotCountyOptionsIndex = {
    countiesByState,
    countiesByStateWithCode,
    combinedByStateKey: new Map<string, GeographyOption[]>()
  };

  countyOptionsIndexCache.set(snapshot, index);
  return index;
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
    records: FIXTURE_RECORDS,
    population: FIXTURE_POPULATION,
    stateNamesByFips,
    countyNamesByFips,
    stateOptions: FIXTURE_STATE_OPTIONS,
    dateRange: FIXTURE_DATE_RANGE
  };
}

async function loadRuntimeSnapshot(): Promise<DataSnapshot> {
  if (!shouldPreferStaticSnapshot()) {
    return makeRealSnapshot();
  }

  try {
    return await makeStaticSnapshot();
  } catch (error) {
    if (!shouldAllowRemoteFallback()) {
      throw error;
    }

    if (typeof console !== "undefined" && typeof console.warn === "function") {
      console.warn("Static snapshot unavailable, falling back to NYT source", error);
    }

    return makeRealSnapshot();
  }
}

async function makeRealSnapshot(): Promise<DataSnapshot> {
  const nytRawBase = getNytRawBase();
  const { population, stateNamesByFips, countyNamesByFips, stateOptions } = parsePopulation(populationCsvText);
  const stateFipsByName = new Map<string, number>(
    [...stateNamesByFips.entries()].map(([fips, stateName]) => [stateName, fips])
  );

  const statesCsv = await fetchText(`${nytRawBase}/us-states.csv`);
  const statesRows = parseNytRows(statesCsv, false);

  const countyCsvByYear = await Promise.all(
    COUNTIES_YEARS.map((year) => fetchText(`${nytRawBase}/us-counties-${year}.csv`))
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
    const snapshot = isFixtureMode()
      ? makeFixtureSnapshot()
      : await loadRuntimeSnapshot();

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

export function resolveSnapshotData(snapshot: DataSnapshot | null): ResolvedSnapshotData {
  if (snapshot == null) {
    if (!isFixtureMode()) {
      return EMPTY_RUNTIME_DATA;
    }

    return {
      records: FIXTURE_RECORDS,
      population: FIXTURE_POPULATION,
      stateOptions: FIXTURE_STATE_OPTIONS,
      dateExtent: FIXTURE_DATE_EXTENT
    };
  }

  return {
    records: snapshot.records,
    population: snapshot.population,
    stateOptions: snapshot.stateOptions,
    dateExtent: toDateExtent(snapshot.dateRange)
  };
}

export function resetDataSnapshotCache(): void {
  snapshotPromise = null;
  cachedSnapshot = null;
}

export function buildSelectionLabel(selectedFips: number[], snapshot: DataSnapshot): string {
  if (selectedFips.length === 0) {
    return "";
  }

  const labelName = (fips: number): string => {
    if (fips < 1000) {
      return SHORT_STATE[fips] ?? String(fips);
    }

    return snapshot.countyNamesByFips.get(fips) ?? `County ${fips}`;
  };

  const upperCaseFirst = (value: string): string => {
    if (value.length === 0) {
      return value;
    }

    return `${value[0]?.toUpperCase() ?? ""}${value.slice(1)}`;
  };

  const sorted = [...selectedFips].sort((left, right) => left - right);
  let remaining = [...sorted];
  const sameState = remaining.every((fips) => fips >= 1000)
    && new Set(remaining.map((fips) => Math.floor(fips / 1000))).size === 1;
  const locations: string[] = [];

  if (remaining.every((fips) => fips < 1000)) {
    for (const [groupName, group] of STATE_GROUPS) {
      if (group.every((fips) => remaining.includes(fips))) {
        locations.push(upperCaseFirst(groupName));
        const groupSet = new Set(group);
        remaining = remaining.filter((fips) => !groupSet.has(fips));
      }
    }

    locations.push(...remaining.map((fips) => labelName(fips)));
  } else if (remaining.every((fips) => fips >= 1000)) {
    if (sameState) {
      locations.push(...remaining.map((fips) => labelName(fips)));
    } else {
      locations.push(...remaining.map((fips) => `${labelName(fips)}, ${labelName(Math.floor(fips / 1000))}`));
    }
  } else {
    return "Strange mix of states and counties";
  }

  const firstLocation = locations[0];
  if (firstLocation == null) {
    return "";
  }

  let label = firstLocation;
  let didBreak = false;

  for (let index = 1; index < locations.length; index += 1) {
    const remainingCount = locations.length - index;
    const remainingLength = locations
      .slice(index + 1)
      .reduce((total, location) => total + location.length, 0) + remainingCount * 3;
    const cutoffText = ` + ${remainingCount} others`;

    if (label.length + cutoffText.length > 40
      && label.length + remainingLength > label.length + cutoffText.length) {
      label += cutoffText;
      didBreak = true;
      break;
    }

    label += ` + ${locations[index]}`;
  }

  if (sameState) {
    const sameStateFips = sorted.find((fips) => fips >= 1000);
    if (sameStateFips != null) {
      const stateCode = labelName(Math.floor(sameStateFips / 1000));
      label += didBreak ? ` in ${stateCode}` : `, ${stateCode}`;
    }
  }

  return label;
}

export function getCountyOptionsForStates(
  selectedStateFips: number[],
  snapshot: DataSnapshot
): GeographyOption[] {
  if (selectedStateFips.length === 0) {
    return [];
  }

  const index = getSnapshotCountyOptionsIndex(snapshot);
  const uniqueStates = [...new Set(selectedStateFips)].sort((left, right) => left - right);

  if (uniqueStates.length === 1) {
    return [...(index.countiesByState.get(uniqueStates[0] ?? 0) ?? [])];
  }

  const cacheKey = uniqueStates.join(",");
  const cached = index.combinedByStateKey.get(cacheKey);
  if (cached != null) {
    return [...cached];
  }

  const combined: GeographyOption[] = [];
  for (const stateFips of uniqueStates) {
    const stateOptions = index.countiesByStateWithCode.get(stateFips);
    if (stateOptions == null) {
      continue;
    }
    combined.push(...stateOptions);
  }

  combined.sort((left, right) => left.label.localeCompare(right.label));
  index.combinedByStateKey.set(cacheKey, combined);
  return [...combined];
}

export async function fetchSeries(input: DataServiceInput): Promise<DataServiceResult> {
  return buildSeries(input.request);
}

export async function fetchSeriesContract(
  input: FetchSeriesContractInput
): Promise<TransformSeriesContract> {
  return buildSeriesContract(input.request, input.location);
}

export const FIXTURE_RECORDS: DailyRecord[] = [
  { date: "2020-01-01", fips: 10, cases: 10, deaths: 1 },
  { date: "2020-01-01", fips: 20, cases: 5, deaths: 0 },
  { date: "2020-01-02", fips: 10, cases: 20, deaths: 2 },
  { date: "2020-01-02", fips: 20, cases: 9, deaths: 1 },
  { date: "2020-01-03", fips: 10, cases: 35, deaths: 4 },
  { date: "2020-01-03", fips: 20, cases: 15, deaths: 2 }
];

export const FIXTURE_POPULATION: PopulationRow[] = [
  { fips: 10, pop: 1000 },
  { fips: 20, pop: 500 }
];

const FIXTURE_DATE_RANGE = deriveDateRange(FIXTURE_RECORDS);
const FIXTURE_DATE_EXTENT = toDateExtent(FIXTURE_DATE_RANGE);
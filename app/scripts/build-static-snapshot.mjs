import { mkdir, readFile, writeFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";

const COUNTIES_YEARS = ["2020", "2021", "2022"];
const DEFAULT_NYT_RAW_BASE = "https://raw.githubusercontent.com/nytimes/covid-19-data/master";
const POPULATION_PATH = new URL("../src/data/pop2019.csv", import.meta.url);
const OUTPUT_DIR = new URL("../public/data/", import.meta.url);
const OUTPUT_JSON = new URL("../public/data/nyt-snapshot.json", import.meta.url);
const OUTPUT_GZ = new URL("../public/data/nyt-snapshot.json.gz", import.meta.url);

const SHORT_STATE = {
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

function getRawBase() {
  const fromEnv = process.env.NYT_RAW_BASE;
  if (typeof fromEnv !== "string" || fromEnv.trim() === "") {
    return DEFAULT_NYT_RAW_BASE;
  }

  return fromEnv.replace(/\/+$/, "");
}

function shouldWritePlainJson() {
  const raw = process.env.WRITE_PLAIN_JSON;
  if (typeof raw !== "string") {
    return false;
  }

  const normalized = raw.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes";
}

function parseCsvRows(csvText) {
  const rows = [];
  let currentRow = [];
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

function parseNumber(value) {
  if (value === "") {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function parsePopulation(csvText) {
  const rows = parseCsvRows(csvText).slice(1);
  const population = [];
  const stateNamesByFips = new Map();
  const countyNamesByFips = new Map();

  for (const row of rows) {
    const fips = parseNumber(row[0] ?? "");
    if (fips == null) {
      continue;
    }

    const pop = parseNumber(row[1] ?? "");
    const state = row[2] ?? "";
    const county = row[3] ?? "";

    population.push([fips, pop]);

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

function repairMissingFips(state, county, stateFipsByName) {
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

function parseNytRows(csvText, withCounty) {
  const rows = parseCsvRows(csvText).slice(1);
  const mapped = [];

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

function rowsToRecords(rows, stateFipsByName) {
  const records = [];

  for (const row of rows) {
    const repaired = row.fips ?? repairMissingFips(row.state, row.county, stateFipsByName);
    if (repaired == null) {
      continue;
    }

    records.push([row.date, repaired, row.cases, row.deaths]);
  }

  return records;
}

function deriveDateRange(records) {
  if (records.length === 0) {
    return [null, null];
  }

  let start = records[0]?.[0] ?? null;
  let end = records[0]?.[0] ?? null;

  for (let index = 1; index < records.length; index += 1) {
    const date = records[index]?.[0] ?? null;
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

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function main() {
  const nytRawBase = getRawBase();

  const populationCsv = await readFile(POPULATION_PATH, "utf8");
  const { population, stateNamesByFips, countyNamesByFips, stateOptions } = parsePopulation(populationCsv);

  const stateFipsByName = new Map(
    [...stateNamesByFips.entries()].map(([fips, stateName]) => [stateName, fips])
  );

  console.log(`Fetching NYT source from ${nytRawBase}`);
  const statesCsv = await fetchText(`${nytRawBase}/us-states.csv`);
  const statesRows = parseNytRows(statesCsv, false);

  const countyCsvByYear = await Promise.all(
    COUNTIES_YEARS.map((year) => fetchText(`${nytRawBase}/us-counties-${year}.csv`))
  );
  const countyRows = countyCsvByYear.flatMap((csvText) => parseNytRows(csvText, true));

  const records = rowsToRecords([...statesRows, ...countyRows], stateFipsByName);
  const snapshot = {
    generatedAt: new Date().toISOString(),
    sourceBase: nytRawBase,
    stateOptions,
    stateNamesByFips: [...stateNamesByFips.entries()],
    countyNamesByFips: [...countyNamesByFips.entries()],
    population,
    records,
    dateRange: deriveDateRange(records),
    stateCodes: SHORT_STATE
  };

  const jsonText = JSON.stringify(snapshot);
  const gzBuffer = gzipSync(Buffer.from(jsonText), { level: 9 });
  const writeJson = shouldWritePlainJson();

  await mkdir(OUTPUT_DIR, { recursive: true });
  if (writeJson) {
    await writeFile(OUTPUT_JSON, jsonText);
  }
  await writeFile(OUTPUT_GZ, gzBuffer);

  if (writeJson) {
    console.log(`Wrote ${OUTPUT_JSON.pathname}`);
  }
  console.log(`Wrote ${OUTPUT_GZ.pathname}`);
  console.log(`Records: ${records.length.toLocaleString()}`);
  console.log(`JSON size: ${(Buffer.byteLength(jsonText) / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Gzip size: ${(gzBuffer.byteLength / (1024 * 1024)).toFixed(2)} MB`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

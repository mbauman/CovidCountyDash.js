import { mkdir, readFile, writeFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";

const POPULATION_CSV = new URL("../src/data/pop2020.csv", import.meta.url);
const OUTPUT_SRC_JSON = new URL("../src/data/pop2020.json", import.meta.url);
const OUTPUT_PUBLIC_JSON = new URL("../public/data/pop2020.json", import.meta.url);
const OUTPUT_PUBLIC_GZ = new URL("../public/data/pop2020.json.gz", import.meta.url);

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
    stateNamesByFips: [...stateNamesByFips.entries()],
    countyNamesByFips: [...countyNamesByFips.entries()],
    stateOptions
  };
}

async function main() {
  const csvText = await readFile(POPULATION_CSV, "utf8");
  const serialized = parsePopulation(csvText);
  const jsonText = `${JSON.stringify(serialized)}\n`;

  await mkdir(new URL("../public/data/", import.meta.url), { recursive: true });

  await Promise.all([
    writeFile(OUTPUT_SRC_JSON, jsonText),
    writeFile(OUTPUT_PUBLIC_JSON, jsonText),
    writeFile(OUTPUT_PUBLIC_GZ, gzipSync(jsonText, { level: 9 }))
  ]);

  process.stdout.write(
    [
      "Population snapshot built:",
      `- ${OUTPUT_SRC_JSON.pathname}`,
      `- ${OUTPUT_PUBLIC_JSON.pathname}`,
      `- ${OUTPUT_PUBLIC_GZ.pathname}`
    ].join("\n") + "\n"
  );
}

main().catch((error) => {
  process.stderr.write(`Failed to build population snapshot: ${error?.message ?? error}\n`);
  process.exitCode = 1;
});

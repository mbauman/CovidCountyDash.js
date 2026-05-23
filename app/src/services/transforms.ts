import type {
  DailyRecord,
  PopulationRow,
  RawDailyRecord,
  TransformDisplayOptions,
  TransformPlotMetadata,
  TransformRequest,
  TransformSeriesContract,
  TransformSeries
} from "../domain/covidData";

const NYC_FIPS = 36998;
const KANSAS_CITY_MO_FIPS = 29998;
const JOPLIN_MO_FIPS = 29997;

interface RecordsIndex {
  byFips: Map<number, DailyRecord[]>;
  sortedDates: string[];
  dateToIndex: Map<string, number>;
}

const recordsIndexCache = new WeakMap<DailyRecord[], RecordsIndex>();
const populationMapCache = new WeakMap<PopulationRow[], Map<number, number | null>>();

export function repairMissingFips(
  state: string,
  county: string | null,
  stateFipsByName: Map<string, number>
): number | null {
  if (state === "New York" && county === "New York City") {
    return NYC_FIPS;
  }

  if (state === "Missouri" && county === "Kansas City") {
    return KANSAS_CITY_MO_FIPS;
  }

  if (state === "Missouri" && county === "Joplin") {
    return JOPLIN_MO_FIPS;
  }

  if (county === "Unknown") {
    const stateFips = stateFipsByName.get(state);
    return stateFips == null ? null : stateFips * 1000 + 999;
  }

  return null;
}

export function normalizeRawRecords(
  rows: RawDailyRecord[],
  stateFipsByName: Map<string, number>
): DailyRecord[] {
  const normalized: DailyRecord[] = [];

  for (const row of rows) {
    const fips = row.fips ?? repairMissingFips(row.state, row.county, stateFipsByName);
    if (fips == null) {
      continue;
    }

    normalized.push({
      date: row.date,
      fips,
      cases: row.cases,
      deaths: row.deaths
    });
  }

  return normalized.sort((left, right) => {
    if (left.fips !== right.fips) {
      return left.fips - right.fips;
    }

    return left.date.localeCompare(right.date);
  });
}

function rollingMean(values: number[], window: number): number[] {
  if (window <= 1) {
    return [...values];
  }

  const result: number[] = new Array(values.length);
  let rollingSum = 0;

  for (let index = 0; index < values.length; index += 1) {
    rollingSum += values[index] ?? 0;

    if (index >= window) {
      rollingSum -= values[index - window] ?? 0;
    }

    const currentWindow = Math.min(window, index + 1);
    result[index] = rollingSum / currentWindow;
  }

  return result;
}

function getRecordsIndex(records: DailyRecord[]): RecordsIndex {
  const cached = recordsIndexCache.get(records);
  if (cached != null) {
    return cached;
  }

  const byFips = new Map<number, DailyRecord[]>();
  const dateSet = new Set<string>();

  for (const row of records) {
    let bucket = byFips.get(row.fips);
    if (bucket == null) {
      bucket = [];
      byFips.set(row.fips, bucket);
    }
    bucket.push(row);
    dateSet.add(row.date);
  }

  const sortedDates = [...dateSet].sort((left, right) => left.localeCompare(right));
  const dateToIndex = new Map<string, number>(
    sortedDates.map((date, index) => [date, index])
  );

  const index = { byFips, sortedDates, dateToIndex };
  recordsIndexCache.set(records, index);
  return index;
}

function aggregateByDate(records: DailyRecord[], selectedFips: Set<number>, metric: "cases" | "deaths") {
  const index = getRecordsIndex(records);
  if (selectedFips.size === 0 || index.sortedDates.length === 0) {
    return { dates: [], values: [] };
  }

  const sums = new Array<number>(index.sortedDates.length).fill(0);
  const seen = new Array<boolean>(index.sortedDates.length).fill(false);

  for (const fips of selectedFips) {
    const rows = index.byFips.get(fips);
    if (rows == null) {
      continue;
    }

    for (const row of rows) {
      const dateIndex = index.dateToIndex.get(row.date);
      if (dateIndex == null) {
        continue;
      }

      const current = sums[dateIndex] ?? 0;
      sums[dateIndex] = current + row[metric];
      seen[dateIndex] = true;
    }
  }

  const dates: string[] = [];
  const values: number[] = [];
  for (let idx = 0; idx < index.sortedDates.length; idx += 1) {
    if (!seen[idx]) {
      continue;
    }

    dates.push(index.sortedDates[idx] ?? "");
    values.push(sums[idx] ?? 0);
  }

  return { dates, values };
}

function normalize(values: number[], selectedFips: Set<number>, population: PopulationRow[]): number[] {
  let popMap = populationMapCache.get(population);
  if (popMap == null) {
    popMap = new Map(population.map((row) => [row.fips, row.pop]));
    populationMapCache.set(population, popMap);
  }

  const totalPopulation = [...selectedFips].reduce((acc, fips) => {
    const pop = popMap.get(fips);
    return pop == null ? acc : acc + pop;
  }, 0);

  if (totalPopulation <= 0) {
    return values.map(() => Number.NaN);
  }

  return values.map((value) => (value * 100) / totalPopulation);
}

function metricLabel(metricType: "cases" | "deaths"): string {
  return metricType === "cases" ? "Cases" : "Deaths";
}

export function buildPlotMetadata(options: TransformDisplayOptions): TransformPlotMetadata {
  const titlePrefix = options.valueMode === "values" ? "Total" : "Daily";
  const title = `${titlePrefix} Confirmed ${metricLabel(options.metricType)}`;

  let yAxisTitle = "";
  if (options.valueMode === "values") {
    yAxisTitle = `Total confirmed ${options.metricType}`;
  } else if (options.rollingDays > 1) {
    yAxisTitle = `Average daily ${options.metricType} (rolling ${options.rollingDays}-day mean)`;
  } else {
    yAxisTitle = `Number of daily ${options.metricType}`;
  }

  const yAxisType = options.useLogScale ? "log" : "linear";
  const yAxisTickSuffix = options.normalizeByPopulation ? "%" : "";
  const valueField = options.normalizeByPopulation ? "customdata" : "y";
  const popField = options.normalizeByPopulation ? "y" : "customdata";
  const valueFormat = options.rollingDays === 1 || options.valueMode === "values" ? "d" : ".1f";
  const perDay = options.rollingDays > 1 && options.valueMode === "diff" ? "/day" : "";
  const hoverTemplate =
    `%{x|%b %d}: %{${valueField}:,${valueFormat}} ${options.metricType}${perDay} (%{${popField}:.2g}%)`;

  return {
    title,
    yAxisTitle,
    yAxisType,
    yAxisTickSuffix,
    hoverTemplate,
    valueField,
    popField
  };
}

export function buildSeriesContract(request: TransformRequest, location: string): TransformSeriesContract {
  const selectedFips = new Set(request.selectedFips);
  if (selectedFips.size === 0) {
    return { location, dates: [], values: [], popvalues: [] };
  }

  const aggregated = aggregateByDate(request.records, selectedFips, request.metricType);
  if (aggregated.values.length === 0) {
    return { location, dates: [], values: [], popvalues: [] };
  }

  const values = request.valueMode === "diff"
    ? [Number.NaN, ...rollingMean(difference(aggregated.values), request.rollingDays)]
    : aggregated.values;

  return {
    location,
    dates: aggregated.dates,
    values,
    popvalues: normalize(values, selectedFips, request.population)
  };
}

export function buildSeries(request: TransformRequest): TransformSeries {
  const contract = buildSeriesContract(request, "selection");
  const values = request.normalizeByPopulation ? contract.popvalues : contract.values;

  return {
    dates: contract.dates,
    values
  };
}

function difference(values: number[]): number[] {
  if (values.length === 0) {
    return [];
  }

  const result: number[] = [];
  for (let index = 1; index < values.length; index += 1) {
    const current = values[index] ?? 0;
    const previous = values[index - 1] ?? 0;
    result.push(current - previous);
  }
  return result;
}

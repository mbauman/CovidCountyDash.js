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

  return values.map((_, index) => {
    const start = Math.max(0, index - window + 1);
    const slice = values.slice(start, index + 1);
    const sum = slice.reduce((acc, item) => acc + item, 0);
    return sum / slice.length;
  });
}

function aggregateByDate(records: DailyRecord[], selectedFips: Set<number>, metric: "cases" | "deaths") {
  const grouped = new Map<string, number>();
  for (const row of records) {
    if (!selectedFips.has(row.fips)) {
      continue;
    }
    grouped.set(row.date, (grouped.get(row.date) ?? 0) + row[metric]);
  }

  const dates = [...grouped.keys()].sort((a, b) => a.localeCompare(b));
  const values = dates.map((date) => grouped.get(date) ?? 0);
  return { dates, values };
}

function normalize(values: number[], selectedFips: Set<number>, population: PopulationRow[]): number[] {
  const popMap = new Map(population.map((row) => [row.fips, row.pop]));
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

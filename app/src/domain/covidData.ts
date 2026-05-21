export interface DailyRecord {
  date: string;
  fips: number;
  cases: number;
  deaths: number;
}

export interface RawDailyRecord {
  date: string;
  state: string;
  county: string | null;
  fips: number | null;
  cases: number;
  deaths: number;
}

export interface PopulationRow {
  fips: number;
  pop: number | null;
}

export type MetricType = "cases" | "deaths";
export type ValueMode = "values" | "diff";

export interface TransformRequest {
  records: DailyRecord[];
  selectedFips: number[];
  population: PopulationRow[];
  metricType: MetricType;
  valueMode: ValueMode;
  rollingDays: number;
  normalizeByPopulation: boolean;
}

export interface TransformSeries {
  dates: string[];
  values: number[];
}

export interface TransformDisplayOptions {
  metricType: MetricType;
  valueMode: ValueMode;
  rollingDays: number;
  normalizeByPopulation: boolean;
  useLogScale: boolean;
}

export interface TransformSeriesContract {
  location: string;
  dates: string[];
  values: number[];
  popvalues: number[];
}

export interface TransformPlotMetadata {
  title: string;
  yAxisTitle: string;
  yAxisType: "linear" | "log";
  yAxisTickSuffix: "" | "%";
  hoverTemplate: string;
  valueField: "y" | "customdata";
  popField: "y" | "customdata";
}
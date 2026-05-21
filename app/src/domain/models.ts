export type MetricType = "cases" | "deaths";
export type ValueMode = "values" | "diff";

export interface GeographySelection {
  stateFips: number[];
  countyFips: number[];
}

export interface FilterState {
  metricType: MetricType;
  valueMode: ValueMode;
  rollingDays: number;
  normalizeByPopulation: boolean;
  useLogScale: boolean;
  selections: GeographySelection[];
}

export interface UiState {
  isLoading: boolean;
  lastError: string | null;
}
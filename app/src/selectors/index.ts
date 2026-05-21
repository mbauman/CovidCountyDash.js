import type { RootState } from "../app/store";
import { createSelector } from "@reduxjs/toolkit";
import type { TransformDisplayOptions, TransformRequest } from "../domain/covidData";
import { toPlotlyFigureFromContracts, type PlotlyFigure } from "../plotly/adapters";
import { PHASE2_BASELINE_POPULATION, PHASE2_BASELINE_RECORDS } from "../services/dataService";
import { buildPlotMetadata, buildSeriesContract } from "../services/transforms";

export interface SelectOption {
  value: number;
  label: string;
}

export interface ValueModeOption {
  value: "diff" | "values";
  label: string;
}

const NYC_FIPS = 36998;
const KANSAS_CITY_MO_FIPS = 29998;
const JOPLIN_MO_FIPS = 29997;
const UNKNOWN_STATE_10_FIPS = 10999;
const UNKNOWN_STATE_20_FIPS = 20999;

function deriveStateFips(fips: number): number {
  return fips < 1000 ? fips : Math.floor(fips / 1000);
}

const COUNTY_OPTIONS: SelectOption[] = [...new Set(PHASE2_BASELINE_RECORDS.map((record) => record.fips))]
  .sort((left, right) => left - right)
  .map((fips) => ({ value: fips, label: `County ${fips}` }));

const STATE_OPTIONS: SelectOption[] = [...new Set(COUNTY_OPTIONS.map((option) => deriveStateFips(option.value)))]
  .sort((left, right) => left - right)
  .map((stateFips) => ({ value: stateFips, label: `State ${stateFips}` }));

const DATE_RANGE: [string | null, string | null] = (() => {
  if (PHASE2_BASELINE_RECORDS.length === 0) {
    return [null, null];
  }

  const dates = PHASE2_BASELINE_RECORDS
    .map((record) => record.date)
    .sort((left, right) => left.localeCompare(right));
  return [dates[0] ?? null, dates[dates.length - 1] ?? null];
})();

const VALUE_MODE_OPTIONS_CASES: ValueModeOption[] = [
  { value: "diff", label: "New daily cases" },
  { value: "values", label: "Cumulative totals" }
];

const VALUE_MODE_OPTIONS_DEATHS: ValueModeOption[] = [
  { value: "diff", label: "New daily deaths" },
  { value: "values", label: "Cumulative totals" }
];

const EMPTY_OPTIONS: SelectOption[] = [];
const EMPTY_CAVEAT_VISIBILITY: boolean[] = [false, false, false, false, false];

export const selectFilters = (state: RootState) => state.filters;
export const selectUi = (state: RootState) => state.ui;

export const selectStateOptions = (state: RootState): SelectOption[] => {
  void state;
  return STATE_OPTIONS;
};

export const selectCountyOptionsForStates = (selectedStateFips: number[]): SelectOption[] => {
  if (selectedStateFips.length === 0) {
    return EMPTY_OPTIONS;
  }

  return COUNTY_OPTIONS.filter((option) => selectedStateFips.includes(deriveStateFips(option.value)));
};

export const selectCountyOptionsForRow = (state: RootState, rowIndex: number): SelectOption[] => {
  const selectedStateFips = state.filters.selections[rowIndex]?.stateFips ?? [];
  return selectCountyOptionsForStates(selectedStateFips);
};

export const selectRowVisibility = (state: RootState, rowIndex: number): boolean => {
  if (rowIndex <= 0) {
    return true;
  }

  const previousSelection = state.filters.selections[rowIndex - 1];
  if (previousSelection == null) {
    return false;
  }

  return previousSelection.stateFips.length > 0 || previousSelection.countyFips.length > 0;
};

export const selectValueModeOptions = (state: RootState): ValueModeOption[] => {
  return state.filters.metricType === "cases" ? VALUE_MODE_OPTIONS_CASES : VALUE_MODE_OPTIONS_DEATHS;
};

export const selectDateRange = (state: RootState): [string | null, string | null] => {
  void state;
  return DATE_RANGE;
};

export const selectLoadedThroughDate = (state: RootState): string | null => {
  const [, endDate] = selectDateRange(state);
  return endDate;
};

export const selectCaveatVisibility = createSelector(
  (state: RootState) => state.filters.selections,
  (selections): boolean[] => {
    const selectedCountyFips = new Set<number>(
      selections.flatMap((selection) => selection.countyFips)
    );

    if (selectedCountyFips.size === 0) {
      return EMPTY_CAVEAT_VISIBILITY;
    }

    return [
      selectedCountyFips.has(NYC_FIPS),
      selectedCountyFips.has(KANSAS_CITY_MO_FIPS),
      selectedCountyFips.has(JOPLIN_MO_FIPS),
      selectedCountyFips.has(UNKNOWN_STATE_10_FIPS) || selectedCountyFips.has(UNKNOWN_STATE_20_FIPS),
      selectedCountyFips.size > 0 &&
        [...selectedCountyFips].some((fips) => !PHASE2_BASELINE_POPULATION.some((row) => row.fips === fips))
    ];
  }
);

export const selectActiveSeriesCount = (state: RootState): number =>
  state.filters.selections.filter((selection) => selection.stateFips.length > 0 || selection.countyFips.length > 0)
    .length;

export const selectParityModeSummary = (state: RootState): string => {
  const { metricType, valueMode, rollingDays, normalizeByPopulation, useLogScale } = state.filters;
  const modeLabel = valueMode === "diff" ? "daily" : "cumulative";
  const popLabel = normalizeByPopulation ? "normalized" : "absolute";
  const axisLabel = useLogScale ? "log-y" : "linear-y";
  return `${metricType} / ${modeLabel} / ${rollingDays}d roll / ${popLabel} / ${axisLabel}`;
};

export const selectTransformDisplayOptions = (state: RootState): TransformDisplayOptions => {
  const { metricType, valueMode, rollingDays, normalizeByPopulation, useLogScale } = state.filters;
  return {
    metricType,
    valueMode,
    rollingDays,
    normalizeByPopulation,
    useLogScale
  };
};

export const selectSelectedFips = (state: RootState): number[] => {
  const fips = new Set<number>();
  for (const selection of state.filters.selections) {
    for (const countyFips of selection.countyFips) {
      fips.add(countyFips);
    }
    if (selection.countyFips.length === 0) {
      for (const stateFips of selection.stateFips) {
        fips.add(stateFips);
      }
    }
  }

  return [...fips].sort((left, right) => left - right);
};

export const selectPrimaryTransformRequest = (state: RootState): TransformRequest => {
  const { metricType, valueMode, rollingDays, normalizeByPopulation } = state.filters;
  return {
    records: PHASE2_BASELINE_RECORDS,
    selectedFips: selectSelectedFips(state),
    population: PHASE2_BASELINE_POPULATION,
    metricType,
    valueMode,
    rollingDays,
    normalizeByPopulation
  };
};

function deriveDateExtent(records: TransformRequest["records"]): [string, string] | null {
  if (records.length === 0) {
    return null;
  }

  const dates = records.map((record) => record.date).sort((left, right) => left.localeCompare(right));
  return [dates[0], dates[dates.length - 1]];
}

export const selectPrimaryPlotFigure = (state: RootState): PlotlyFigure => {
  return selectPrimaryPlotFigureMemoized(state);
};

const selectPrimaryPlotFigureMemoized = createSelector(
  (state: RootState) => state.filters,
  (filters): PlotlyFigure => {
    const display = {
      metricType: filters.metricType,
      valueMode: filters.valueMode,
      rollingDays: filters.rollingDays,
      normalizeByPopulation: filters.normalizeByPopulation,
      useLogScale: filters.useLogScale
    } as TransformDisplayOptions;

    const baseRequest: TransformRequest = {
      records: PHASE2_BASELINE_RECORDS,
      selectedFips: [],
      population: PHASE2_BASELINE_POPULATION,
      metricType: filters.metricType,
      valueMode: filters.valueMode,
      rollingDays: filters.rollingDays,
      normalizeByPopulation: filters.normalizeByPopulation
    };

    const seriesContracts = filters.selections
      .map((selection, index) => {
        const selectionFips = selection.countyFips.length > 0 ? selection.countyFips : selection.stateFips;
        if (selectionFips.length === 0) {
          return null;
        }

        const request: TransformRequest = {
          ...baseRequest,
          selectedFips: [...selectionFips]
        };

        return buildSeriesContract(request, `Selection ${index + 1}`);
      })
      .filter((series): series is NonNullable<typeof series> => series != null);

    const metadata = buildPlotMetadata(display);
    return toPlotlyFigureFromContracts(seriesContracts, metadata, deriveDateExtent(baseRequest.records));
  }
);


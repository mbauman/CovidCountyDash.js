import type { RootState } from "../app/store";
import { createSelector } from "@reduxjs/toolkit";
import type { TransformDisplayOptions, TransformRequest } from "../domain/covidData";
import { toPlotlyFigureFromContracts, type PlotlyFigure } from "../plotly/adapters";
import {
  buildSelectionLabel,
  FIXTURE_COUNTY_OPTIONS,
  getCachedDataSnapshot,
  getCountyOptionsForStates,
  resolveSnapshotData
} from "../services/dataService";
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

const VALUE_MODE_OPTIONS_CASES: ValueModeOption[] = [
  { value: "diff", label: "New daily cases" },
  { value: "values", label: "Cumulative totals" }
];

const VALUE_MODE_OPTIONS_DEATHS: ValueModeOption[] = [
  { value: "diff", label: "New daily deaths" },
  { value: "values", label: "Cumulative totals" }
];

const EMPTY_CAVEAT_VISIBILITY: boolean[] = [false, false, false, false, false];
const EMPTY_DATE_RANGE: [string | null, string | null] = [null, null];

const selectFilterSelections = (state: RootState) => state.filters.selections;
const selectFilterValues = (state: RootState) => state.filters;
const selectUiDataVersion = (state: RootState) => state.ui.dataVersion;

function getResolvedSnapshotData() {
  return resolveSnapshotData(getCachedDataSnapshot());
}

export const selectFilters = (state: RootState) => state.filters;
export const selectUi = (state: RootState) => state.ui;
export const selectTransitionLog = (state: RootState) => state.ui.transitionLog ?? [];

export const selectStateOptions = createSelector(
  selectUiDataVersion,
  (): SelectOption[] => getResolvedSnapshotData().stateOptions
);

export const selectCountyOptionsForStates = (selectedStateFips: number[]): SelectOption[] => {
  const snapshot = getCachedDataSnapshot();
  if (snapshot == null) {
    return FIXTURE_COUNTY_OPTIONS.filter((option) => selectedStateFips.includes(option.value));
  }

  return getCountyOptionsForStates(selectedStateFips, snapshot);
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

export const selectDateRange = createSelector(
  (state: RootState) => state.ui.dataStartDate,
  (state: RootState) => state.ui.dataEndDate,
  (startDate, endDate): [string | null, string | null] => {
    if (startDate == null && endDate == null) {
      return EMPTY_DATE_RANGE;
    }
    return [startDate ?? null, endDate ?? null];
  }
);

export const selectLoadedThroughDate = (state: RootState): string | null => {
  const [, endDate] = selectDateRange(state);
  return endDate;
};

export const selectCaveatVisibility = createSelector(
  selectFilterSelections,
  selectUiDataVersion,
  (selections): boolean[] => {
    const { population } = getResolvedSnapshotData();
    const populationFips = new Set(population.map((row) => row.fips));
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
      selectedCountyFips.size > 0 && [...selectedCountyFips].some((fips) => !populationFips.has(fips))
    ];
  }
);

export const selectActiveSeriesCount = createSelector(
  selectFilterSelections,
  (selections): number =>
    selections.filter((selection) => selection.stateFips.length > 0 || selection.countyFips.length > 0).length
);

export const selectTransformDisplayOptions = createSelector(
  selectFilterValues,
  (filters): TransformDisplayOptions => {
    const { metricType, valueMode, rollingDays, normalizeByPopulation, useLogScale } = filters;
    return {
      metricType,
      valueMode,
      rollingDays,
      normalizeByPopulation,
      useLogScale
    };
  }
);

export const selectSelectedFips = createSelector(
  selectFilterSelections,
  (selections): number[] => {
    const fips = new Set<number>();
    for (const selection of selections) {
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
  }
);

export const selectPrimaryTransformRequest = createSelector(
  selectFilterValues,
  selectSelectedFips,
  selectUiDataVersion,
  (filters, selectedFips): TransformRequest => {
    const { records, population } = getResolvedSnapshotData();
    return {
      records,
      selectedFips,
      population,
      metricType: filters.metricType,
      valueMode: filters.valueMode,
      rollingDays: filters.rollingDays,
      normalizeByPopulation: filters.normalizeByPopulation
    };
  }
);

export const selectPrimaryPlotFigure = (state: RootState): PlotlyFigure => {
  return state.ui.figure ?? selectPrimaryPlotFigureMemoized(state);
};

const selectPrimaryPlotFigureMemoized = createSelector(
  selectFilterValues,
  selectUiDataVersion,
  (filters): PlotlyFigure => {
    const snapshot = getCachedDataSnapshot();
    const { records, population, dateExtent } = getResolvedSnapshotData();

    const display = {
      metricType: filters.metricType,
      valueMode: filters.valueMode,
      rollingDays: filters.rollingDays,
      normalizeByPopulation: filters.normalizeByPopulation,
      useLogScale: filters.useLogScale
    } as TransformDisplayOptions;

    const baseRequest: TransformRequest = {
      records,
      selectedFips: [],
      population,
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

        const label = snapshot == null
          ? `Selection ${index + 1}`
          : buildSelectionLabel(selectionFips, snapshot) || `Selection ${index + 1}`;

        return buildSeriesContract(request, label);
      })
      .filter((series): series is NonNullable<typeof series> => series != null);

    const metadata = buildPlotMetadata(display);

    return toPlotlyFigureFromContracts(seriesContracts, metadata, dateExtent);
  }
);


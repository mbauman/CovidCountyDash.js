import type { RootState } from "../app/store";
import type { TransformDisplayOptions, TransformRequest } from "../domain/covidData";
import { toPlotlyFigureFromContracts, type PlotlyFigure } from "../plotly/adapters";
import { PHASE2_BASELINE_POPULATION, PHASE2_BASELINE_RECORDS } from "../services/dataService";
import { buildPlotMetadata, buildSeriesContract } from "../services/transforms";

export const selectFilters = (state: RootState) => state.filters;
export const selectUi = (state: RootState) => state.ui;

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
  const display = selectTransformDisplayOptions(state);
  const baseRequest = selectPrimaryTransformRequest(state);

  const seriesContracts = state.filters.selections
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
};
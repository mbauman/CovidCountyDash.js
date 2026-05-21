import type { RootState } from "../app/store";
import type { TransformDisplayOptions } from "../domain/covidData";

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
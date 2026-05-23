import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterState, GeographySelection, MetricType, ValueMode } from "../../domain/models";

export type StateGroupName = "all" | "lower49" | "northeast" | "midwest" | "south" | "west";

const blankSelection = (): GeographySelection => ({ stateFips: [], countyFips: [] });
const DEFAULT_PRIMARY_STATE_FIPS: number[] = [
  1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46,
  47, 48, 49, 50, 51, 53, 54, 55, 56
];

const initialState: FilterState = {
  metricType: "cases",
  valueMode: "diff",
  rollingDays: 7,
  normalizeByPopulation: true,
  useLogScale: false,
  selections: [
    { stateFips: DEFAULT_PRIMARY_STATE_FIPS, countyFips: [] },
    blankSelection(),
    blankSelection(),
    blankSelection(),
    blankSelection(),
    blankSelection()
  ]
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    resetFilters() {
      return initialState;
    },
    setMetricType(state, action: PayloadAction<MetricType>) {
      state.metricType = action.payload;
    },
    setValueMode(state, action: PayloadAction<ValueMode>) {
      state.valueMode = action.payload;
    },
    setRollingDays(state, action: PayloadAction<number>) {
      state.rollingDays = action.payload;
    },
    setNormalizeByPopulation(state, action: PayloadAction<boolean>) {
      state.normalizeByPopulation = action.payload;
    },
    setUseLogScale(state, action: PayloadAction<boolean>) {
      state.useLogScale = action.payload;
    },
    setSelectionAtIndex(
      state,
      action: PayloadAction<{ index: number; selection: GeographySelection }>
    ) {
      state.selections[action.payload.index] = action.payload.selection;
    },
    requestApplyStateGroup(
      state,
      action: PayloadAction<{ index: number; group: StateGroupName }>
    ) {
      void state;
      void action;
    },
    requestApplyPopulationWindow(
      state,
      action: PayloadAction<{ index: number; window: [number, number] }>
    ) {
      void state;
      void action;
    }
  }
});

export const {
  resetFilters,
  setMetricType,
  setValueMode,
  setRollingDays,
  setNormalizeByPopulation,
  setUseLogScale,
  setSelectionAtIndex,
  requestApplyStateGroup,
  requestApplyPopulationWindow
} = filtersSlice.actions;

export default filtersSlice.reducer;
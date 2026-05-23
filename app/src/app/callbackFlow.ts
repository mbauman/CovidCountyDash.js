import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  requestApplyPopulationWindow,
  requestApplyStateGroup,
  resetFilters,
  setMetricType,
  setNormalizeByPopulation,
  setRollingDays,
  setSelectionAtIndex,
  setUseLogScale,
  setValueMode,
  type StateGroupName
} from "../features/filters/filtersSlice";
import {
  callbackTransitionComputed,
  callbackTransitionFailed,
  callbackTransitionIgnored,
  callbackTransitionStarted,
  callbackTransitionCommitted,
  dataSnapshotReady,
  requestFigureRefresh,
  type UiTransitionStage
} from "../features/ui/uiSlice";
import {
  buildSelectionLabel,
  type DataSnapshot,
  type FetchSeriesContractInput,
  fetchSeriesContract,
  getCountyOptionsForStates,
  loadDataSnapshot
} from "../services/dataService";
import { toPlotlyFigureFromContracts } from "../plotly/adapters";
import { buildPlotMetadata } from "../services/transforms";
import type { RootState } from "./store";

export interface CallbackTraceEvent {
  stage: UiTransitionStage;
  requestId: number;
  trigger: string;
  selectedFipsCount?: number;
  traceCount?: number;
  reason?: string;
  message?: string;
}

export interface CallbackFlowDependencies {
  fetchSeriesContractFn?: (input: FetchSeriesContractInput) => Promise<Awaited<ReturnType<typeof fetchSeriesContract>>>;
  getDataSnapshotFn?: () => Promise<DataSnapshot>;
  trace?: (event: CallbackTraceEvent) => void;
}

const DEFAULT_TRACE = (event: CallbackTraceEvent): void => {
  if (typeof process !== "undefined" && process.env.NODE_ENV === "test") {
    return;
  }

  if (typeof console !== "undefined" && typeof console.debug === "function") {
    console.debug("[phase4]", event);
  }
};

function traceEvent(trace: (event: CallbackTraceEvent) => void, event: CallbackTraceEvent): void {
  trace(event);
}

const NORTHEAST_STATE_FIPS = new Set([9, 23, 25, 33, 34, 36, 42, 44, 50]);
const MIDWEST_STATE_FIPS = new Set([17, 18, 26, 39, 55, 19, 20, 27, 29, 31, 38, 46]);
const SOUTH_STATE_FIPS = new Set([
  10, 11, 12, 13, 24, 37, 45, 51, 54, 1, 21, 28, 47, 5, 22, 40, 48
]);
const WEST_STATE_FIPS = new Set([4, 8, 16, 30, 32, 35, 49, 56, 2, 6, 15, 41, 53]);

function deriveStateFips(fips: number): number {
  return fips < 1000 ? fips : Math.floor(fips / 1000);
}

function getAvailableStateFips(snapshot: DataSnapshot): number[] {
  const states = new Set<number>();
  for (const record of snapshot.records) {
    states.add(deriveStateFips(record.fips));
  }
  return [...states].sort((left, right) => left - right);
}

function selectStatesForGroup(group: StateGroupName, snapshot: DataSnapshot): number[] {
  const availableStates = getAvailableStateFips(snapshot);
  switch (group) {
    case "all":
      return availableStates;
    case "lower49":
      return availableStates.filter((stateFips) => stateFips !== 2 && stateFips !== 15);
    case "northeast":
      return availableStates.filter((stateFips) => NORTHEAST_STATE_FIPS.has(stateFips));
    case "midwest":
      return availableStates.filter((stateFips) => MIDWEST_STATE_FIPS.has(stateFips));
    case "south":
      return availableStates.filter((stateFips) => SOUTH_STATE_FIPS.has(stateFips));
    case "west":
      return availableStates.filter((stateFips) => WEST_STATE_FIPS.has(stateFips));
    default:
      return [];
  }
}

function getCountyFipsForStates(stateFips: number[], snapshot: DataSnapshot): number[] {
  if (stateFips.length === 0) {
    return [];
  }

  return getCountyOptionsForStates(stateFips, snapshot).map((option) => option.value);
}

function applyPopulationWindow(
  counties: number[],
  window: [number, number],
  snapshot: DataSnapshot
): number[] {
  if (counties.length === 0) {
    return [];
  }

  const populationMap = new Map(snapshot.population.map((row) => [row.fips, row.pop ?? 0]));
  const ranked = [...counties]
    .map((fips) => ({ fips, pop: populationMap.get(fips) ?? 0 }))
    .sort((left, right) => left.pop - right.pop);

  const [rawMin, rawMax] = window;
  const min = Math.max(0, Math.min(100, Math.min(rawMin, rawMax)));
  const max = Math.max(0, Math.min(100, Math.max(rawMin, rawMax)));
  const denom = ranked.length > 1 ? ranked.length - 1 : 1;

  return ranked
    .filter((_, index) => {
      const percentile = (index / denom) * 100;
      return percentile >= min && percentile <= max;
    })
    .map((entry) => entry.fips)
    .sort((left, right) => left - right);
}

export function createCallbackFlowListener(
  dependencies: CallbackFlowDependencies = {}
) {
  const fetchSeriesContractFn = dependencies.fetchSeriesContractFn ?? fetchSeriesContract;
  const getDataSnapshotFn = dependencies.getDataSnapshotFn ?? loadDataSnapshot;
  const trace = dependencies.trace ?? DEFAULT_TRACE;
  const listenerMiddleware = createListenerMiddleware();

  let latestRequestId = 0;

  listenerMiddleware.startListening({
    actionCreator: requestApplyStateGroup,
    effect: async (action, api): Promise<void> => {
      const snapshot = await getDataSnapshotFn();
      const state = api.getState() as RootState;
      const existing = state.filters.selections[action.payload.index];
      if (existing == null) {
        return;
      }

      const nextStateFips = selectStatesForGroup(action.payload.group, snapshot);
      const countyOptionsSet = new Set(getCountyFipsForStates(nextStateFips, snapshot));
      const nextCountyFips = existing.countyFips.filter((fips) => countyOptionsSet.has(fips));

      api.dispatch(
        setSelectionAtIndex({
          index: action.payload.index,
          selection: {
            stateFips: nextStateFips,
            countyFips: nextCountyFips
          }
        })
      );
    }
  });

  listenerMiddleware.startListening({
    actionCreator: requestApplyPopulationWindow,
    effect: async (action, api): Promise<void> => {
      const snapshot = await getDataSnapshotFn();
      const state = api.getState() as RootState;
      const existing = state.filters.selections[action.payload.index];
      if (existing == null) {
        return;
      }

      const countyOptions = getCountyFipsForStates(existing.stateFips, snapshot);
      const nextCountyFips = applyPopulationWindow(countyOptions, action.payload.window, snapshot);

      api.dispatch(
        setSelectionAtIndex({
          index: action.payload.index,
          selection: {
            ...existing,
            countyFips: nextCountyFips
          }
        })
      );
    }
  });

  listenerMiddleware.startListening({
    matcher: isAnyOf(
      requestFigureRefresh,
      resetFilters,
      setMetricType,
      setValueMode,
      setRollingDays,
      setNormalizeByPopulation,
      setUseLogScale,
      setSelectionAtIndex
    ),
    effect: async (action, api): Promise<void> => {
      const trigger = action.type;
      const requestId = latestRequestId + 1;
      latestRequestId = requestId;

      const stateAtDispatch = api.getState() as RootState;
      const selectedFipsCount = stateAtDispatch.filters.selections.reduce((count, selection) => {
        const activeFips = selection.countyFips.length > 0 ? selection.countyFips : selection.stateFips;
        return count + activeFips.length;
      }, 0);

      api.dispatch(
        callbackTransitionStarted({
          requestId,
          trigger,
          selectedFipsCount
        })
      );
      traceEvent(trace, { stage: "start", requestId, trigger, selectedFipsCount });

      const display = {
        metricType: stateAtDispatch.filters.metricType,
        valueMode: stateAtDispatch.filters.valueMode,
        rollingDays: stateAtDispatch.filters.rollingDays,
        normalizeByPopulation: stateAtDispatch.filters.normalizeByPopulation,
        useLogScale: stateAtDispatch.filters.useLogScale
      };

      const snapshot = await getDataSnapshotFn();
      api.dispatch(
        dataSnapshotReady({
          startDate: snapshot.dateRange[0],
          endDate: snapshot.dateRange[1]
        })
      );

      const workItems = stateAtDispatch.filters.selections
        .map((selection, index) => {
          const selectedFips = selection.countyFips.length > 0 ? selection.countyFips : selection.stateFips;
          if (selectedFips.length === 0) {
            return null;
          }

          return {
            request: {
              records: snapshot.records,
              selectedFips: [...selectedFips],
              population: snapshot.population,
              metricType: stateAtDispatch.filters.metricType,
              valueMode: stateAtDispatch.filters.valueMode,
              rollingDays: stateAtDispatch.filters.rollingDays,
              normalizeByPopulation: stateAtDispatch.filters.normalizeByPopulation
            },
            location: buildSelectionLabel(selectedFips, snapshot) || `Selection ${index + 1}`
          };
        })
        .filter((item): item is { request: FetchSeriesContractInput["request"]; location: string } => item != null);

      try {
        const contracts = await Promise.all(
          workItems.map((item) =>
            fetchSeriesContractFn({
              request: item.request,
              location: item.location
            })
          )
        );

        api.dispatch(
          callbackTransitionComputed({
            requestId,
            trigger,
            traceCount: contracts.length
          })
        );
        traceEvent(trace, { stage: "compute", requestId, trigger, traceCount: contracts.length });

        const latestActiveRequest = (api.getState() as RootState).ui.activeRequestId ?? 0;
        if (latestActiveRequest !== requestId) {
          const reason = "stale-response";
          api.dispatch(callbackTransitionIgnored({ requestId, trigger, reason }));
          traceEvent(trace, { stage: "stale", requestId, trigger, reason });
          return;
        }

        const metadata = buildPlotMetadata(display);
        const figure = toPlotlyFigureFromContracts(
          contracts,
          metadata,
          snapshot.dateRange[0] != null && snapshot.dateRange[1] != null
            ? [snapshot.dateRange[0], snapshot.dateRange[1]]
            : null
        );

        api.dispatch(
          callbackTransitionCommitted({
            requestId,
            trigger,
            figure,
            traceCount: figure.data.length
          })
        );
        traceEvent(trace, { stage: "commit", requestId, trigger, traceCount: figure.data.length });
      } catch (error) {
        const message = error instanceof Error ? error.message : "unknown callback-flow error";
        const latestActiveRequest = (api.getState() as RootState).ui.activeRequestId ?? 0;
        if (latestActiveRequest !== requestId) {
          const reason = "stale-error";
          api.dispatch(callbackTransitionIgnored({ requestId, trigger, reason }));
          traceEvent(trace, { stage: "stale", requestId, trigger, reason, message });
          return;
        }

        api.dispatch(
          callbackTransitionFailed({
            requestId,
            trigger,
            message
          })
        );
        traceEvent(trace, { stage: "error", requestId, trigger, message });
      }
    }
  });

  return listenerMiddleware;
}
import { createListenerMiddleware, isAnyOf, type ListenerMiddleware } from "@reduxjs/toolkit";
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
  requestFigureRefresh,
  type UiTransitionStage
} from "../features/ui/uiSlice";
import {
  type FetchSeriesContractInput,
  fetchSeriesContract,
  PHASE2_BASELINE_POPULATION,
  PHASE2_BASELINE_RECORDS
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

function deriveDateExtent(records: typeof PHASE2_BASELINE_RECORDS): [string, string] | null {
  if (records.length === 0) {
    return null;
  }

  const dates = records.map((record) => record.date).sort((left, right) => left.localeCompare(right));
  const start = dates[0];
  const end = dates[dates.length - 1];
  return start == null || end == null ? null : [start, end];
}

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

function getAvailableStateFips(): number[] {
  const states = new Set<number>();
  for (const record of PHASE2_BASELINE_RECORDS) {
    states.add(deriveStateFips(record.fips));
  }
  return [...states].sort((left, right) => left - right);
}

function selectStatesForGroup(group: StateGroupName): number[] {
  const availableStates = getAvailableStateFips();
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

function getCountyOptionsForStates(stateFips: number[]): number[] {
  if (stateFips.length === 0) {
    return [];
  }

  const states = new Set(stateFips);
  const counties = new Set<number>();
  for (const record of PHASE2_BASELINE_RECORDS) {
    if (states.has(deriveStateFips(record.fips))) {
      counties.add(record.fips);
    }
  }

  return [...counties].sort((left, right) => left - right);
}

function applyPopulationWindow(counties: number[], window: [number, number]): number[] {
  if (counties.length === 0) {
    return [];
  }

  const populationMap = new Map(PHASE2_BASELINE_POPULATION.map((row) => [row.fips, row.pop ?? 0]));
  const ranked = [...counties]
    .map((fips) => ({ fips, pop: populationMap.get(fips) ?? 0 }))
    .sort((left, right) => left.pop - right.pop);

  const [rawMin, rawMax] = window;
  const min = Math.max(0, Math.min(100, Math.min(rawMin, rawMax)));
  const max = Math.max(0, Math.min(100, Math.max(rawMin, rawMax)));
  const denom = ranked.length > 1 ? ranked.length - 1 : 1;

  return ranked
    .filter((entry, index) => {
      const percentile = (index / denom) * 100;
      return percentile >= min && percentile <= max;
    })
    .map((entry) => entry.fips)
    .sort((left, right) => left - right);
}

export function createCallbackFlowListener(
  dependencies: CallbackFlowDependencies = {}
): ListenerMiddleware {
  const fetchSeriesContractFn = dependencies.fetchSeriesContractFn ?? fetchSeriesContract;
  const trace = dependencies.trace ?? DEFAULT_TRACE;
  const listenerMiddleware = createListenerMiddleware();

  let latestRequestId = 0;

  listenerMiddleware.startListening({
    actionCreator: requestApplyStateGroup,
    effect: (action, api): void => {
      const state = api.getState() as RootState;
      const existing = state.filters.selections[action.payload.index];
      if (existing == null) {
        return;
      }

      const nextStateFips = selectStatesForGroup(action.payload.group);
      const countyOptions = getCountyOptionsForStates(nextStateFips);
      const nextCountyFips = existing.countyFips.filter((fips) => countyOptions.includes(fips));

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
    effect: (action, api): void => {
      const state = api.getState() as RootState;
      const existing = state.filters.selections[action.payload.index];
      if (existing == null) {
        return;
      }

      const countyOptions = getCountyOptionsForStates(existing.stateFips);
      const nextCountyFips = applyPopulationWindow(countyOptions, action.payload.window);

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

      const state = api.getState() as RootState;
      const selectedFipsCount = state.filters.selections.reduce((count, selection) => {
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
        metricType: state.filters.metricType,
        valueMode: state.filters.valueMode,
        rollingDays: state.filters.rollingDays,
        normalizeByPopulation: state.filters.normalizeByPopulation,
        useLogScale: state.filters.useLogScale
      };

      const workItems = state.filters.selections
        .map((selection, index) => {
          const selectedFips = selection.countyFips.length > 0 ? selection.countyFips : selection.stateFips;
          if (selectedFips.length === 0) {
            return null;
          }

          return {
            request: {
              records: PHASE2_BASELINE_RECORDS,
              selectedFips: [...selectedFips],
              population: PHASE2_BASELINE_POPULATION,
              metricType: state.filters.metricType,
              valueMode: state.filters.valueMode,
              rollingDays: state.filters.rollingDays,
              normalizeByPopulation: state.filters.normalizeByPopulation
            },
            location: `Selection ${index + 1}`
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
          deriveDateExtent(PHASE2_BASELINE_RECORDS)
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
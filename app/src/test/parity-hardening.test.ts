import { performance } from "node:perf_hooks";
import { waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { createAppStore } from "../app/store";
import type { RootState } from "../app/store";
import {
  setSelectionAtIndex,
  setMetricType,
  setNormalizeByPopulation,
  setUseLogScale,
  setValueMode
} from "../features/filters/filtersSlice";
import { callbackTransitionStarted } from "../features/ui/uiSlice";
import { selectCaveatVisibility } from "../selectors";
import * as dataService from "../services/dataService";

type Figure = RootState["ui"]["figure"];

function simplifyFigure(figure: Figure) {
  const firstTrace = figure?.data[0];
  return {
    title: figure?.layout.title?.text,
    yAxisType: figure?.layout.yaxis?.type,
    yAxisTickSuffix: figure?.layout.yaxis?.ticksuffix,
    traceCount: figure?.data.length ?? 0,
    firstTraceName: firstTrace?.name ?? null,
    xLength: firstTrace?.x?.length ?? 0,
    yPreview: (firstTrace?.y ?? []).slice(0, 3)
  };
}

describe("parity and hardening", () => {
  it("matches baseline scenario A functional signature for default state", async () => {
    const store = createAppStore({
      callbackFlowDependencies: {
        trace: () => undefined
      }
    });

    await waitFor(() => {
      expect(store.getState().ui.committedRequestId).toBe(1);
    });

    const summary = simplifyFigure(store.getState().ui.figure);
    expect(summary).toEqual({
      title: "Daily Confirmed Cases",
      yAxisType: "linear",
      yAxisTickSuffix: "%",
      traceCount: 1,
      firstTraceName: "Lower49 + AK + HI",
      xLength: 3,
      yPreview: [Number.NaN, 0.9333333333333333, 1.1666666666666667]
    });
  });

  it("matches baseline scenario C mode semantics for deaths + cumulative + absolute + log", async () => {
    const store = createAppStore({
      callbackFlowDependencies: {
        trace: () => undefined
      }
    });

    store.dispatch(setMetricType("deaths"));
    store.dispatch(setValueMode("values"));
    store.dispatch(setNormalizeByPopulation(false));
    store.dispatch(setUseLogScale(true));

    await waitFor(() => {
      expect(store.getState().ui.committedRequestId).toBeGreaterThanOrEqual(5);
    });

    const figure = store.getState().ui.figure;
    expect(figure?.layout.title?.text).toBe("Total Confirmed Deaths");
    expect(figure?.layout.yaxis?.type).toBe("log");
    expect(figure?.layout.yaxis?.ticksuffix).toBe("");
  });

  it("renders six traces when all six selection rows are active", async () => {
    const store = createAppStore({
      callbackFlowDependencies: {
        trace: () => undefined
      }
    });

    for (let index = 0; index < 6; index += 1) {
      store.dispatch(
        setSelectionAtIndex({
          index,
          selection: {
            stateFips: [],
            countyFips: index % 2 === 0 ? [10] : [20]
          }
        })
      );
    }

    await waitFor(() => {
      expect(store.getState().ui.committedRequestId).toBe(7);
    });

    const traceNames = (store.getState().ui.figure?.data ?? []).map((trace) => trace.name);
    expect(traceNames).toHaveLength(6);
    expect(traceNames.every((name) => typeof name === "string" && name.length > 0)).toBe(true);
  });

  it("applies caveat-note visibility rules from superscript markers in county names", () => {
    const getCachedDataSnapshotSpy = vi.spyOn(dataService, "getCachedDataSnapshot");
    getCachedDataSnapshotSpy.mockReturnValue({
      records: [],
      population: [],
      stateNamesByFips: new Map(),
      countyNamesByFips: new Map([
        [36998, "New York City¹"],
        [29998, "Kansas City²"],
        [29037, "Cass³"],
        [29997, "Joplin⁴"],
        [29145, "Newton⁵"]
      ]),
      stateOptions: [],
      dateRange: [null, null]
    });

    const store = createAppStore({
      enableCallbackFlow: false
    });

    store.dispatch(
      setSelectionAtIndex({
        index: 0,
        selection: {
          stateFips: [],
          countyFips: [36998, 29998, 29037, 29997, 29145]
        }
      })
    );

    expect(selectCaveatVisibility(store.getState())).toEqual([true, true, true, true, true]);
    getCachedDataSnapshotSpy.mockRestore();
  });

  it("keeps transition log bounded to 100 events as a memory safeguard", () => {
    const store = createAppStore({
      enableCallbackFlow: false
    });

    for (let requestId = 1; requestId <= 130; requestId += 1) {
      store.dispatch(
        callbackTransitionStarted({
          requestId,
          trigger: "transition-log/memory-check",
          selectedFipsCount: 1
        })
      );
    }

    const transitions = store.getState().ui.transitionLog ?? [];
    expect(transitions).toHaveLength(100);
    expect(transitions[0]?.requestId).toBe(31);
    expect(transitions[99]?.requestId).toBe(130);
  });

  it("measures filter-to-render latency for representative six-row interactions", async () => {
    const durations: number[] = [];

    for (let trial = 0; trial < 10; trial += 1) {
      const store = createAppStore({
        callbackFlowDependencies: {
          trace: () => undefined
        }
      });

      await waitFor(() => {
        expect(store.getState().ui.committedRequestId).toBe(1);
      });

      const start = performance.now();
      for (let index = 0; index < 6; index += 1) {
        store.dispatch(
          setSelectionAtIndex({
            index,
            selection: {
              stateFips: [],
              countyFips: index % 2 === 0 ? [10] : [20]
            }
          })
        );
      }

      await waitFor(() => {
        expect(store.getState().ui.committedRequestId).toBe(7);
      });
      durations.push(performance.now() - start);
    }

    const sorted = [...durations].sort((left, right) => left - right);
    const p95 = sorted[Math.min(sorted.length - 1, Math.ceil(sorted.length * 0.95) - 1)] ?? 0;

    expect(p95).toBeLessThan(250);
  });
});
import { waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createAppStore } from "../app/store";
import {
  setMetricType,
  setNormalizeByPopulation,
  setSelectionAtIndex,
  setUseLogScale,
  setValueMode
} from "../features/filters/filtersSlice";
import { resetDataSnapshotCache } from "../services/dataService";

function finite(values: number[] | undefined): number[] {
  return (values ?? []).filter((value): value is number => Number.isFinite(value));
}

describe("real-data parity oracles", () => {
  beforeEach(() => {
    vi.stubEnv("COVID_DASH_REAL_DATA", "1");
    resetDataSnapshotCache();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    resetDataSnapshotCache();
  });

  it("matches baseline scenario B state-level NY daily normalized cases", async () => {
    const store = createAppStore({
      callbackFlowDependencies: {
        trace: () => undefined
      }
    });

    store.dispatch(
      setSelectionAtIndex({
        index: 0,
        selection: {
          stateFips: [36],
          countyFips: []
        }
      })
    );

    await waitFor(
      () => {
        expect(store.getState().ui.committedRequestId).toBeGreaterThanOrEqual(2);
      },
      { timeout: 120000 }
    );

    const figure = store.getState().ui.figure;
    const trace = figure?.data[0];
    const y = finite(trace?.y);
    const lastY = y[y.length - 1] ?? 0;
    const maxY = Math.max(...y);
    const minY = Math.min(...y);

    expect(figure?.layout.title?.text).toBe("Daily Confirmed Cases");
    expect(figure?.layout.yaxis?.type).toBe("linear");
    expect(figure?.layout.yaxis?.ticksuffix).toBe("%");
    expect(trace?.name).toBe("NY");
    expect(trace?.x?.length).toBe(1118);
    expect(trace?.x?.[0]).toBe("2020-03-01");
    expect(trace?.x?.[trace.x.length - 1]).toBe("2023-03-23");
    expect(lastY).toBeCloseTo(0.0051628623, 6);
    expect(maxY).toBeCloseTo(0.3680573599, 6);
    expect(minY).toBeCloseTo(0, 6);
  }, 150000);

  it("matches baseline scenario C NYC cumulative deaths absolute log", async () => {
    const store = createAppStore({
      callbackFlowDependencies: {
        trace: () => undefined
      }
    });

    store.dispatch(
      setSelectionAtIndex({
        index: 0,
        selection: {
          stateFips: [36],
          countyFips: [36998]
        }
      })
    );
    store.dispatch(setMetricType("deaths"));
    store.dispatch(setValueMode("values"));
    store.dispatch(setNormalizeByPopulation(false));
    store.dispatch(setUseLogScale(true));

    await waitFor(
      () => {
        expect(store.getState().ui.committedRequestId).toBeGreaterThanOrEqual(6);
      },
      { timeout: 120000 }
    );

    const figure = store.getState().ui.figure;
    const trace = figure?.data[0];
    const y = finite(trace?.y);
    const lastY = y[y.length - 1] ?? 0;

    expect(figure?.layout.title?.text).toBe("Total Confirmed Deaths");
    expect(figure?.layout.yaxis?.type).toBe("log");
    expect(figure?.layout.yaxis?.ticksuffix).toBe("");
    expect(trace?.name).toContain("New York City");
    expect(trace?.x?.length).toBe(1036);
    expect(trace?.x?.[0]).toBe("2020-03-01");
    expect(trace?.x?.[trace.x.length - 1]).toBe("2022-12-31");
    expect(lastY).toBe(43935);
    expect(Math.max(...y)).toBe(43935);
    expect(Math.min(...y)).toBe(0);
  }, 150000);
});

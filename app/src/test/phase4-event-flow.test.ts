import { waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { createAppStore } from "../app/store";
import {
  requestApplyPopulationWindow,
  requestApplyStateGroup,
  setSelectionAtIndex
} from "../features/filters/filtersSlice";
import type { FetchSeriesContractInput } from "../services/dataService";
import type { TransformSeriesContract } from "../domain/covidData";

function makeContract(location: string, value: number): TransformSeriesContract {
  return {
    location,
    dates: ["2020-01-01", "2020-01-02"],
    values: [Number.NaN, value],
    popvalues: [Number.NaN, value]
  };
}

describe("phase 4 callback event flow", () => {
  it("uses last-write-wins and ignores stale async responses", async () => {
    const pending: Array<(contract: TransformSeriesContract) => void> = [];

    const fetchSeriesContractFn = vi.fn(
      (input: FetchSeriesContractInput) =>
        new Promise<TransformSeriesContract>((resolve) => {
          pending.push(resolve);
          void input;
        })
    );

    const store = createAppStore({
      callbackFlowDependencies: {
        fetchSeriesContractFn,
        trace: () => undefined
      }
    });

    const initialCalls = fetchSeriesContractFn.mock.calls.length;
    const initialPending = pending.length;

    store.dispatch(
      setSelectionAtIndex({
        index: 0,
        selection: { stateFips: [], countyFips: [10] }
      })
    );

    store.dispatch(
      setSelectionAtIndex({
        index: 0,
        selection: { stateFips: [], countyFips: [20] }
      })
    );

    await waitFor(() => {
      expect(fetchSeriesContractFn.mock.calls.length - initialCalls).toBe(2);
      expect(pending.length - initialPending).toBe(2);
    });

    const latestResolve = pending[initialPending + 1];
    expect(latestResolve).toBeDefined();
    latestResolve?.(makeContract("Selection 1", 20));
    await waitFor(() => {
      expect(store.getState().ui.committedRequestId).toBe(3);
    });

    const staleResolve = pending[initialPending];
    expect(staleResolve).toBeDefined();
    staleResolve?.(makeContract("Selection 1", 10));
    await waitFor(() => {
      const staleEvent = (store.getState().ui.transitionLog ?? []).find(
        (event) => event.requestId === 2 && event.stage === "stale"
      );
      expect(staleEvent).toBeDefined();
    });

    const figure = store.getState().ui.figure;
    expect(figure?.data[0]?.name).toBe("Selection 1");
    expect((figure?.data[0]?.y ?? [])[1]).toBe(20);
  });

  it("records deterministic start-compute-commit stage order", async () => {
    const fetchSeriesContractFn = vi.fn(async (input: FetchSeriesContractInput) =>
      makeContract(input.location, input.request.selectedFips[0] ?? 0)
    );

    const store = createAppStore({
      callbackFlowDependencies: {
        fetchSeriesContractFn,
        trace: () => undefined
      }
    });

    store.dispatch(
      setSelectionAtIndex({
        index: 0,
        selection: { stateFips: [], countyFips: [10] }
      })
    );

    await waitFor(() => {
      expect(store.getState().ui.committedRequestId).toBe(2);
    });

    const stages = (store.getState().ui.transitionLog ?? [])
      .filter((entry) => entry.requestId === 2)
      .map((entry) => entry.stage);

    expect(stages).toEqual(["start", "compute", "commit"]);
  });

  it("applies state-group action to selection row before figure refresh", async () => {
    const store = createAppStore({
      callbackFlowDependencies: {
        trace: () => undefined
      }
    });

    store.dispatch(
      requestApplyStateGroup({
        index: 0,
        group: "all"
      })
    );

    await waitFor(() => {
      expect(store.getState().filters.selections[0]?.stateFips).toEqual([10, 20]);
      expect(store.getState().ui.committedRequestId).toBe(2);
    });
  });

  it("applies population window on click and commits filtered county selection", async () => {
    const store = createAppStore({
      callbackFlowDependencies: {
        trace: () => undefined
      }
    });

    store.dispatch(
      setSelectionAtIndex({
        index: 0,
        selection: {
          stateFips: [10, 20],
          countyFips: []
        }
      })
    );

    store.dispatch(
      requestApplyPopulationWindow({
        index: 0,
        window: [50, 100]
      })
    );

    await waitFor(() => {
      expect(store.getState().filters.selections[0]?.countyFips).toEqual([10]);
      expect(store.getState().ui.committedRequestId).toBe(3);
    });
  });
});

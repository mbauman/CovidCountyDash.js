import { describe, expect, it } from "vitest";
import { selectParityModeSummary } from "../selectors";
import type { RootState } from "../app/store";

describe("phase 1 selectors", () => {
  it("builds parity mode summary from filter state", () => {
    const state = {
      filters: {
        metricType: "cases",
        valueMode: "diff",
        rollingDays: 7,
        normalizeByPopulation: true,
        useLogScale: false,
        selections: [
          { stateFips: [], countyFips: [] },
          { stateFips: [], countyFips: [] },
          { stateFips: [], countyFips: [] },
          { stateFips: [], countyFips: [] },
          { stateFips: [], countyFips: [] },
          { stateFips: [], countyFips: [] }
        ]
      },
      ui: {
        isLoading: false,
        lastError: null
      }
    } as RootState;

    expect(selectParityModeSummary(state)).toContain("cases / daily / 7d roll");
  });
});

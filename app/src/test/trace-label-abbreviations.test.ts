import { describe, expect, it } from "vitest";
import { buildSelectionLabel, type DataSnapshot } from "../services/dataService";

function makeSnapshot(): DataSnapshot {
  return {
    records: [],
    population: [],
    stateNamesByFips: new Map<number, string>(),
    countyNamesByFips: new Map<number, string>([
      [36001, "ExtraordinarilyLongCountyNameOne"],
      [36005, "AnotherVeryLongCountyNameTwo"],
      [36047, "ThirdVeryLongCountyNameThree"],
      [36061, "FourthVeryLongCountyNameFour"],
      [34003, "Bergen"]
    ]),
    stateOptions: [],
    dateRange: [null, null]
  };
}

describe("trace label abbreviations", () => {
  it("matches Julia state-group abbreviation for all states", () => {
    const snapshot = makeSnapshot();
    const allStates = [
      1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
      26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46,
      47, 48, 49, 50, 51, 53, 54, 55, 56, 60, 66, 69, 72, 78
    ];

    expect(buildSelectionLabel(allStates, snapshot)).toBe("All");
  });

  it("matches Julia state-group abbreviation for lower49", () => {
    const snapshot = makeSnapshot();
    const lower49 = [
      1, 4, 5, 6, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48,
      49, 50, 51, 53, 54, 55, 56
    ];

    expect(buildSelectionLabel(lower49, snapshot)).toBe("Lower49");
  });

  it("matches Julia mixed-selection text", () => {
    const snapshot = makeSnapshot();
    expect(buildSelectionLabel([36, 36061], snapshot)).toBe("Strange mix of states and counties");
  });

  it("matches Julia cutoff behavior for same-state county labels", () => {
    const snapshot = makeSnapshot();
    const label = buildSelectionLabel([36001, 36005, 36047, 36061], snapshot);

    expect(label).toBe("ExtraordinarilyLongCountyNameOne + 3 others in NY");
  });

  it("matches Julia county labeling across multiple states", () => {
    const snapshot = makeSnapshot();
    const label = buildSelectionLabel([36061, 34003], snapshot);

    expect(label).toBe("Bergen, NJ + FourthVeryLongCountyNameFour, NY");
  });
});

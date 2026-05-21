import { describe, expect, it } from "vitest";
import {
  buildPlotMetadata,
  buildSeries,
  buildSeriesContract,
  normalizeRawRecords,
  repairMissingFips
} from "../services/transforms";
import type { DailyRecord, PopulationRow, RawDailyRecord, TransformRequest } from "../domain/covidData";

const fixtureRecords: DailyRecord[] = [
  { date: "2020-01-01", fips: 10, cases: 10, deaths: 1 },
  { date: "2020-01-01", fips: 20, cases: 5, deaths: 0 },
  { date: "2020-01-02", fips: 10, cases: 20, deaths: 2 },
  { date: "2020-01-02", fips: 20, cases: 9, deaths: 1 },
  { date: "2020-01-03", fips: 10, cases: 35, deaths: 4 },
  { date: "2020-01-03", fips: 20, cases: 15, deaths: 2 }
];

const fixturePopulation: PopulationRow[] = [
  { fips: 10, pop: 1000 },
  { fips: 20, pop: 500 }
];

function baseRequest(): TransformRequest {
  return {
    records: fixtureRecords,
    selectedFips: [10, 20],
    population: fixturePopulation,
    metricType: "cases",
    valueMode: "values",
    rollingDays: 1,
    normalizeByPopulation: false
  };
}

describe("buildSeries", () => {
  it("aggregates cumulative values by date", () => {
    const series = buildSeries(baseRequest());
    expect(series.dates).toEqual(["2020-01-01", "2020-01-02", "2020-01-03"]);
    expect(series.values).toEqual([15, 29, 50]);
  });

  it("computes diff mode with rolling mean", () => {
    const request = baseRequest();
    request.valueMode = "diff";
    request.rollingDays = 2;

    const series = buildSeries(request);
    expect(Number.isNaN(series.values[0])).toBe(true);
    expect(series.values.slice(1)).toEqual([14, 17.5]);
  });

  it("normalizes by population percent", () => {
    const request = baseRequest();
    request.normalizeByPopulation = true;

    const series = buildSeries(request);
    expect(series.values.map((value) => Number(value.toFixed(6)))).toEqual([
      1,
      1.933333,
      3.333333
    ]);
  });

  it("returns empty series when no fips selected", () => {
    const request = baseRequest();
    request.selectedFips = [];
    const series = buildSeries(request);
    expect(series).toEqual({ dates: [], values: [] });
  });
});

describe("buildSeriesContract", () => {
  it("returns per-series values and population-normalized values for plotting contracts", () => {
    const request = baseRequest();
    request.valueMode = "diff";
    request.rollingDays = 2;

    const series = buildSeriesContract(request, "Fixture Region");

    expect(series.location).toBe("Fixture Region");
    expect(series.dates).toEqual(["2020-01-01", "2020-01-02", "2020-01-03"]);
    expect(Number.isNaN(series.values[0])).toBe(true);
    expect(series.values.slice(1)).toEqual([14, 17.5]);
    expect(Number.isNaN(series.popvalues[0])).toBe(true);
    expect(series.popvalues.slice(1).map((value) => Number(value.toFixed(6)))).toEqual([0.933333, 1.166667]);
  });
});

describe("buildPlotMetadata", () => {
  it("builds cumulative metadata labels with absolute scaling", () => {
    const metadata = buildPlotMetadata({
      metricType: "cases",
      valueMode: "values",
      rollingDays: 7,
      normalizeByPopulation: false,
      useLogScale: false
    });

    expect(metadata.title).toBe("Total Confirmed Cases");
    expect(metadata.yAxisTitle).toBe("Total confirmed cases");
    expect(metadata.yAxisType).toBe("linear");
    expect(metadata.yAxisTickSuffix).toBe("");
    expect(metadata.valueField).toBe("y");
    expect(metadata.popField).toBe("customdata");
    expect(metadata.hoverTemplate).toContain("%{y:,d} cases");
  });

  it("builds daily rolling metadata labels with normalized log scaling", () => {
    const metadata = buildPlotMetadata({
      metricType: "deaths",
      valueMode: "diff",
      rollingDays: 7,
      normalizeByPopulation: true,
      useLogScale: true
    });

    expect(metadata.title).toBe("Daily Confirmed Deaths");
    expect(metadata.yAxisTitle).toBe("Average daily deaths (rolling 7-day mean)");
    expect(metadata.yAxisType).toBe("log");
    expect(metadata.yAxisTickSuffix).toBe("%");
    expect(metadata.valueField).toBe("customdata");
    expect(metadata.popField).toBe("y");
    expect(metadata.hoverTemplate).toContain("deaths/day");
    expect(metadata.hoverTemplate).toContain("%{customdata:,.1f}");
  });
});

describe("repairMissingFips", () => {
  const stateFipsByName = new Map<string, number>([
    ["New York", 36],
    ["Missouri", 29],
    ["Alabama", 1]
  ]);

  it("maps known aggregate counties to synthetic parity fips", () => {
    expect(repairMissingFips("New York", "New York City", stateFipsByName)).toBe(36998);
    expect(repairMissingFips("Missouri", "Kansas City", stateFipsByName)).toBe(29998);
    expect(repairMissingFips("Missouri", "Joplin", stateFipsByName)).toBe(29997);
  });

  it("maps unknown county rows to state*1000+999", () => {
    expect(repairMissingFips("Alabama", "Unknown", stateFipsByName)).toBe(1999);
  });

  it("returns null for unresolved missing-fips rows", () => {
    expect(repairMissingFips("Nowhere", "Unknown", stateFipsByName)).toBeNull();
    expect(repairMissingFips("Alabama", "Some County", stateFipsByName)).toBeNull();
  });
});

describe("normalizeRawRecords", () => {
  it("repairs known missing fips values and sorts by fips/date", () => {
    const raw: RawDailyRecord[] = [
      { date: "2020-01-02", state: "New York", county: "New York City", fips: null, cases: 2, deaths: 1 },
      { date: "2020-01-01", state: "New York", county: "New York City", fips: null, cases: 1, deaths: 0 },
      { date: "2020-01-01", state: "Alabama", county: "Unknown", fips: null, cases: 3, deaths: 0 },
      { date: "2020-01-01", state: "Alabama", county: "Autauga", fips: 1001, cases: 4, deaths: 0 },
      { date: "2020-01-01", state: "Nowhere", county: "Unknown", fips: null, cases: 5, deaths: 0 }
    ];
    const stateFipsByName = new Map<string, number>([
      ["New York", 36],
      ["Alabama", 1]
    ]);

    const normalized = normalizeRawRecords(raw, stateFipsByName);

    expect(normalized).toEqual([
      { date: "2020-01-01", fips: 1001, cases: 4, deaths: 0 },
      { date: "2020-01-01", fips: 1999, cases: 3, deaths: 0 },
      { date: "2020-01-01", fips: 36998, cases: 1, deaths: 0 },
      { date: "2020-01-02", fips: 36998, cases: 2, deaths: 1 }
    ]);
  });
});

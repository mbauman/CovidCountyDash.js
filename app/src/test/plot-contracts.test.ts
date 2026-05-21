import { describe, expect, it } from "vitest";
import { toPlotlyFigureFromContract, toPlotlyFigureFromContracts } from "../plotly/adapters";
import {
  selectPrimaryPlotFigure,
  selectPrimaryTransformRequest,
  selectSelectedFips,
  selectTransformDisplayOptions
} from "../selectors";
import type { RootState } from "../app/store";
import type { TransformPlotMetadata, TransformSeriesContract } from "../domain/covidData";

describe("selectTransformDisplayOptions", () => {
  it("returns a typed transform display contract from filter state", () => {
    const state = {
      filters: {
        metricType: "deaths",
        valueMode: "values",
        rollingDays: 3,
        normalizeByPopulation: false,
        useLogScale: true,
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

    expect(selectTransformDisplayOptions(state)).toEqual({
      metricType: "deaths",
      valueMode: "values",
      rollingDays: 3,
      normalizeByPopulation: false,
      useLogScale: true
    });
  });
});

describe("toPlotlyFigureFromContract", () => {
  it("maps series values/customdata according to metadata field contract", () => {
    const series: TransformSeriesContract = {
      location: "Test Region",
      dates: ["2020-01-01", "2020-01-02"],
      values: [10, 12],
      popvalues: [1, 1.2]
    };
    const metadata: TransformPlotMetadata = {
      title: "Daily Confirmed Cases",
      yAxisTitle: "Number of daily cases",
      yAxisType: "linear",
      yAxisTickSuffix: "%",
      hoverTemplate: "%{x}: %{customdata:,.1f} cases/day (%{y:.2g}%)",
      valueField: "customdata",
      popField: "y"
    };

    const figure = toPlotlyFigureFromContract(series, metadata);

    expect(figure.data).toHaveLength(1);
    expect(figure.data[0].y).toEqual([1, 1.2]);
    expect(figure.data[0].customdata).toEqual([10, 12]);
    expect(figure.data[0].hovertemplate).toBe(metadata.hoverTemplate);
    expect(figure.layout.title?.text).toBe("Daily Confirmed Cases");
    expect(figure.layout.yaxis?.title?.text).toBe("Number of daily cases");
  });
});

describe("toPlotlyFigureFromContracts", () => {
  it("renders a placeholder NaN trace when there are no contracts", () => {
    const metadata: TransformPlotMetadata = {
      title: "Daily Confirmed Cases",
      yAxisTitle: "Average daily cases (rolling 7-day mean)",
      yAxisType: "linear",
      yAxisTickSuffix: "%",
      hoverTemplate: "%{x|%b %d}: %{customdata:,.1f} cases/day (%{y:.2g}%)",
      valueField: "customdata",
      popField: "y"
    };

    const figure = toPlotlyFigureFromContracts([], metadata, ["2020-01-01", "2020-01-03"]);

    expect(figure.data).toHaveLength(1);
    expect(figure.data[0].x).toEqual(["2020-01-01", "2020-01-03"]);
    expect(Number.isNaN((figure.data[0].y ?? [])[0])).toBe(true);
    expect(Number.isNaN((figure.data[0].y ?? [])[1])).toBe(true);
  });
});

describe("selector-driven plot pipeline", () => {
  it("derives selected fips and builds a transform request", () => {
    const state = {
      filters: {
        metricType: "cases",
        valueMode: "diff",
        rollingDays: 7,
        normalizeByPopulation: true,
        useLogScale: false,
        selections: [
          { stateFips: [], countyFips: [10, 20] },
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

    expect(selectSelectedFips(state)).toEqual([10, 20]);

    const request = selectPrimaryTransformRequest(state);
    expect(request.metricType).toBe("cases");
    expect(request.valueMode).toBe("diff");
    expect(request.normalizeByPopulation).toBe(true);
    expect(request.records.length).toBeGreaterThan(0);
    expect(request.population.length).toBeGreaterThan(0);
  });

  it("builds a figure from selectors using transform contracts and metadata", () => {
    const state = {
      filters: {
        metricType: "cases",
        valueMode: "diff",
        rollingDays: 7,
        normalizeByPopulation: true,
        useLogScale: false,
        selections: [
          { stateFips: [], countyFips: [10] },
          { stateFips: [], countyFips: [20] },
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

    const figure = selectPrimaryPlotFigure(state);

    expect(figure.layout.title?.text).toBe("Daily Confirmed Cases");
    expect(figure.layout.yaxis?.title?.text).toBe("Average daily cases (rolling 7-day mean)");
    expect(figure.layout.yaxis?.ticksuffix).toBe("%");
    expect(figure.layout.yaxis?.type).toBe("linear");
    expect(figure.data).toHaveLength(2);
    expect(figure.data[0].name).toBe("Selection 1");
    expect(figure.data[1].name).toBe("Selection 2");
    expect(Number.isNaN(figure.data[0].y?.[0] ?? 0)).toBe(true);
    expect((figure.data[0].y ?? [])[1]).toBeCloseTo(1, 5);
    expect((figure.data[0].customdata ?? [])[1]).toBeCloseTo(10, 5);
    expect((figure.data[1].y ?? [])[1]).toBeCloseTo(0.8, 5);
    expect((figure.data[1].customdata ?? [])[1]).toBeCloseTo(4, 5);
  });

  it("builds placeholder figure output when no selections are active", () => {
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

    const figure = selectPrimaryPlotFigure(state);

    expect(figure.data).toHaveLength(1);
    expect(figure.data[0].x).toEqual(["2020-01-01", "2020-01-03"]);
    expect(Number.isNaN((figure.data[0].y ?? [])[0])).toBe(true);
    expect(Number.isNaN((figure.data[0].y ?? [])[1])).toBe(true);
  });
});
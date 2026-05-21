import { describe, expect, it } from "vitest";
import { toPlotlyFigureFromContract } from "../plotly/adapters";
import { selectTransformDisplayOptions } from "../selectors";
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
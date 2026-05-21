import type { DataServiceResult } from "../services/dataService";
import type { TransformPlotMetadata, TransformSeriesContract } from "../domain/covidData";

interface AxisTitle {
  text?: string;
}

interface Axis {
  title?: AxisTitle;
  type?: "linear" | "log";
  ticksuffix?: "" | "%";
}

interface Layout {
  title?: { text?: string };
  xaxis?: Axis;
  yaxis?: Axis;
}

interface Data {
  type?: string;
  mode?: string;
  name?: string;
  x?: Array<string | number>;
  y?: number[];
  customdata?: number[];
  hovertemplate?: string;
}

export interface PlotlyFigure {
  data: Data[];
  layout: Partial<Layout>;
}

export function toPlotlyFigure(series: DataServiceResult): PlotlyFigure {
  return {
    data: [
      {
        type: "scatter",
        mode: "lines",
        name: "placeholder",
        x: series.dates,
        y: series.values
      }
    ],
    layout: {
      title: { text: "Phase 1 Placeholder Figure" },
      xaxis: { title: { text: "Date" } },
      yaxis: { title: { text: "Value" } }
    }
  };
}

export function toPlotlyFigureFromContract(
  series: TransformSeriesContract,
  metadata: TransformPlotMetadata
): PlotlyFigure {
  const y = metadata.valueField === "y" ? series.values : series.popvalues;
  const customdata = metadata.popField === "customdata" ? series.popvalues : series.values;

  return {
    data: [
      {
        type: "scatter",
        mode: "lines",
        name: series.location,
        x: series.dates,
        y,
        customdata,
        hovertemplate: metadata.hoverTemplate
      }
    ],
    layout: {
      title: { text: metadata.title },
      xaxis: { title: { text: "Date" } },
      yaxis: {
        title: { text: metadata.yAxisTitle },
        type: metadata.yAxisType,
        ticksuffix: metadata.yAxisTickSuffix
      }
    }
  };
}

export function toPlotlyFigureFromContracts(
  seriesContracts: TransformSeriesContract[],
  metadata: TransformPlotMetadata,
  dateExtent: [string, string] | null
): PlotlyFigure {
  if (seriesContracts.length === 0 || seriesContracts.every((series) => series.dates.length === 0)) {
    const placeholderX = dateExtent == null ? [] : [dateExtent[0], dateExtent[1]];
    const placeholderY = dateExtent == null ? [] : [Number.NaN, Number.NaN];

    return {
      data: [
        {
          type: "scatter",
          mode: "lines",
          name: "",
          x: placeholderX,
          y: placeholderY
        }
      ],
      layout: {
        title: { text: metadata.title },
        xaxis: { title: { text: "Date" } },
        yaxis: {
          title: { text: metadata.yAxisTitle },
          type: metadata.yAxisType,
          ticksuffix: metadata.yAxisTickSuffix
        }
      }
    };
  }

  const data = seriesContracts
    .filter((series) => series.dates.length > 0)
    .map((series) => {
      const y = metadata.valueField === "y" ? series.values : series.popvalues;
      const customdata = metadata.popField === "customdata" ? series.popvalues : series.values;

      return {
        type: "scatter",
        mode: "lines",
        name: series.location,
        x: series.dates,
        y,
        customdata,
        hovertemplate: metadata.hoverTemplate
      };
    });

  return {
    data,
    layout: {
      title: { text: metadata.title },
      xaxis: { title: { text: "Date" } },
      yaxis: {
        title: { text: metadata.yAxisTitle },
        type: metadata.yAxisType,
        ticksuffix: metadata.yAxisTickSuffix
      }
    }
  };
}
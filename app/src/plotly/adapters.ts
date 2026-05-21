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
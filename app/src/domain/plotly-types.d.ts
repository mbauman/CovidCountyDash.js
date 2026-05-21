declare module "plotly.js-dist-min" {
  export interface AxisTitle {
    text?: string;
  }

  export interface Axis {
    title?: AxisTitle;
  }

  export interface Layout {
    title?: { text?: string };
    xaxis?: Axis;
    yaxis?: Axis;
  }

  export interface Data {
    type?: string;
    mode?: string;
    name?: string;
    x?: Array<string | number>;
    y?: number[];
  }
}

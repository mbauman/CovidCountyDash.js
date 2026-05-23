declare module "plotly.js/lib/core" {
  const Plotly: unknown;

  export default Plotly;
}

declare module "plotly.js/lib/scatter" {
  const scatter: unknown;

  export default scatter;
}

declare module "plotly.js" {
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

  export interface Config {
    responsive?: boolean;
  }
}

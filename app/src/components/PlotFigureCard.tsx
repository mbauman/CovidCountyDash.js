import type { CSSProperties } from "react";
import type * as Plotly from "plotly.js";
import Plot from "react-plotly.js";
import type { PlotlyFigure } from "../plotly/adapters";

interface PlotFigureCardProps {
  figure: PlotlyFigure;
  isLoading: boolean;
  lastError: string | null;
}

export function PlotFigureCard({ figure, isLoading, lastError }: PlotFigureCardProps): JSX.Element {
  return (
    <section aria-label="Trend chart" style={styles.panel}>
      <div style={styles.panelHeader}>
        <h2 style={styles.panelTitle}>Trend Overview</h2>
        <p style={styles.panelSubtitle}>{figure.layout.title?.text ?? "Untitled figure"}</p>
      </div>

      {isLoading ? <p role="status">Loading data...</p> : null}
      {lastError != null ? <p role="alert">{lastError}</p> : null}

      {!isLoading && lastError == null ? (
        <div data-testid="plotly-figure-shell" style={styles.figureShell}>
          <Plot
            data={figure.data as unknown as Plotly.Data[]}
            layout={figure.layout as unknown as Partial<Plotly.Layout>}
            useResizeHandler
            style={styles.figure}
            config={{ responsive: true }}
          />
        </div>
      ) : null}
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  panel: {
    background: "#f7fbff",
    border: "1px solid #d7e4ef",
    borderRadius: "12px",
    padding: "1rem",
    minHeight: "20rem"
  },
  panelHeader: {
    marginBottom: "0.75rem"
  },
  panelTitle: {
    margin: "0 0 0.35rem",
    fontSize: "1.15rem"
  },
  panelSubtitle: {
    margin: 0,
    color: "#33536d"
  },
  figureShell: {
    border: "1px dashed #95abc0",
    borderRadius: "10px",
    padding: "0.5rem",
    background: "#ffffff",
    minHeight: "28rem"
  },
  figure: {
    width: "100%",
    height: "100%"
  }
};

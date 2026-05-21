import type { CSSProperties } from "react";
import type { PlotlyFigure } from "../plotly/adapters";

interface PlotFigureCardProps {
  figure: PlotlyFigure;
  isLoading: boolean;
  lastError: string | null;
}

export function PlotFigureCard({ figure, isLoading, lastError }: PlotFigureCardProps): JSX.Element {
  const traceCount = figure.data.length;
  const pointCount = figure.data.reduce((count, trace) => count + (trace.y?.length ?? 0), 0);

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
          <p>Traces: {traceCount}</p>
          <p>Total plotted points: {pointCount}</p>
          <p>Y axis: {figure.layout.yaxis?.title?.text ?? "Value"}</p>
          <p>Scale: {figure.layout.yaxis?.type ?? "linear"}</p>
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
    padding: "0.9rem",
    background: "#ffffff"
  }
};

import { useEffect, useRef, type CSSProperties } from "react";
import type * as Plotly from "plotly.js";
import type { PlotlyFigure } from "../plotly/adapters";

interface PlotFigureCardProps {
  figure: PlotlyFigure;
  isLoading: boolean;
  lastError: string | null;
}

interface PlotlyRuntime {
  react: (
    root: HTMLElement,
    data: Plotly.Data[],
    layout: Partial<Plotly.Layout>,
    config: Partial<Plotly.Config>
  ) => Promise<unknown> | unknown;
  purge: (root: HTMLElement) => void;
  Plots?: {
    resize: (root: HTMLElement) => void;
  };
}

type BrowserGlobal = typeof globalThis & {
  global?: typeof globalThis;
};

const PLOTLY_RUNTIME_RELOAD_KEY = "covid-dash-plotly-runtime-reload";

function isRecoverableRuntimeImportError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }

  const message = error.message.toLowerCase();
  return message.includes("importing a module script failed") || message.includes("outdated optimize dep");
}

function cloneFigureForPlotly(figure: PlotlyFigure): {
  data: Plotly.Data[];
  layout: Partial<Plotly.Layout>;
} {
  const data = figure.data.map((trace) => ({
    ...trace,
    x: trace.x == null ? undefined : [...trace.x],
    y: trace.y == null ? undefined : [...trace.y],
    customdata: trace.customdata == null ? undefined : [...trace.customdata]
  })) as unknown as Plotly.Data[];

  const layout = {
    ...figure.layout,
    title: figure.layout.title == null ? undefined : { ...figure.layout.title },
    xaxis:
      figure.layout.xaxis == null
        ? undefined
        : {
            ...figure.layout.xaxis,
            title: figure.layout.xaxis.title == null ? undefined : { ...figure.layout.xaxis.title }
          },
    yaxis:
      figure.layout.yaxis == null
        ? undefined
        : {
            ...figure.layout.yaxis,
            title: figure.layout.yaxis.title == null ? undefined : { ...figure.layout.yaxis.title }
          }
  } as unknown as Partial<Plotly.Layout>;

  return { data, layout };
}

function drawFigure(
  runtime: PlotlyRuntime,
  root: HTMLDivElement,
  figure: PlotlyFigure
): void {
  const { data, layout } = cloneFigureForPlotly(figure);
  void runtime.react(root, data, layout, { responsive: true });
}

export function PlotFigureCard({ figure, isLoading, lastError }: PlotFigureCardProps): JSX.Element {
  const plotRootRef = useRef<HTMLDivElement | null>(null);
  const runtimeRef = useRef<PlotlyRuntime | null>(null);

  useEffect(() => {
    if (import.meta.env.MODE === "test") {
      return;
    }

    const root = plotRootRef.current;
    if (root == null) {
      return;
    }

    let cancelled = false;

    const setup = async (): Promise<void> => {
      try {
        const browserGlobal = globalThis as BrowserGlobal;
        if (browserGlobal.global == null) {
          browserGlobal.global = globalThis;
        }

        const module = await import("../plotly/plotlyRuntime");
        const runtime = module.default as unknown as PlotlyRuntime;
        if (cancelled) {
          return;
        }

        runtimeRef.current = runtime;
        drawFigure(runtime, root, figure);
      } catch (error) {
        if (cancelled) {
          return;
        }

        if (isRecoverableRuntimeImportError(error)) {
          try {
            const hasReloaded = window.sessionStorage.getItem(PLOTLY_RUNTIME_RELOAD_KEY) === "1";
            if (!hasReloaded) {
              window.sessionStorage.setItem(PLOTLY_RUNTIME_RELOAD_KEY, "1");
              window.location.reload();
              return;
            }
          } catch {
            // If sessionStorage is unavailable, continue and surface the error.
          }
        }

        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error("Failed to load Plotly runtime", error);
        }
      }
    };

    void setup();

    const handleResize = (): void => {
      const runtime = runtimeRef.current;
      if (runtime?.Plots == null) {
        return;
      }

      runtime.Plots.resize(root);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      const runtime = runtimeRef.current;
      runtimeRef.current = null;
      if (runtime != null) {
        try {
          runtime.purge(root);
        } catch {
          // Ignore teardown races from Plotly internals during development reloads.
        }
      }
    };
  }, []);

  useEffect(() => {
    if (import.meta.env.MODE === "test") {
      return;
    }

    const runtime = runtimeRef.current;
    const root = plotRootRef.current;
    if (runtime == null || root == null) {
      return;
    }

    try {
      window.sessionStorage.removeItem(PLOTLY_RUNTIME_RELOAD_KEY);
    } catch {
      // No-op when storage is unavailable.
    }

    drawFigure(runtime, root, figure);
  }, [figure]);

  return (
    <section aria-label="Trend chart" style={styles.panel}>
      <div style={styles.panelHeader}>
        <p style={styles.panelSubtitle}>{figure.layout.title?.text ?? "Untitled figure"}</p>
      </div>

      <div data-testid="plotly-figure-shell" style={styles.figureShell}>
        <div ref={plotRootRef} style={styles.figure} />
        {isLoading ? (
          <p role="status" style={styles.overlayStatus}>
            Loading data...
          </p>
        ) : null}
        {lastError != null ? (
          <p role="alert" style={styles.overlayError}>
            {lastError}
          </p>
        ) : null}
      </div>
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
    position: "relative",
    border: "1px dashed #95abc0",
    borderRadius: "10px",
    padding: "0.5rem",
    background: "#ffffff",
    minHeight: "28rem"
  },
  figure: {
    width: "100%",
    height: "100%"
  },
  overlayStatus: {
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    margin: 0,
    padding: "0.25rem 0.5rem",
    borderRadius: "6px",
    background: "rgba(30, 66, 98, 0.08)",
    color: "#24435d",
    fontSize: "0.85rem"
  },
  overlayError: {
    position: "absolute",
    left: "0.75rem",
    bottom: "0.75rem",
    margin: 0,
    maxWidth: "calc(100% - 1.5rem)",
    padding: "0.35rem 0.55rem",
    borderRadius: "6px",
    background: "rgba(152, 45, 45, 0.12)",
    color: "#6b1d1d",
    fontSize: "0.85rem"
  }
};

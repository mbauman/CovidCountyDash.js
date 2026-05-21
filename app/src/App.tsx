import type { CSSProperties } from "react";
import { useAppSelector } from "./app/hooks";
import { CaveatNotes } from "./components/CaveatNotes";
import { PlotFigureCard } from "./components/PlotFigureCard";
import { FiltersPanel } from "./features/filters/FiltersPanel";
import {
  selectActiveSeriesCount,
  selectCaveatVisibility,
  selectLoadedThroughDate,
  selectPrimaryPlotFigure
} from "./selectors";

export function App(): JSX.Element {
  const loadedThroughDate = useAppSelector(selectLoadedThroughDate);
  const activeSeriesCount = useAppSelector(selectActiveSeriesCount);
  const figure = useAppSelector(selectPrimaryPlotFigure);
  const caveatVisibility = useAppSelector(selectCaveatVisibility);
  const ui = useAppSelector((state) => state.ui);

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Covid County Dash</h1>
        <p style={styles.subtitle}>Loaded through: {loadedThroughDate ?? "(pending)"}</p>
        <p style={styles.subtitle}>
          Data sources: <a href="https://github.com/nytimes/covid-19-data">NYT county/state time series</a>
          {" "}
          and local population reference.
        </p>
      </header>

      <section style={styles.layoutGrid}>
        <FiltersPanel />
        <PlotFigureCard figure={figure} isLoading={ui.isLoading} lastError={ui.lastError} />
      </section>

      <section style={styles.footerRow}>
        <p style={styles.statusText}>Active series slots: {activeSeriesCount}</p>
      </section>

      <CaveatNotes visibility={caveatVisibility} />
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    fontFamily: "Avenir Next, Segoe UI, sans-serif",
    minHeight: "100vh",
    padding: "1rem",
    background: "linear-gradient(180deg, #f0f6ff 0%, #fffdf8 100%)",
    color: "#1f2f3f"
  },
  header: {
    marginBottom: "1rem"
  },
  title: {
    margin: "0 0 0.35rem",
    fontSize: "2rem"
  },
  subtitle: {
    margin: "0.2rem 0"
  },
  layoutGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    gap: "1rem",
    alignItems: "start"
  },
  footerRow: {
    margin: "0.9rem 0"
  },
  statusText: {
    margin: 0,
    color: "#3d5569"
  }
};
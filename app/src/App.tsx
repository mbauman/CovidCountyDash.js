import type { CSSProperties } from "react";
import { useAppSelector } from "./app/hooks";
import { CaveatNotes } from "./components/CaveatNotes";
import { PlotFigureCard } from "./components/PlotFigureCard";
import { FiltersPanel } from "./features/filters/FiltersPanel";
import {
  selectCaveatVisibility,
  selectLoadedThroughDate,
  selectPrimaryPlotFigure
} from "./selectors";

export function App(): JSX.Element {
  const loadedThroughDate = useAppSelector(selectLoadedThroughDate);
  const figure = useAppSelector(selectPrimaryPlotFigure);
  const caveatVisibility = useAppSelector(selectCaveatVisibility);
  const ui = useAppSelector((state) => state.ui);

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Covid County Dash</h1>
        <p style={styles.subtitle}>
          Visualization of <a href="https://github.com/nytimes/covid-19-data">data</a> from The New York Times,
          based on reports from state and local health agencies.
        </p>
        <p style={styles.loaded}>Loaded data through: {loadedThroughDate ?? "(pending)"}</p>
      </header>

      <FiltersPanel />

      <section style={styles.plotRow}>
        <PlotFigureCard figure={figure} isLoading={ui.isLoading} lastError={ui.lastError} />
      </section>

      <CaveatNotes visibility={caveatVisibility} />
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    fontFamily: "Avenir Next, Segoe UI, sans-serif",
    minHeight: "100vh",
    padding: "1rem 2%",
    background: "linear-gradient(180deg, #f0f6ff 0%, #fffdf8 100%)",
    color: "#1f2f3f"
  },
  header: {
    margin: "0 auto 1rem",
    maxWidth: "70rem",
    textAlign: "center"
  },
  title: {
    margin: "0 0 0.35rem",
    fontSize: "2.1rem"
  },
  subtitle: {
    margin: "0.2rem auto",
    maxWidth: "52rem"
  },
  loaded: {
    margin: "0.35rem 0 0",
    fontWeight: 600
  },
  plotRow: {
    marginTop: "0.9rem"
  },
  footerRow: {
    margin: "0.75rem 0"
  },
  statusText: {
    margin: 0,
    color: "#3d5569"
  }
};
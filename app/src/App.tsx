import { useAppSelector } from "./app/hooks";
import { selectActiveSeriesCount, selectParityModeSummary, selectPrimaryPlotFigure } from "./selectors";

export function App(): JSX.Element {
  const paritySummary = useAppSelector(selectParityModeSummary);
  const activeSeriesCount = useAppSelector(selectActiveSeriesCount);
  const figure = useAppSelector(selectPrimaryPlotFigure);
  const plottedPoints = figure.data[0]?.y?.length ?? 0;

  return (
    <main style={{ fontFamily: "ui-sans-serif, system-ui", padding: "1.5rem" }}>
      <h1>Covid County Dash - Phase 2 In Progress</h1>
      <p>{paritySummary}</p>
      <p>Active series slots: {activeSeriesCount}</p>
      <p>
        Selector-driven transform contracts now feed figure metadata and trace output.
      </p>
      <p>Figure title: {figure.layout.title?.text ?? "(none)"}</p>
      <p>Plotted points: {plottedPoints}</p>
    </main>
  );
}
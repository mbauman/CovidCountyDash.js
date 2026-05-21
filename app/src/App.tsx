import { useAppSelector } from "./app/hooks";
import { selectActiveSeriesCount, selectParityModeSummary } from "./selectors";

export function App(): JSX.Element {
  const paritySummary = useAppSelector(selectParityModeSummary);
  const activeSeriesCount = useAppSelector(selectActiveSeriesCount);

  return (
    <main style={{ fontFamily: "ui-sans-serif, system-ui", padding: "1.5rem" }}>
      <h1>Covid County Dash - Phase 1 Shell</h1>
      <p>{paritySummary}</p>
      <p>Active series slots: {activeSeriesCount}</p>
      <p>
        This shell intentionally includes architecture contracts only. Feature parity logic is deferred to
        Phases 2-4.
      </p>
    </main>
  );
}
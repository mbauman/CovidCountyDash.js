# Phase 4 Callback-to-Event Flow

## Callback Chain Translation

### Central Plot Callback (`theplot.figure`)
- Trigger actions:
  - `filters/setMetricType`
  - `filters/setValueMode`
  - `filters/setRollingDays`
  - `filters/setNormalizeByPopulation`
  - `filters/setUseLogScale`
  - `filters/setSelectionAtIndex`
  - `filters/resetFilters`
  - `ui/requestFigureRefresh` (bootstrap trigger)
- Guard stage:
  - Build row work items only for active row selections.
- Compute stage:
  - Execute async `fetchSeriesContract` per active row.
- Commit stage:
  - Build metadata via `buildPlotMetadata`.
  - Build figure via `toPlotlyFigureFromContracts`.
  - Commit to `ui.figure` only when request id is still latest.

### Dynamic Label + Smoothing Visibility
- `type.value -> values.options` parity is mapped to selector-derived radio labels via `selectValueModeOptions`.
- `values.value -> smoothing_selector.style` parity is mapped to conditional render in `FiltersPanel`.

### State Group Buttons
- `{all,lower49,northeast,midwest,south,west}-n.n_clicks -> state-n.value` parity is mapped to `requestApplyStateGroup`.
- Middleware resolves group membership and commits `setSelectionAtIndex` with deterministic row-local state update.

### Population Window Apply
- `{popslider-n.value, apply-pop-n.n_clicks, county-n.options} -> county-n.value` parity is mapped to `requestApplyPopulationWindow`.
- Middleware filters county options by percentile window using population ranking and commits `setSelectionAtIndex`.

### Progressive Row Reveal
- `{state-n, state-(n-1)} -> scrow-n.style` parity is mapped by `selectRowVisibility`.

### Caveat Notes
- `{county-1..6.value} -> footnote{i}.style` parity is mapped by `selectCaveatVisibility`.

## Deterministic Sequencing Strategy

### Policy
- Last-write-wins for async callback-equivalent figure updates.
- Request token (`requestId`) increments per trigger.
- Stale responses are ignored and logged as `stale` transitions.

### Deterministic Order
1. Dispatch `callbackTransitionStarted`.
2. Execute async compute (`fetchSeriesContract` for active rows).
3. Dispatch `callbackTransitionComputed`.
4. Compare token with `ui.activeRequestId`.
5. Commit with `callbackTransitionCommitted` if current; otherwise `callbackTransitionIgnored`.

## Instrumentation Added
- Transition action stream in `ui` slice:
  - `start`, `compute`, `commit`, `stale`, `error`
- Transition log persisted in `ui.transitionLog` (last 100 events).
- Optional trace hook in callback middleware (`trace` dependency), defaulting to debug logging outside test env.

## Validation Evidence
- Added integration tests for callback-flow sequencing:
  - `app/src/test/phase4-event-flow.test.ts`
- Assertions covered:
  - Stale async response is ignored.
  - Latest request commits figure (last-write-wins).
  - Deterministic stage order for a request is `start -> compute -> commit`.
  - State-group action commits expected row state selection before refresh.
  - Population-window apply action commits expected filtered county selection.
- Full test suite passes (`26` tests).

## Remaining Parity Risks
- The `jsloader` context-menu side-effect callback from Dash is intentionally not ported as-is because native browser context menu behavior differs in React and no matching custom menu is implemented in current UI.
- Data service still uses Phase 2 baseline in-memory data; network transport cancellation is not yet present.
- Client instrumentation is stored in state, but no dedicated parity-debug UI panel/export is implemented yet.

## Ready-for-Phase-5 Checklist
- [x] Explicit trigger/compute/commit callback-equivalent flow in client.
- [x] Deterministic request sequencing with stale-response ignore.
- [x] Transition instrumentation for parity debugging.
- [x] Focused integration tests for ordering and stale-response behavior.
- [x] State-group and population-window callback chains migrated to explicit event actions.
- [ ] Add parity fixture checks against Julia baseline for key filter scenarios.
- [ ] Add visual parity capture comparisons for representative states.
- [ ] Add performance checks for filter-to-render latency under realistic load.

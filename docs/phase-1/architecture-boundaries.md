# Phase 1 Architecture Boundaries

## Intent
This phase creates the app shell and typed contracts only. Logic parity migration is deferred to Phase 2 and UI parity wiring to Phase 3/4.

## Module Map
- app/: store wiring and typed hooks
- domain/: shared core types and domain contracts
- features/: state slices and feature-local logic
- selectors/: derived state readers for presentation
- services/: data loading/transformation boundaries
- plotly/: adapters that convert domain data into Plotly traces/layout
- components/: presentational UI components (to be expanded in Phase 3)

## Dependency Direction
1. domain has no internal app dependencies.
2. features may depend on domain only.
3. selectors may depend on app and features.
4. services may depend on domain and utility modules.
5. plotly adapters may depend on domain/services outputs.
6. components and App may depend on selectors, hooks, and plotly adapters.

## State Shape (Initial)
- filters:
  - metricType: cases | deaths
  - valueMode: values | diff
  - rollingDays: number
  - normalizeByPopulation: boolean
  - useLogScale: boolean
  - selections: array of 6 geography slots
- ui:
  - isLoading: boolean
  - lastError: string | null

## Constraints from Phase 0
- Preserve six row selection model.
- Preserve default behavior parity:
  - metricType default cases
  - valueMode default diff
  - rollingDays default 7
  - normalizeByPopulation default true
  - useLogScale default false
- Keep a dedicated place for caveat footnote logic in later phases.

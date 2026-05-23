## Plan: Julia Dash to JS Dashboard Migration

Rebuild the existing Julia Plotly Dash dashboard as a modern React + TypeScript client-side dashboard using Plotly.js, with exact feature parity first and architecture optimized for maintainability. The strategy is to inventory and map all current Julia callbacks/components, migrate data transforms to typed client modules, and validate parity with side-by-side output checks before cutover.

**Steps**
1. Phase 0 - Migration Intake and Baseline
1. Collect the Julia source from the separate local folder and document app entry points, page structure, callback graph, component inventory, data inputs, and generated outputs.
1. Produce a parity matrix listing every current feature (controls, charts, tables, exports, routing, edge-case behaviors) and mark each as must-have for release 1.
1. Capture baseline evidence from Julia: screenshots, representative datasets, and expected metric outputs for fixed filter scenarios. This baseline will be the acceptance oracle for parity checks.
1. Important: Use `julia +1.5` to run the existing app

1. Phase 1 - Target Architecture and Scaffolding (depends on Phase 0)
1. Initialize React + TypeScript app shell with strict typing, linting, formatting, and testing harness.
1. Define architecture boundaries: UI components, typed domain models, data services, state store, selectors, transform utilities, and visualization adapters.
1. Implement initial global state design for filters, fetched data, derived metrics, and UI state; document state ownership and update flow.
1. Establish environment/config pattern for local development and future deployment.

1. Phase 2 - Data Layer and Domain Logic Migration (depends on Phase 1, parallelizable by feature area)
1. Port Julia data transformation logic into TypeScript utilities with one-to-one test cases against Julia baseline fixtures.
1. Implement client-side data loading and caching strategy tuned for browser execution and predictable invalidation.
1. Define typed validation for incoming data shape and explicit error handling paths for partial/invalid datasets.
1. Build selectors/derived-computation modules so visualization components remain presentation-focused.

1. Phase 3 - Layout and Component Migration (depends on Phase 1, parallel with Phase 2 once contracts are stable)
1. Recreate app layout and navigation structure to match Julia behavior and information hierarchy.
1. Migrate all input controls (dropdowns, date ranges, toggles, etc.) with equivalent defaults, constraints, and dependency behavior.
1. Implement chart and table components with Plotly.js and map each Julia visualization to a typed adapter for trace/layout generation.
1. Port UX behaviors: loading states, empty/error states, reset behavior, cross-filter interactions, and accessibility semantics.

1. Phase 4 - Callback-to-Event Flow Conversion (depends on Phases 2 and 3)
1. Translate each Julia callback chain into explicit client event/state flow, preserving dependency order and side effects.
1. Resolve potential race conditions in async data/filter updates using deterministic update sequencing.
1. Add instrumentation for state transitions and callback-equivalent actions to simplify parity debugging.

1. Phase 5 - Parity Validation and Hardening (depends on Phase 4)
1. Execute automated parity tests comparing JS outputs against baseline fixtures for key metric/filter combinations.
1. Run visual diff checks for high-value charts/tables against captured Julia screenshots for representative states.
1. Add performance checks for filter-to-render latency and memory usage under realistic data volume.
1. Close parity gaps, then stabilize with regression tests for previously fixed mismatches.

1. Phase 6 - Cutover Preparation and Release (depends on Phase 5)
1. Prepare deployment configuration for static hosting and any required data endpoint integration.
1. Run UAT with exact-parity checklist and signoff criteria tied to the parity matrix.
1. Execute cutover plan with rollback option and post-release monitoring for correctness/performance.

**Relevant files**
- Julia source folder in separate local path - primary migration source of layouts, callbacks, and transform logic.
- New frontend app source tree - app shell, components, state modules, data services, and tests.
- Parity artifacts folder - baseline screenshots, fixture inputs, expected outputs, and parity reports.

**Verification**
1. Build and type-check pass with zero type errors.
1. Automated unit tests for transform logic pass against Julia-derived expected outputs.
1. Integration tests validate control interaction to state update to chart/table output flow for core scenarios.
1. Parity suite passes for all must-have features in the parity matrix.
1. Manual side-by-side review confirms output/behavior equivalence for agreed acceptance scenarios.
1. Performance target agreed during implementation is met for representative dataset sizes.

**Decisions**
- First release target is exact feature parity with the Julia dashboard before redesign/enhancements.
- Data processing is primarily client-side in browser for initial migration.
- Baseline stack is React + TypeScript + Plotly.js.
- Primary optimization target is maintainability and clean architecture.
- Included scope: migration strategy, parity-first implementation path, testing and cutover readiness.
- Excluded from release 1: major UX redesign, non-essential new features, and backend-first re-architecture unless parity blockers force it.

**Further Considerations**
1. Source intake format recommendation: provide the Julia project as a local folder snapshot plus run instructions and sample data.
2. Parity strictness recommendation: agree early whether visual parity means exact pixel match or functionally equivalent rendering.
3. Data-size threshold recommendation: define a representative maximum browser dataset size to avoid late performance surprises.
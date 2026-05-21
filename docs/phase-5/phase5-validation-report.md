# Phase 5 Validation and Hardening Report

Date: 2026-05-20
Scope: Release-1 parity validation and hardening against Phase 0 baseline artifacts.

## 1. Phase 5 Deliverables
- Added dedicated Phase 5 parity/hardening suite: `app/src/test/phase5-parity-hardening.test.ts`.
- Added real-data parity oracle suite: `app/src/test/phase5-real-data-parity.test.ts`.
- Added parity assertions for:
  - default placeholder behavior (Scenario A contract)
  - deaths/cumulative/log/absolute mode semantics (Scenario C mode contract)
  - six-row selection fan-out producing six traces
  - caveat visibility mapping for known caveat FIPS markers
- Replaced seed-only callback/selector data path with real ingest snapshot loading:
  - NYT states + counties (2020-2022) CSV ingest
  - local parity-consistent `pop2019.csv` metadata from Julia project
  - Julia-equivalent missing-FIPS repair and label derivation for state/county traces
- Added hardening safeguards:
  - transition-log retention bound (100 events) memory guard
  - filter-to-render latency measurement test across 10 six-row interaction trials
- Closed strict TypeScript build blockers uncovered during release-readiness validation:
  - middleware typing and strict-index safety fixes
  - Node/Vite/Vitest config typing compatibility fixes
- Produced local verification evidence for `test`, `typecheck`, and `build`.

## 2. Parity Validation Matrix Coverage

| Parity Item (Phase 0) | Validation Type | Evidence | Status |
|---|---|---|---|
| Type radio (cases/deaths) | Automated | `phase3-layout.test.tsx`, `phase5-parity-hardening.test.ts` | Pass |
| Values radio (daily/cumulative) | Automated | `phase3-layout.test.tsx`, `phase5-parity-hardening.test.ts` | Pass |
| Rolling control visibility | Automated | `phase3-layout.test.tsx` | Pass |
| Normalize/log toggles and axis/title semantics | Automated | `phase5-parity-hardening.test.ts` | Pass |
| Progressive row reveal | Automated | `phase3-layout.test.tsx` | Pass |
| Up to 6 selection rows active | Automated | `phase5-parity-hardening.test.ts` | Pass |
| Callback order and stale response ignore | Automated | `phase4-event-flow.test.ts` | Pass |
| Empty selection placeholder NaN line | Automated | `plot-contracts.test.ts`, `phase5-parity-hardening.test.ts` | Pass |
| Caveat visibility rules | Automated | `phase5-parity-hardening.test.ts` | Pass (contract-level) |
| Baseline scenario A figure signature | Automated | `phase5-parity-hardening.test.ts` | Pass |
| Baseline scenario B exact numeric series parity | Automated | `phase5-real-data-parity.test.ts` | Pass |
| Baseline scenario C NYC cumulative deaths exact numeric parity | Automated | `phase5-real-data-parity.test.ts` | Pass |
| Right-click Dash jsloader side-effect parity | Automated/manual | `phase3-layout.test.tsx`, right-click menu implementation in `FiltersPanel.tsx` | Pass (functional parity) |

## 3. Visual and Performance Validation Evidence

### Visual parity evidence
- Deterministic figure-signature assertions were added as functional visual guards in `phase5-parity-hardening.test.ts`:
  - title
  - y-axis type/suffix
  - trace count
  - placeholder NaN behavior
- This project still does not include pixel screenshot diff baselines because Phase 0 screenshot capture was skipped by request (`docs/phase-0/baseline-evidence.md`).

### Performance and memory evidence
- Filter-to-render latency test executes six-row interaction bursts over 10 trials and asserts p95 < 250 ms in test runtime.
- Memory behavior safeguard validates transition log cap retention at 100 entries.

### Command evidence
- `npm run test`
  - Result: pass
  - Files: 7 passed
  - Tests: 34 passed
- `npm run typecheck`
  - Result: pass (`tsc --noEmit`)
- `npm run build`
  - Result: pass
  - Output: Vite production bundle built successfully (`dist/assets/index-C8hJe_Kt.js` ~193.22 kB, gzip ~63.44 kB)

## 4. Parity Gaps Found and Fixes Applied

### Gap A: Release-readiness TypeScript build failures
- Symptom: `npm run build` failed with strict typing and config errors.
- Root causes:
  - listener middleware return type mismatch
  - strict indexed access assumptions in selectors/transforms/tests
  - Node tsconfig target/lib missing for Vitest/Vite types
  - Vite config import source for test config typing
- Fixes:
  - `app/src/app/callbackFlow.ts`: inferred middleware instance return; removed unused callback param
  - `app/src/features/ui/uiSlice.ts`: corrected `isLoading` type to `boolean`
  - `app/src/selectors/index.ts`: hardened date extent null checks
  - `app/src/services/transforms.ts`: guarded indexed numeric subtraction
  - `app/src/test/phase4-event-flow.test.ts`: explicit resolve guards
  - `app/src/test/plot-contracts.test.ts`: strict-safe trace references
  - `app/vite.config.ts`: switched to `vitest/config` defineConfig
  - `app/tsconfig.node.json`: set `target`/`lib` for Node-side config typing
- Regression safeguard:
  - full test/typecheck/build run now clean.

### Gap B: Full Julia numeric parity still blocked by data source scope
- Symptom: baseline scenarios B/C required historical NY/NYC series values unavailable from seed fixture path.
- Root cause: seed-only `PHASE2_BASELINE_RECORDS` path previously powered runtime callbacks/selectors.
- Fixes:
  - implemented cached real-data snapshot loading in `app/src/services/dataService.ts`
  - rewired callback flow to use loaded snapshot records/population and Julia-style location labels
  - rewired selectors/options/date range to use loaded snapshot metadata
  - added oracle tests asserting baseline B/C numerical outputs
- Status: closed.

## 5. Regression Safeguards Added
- New test suite: `app/src/test/phase5-parity-hardening.test.ts`.
- Existing suites continue to guard previous phases:
  - transforms contracts: `app/src/test/transforms.test.ts`
  - selector/plot contracts: `app/src/test/plot-contracts.test.ts`
  - layout/control parity: `app/src/test/phase3-layout.test.tsx`
  - callback sequencing and stale-response handling: `app/src/test/phase4-event-flow.test.ts`

## 6. Remaining Release Risks
- Risk: No pixel-level screenshot diff workflow (owner: QA/parity).
  - Impact: only functional visual parity currently asserted.
  - Next step: capture canonical screenshot baselines and add image diff automation.

## 7. Ready-for-Phase-6 Checklist
- [x] Automated parity/regression suites pass locally.
- [x] Deterministic callback sequencing remains intact.
- [x] Performance and memory safeguards are executed and recorded.
- [x] Build/typecheck/test evidence captured.
- [x] Full numeric parity versus Julia baseline scenarios B/C.
- [x] Right-click context-menu parity disposition finalized (implemented with custom context menus and tested).
- [ ] Pixel-level visual diff baseline and thresholds established.

Phase 5 conclusion: **Partially ready for Phase 6**. Numeric and interaction parity targets are complete and verified; remaining signoff gap is pixel-level visual diff workflow.

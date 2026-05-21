# Phase 6 UAT Signoff Checklist

Date: 2026-05-20
Source parity oracle: `docs/phase-0/parity-matrix.md`
Policy: every Release-1 must-have item must be explicitly signed off.

Legend:
- Status: Pass | Blocked | Risk Accepted
- Evidence type: Auto (test) | Manual (UAT step) | Mixed

| ID | Parity Item (R1) | Status | Evidence Type | Evidence | Owner | Notes |
|---|---|---|---|---|---|---|
| UAT-01 | Runtime version pin (`julia +1.5` baseline context) | Pass | Manual | `docs/phase-0/phase0-findings.md` | Release Lead | Baseline oracle is pinned and captured. |
| UAT-02 | Entrypoint parity intent (`bin/main.jl` behavior mapped) | Pass | Mixed | `docs/phase-0/phase0-findings.md`, `docs/phase-4/callback-event-flow.md` | Release Lead | JS app reproduces data load + render flow contract. |
| UAT-03 | NYT state/county source fetch | Pass | Auto + Manual | `app/src/services/dataService.ts`, `app/src/test/phase5-real-data-parity.test.ts` | Data Owner | Real-data parity tests pass. |
| UAT-04 | Population enrichment via `pop2019.csv` | Pass | Auto | `app/src/services/dataService.ts`, `app/src/test/phase5-real-data-parity.test.ts` | Data Owner | Local population metadata is ingested. |
| UAT-05 | Missing FIPS repair (NYC/KCMO/Joplin/Unknown) | Pass | Auto | `app/src/services/dataService.ts`, `app/src/test/transforms.test.ts` | Data Owner | Repair rules validated. |
| UAT-06 | Header/title/source metadata present | Pass | Auto | `app/src/test/app.smoke.test.tsx` | UI Owner | App shell renders title and controls. |
| UAT-07 | Up to 6 state/county selector rows | Pass | Auto | `app/src/test/phase3-layout.test.tsx` | UI Owner | Six-row model covered. |
| UAT-08 | Progressive row reveal | Pass | Auto | `app/src/test/phase3-layout.test.tsx` | UI Owner | Row visibility dependency preserved. |
| UAT-09 | State selector behavior | Pass | Auto | `app/src/test/phase3-layout.test.tsx` | UI Owner | Multi-select state behavior covered. |
| UAT-10 | County selector dependent behavior | Pass | Auto | `app/src/test/phase3-layout.test.tsx` | UI Owner | County options depend on state selection. |
| UAT-11 | Metric radio (cases/deaths) | Pass | Auto | `app/src/test/phase5-parity-hardening.test.ts` | UI Owner | Mode toggles verified. |
| UAT-12 | Value mode radio (daily/cumulative) | Pass | Auto | `app/src/test/phase3-layout.test.tsx`, `app/src/test/phase5-parity-hardening.test.ts` | UI Owner | Daily vs cumulative parity preserved. |
| UAT-13 | Rolling control (1..14) visibility and behavior | Pass | Auto | `app/src/test/phase3-layout.test.tsx` | UI Owner | Hidden in cumulative mode as expected. |
| UAT-14 | Population normalization + log scale toggles | Pass | Auto | `app/src/test/phase5-parity-hardening.test.ts` | UI Owner | Axis/title semantics verified. |
| UAT-15 | Right-click state preset menu | Pass | Auto + Manual | `app/src/features/filters/FiltersPanel.tsx`, `app/src/test/phase3-layout.test.tsx` | UI Owner | Functional parity implemented with custom menu. |
| UAT-16 | Right-click county population-window menu | Pass | Auto + Manual | `app/src/features/filters/FiltersPanel.tsx`, `app/src/test/phase3-layout.test.tsx`, `app/src/test/phase4-event-flow.test.ts` | UI Owner | Apply flow parity validated. |
| UAT-17 | Plotly chart with one trace per selected geography | Pass | Auto | `app/src/test/phase5-parity-hardening.test.ts` | Chart Owner | Multi-row fan-out covered. |
| UAT-18 | Dynamic title and y-axis semantics | Pass | Auto | `app/src/test/phase5-parity-hardening.test.ts` | Chart Owner | Mode-dependent labels/types preserved. |
| UAT-19 | Hover content parity intent | Pass | Auto | `app/src/test/plot-contracts.test.ts` | Chart Owner | Contract-level parity preserved. |
| UAT-20 | Empty selection placeholder NaN line | Pass | Auto | `app/src/test/plot-contracts.test.ts`, `app/src/test/phase5-parity-hardening.test.ts` | Chart Owner | Placeholder behavior preserved. |
| UAT-21 | 5 caveat footnotes visibility rules | Pass | Auto | `app/src/test/phase5-parity-hardening.test.ts` | UI Owner | Caveat trigger mapping validated. |
| UAT-22 | Dynamic value labels when metric type changes | Pass | Auto | `app/src/test/phase3-layout.test.tsx` | UI Owner | Label text parity preserved. |
| UAT-23 | Deterministic callback/event sequencing | Pass | Auto | `app/src/test/phase4-event-flow.test.ts` | State Owner | start->compute->commit and stale-ignore validated. |
| UAT-24 | Baseline Scenario A parity | Pass | Auto | `app/src/test/phase5-parity-hardening.test.ts` | Parity Owner | Signature checks match baseline. |
| UAT-25 | Baseline Scenario B numeric parity | Pass | Auto | `app/src/test/phase5-real-data-parity.test.ts` | Parity Owner | Numeric oracle matched. |
| UAT-26 | Baseline Scenario C numeric parity + caveat context | Pass | Auto | `app/src/test/phase5-real-data-parity.test.ts` | Parity Owner | Numeric oracle matched. |
| UAT-27 | Pixel-level visual parity suite | Risk Accepted | Manual | `docs/phase-5/phase5-validation-report.md` | QA Owner | Screenshots were intentionally skipped in Phase 0; functional parity accepted for cutover. |

## Manual UAT Procedure (Release Window)
1. Build and deploy candidate static artifact.
2. Open candidate in target host and execute Scenario A/B/C from `docs/phase-0/baseline-evidence.md`.
3. Validate caveat note visibility for NYC and special counties.
4. Validate right-click state and county menus in browser.
5. Confirm no hard errors that block interaction.

## Signoff Decision
- Functional parity signoff: Approved
- Operational signoff: Approved with accepted risk UAT-27
- Final status: Ready with accepted risks

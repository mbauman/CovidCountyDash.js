# Phase 6 Post-Release Monitoring

Date: 2026-05-20
Goal: detect correctness, data freshness, and performance regressions quickly after cutover.

## 1. Monitoring Windows
- Hypercare: first 24 hours after cutover.
- Stabilization: days 2-7.
- Steady state: ongoing daily checks.

## 2. Correctness Monitors
- Baseline scenario checks (A/B/C) once per release and at least daily in hypercare.
- High-value interaction checks:
  - six-row selection fan-out
  - right-click state/county actions
  - caveat note visibility
- Alert condition:
  - baseline numeric mismatch beyond expected tolerance.
  - missing caveat visibility for known trigger counties.

## 3. Data Freshness and Availability
- Endpoint health checks:
  - `${VITE_NYT_RAW_BASE}/us-states.csv`
  - `${VITE_NYT_RAW_BASE}/us-counties-2020.csv`
  - `${VITE_NYT_RAW_BASE}/us-counties-2021.csv`
  - `${VITE_NYT_RAW_BASE}/us-counties-2022.csv`
- Freshness check:
  - track latest date in rendered series and compare to expected source currency.
- Alert condition:
  - HTTP failures or stale date not advancing per source cadence.

## 4. Performance Monitors
- Filter-to-render latency target:
  - p95 < 250 ms under representative six-row interaction load.
- App startup/load target:
  - first meaningful render under agreed host SLO.
- Error budget signal:
  - unhandled runtime errors and failed fetch rates.

## 5. Operational Responses
- Correctness alert:
  - Severity: High
  - Action: execute baseline repro, decide rollback within 15 minutes.
- Data freshness alert:
  - Severity: Medium/High based on duration
  - Action: validate endpoint health, switch/mirror endpoint if needed.
- Performance alert:
  - Severity: Medium
  - Action: capture traces, compare against Phase 5 benchmark, patch if sustained.

## 6. Evidence Logging
- Record daily monitoring outcomes in release log.
- Attach failing scenario payloads, screenshots, and console/network traces.
- Track all incidents back to parity matrix IDs where applicable.

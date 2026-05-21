# Baseline Evidence Captured

Capture date: 2026-05-20
Source app: http://localhost:8080
UI loaded-date text observed: "Loaded data through March 23"

Screenshots: skipped by request.

## Fixed Scenarios and Output Oracle

### Scenario A: Default initial state
- Filters:
  - No state/county selected
  - Type: cases
  - Value mode: daily
  - Roll: 7
  - popnorm: on
  - logy: off
- Figure snapshot:
  - title: `Daily Confirmed Cases`
  - y-axis type: `linear`
  - y-axis ticksuffix: `%`
  - trace count: 1
  - first trace name: empty
  - x length: 2
  - y values: `[null, null]` (placeholder behavior)

### Scenario B: State-level selection
- Filters:
  - state-1 = New York
  - county-1 = none
  - Type: cases
  - Value mode: daily
  - Roll: 7
  - popnorm: on
  - logy: off
- Figure snapshot:
  - title: `Daily Confirmed Cases`
  - legend name: `NY`
  - points: 1118
  - first date: `2020-03-01`
  - last date: `2023-03-23`
  - last y: `0.0053490023`
  - max y: `0.38132718`
  - min y: `0`
  - y-axis type: `linear`
  - y-axis ticksuffix: `%`

### Scenario C: County-level caveat and option-mode check
- Filters:
  - state-1 = New York
  - county-1 = New York City (footnote 1 trigger)
  - Type: deaths
  - Value mode: cumulative
  - popnorm: off
  - logy: on
- Figure snapshot:
  - title: `Total Confirmed Deaths`
  - legend name: `New York City1, NY` (rendered with footnote marker in UI)
  - points: 1036
  - first date: `2020-03-01`
  - last date: `2022-12-31`
  - last y: `43935`
  - max y: `43935`
  - min y: `0`
  - y-axis type: `log`
  - y-axis ticksuffix: empty
  - footnote visibility: footnote 1 visible

## Additional Runtime Observation
- On initial page load, browser console reports a JS error:
  - `TypeError: Cannot read properties of null (reading 'addEventListener')`
- App still becomes interactive and produces plot updates.

## Repro Notes
- Runtime check: `julia +1.5 --version` -> `julia version 1.5.4`
- Listener check: Julia process active on `*:8080` during capture.

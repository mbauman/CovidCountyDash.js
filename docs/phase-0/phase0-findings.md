# Phase 0 Findings - CovidCountyDash

## Scope and Runtime Baseline
- Julia source analyzed at `~/Projects/CovidCountyDash.jl`.
- Entrypoint is `bin/main.jl`, which calls `download_and_preprocess()`, `create_app(df)`, and `run_server(...)`.
- Runtime requirement validated: `julia +1.5 --version` returns `1.5.4`.
- Live app baseline validated at `http://localhost:8080` with an active Julia listener on TCP 8080.

## Source Inventory
- `bin/main.jl`: runtime bootstrap and server startup.
- `src/CovidCountyDash.jl`: full app logic (data prep, transforms, layout, callbacks).
- `data/pop2019.csv`: population lookup used for normalization and county/state metadata.
- `data/getpop.jl`: generation logic for population data and geography caveat adjustments.
- `src/covid.jl`: legacy plotting helpers (not part of active Dash callback flow).

## App Structure and Components
- Header and metadata: title, NYT data/source links, and loaded-date text.
- Selection grid: up to 6 state/county selector rows.
- Options panel:
  - Metric type: cases/deaths.
  - Value mode: cumulative/daily.
  - Rolling-day input (1..14), visible only in daily mode.
  - Flags: normalize by population, logarithmic y-axis.
- Main visualization: single Plotly graph (`theplot`) with 1..N line traces.
- Conditional caveat notes (5 footnotes) driven by selected counties.
- Right-click menus:
  - State presets: all, lower49, northeast, midwest, south, west.
  - County population-percentile range filter with apply action.

## Data Inputs and Transform Pipeline
- Remote epidemiology source: NYT `us-states.csv` and `us-counties-{2020,2021,2022}.csv`.
- Local geography/population source: `data/pop2019.csv`.
- FIPS correction/exception handling:
  - NYC aggregate FIPS 36998.
  - Kansas City aggregate FIPS 29998.
  - Joplin aggregate FIPS 29997.
  - Unknown county rows mapped to synthetic county FIPS `state*1000 + 999`.
- Transform pipeline:
  1. Fetch and concatenate state+county data.
  2. Normalize/repair FIPS.
  3. Sort by `(fips, date)`.
  4. Subset by selected geography.
  5. Aggregate cases/deaths by date.
  6. Compute cumulative or daily series (with optional rolling mean).
  7. Compute optional population-normalized percent series.
  8. Render Plotly traces with dynamic axis/hover metadata.

## Callback and Event Flow Summary
- See `callback-graph.md` for full dependency map.
- Key behavior chain:
  - State changes drive county options.
  - All filter controls plus all row selections drive one central figure callback.
  - Type selection mutates value radio labels.
  - Value mode toggles smoothing-input visibility.
  - County selections toggle caveat notes.

## Observed Runtime Risk
- On initial load, browser console reports:
  - `TypeError: Cannot read properties of null (reading 'addEventListener')`
- The UI still becomes interactive, but this suggests a race in the JS listener bootstrap callback and should be tracked as a migration parity edge case.

## References (Source Lines)
- `~/Projects/CovidCountyDash.jl/bin/main.jl`: 1-11
- `~/Projects/CovidCountyDash.jl/src/CovidCountyDash.jl`: 10-160 (data + plotting), 161-335 (layout + callbacks)
- `~/Projects/CovidCountyDash.jl/data/getpop.jl`: 14-43 (NYC/KCMO/Joplin caveats), 84-87 (Unknown county rows)

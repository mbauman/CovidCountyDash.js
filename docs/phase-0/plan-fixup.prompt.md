# Plan: Fix plots + controls in CovidCountyDash.js

## Context
- React/TS app with Redux, react-plotly.js installed
- All data/state/selectors logic complete and tested
- Two visible problems: (1) plots not showing, (2) controls look terrible

## Critical Issues Found

### Issue 1: Plot not showing
- `app/src/components/PlotFigureCard.tsx` is a **stub** — shows text metadata only (trace count, point count, y-axis title/scale)
- `react-plotly.js` is installed (`package.json`) but NOT imported or used anywhere
- `selectPrimaryPlotFigure` selector produces a full `{data, layout}` figure — it's just never rendered

### Issue 2: Controls aren't mimicking the Julia original at all
- `app/src/features/filters/FiltersPanel.tsx` uses bare HTML `<select multiple>` for state/county — these look like ugly listboxes
- **Duplicate population window controls**: the population min/max inputs appear BOTH in the context menu (right-click) AND as an always-visible fieldset at the bottom of every SelectionRow — this is redundant and confusing
- Julia original uses Dash `dcc_dropdown` (styled, searchable with chips) for state/county
- Rolling days is a number input — this matches the Julia original, so it's fine
- react-select is NOT installed yet

## Plan

### Step 1: Render actual Plotly chart in PlotFigureCard.tsx
Primary approach: import Plot from `react-plotly.js` (already installed).
Fallback if ESM/CJS issue in Vite: use `plotly.js-dist-min` via useRef + useEffect + `Plotly.react()`.

Replace the `<div data-testid="plotly-figure-shell">` text stub with `<Plot data={figure.data} layout={figure.layout} style={{width:'100%'}} useResizeHandler />`.

Keep loading/error states, keep outer `<section>` wrapper.

### Step 2: Vite config adjustment if needed
If react-plotly.js has CommonJS issues with Vite, add `optimizeDeps.include` and `build.commonjsOptions` to `vite.config.ts`.

### Step 3: Fix duplicate population window in FiltersPanel (minor, still terrible)
The population window appears twice per SelectionRow — inside the right-click context menu AND as an always-visible fieldset. Remove the always-visible fieldset duplicate (keep only context menu version). This is the most egregious "terrible controls" issue that can be fixed without redesigning the dropdowns.

### Files to modify
- `app/src/components/PlotFigureCard.tsx` — replace stub with react-plotly.js render
- `app/vite.config.ts` — possibly add CJS interop config
- `app/src/features/filters/FiltersPanel.tsx` — remove duplicate population window fieldset


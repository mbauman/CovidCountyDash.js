# CovidCountyDash.js

CovidCountyDash.js is a React + TypeScript migration of the original Julia Dash Covid County dashboard.

## Goals
- Preserve feature parity with the Julia dashboard.
- Keep data transforms and callback/event behavior deterministic and testable.
- Ship as a static-hosted web app with clear cutover and rollback procedures.

## Tech Stack
- React 18
- TypeScript 5
- Vite 5
- Redux Toolkit
- Plotly (`react-plotly.js`, `plotly.js-dist-min`)
- Vitest + Testing Library

## Data Sources
At runtime, the app loads:
- A local static NYT snapshot (`app/public/data/nyt-snapshot.json.gz`) by default.
- NYT state/county time-series CSV data as fallback (or primary if configured).
- Local population reference (`app/src/data/pop2019.csv`).

The NYT base URL is configurable through `VITE_NYT_RAW_BASE` and defaults to:
- `https://raw.githubusercontent.com/nytimes/covid-19-data/master`

To (re)build the local static snapshot:
```bash
cd app
npm run data:snapshot
```

This writes:
- `app/public/data/nyt-snapshot.json.gz`

Optional (for debugging), also emit plain JSON:
```bash
cd app
WRITE_PLAIN_JSON=1 npm run data:snapshot
```

Using the static snapshot avoids multiple first-load network requests and expensive CSV parsing in the browser.

## Getting Started
Prerequisites:
- Node.js 20+ and npm

Install and run:
```bash
cd app
npm install
npm run dev
```

## Environment Variables
Use `app/.env.example` as a template.

- `VITE_APP_TITLE`: app title shown in UI.
- `VITE_NYT_RAW_BASE`: optional override for NYT data endpoint/mirror.
- `VITE_PREFER_STATIC_SNAPSHOT`: default `true`; load local static snapshot first.
- `VITE_STATIC_SNAPSHOT_URL`: default `/data/nyt-snapshot.json.gz`.
- `VITE_ALLOW_REMOTE_FALLBACK`: default `true`; if static snapshot is unavailable, fallback to NYT CSV source.

## Available Scripts
Run inside `app/`:

- `npm run dev`: start local dev server.
- `npm run test`: run test suite.
- `npm run typecheck`: strict TypeScript checks.
- `npm run build`: production build to `app/dist/`.
- `npm run data:snapshot`: fetch NYT data and generate compressed static snapshot artifacts.
- `npm run preview`: preview production build locally.
- `npm run lint`: lint source files.

## Testing and Parity
Key test suites are in `app/src/test/` and cover:
- transform correctness,
- plot contracts and placeholder behavior,
- layout/control parity,
- deterministic callback/event flow,
- hardening/performance checks,
- real-data numeric parity for baseline scenarios.

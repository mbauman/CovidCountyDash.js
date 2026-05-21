# Phase 6 Deployment Configuration

Date: 2026-05-20
Target: static-hosted React + TypeScript dashboard
Status: Ready for cutover with accepted risks

## 1. Build and Artifact Contract
- Working directory: `app/`
- Node runtime: Node 20+ (recommend latest active LTS)
- Install: `npm install`
- Validation gate:
  - `npm run test`
  - `npm run typecheck`
  - `npm run build`
- Deployable artifact: `app/dist/`
- Entrypoint: `app/dist/index.html`

## 2. Static Hosting Contract
- Hosting model: static site deployment of `app/dist/`.
- Required behavior:
  - Serve `index.html` and JS/CSS assets over HTTPS.
  - Add SPA fallback rewrite to `index.html` for unknown routes.
  - Enable gzip/brotli where host supports it.
- Cache policy:
  - `index.html`: `no-cache` or short max-age.
  - Hashed assets under `assets/`: long cache (`max-age=31536000, immutable`).

## 3. Runtime Environment Contract
- Required env vars:
  - `VITE_APP_TITLE` (display title).
- Optional env vars:
  - `VITE_NYT_RAW_BASE` (override for data endpoint integration).
  - Default: `https://raw.githubusercontent.com/nytimes/covid-19-data/master`.
- Example env file: `app/.env.example`.

## 4. Data Endpoint Integration
- Default source behavior:
  - App fetches:
    - `{VITE_NYT_RAW_BASE}/us-states.csv`
    - `{VITE_NYT_RAW_BASE}/us-counties-2020.csv`
    - `{VITE_NYT_RAW_BASE}/us-counties-2021.csv`
    - `{VITE_NYT_RAW_BASE}/us-counties-2022.csv`
  - Population lookup uses bundled local `app/src/data/pop2019.csv`.
- If production policy disallows GitHub raw access:
  - Mirror these CSV files to an approved internal endpoint.
  - Set `VITE_NYT_RAW_BASE` at build/deploy time.

## 5. Release Prerequisites
- Phase 0 baseline artifacts present:
  - `docs/phase-0/parity-matrix.md`
  - `docs/phase-0/baseline-evidence.md`
- Phase 4 callback flow handoff present:
  - `docs/phase-4/callback-event-flow.md`
- Phase 5 validation handoff present:
  - `docs/phase-5/phase5-validation-report.md`
- Local release preflight evidence (2026-05-20):
  - tests: 35 passed
  - typecheck: pass
  - build: pass (production bundle generated)

## 6. Deployment Steps (Generic Static Host)
1. `cd app`
2. `npm ci`
3. `npm run test && npm run typecheck && npm run build`
4. Upload `dist/` to static host.
5. Apply SPA fallback rewrite to `index.html`.
6. Apply cache headers per section 2.
7. Smoke-check app load and first figure render.

## 7. Hard Stop Conditions
- Any failing parity gate in UAT checklist.
- Any failure to fetch required data CSVs.
- Any stale-response ordering regression versus Phase 4 behavior.

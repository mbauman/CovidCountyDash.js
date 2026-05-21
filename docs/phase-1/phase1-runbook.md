# Phase 1 Runbook

## What Was Created
- React + TypeScript app shell in app/
- Vite config, strict TypeScript configs, ESLint, Prettier, Vitest setup
- Redux Toolkit store with initial filters/ui slices
- Typed selectors and service/plotly adapter contracts
- Architecture boundary documentation

## Local Setup (Required)
Node.js and npm are not currently installed on this machine, so dependency install and command validation are pending.

After installing Node 20+:
1. cd app
2. npm install
3. npm run dev
4. npm run typecheck
5. npm run test
6. npm run lint

## Phase 2 Ready Checklist
- package install succeeds without lockfile conflicts
- dev server starts and renders Phase 1 shell
- typecheck passes under strict settings
- test harness runs in CI/headless mode
- lint and format scripts run clean
- confirmed mapping from docs/phase-0/parity-matrix.md into Phase 2 transform test backlog

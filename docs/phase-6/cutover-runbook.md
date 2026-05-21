# Phase 6 Cutover Runbook

Date: 2026-05-20
Release type: parity-first production cutover to static-hosted JS dashboard

## 1. Roles
- Release Lead: owns go/no-go and timeline checkpoints.
- App Operator: runs build/deploy and smoke checks.
- QA/Parity Owner: executes UAT matrix and records outcomes.
- Incident Lead: coordinates rollback if trigger conditions hit.

## 2. T-24h Preflight Gates
1. Confirm baseline and handoff artifacts exist and are unchanged:
   - `docs/phase-0/*`
   - `docs/phase-4/callback-event-flow.md`
   - `docs/phase-5/phase5-validation-report.md`
2. Run release preflight from `app/`:
   - `npm ci`
   - `npm run test`
   - `npm run typecheck`
   - `npm run build`
3. Confirm `app/dist/` generated without errors.
4. Confirm environment config values:
   - `VITE_APP_TITLE`
   - optional `VITE_NYT_RAW_BASE`
5. Confirm rollback package from previous stable release is available.

## 3. T-60m Release Window Checklist
1. Freeze non-release merges.
2. Announce release window and escalation channel.
3. Deploy candidate `dist/` artifact to staging target URL.
4. Execute UAT checklist (`docs/phase-6/uat-signoff-checklist.md`) on staging.
5. Go/no-go gate:
   - Go only if all Pass + accepted risks are explicitly acknowledged.

## 4. Production Cutover Steps
1. Deploy approved `dist/` bundle to production static host.
2. Validate host config:
   - SPA fallback rewrite active.
   - cache headers applied.
3. Run smoke checks immediately after deploy:
   - app loads
   - initial placeholder figure renders
   - Scenario B numeric signature
   - Scenario C numeric signature + caveat visibility
   - right-click menus interact correctly
4. Mark cutover complete when all smoke checks pass.

## 5. Validation Checkpoints
- Checkpoint C1 (build): all preflight commands pass.
- Checkpoint C2 (staging parity): UAT table signed.
- Checkpoint C3 (production smoke): baseline scenarios validated.
- Checkpoint C4 (stability): 30-minute monitoring burn-in with no Sev1/Sev2 issues.

## 6. Go/No-Go Criteria
Go if all are true:
- No failing test/typecheck/build gates.
- UAT must-have parity items have Pass or explicit accepted risk signoff.
- Data endpoint access is healthy.
- Rollback package and operator are ready.

No-Go if any are true:
- Any must-have parity item is Blocked.
- Data fetch path fails in target environment.
- Deterministic callback flow regression is observed.
- Release team cannot execute rollback in under 15 minutes.

## 7. Communication Checklist
- Start-of-window announcement.
- Go/no-go decision announcement.
- Cutover complete announcement.
- If rollback: immediate incident announcement and ETA for follow-up.

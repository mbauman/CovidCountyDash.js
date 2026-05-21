# Phase 6 Rollback Plan

Date: 2026-05-20
Objective: restore prior stable dashboard quickly while preserving data correctness.

## 1. Rollback Triggers
Trigger rollback if any condition occurs after production deploy:
- Sev1/Sev2 parity failure on baseline scenarios A/B/C.
- Persistent data fetch failures from configured NYT base endpoint.
- Callback sequencing regression causing stale results to overwrite current state.
- Critical interaction failure (selectors/menus non-functional).

## 2. Rollback Assets
- Previous stable static artifact bundle (N-1 release).
- Previous host config snapshot (headers + SPA rewrite).
- Rollback operator with deploy permissions.

## 3. Rollback Procedure
1. Declare rollback and pause further release actions.
2. Redeploy previous stable static artifact to production host.
3. Re-apply previous host config snapshot.
4. Purge CDN cache for `index.html` if caching is enabled.
5. Verify restored service with smoke checks:
   - App loads.
   - Basic filters interact.
   - Plot renders non-error state.
6. Post rollback announcement with incident reference.

## 4. Data Consistency and Correctness Checks
- Confirm state/county fetch requests return HTTP 200.
- Confirm expected date range appears in figure data.
- Confirm caveat notes still map to special counties.

## 5. Recovery SLA Targets
- Rollback initiation: within 5 minutes of trigger confirmation.
- Previous stable service restored: within 15 minutes.
- Initial incident summary published: within 30 minutes.

## 6. Post-Rollback Follow-Up
- Capture failing scenario and logs.
- Add/extend automated regression tests for trigger condition.
- Re-run full preflight + UAT before next release attempt.

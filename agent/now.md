---
updated: 2026-08-15
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 45h from cutoff (due noon Mon
2026-08-17) — still deepen territory, the 24h finishing window doesn't open
until ~2026-08-16 12:00. Re-fetched the course source: brief, spec, weighting,
and exemplar list unchanged since prior runs. Took stock: repo unchanged since
`edf4c24`, tree clean, matching `origin/main`.

Ran the cheap sanity roster: `pnpm check` (typecheck, build, lint, 24 tests —
all green), `pnpm audit` (no known vulnerabilities), and `pnpm check:evidence`
(only failure is the reflection, which is deliberately absent until the
finishing window — everything else it checks, PROCESS.md citations and
CLAUDE.md presence, resolves silently clean per the script's shared-flag
quirk already noted in MEMORY.md). Also did a read-only check on shipping
state: both `api.github.com/repos/.../comp4020-ass1-baishi` and the Pages URL
still 404 — repo is still private, nothing pushed live yet, as expected this
far out (shipping is harness-owned).

No code, content, or CLAUDE.md changes this run — nothing surfaced that
needed one. Did not repeat the full browser-based sweep (a11y, Lighthouse,
keyboard, zoom, exemplar comparison) — that battery has now been confirmed
clean across four consecutive runs with zero code changes in between, so a
fifth identical pass would be pure repetition, not deepening. No memory
content changed beyond this snapshot.

## Next action

- The 24h finishing window opens ~2026-08-16 12:00 (noon). The next run at or
  after that point should do the doctrine's finishing steps: re-verify no
  console errors and full reachability locally, confirm `PROCESS.md`
  citations still resolve, **write `reflections/assignment-1.md`** (400-600
  word PROCESS.md budget is separate from the reflection — the reflection
  answers the two standing prompts: the breakthrough that moved the work
  forward, and what this work changed about the developer you want to be),
  commit, push, then verify the live URL once shipped.
- If a run lands well before that window opens, the honest move is the same
  as this one: `pnpm check` + `pnpm audit` + `pnpm check:evidence` as a fast
  sanity pass, and stop there rather than inventing cosmetic work — the
  artefact and its process evidence (short of the reflection) are genuinely
  finished. Don't re-run the expensive `agent-browser`/Lighthouse battery
  again unless the code changes.

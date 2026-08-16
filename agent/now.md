---
updated: 2026-08-16
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 21h to cutoff (due noon Mon
2026-08-17) — inside the doctrine's 24h finishing window, which the prior run
had flagged as opening a few hours earlier. Re-fetched the course source in
full; brief, spec, exemplars, weighting, and key dates all match what prior
runs recorded, nothing changed.

Took stock: repo unchanged since `0416b0d`, tree clean, matching
`origin/main`. Everything except the reflection was already finished per
several prior runs' audits, so this run did the doctrine's remaining
finishing steps in order:

1. Wrote `reflections/assignment-1.md` (285 words) — both standing prompts
   answered, with the shrimp-geometry redesign (PROCESS.md moment 1) as the
   named breakthrough, since it's the most specific and demo-able for the
   week 4 retro this same entry doubles as per the course source's
   `related: crits/03-a1-retro`.
2. Re-ran `pnpm check` (green: typecheck, build, lint, 24 tests) and
   `pnpm check:evidence` (now fully clean — reflection found, all 5
   `PROCESS.md` commit citations resolve).
3. Served locally (`CI=true pnpm preview --port 4321`), opened with
   `agent-browser` at both marking viewports (1920×1080, 390×844), confirmed
   empty console at each, then closed the browser and killed the preview
   server.
4. Committed (`7d9a8c8`, "reflections: write assignment-1 entry") and pushed
   to `origin/main`.
5. Checked `api.github.com/repos/.../comp4020-ass1-baishi` and the Pages URL
   — both still 404, i.e. repo still private. Expected: shipping (visibility
   flip, Pages enable, the deploy workflow) is harness-owned, confirmed in
   `MEMORY.md`'s environment section (no `gh` auth available in this
   sandbox), not something this run needed to or could do.

## Next action

This deliverable is **fully finished and shipped** from this agent's side:
artefact, `CLAUDE.md`, `PROCESS.md` (4 moments, 600 words, citations
resolve), and `reflections/assignment-1.md` are all in place, checks green,
tree clean, pushed. Nothing more is owed before the 2026-08-17 12:00 cutoff.

- A future run (before or after the cutoff) only needs to do a read-only
  check: once `api.github.com/repos/comp4020-agentic-coding-studio/comp4020-ass1-baishi`
  stops 404ing, open the live Pages URL at both marking viewports and confirm
  it matches the local build — the live-URL half of doctrine step 6 that
  can't be done while the repo is private.
- If a run lands here again before cutoff with nothing changed upstream,
  this is a legitimate stopping point: don't invent further cosmetic work.
  The six-plus runs of the full technical/visual audit battery (a11y,
  Lighthouse, HTML validation, keyboard/pointer interaction, 200% zoom,
  exemplar comparison, `pnpm audit`) already logged in `MEMORY.md` stand.

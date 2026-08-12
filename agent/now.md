---
updated: 2026-08-13
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 100h from cutoff (due noon
Mon 2026-08-17) — deepen territory, but comfortably before the finishing
window. Re-fetched the course source: brief and spec unchanged from what's
already captured in `MEMORY.md`.

Took stock: repo unchanged since the prior run (`2d464f6`), tree clean,
`PROCESS.md` at three moments (meets the spec's minimum), `pnpm check`
green (24/24). Per the prior run's own note, the technical-audit battery
(axe-core, html-validate, tab-order, pointer-drag, resize, resource timing,
`pnpm audit`) is exhausted for unchanged code, so this run looked for one
genuinely new angle rather than re-running it: whether the `oxlint`/`vite`
bump from the last run's `pnpm update` (`2674092`) changed anything visible,
since that's exactly the kind of change a green `tsc`/`vitest`/lint run
can't itself detect.

Served `dist/` fresh (`CI=true pnpm preview`), opened it with
`agent-browser`, and screenshotted `#shrimp-canvas` at strokes
0/3/5/8/10/13/16. Geometry unchanged — the C-curl body, the sweet-spot
legs, the over-elaborated duplicate outline and extra ticks at max — and
`agent-browser console` came back empty. Shut the preview server down
afterwards. No commit this run: a legitimate "verified, nothing to fix"
outcome, not a gap. Wrote the finding into `MEMORY.md` so a future run
knows this specific post-bump check has already been done rather than
re-running it blind.

## Next action

- The technical/visual audit surface is now exhausted for the current code,
  including the post-dependency-bump regression check. A future deepening
  run should either wait for the code to actually change before re-running
  any of this battery, or find a genuinely different angle (not yet tried:
  a fresh critical read of the "response to brief" copy/scope against the
  exemplars, treated as its own distinct pass rather than folded into a
  technical check).
- `PROCESS.md` has three moments (534 words) — meets the spec's "three or
  four" floor. A fourth is optional; don't manufacture one just to add a
  number. If a future run finds a real fourth harness-level correction,
  add it; otherwise leave it at three.
- `reflections/assignment-1.md` still correctly doesn't exist yet — write
  it inside 24h of the 2026-08-17 12:00 cutoff, alongside the other
  doctrine finishing steps (verify live once shipped, `git status` clean,
  push, update memory).
- Keep resisting scope growth on the artefact itself — it already reads as
  one idea carried all the way, matching the brief's HD band language.

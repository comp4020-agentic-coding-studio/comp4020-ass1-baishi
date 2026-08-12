---
updated: 2026-08-12
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 117h from cutoff (due noon
Mon 2026-08-17) — still deepen territory. Re-fetched the course source: brief
and spec unchanged yet again.

Took stock: repo unchanged since the last run (`6a71812`), tree clean, two
moments in `PROCESS.md` (wave-vs-curl geometry `168c2b0`, phase-label
sighted/screen-reader split `d222b21`), word count 502. `pnpm check` green
(24/24 tests).

Per the last run's note that the audit-tooling angle was genuinely exhausted,
this run didn't re-run the full battery (axe-core, html-validate, tab-order,
pointer-drag, resource timing — all already logged clean across three prior
runs). Instead did a fresh direct read rather than trusting the log:

- Read `index.html`, `strokes.ts`, `main.ts`, `styles.css`, and
  `spec/assignment-1.test.ts` end to end against the brief's three criteria
  (legibility of process, working artefact, response to the brief) rather
  than against the checklist of tools already run. No defects found; the
  copy, the phase-label sr-only split, and the stroke geometry all still
  read as intended.
- Served `dist/` fresh (`CI=true pnpm preview`) and opened it live at both
  marking viewports with `agent-browser`: clean console, correct title, and
  a fresh screenshot at 8 strokes (the sweet spot) still reads unmistakably
  as a shrimp — a live re-check of the one thing `pnpm check` structurally
  cannot verify (see `CLAUDE.md`'s standing rule), not assumed from the
  `168c2b0` fix holding.
- Confirmed no CSS animation exists on this page at all (no `@keyframes`,
  no `transition`) — the reveal is instant opacity toggling on slider
  `input`, so the `prefers-reduced-motion` check that mattered for crit-1's
  marquee doesn't apply here; not a gap, just inapplicable.
- Noted the page has no `prefers-color-scheme: dark` handling — the ink/paper
  palette is fixed regardless of OS theme. Judged this a deliberate art
  direction (ink on paper), not a defect: nothing in the brief or checks
  asks for theme-adaptive colour, and axe-core's contrast check (already
  logged clean) covers the actual accessibility concern. Didn't add dark-mode
  support — would be scope growth without a real problem behind it.

No code changes this run — genuinely nothing to fix found by a fresh
whole-file read plus a live re-render, on top of the tooling battery already
exhausted by prior runs. Nothing committed (nothing changed).

## Next action

- The technical-audit angle remains exhausted (see prior `now.md` history in
  git log for the full list: resize, keyboard, pointer-drag, resource
  timing, JS-abort proxy, axe-core, html-validate, console, linkinator,
  stylelint). A future run shouldn't re-run that whole battery from scratch
  every time — spot-check the live render (cheap, ~2 min) and trust the
  logged tool results unless the code itself has changed since they ran.
- Still only two `PROCESS.md` moments — still fine, still nothing new to
  write a third about. Only add one if a future run's actual build/edit work
  turns up a real harness-level correction.
- Keep resisting scope growth (extra pages/mechanics/dark-mode/etc.) — the
  brief rewards one idea carried all the way, and every run this week
  (including this one, from a fresh angle) confirms the current build
  already does this cleanly.
- `reflections/assignment-1.md` still correctly doesn't exist yet — that's a
  finishing-window task (inside 24h of the 2026-08-17 noon cutoff). If a
  future run crosses into that window, write it then, along with the other
  finishing steps in the doctrine.

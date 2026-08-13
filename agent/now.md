---
updated: 2026-08-14
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 76h from cutoff (due noon Mon
2026-08-17) — still deepen territory, ~52h before the inside-24h finishing
window opens. Re-fetched the course source: brief and spec unchanged (same
weighting, same exemplar list, same bands). Took stock: repo unchanged since
the prior run (`14481e3`), tree clean, up to date with `origin/main`.

Found that the installed `agent-browser` has grown two native commands
neither prior run's `MEMORY.md` entries mention: `a11y [url] --json` (axe-core
built in, no more CDN-injection dance) and `vitals [url] --json` (Core Web
Vitals: LCP/CLS/TTFB/FCP/INP). Worth using going forward in place of the
manual-injection technique logged in `MEMORY.md` — simpler and presumably
kept version-matched by the tool itself.

Ran a genuinely new angle with them rather than repeating an already-answered
one: `pnpm build`, `CI=true pnpm preview --port 4318`, then per marking
viewport:
- `agent-browser a11y --json` at 1920×1080 and at 390×844 — 0 violations both
  (35 passes, 54 inapplicable, 0 incomplete). Confirms the earlier
  CDN-injected axe sweep's result via the tool's own native path.
- `agent-browser vitals --json` on load — CLS score 0.0, FCP ~40ms, TTFB
  <1ms, LCP is the `<p class="wordmark">`.
- Drove the slider by real keyboard (`focus` + `ArrowRight`/`End`/`Home`) and
  re-ran `vitals` — CLS still 0.0 after the full interaction range: the live
  SVG redraw and phase-label update never shift layout. (`inp` stayed `null`
  both times — plausibly this synthetic/CDP interaction path doesn't feed the
  INP buffer; not investigated further, low stakes for a single-page site.)
- `agent-browser errors` / `console` after the interaction — both empty.

Also re-ran `pnpm audit` (clean, as expected — cheap, time-dependent, worth
repeating per last run's own note) and `pnpm check` (green: typecheck, build,
lint, 24 tests).

Conclusion: nothing to change. No commit this run — CLS/vitals is a genuinely
new measurement angle (layout-shift, not just the load-timing/console pass a
prior run already did), and it came back clean, same legitimate
"verified, nothing needed" outcome as several prior runs now.

## Next action

- Angles exhausted so far on this unchanged code: technical/visual audits
  (a11y both via CDN-injection and now native `agent-browser a11y`, HTML
  validation, keyboard nav/tab order/actuation, pointer-drag, resize
  mid-interaction, reduced-motion, mobile perf/console, now Core Web
  Vitals/CLS), response-to-brief copy read against an exemplar,
  process-evidence/CI-config read, `pnpm audit`. A future run shouldn't
  re-run any of these without a reason (code changed, or a genuinely new
  angle). `pnpm audit` is still worth an occasional cheap re-check.
- `PROCESS.md` sits at 534 words with three moments, inside the 400–600
  budget and meeting the "three or four" floor. Don't manufacture a fourth
  without a real harness-level finding.
- `reflections/assignment-1.md` still correctly doesn't exist — write it
  inside 24h of the 2026-08-17 12:00 cutoff, alongside the other doctrine
  finishing steps (verify live once shipped, `git status` clean, push,
  update memory). At ~52h out from that window as of this run, there may be
  one more genuine deepening pass available, but don't force one if nothing
  new turns up.
- Keep resisting scope growth on the artefact itself.

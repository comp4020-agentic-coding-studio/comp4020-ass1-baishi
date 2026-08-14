---
updated: 2026-08-14
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 69h from cutoff (due noon Mon
2026-08-17) — still deepen territory, ~45h before the inside-24h finishing
window opens. Re-fetched the course source: brief and spec unchanged from the
prior run's read (same weighting, same exemplar list, same bands). Took
stock: repo unchanged since the prior run (`87a4738`), tree clean, up to date
with `origin/main`.

Ran one genuinely new technical angle, since the prior run's `now.md` had
listed the a11y/HTML-validation/keyboard/pointer/resize/reduced-motion/CWV
battery as exhausted: a 200%-browser-zoom reflow check (WCAG 1.4.10), which
none of `agent-browser`'s built-in media emulation covers (`set media` only
does dark/light/reduced-motion, no zoom/text-scale primitive). Applied real
Chromium zoom via `eval "document.documentElement.style.zoom = '2'"`,
confirmed it actually took (`getBoundingClientRect()` on the h1 doubled,
`getComputedStyle(...).zoom` read `"2"`), then checked both marking
viewports:
- 1920×1080: no horizontal scroll (`scrollWidth === clientWidth`), text and
  nav reflow correctly, confirmed via a non-`--full` screenshot.
- 390×844: same — no horizontal scroll, nav wraps to two lines, slider stays
  full-width and unclipped after scrolling down mid-zoom, no console errors.

Found a real tooling quirk along the way (now in `MEMORY.md`): a `--full`
(full-page) `agent-browser screenshot` did **not** reflect the zoomed state
at all — two `--full` captures taken before/after `style.zoom = '2'` came
back pixel-identical, even though `eval` in between proved the zoom had
applied. A plain viewport-only screenshot (no `--full`) taken in the same
zoomed state showed it correctly. Worth remembering for any future
zoom/scale check: verify with a non-`--full` shot or an `eval` measurement,
don't trust `--full` alone.

Also re-ran `pnpm check` (green: typecheck, build, lint, 24 tests) as a
baseline before/after the browser session; no code changed this run, so no
commit — this is the same legitimate "verified, nothing needed" outcome as
several prior runs, but with a genuinely new check rather than a repeat.

## Next action

- Angles now tried and exhausted on this unchanged code: technical/visual
  audits (a11y via both CDN-injection and native `agent-browser a11y`, HTML
  validation, keyboard nav/tab order/actuation, pointer-drag, resize
  mid-interaction, reduced-motion, mobile perf/console, Core Web
  Vitals/CLS, and now 200%-zoom reflow), response-to-brief copy read
  against an exemplar, process-evidence/CI-config read, `pnpm audit`. A
  future run shouldn't re-run any of these without a reason (code changed,
  or a genuinely new angle). `pnpm audit` is still worth an occasional
  cheap re-check given how little else costs nothing to verify.
- `PROCESS.md` sits at 534 words with three moments, inside the 400–600
  budget and meeting the "three or four" floor. Don't manufacture a fourth
  without a real harness-level finding — the zoom-reflow check above was a
  genuine deepening pass but found nothing broken, so it's not moment
  material by itself.
- `reflections/assignment-1.md` still correctly doesn't exist — write it
  inside 24h of the 2026-08-17 12:00 cutoff, alongside the other doctrine
  finishing steps (verify live once shipped, `git status` clean, push,
  update memory). At ~45h out from that window as of this run, there may
  be one more genuine deepening pass available (technical angles are now
  quite thin — a future run may find the honest answer is simply to wait
  for the finishing window), but don't force one if nothing new turns up.
- Keep resisting scope growth on the artefact itself.

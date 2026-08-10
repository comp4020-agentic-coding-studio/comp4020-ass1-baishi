---
updated: 2026-08-10
deliverable: comp4020-ass1-baishi
---

# Now

## State

Assignment 1 ("build an interactive explainer of something you think more
people should know or understand") started this run at 165h out from
cutoff — well outside the 24h finishing window, so this run did the
plan/build/deepen work per doctrine, not the finishing checklist.

Chose the explainer topic from the Baishi persona's own namesake: Qi
Baishi's 妙在似与不似之间 ("the marvel lies between likeness and
unlikeness") — verified via WebSearch before quoting/citing, not assumed.
The one page (`index.html`) is a slider from 0 to 16 that reveals an
ink-shrimp drawing stroke by stroke, built as SVG paths; a pure function
(`phaseFor` in `strokes.ts`) maps the visible count to one of three phases
(不似 too-few / sweet-spot / 太似 too-many) and a `<p aria-live="polite">`
label announces the phase as it changes. That mapping is the brief's
required "visitor does something that changes what they see, explicit
enough to test" — and it's tested directly in
`spec/assignment-1.test.ts`, no browser needed for the logic half.

Design iteration mattered here: the first hand-authored SVG coordinates
read as a caterpillar/twig, not a shrimp, even deep in the intended sweet
spot — only caught by screenshotting at several slider values with
`agent-browser` and looking. Fixed by redesigning the body path into an
actual C-curl (head high-right, belly dipping through the middle, tail
hooking back up-left) matching how Qi Baishi actually composed the
subject. A second, subtler bug: the `body-outline` stroke (meant to read
as an "over-traced contour" cue in the over-elaboration phase) was drawn
exactly on top of `body-main` with an identical path — same bounding box,
functionally invisible. Fixed with a `Stroke.offset` field
(`translate(6px, 7px)`) rather than fabricating a new path; confirmed live
via `getBoundingClientRect()` (not `getBBox()`, which ignores the
element's own transform by spec) that the two strokes render at genuinely
different screen positions.

Verified this run, both green:
- `CI=true pnpm check` — typecheck, build, oxlint, stylelint, vitest (24/24)
  all clean.
- `agent-browser` at both required viewports (1920×1080, 390×844):
  screenshots reviewed at multiple slider positions, console empty at
  both, mobile layout stacks and stays legible.

Committed incrementally, three commits so far (`f37622e` strokes+main
interaction logic, `733220f` index.html+styles.css, `936949d` spec swap
replacing the deleted starter test) — not yet pushed, which is correct at
165h out; pushing is a finishing-steps action for inside the 24h window.

## Next action

This is genuinely mid-week build work, not close to done. Still open,
roughly in priority order:
- `PROCESS.md` is still the template — start filling it in progressively
  (per MEMORY.md's "run `pnpm check` before committing" pattern, keep it
  honest against real commits as they land, don't backfill it all at once
  near cutoff).
- Consider a deepen pass once the core is solid: accessibility check
  (axe-core via CDN injection, see MEMORY.md), keyboard-nav pass on the
  slider itself (arrow keys should move it — confirm this actually works,
  it hasn't been explicitly tested), reduced-motion consideration (there's
  no animation on this page currently, so likely N/A, but check).
- `reflections/assignment-1.md` and the full finishing checklist
  (linkinator, memory update, push) are correctly deferred until inside
  24h of cutoff, per doctrine's time-based gating — don't start those yet
  on the next run unless the clock has moved past that line.
- Re-fetch the course source next run in case the brief/spec drifted.

## Lessons carried into MEMORY.md this run

See MEMORY.md for the two additions: SVG `getBBox()` vs
`getBoundingClientRect()` when verifying a `transform`-offset element live
(bbox is pre-transform by spec, easy to misread as "the fix didn't
apply"), and iterative screenshot-driven redesign as the way to catch an
SVG illustration reading as the wrong thing even when the code has no
bugs in it.

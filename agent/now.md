---
updated: 2026-08-11
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 135h from cutoff (due noon
Mon 2026-08-17) — still plan/build/deepen territory. Re-fetched the course
source; brief and spec unchanged again (interactive explainer, 45/20/35
process/artefact/brief, `PROCESS.md` 400–600 words with 3–4 moments,
strongest moments land in the harness not in a retry).

Took stock: repo unchanged since the last run (`4d51155`), tree clean, two
moments in `PROCESS.md` (wave-vs-curl geometry `168c2b0`, phase-label
sighted/screen-reader split `d222b21`). `pnpm check` green (24/24 tests).

Followed up on the previous run's own next-action note: try genuinely
adversarial real-world use (slow network, real pointer/touch drag) rather
than only synthetic checks.

- **Real pointer drag** (mouse down → move → move → up via
  `agent-browser mouse`, not synthetic `input` dispatch): dragged
  `#stroke-slider` across several positions. Value and the "N / 16" readout
  tracked correctly mid-drag (not just on release), and a
  `#shrimp-canvas`-only screenshot taken *during* a drag (mouse still down,
  value 6) showed the SVG had already redrawn to that stroke count — the
  canvas updates live off the same `input` event a mouse drag fires
  continuously, not just on `change`/release. No console errors.
- **Simulated broken/slow connection**: `agent-browser` has no request-delay
  primitive (`network route` only supports `--abort` or a fixed
  `--body`), so this was an abort of the JS bundle, not a true throttle —
  logged as a proxy, not the real thing. Result: the page still renders
  fully (all prose, headings, the slider control itself) with zero console
  errors — nothing crashes. But the slider becomes silently dead: it's a
  native `<input type="range">` so dragging/keying it still moves its own
  `value` (confirmed `End` → `"16"`), yet the "N / 16" label and the SVG
  never update, because that wiring lives entirely in the `input` handler in
  `main.ts`. No error, no `<noscript>`, no visible sign anything failed —
  a visitor just sees a slider that appears to do nothing.

Decided not to code a fix for the second finding. Reasons: (1) it's a
JS-load *failure*, not a *slow* connection — the criterion's own wording
("holds up under... a slow connection") is about latency, not JS never
arriving, and every exemplar in the brief (neal.fun, pudding.cool,
ciechanow.ski) is equally JS-load-dependent with no noscript fallback, so
this isn't a gap specific to this build; (2) the actual deployed payload is
a few hundred bytes of same-origin JS/CSS with no fonts/images/third-party
requests (already checked in an earlier run), so real slow-connection risk
is already about as low as a static site gets; (3) MEMORY.md's own standing
lesson is not to manufacture a fix without a defect the criterion is
actually pointing at. Recorded as "checked, no action" rather than left
untried.

No code changes this run — a legitimate "verified, nothing needed" outcome
on these two new angles specifically (distinct from the resize/keyboard/
network-timing angles a prior run already covered). Working tree stayed
clean throughout; nothing was committed.

## Next action

Still only two `PROCESS.md` moments, and that continues to be fine — the
spec's 3–4-moment room doesn't need filling before it's earned. For a
future run:

- The adversarial-use angle is now fairly well exhausted (resize,
  keyboard tab-order + actuation, real pointer drag, resource/timing
  check, JS-abort proxy for connection failure). If a future run wants a
  genuinely new angle, touch-specific emulation (not just mouse) or an
  actual CDP-level network-throttle (bypassing agent-browser's CLI, which
  has no delay primitive) are the remaining untried ones — but don't chase
  either just to manufacture a third `PROCESS.md` moment; only write one up
  if it surfaces a real defect the way the first two did.
- Keep resisting scope growth (extra pages/features) this far out — the
  brief rewards one idea carried all the way, and this note has said so for
  three runs running now.
- `reflections/assignment-1.md` still correctly doesn't exist yet
  (`pnpm check:evidence` flags it, as expected) — finishing-window task, not
  now.

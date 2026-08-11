---
updated: 2026-08-11
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 141h from cutoff (due noon
Mon 2026-08-17) — still plan/build/deepen territory. Re-fetched the course
source; brief and spec unchanged from what was already in memory (interactive
explainer, 45/20/35 process/artefact/brief, `PROCESS.md` 400–600 words with
3–4 moments, strongest moments land in the harness not in a retry).

Took stock: repo unchanged since the last run (`1a0be0e`), tree clean, two
moments already in `PROCESS.md` (the wave-vs-curl geometry fix `168c2b0`, the
phase-label sighted/screen-reader split `d222b21`).

Ran a fresh deepening pass aimed specifically at the artefact criterion's HD
band ("holds up under use it wasn't designed for: the keyboard, a resize mid-
interaction, a slow connection") — three angles not yet recorded for this
repo:

- **Resize mid-interaction**: set the slider to 8/16, then resized the live
  page from 1920×1080 straight to 390×844 without reloading. State, layout,
  and the SVG's responsive scaling all held — slider value, stroke count and
  `canvas.dataset.visibleCount` were unchanged, no console errors, and the
  screenshot at the new viewport still reads correctly. Nothing to fix; the
  page has no resize listener at all, so this was really confirming the
  layout is intrinsically responsive rather than JS-patched.
- **Real keyboard actuation of the slider** (distinct from the tab-order walk
  already recorded in MEMORY.md, which only checked focus order and outline
  visibility): focused `#stroke-slider` and drove it with `ArrowRight` ×3,
  `End`, `Home` — value and readout tracked exactly as a mouse drag would,
  console stayed clean. This is native `<input type="range">` behaviour, not
  something the site's own code could break, which is itself the finding:
  using the native control instead of a custom widget bought this for free.
- **Slow-connection resilience**: checked `performance.getEntriesByType('resource')`
  on a fresh load — the only two network requests are same-origin `index.js`
  and `index.css` (a few hundred bytes each), no fonts, no images, no
  third-party requests. Nothing external to fail slowly.

Also re-verified the drawing's geometry across every phase boundary (0, 3, 4,
7, 10, 11, 16) at desktop, including cropped `#shrimp-canvas`-only screenshots
at 10/13/16 to compare the sweet-spot and over-elaboration phases side by
side. The C-curl still reads as a shrimp at every count; the over-elaboration
phase (11–16) is a real but gradual density increase (more leg ticks, a
faint duplicate outline) rather than a dramatic one — considered redesigning
this to be more visually dramatic, decided against it: the effect is present
and truthful to the copy's claim, "make it more dramatic" would be a
subjective aesthetic call without a clear defect behind it, and MEMORY.md's
existing lesson is not to manufacture changes without one.

No code changes this run — a legitimate "verified, nothing needed" outcome,
now the third time this pattern has held for this repo. Working tree stayed
clean throughout; nothing was committed.

## Next action

Still no third `PROCESS.md` moment has presented itself from real use, and
that's fine this far out — the spec's 3–4-moment room doesn't need filling
early. For a future run, before inventing one:

- Try genuinely adversarial real-world use next: slow the network for real
  (agent-browser's `network route` can abort/delay requests — this run only
  read `performance` timings, didn't try artificially delaying the JS/CSS
  response), or drive the interaction with touch/pointer events rather than
  synthetic `input` dispatch.
- If a run does eventually find nothing further and cutoff is still >24h out,
  resist the urge to force a third moment or add scope (extra pages,
  features) — the brief rewards one idea carried all the way, and the repo's
  own next-action notes have said this twice now.
- `reflections/assignment-1.md` still correctly doesn't exist yet
  (`pnpm check:evidence` flags it, as expected) — finishing-window task, not
  now.

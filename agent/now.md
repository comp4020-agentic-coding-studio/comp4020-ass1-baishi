---
updated: 2026-08-10
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 159h from cutoff (due noon
2026-08-17). Fetched the course source (`assessments/assignment-1.json`) per
doctrine step 2 — brief and spec unchanged from what's already built against.
Took stock: the repo already had a real prototype — a slider that reveals a
hand-drawn ink shrimp one brushstroke at a time, keyed to Qi Baishi's 妙在似
与不似之间 line, with `spec/assignment-1.test.ts` covering the interaction's
contract and `pnpm check` fully green.

At 159h out this is doctrine's plan/build/deepen phase, not finishing steps.
Verification (doctrine step 6 — serve locally, look at real pages) turned up
a real defect the green checks couldn't see: screenshotting the rendered SVG
at several slider values (0, 3, 5, 8, 11, 16) at both marking viewports
showed the body curve was a wave, not a curl — it read as a squiggle with
whiskers at every single stroke count, never once as a shrimp, even at
16/16. (This is the exact defect a stale `MEMORY.md` entry claimed a prior
run had already fixed — it hadn't; see the correction now in `MEMORY.md`.)

Fixed for real this time:

- redesigned `STROKES` in `strokes.ts` around one coherent C-curl (head high
  right, sweep down through the belly, hook the tail back up-left) instead
  of the wave, and repositioned the head/antennae/legs/tail-fan strokes to
  actually attach to that curve
  ([`168c2b0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/168c2b0)).
  Re-screenshotted the same checkpoints at both viewports after the change —
  it now reads unmistakably as a curled shrimp from ~5 strokes on, and stays
  ambiguous at 3, matching what the page's own prose claims.
- wrote the verification rule into this repo's `CLAUDE.md` (a harness-level
  correction, not just a retry): hand-authored SVG geometry changes need a
  rebuild-and-screenshot pass before being trusted, because no automated
  check here can tell a shrimp from a caterpillar
  ([`ccab92a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/ccab92a)).

Also ran further deepening checks while in there (all clean, nothing else to
fix): `html-validate` (only the known doctype-style/void-style non-issues),
an axe-core CDN sweep (zero violations), and a real keyboard pass (tab order
correct, visible focus on every element, arrow keys drive the slider and
update the live phase label correctly).

Wrote a first-draft `PROCESS.md` (was still the template) capturing the
shrimp-geometry fix as moment 1, while the diagnosis was fresh rather than
reconstructed later
([`be2c36f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/be2c36f)).
`reflections/assignment-1.md` is deliberately not written yet — that's a
finishing-step item, not due this far from cutoff. All commits pushed;
`origin/main` is at `be2c36f`, tree clean.

## Next action

Plenty of runway left (due 2026-08-17 noon). A future run should:

- re-verify the site still renders correctly (checks green, browser look at
  both viewports) before assuming the shrimp fix "holds" — don't just trust
  this note, per the lesson this run just had to learn the hard way
- keep extending `PROCESS.md` as real moments happen (target 3-4 total,
  400-600 words) rather than leaving it until the 24h finishing window
- once inside 24h of cutoff: write `reflections/assignment-1.md`, do a final
  `PROCESS.md` pass (word count, moment count, citations), run
  `pnpm check:evidence` (currently fails only on the missing reflection —
  expected at this stage), then follow doctrine's finishing steps and ship
  (`/ship` skill flips the repo public and turns on Pages/CI)

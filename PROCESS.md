# Process overview

A reading-guide to how the work came together — a map to my process, not an
essay about it.

## What I built

An interactive explainer of Qi Baishi's 妙在似与不似之间 ("the marvel lies
between likeness and unlikeness"): a slider reveals a hand-drawn ink shrimp
one brushstroke at a time, from an empty canvas up to every leg, antenna and
shading hatch accounted for, so the visitor finds for themselves the stroke
count where a scribble becomes a shrimp — and the later one where it stops
being one again, buried under its own detail.

## The moments that mattered

1. **The drawing passed every check and still wasn't a shrimp.**
   `pnpm check` was green from the first commit — typecheck, build, lint, and
   the spec's own assertions about the slider's markup all passed — but none
   of that checks what the SVG actually looks like. Screenshotting the
   rendered canvas at several slider values (rather than trusting the path
   coordinates on the page) showed the body curve was a wave, not a curl: it
   read as a squiggle with whiskers at 3 strokes, 8 strokes, and all 16, never
   once as a shrimp. I redesigned `STROKES` in `strokes.ts` around a single
   coherent C-curl instead of retrying small coordinate tweaks against the
   same wrong shape, then verified the fix the same way I'd found the bug —
   re-screenshotting the same slider values at both marking viewports and
   reading the render, not the code — before trusting it
   ([`168c2b0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/168c2b0)).
   Because no automated check can tell "shrimp" from "not a shrimp", I wrote
   the rule into this repo's `CLAUDE.md` so the next change to that geometry
   gets checked the same way rather than trusted on the strength of a green
   `pnpm check`
   ([`ccab92a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/ccab92a)).

_More moments will be added as the build continues; this assignment's window
is still open._

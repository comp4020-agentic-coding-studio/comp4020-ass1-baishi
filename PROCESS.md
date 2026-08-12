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

2. **The interaction was telling visitors the answer it claimed to withhold.**
   The idea section's own copy says "nobody told you which stroke count was
   which as you dragged — that's the point." Using the built page rather than
   reading the markup showed that was false: the live `#phase-label` printed
   the verdict ("不似 — too few marks", "妙在似与不似之间 — the marvel...",
   "太似 — every leg accounted for") in plain sight at every slider position,
   so a sighted visitor was handed the judgement the essay claims they have to
   make for themselves. No test caught this — `spec/assignment-1.test.ts` only
   asserts the label exists inside an `aria-live` region, which stayed true
   either way. I made the qualitative verdict screen-reader-only rather than
   deleting it outright: a screen-reader user can't see the drawing to form
   the judgement visually, so the announcement is their equivalent of looking,
   while a sighted visitor now sees only the neutral stroke count and has to
   decide by eye, matching what the copy actually claims
   ([`d222b21`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/d222b21)).
   Verified live at both marking viewports with `agent-browser` — the sighted
   readout, the still-updating (but visually clipped) label, and a clean
   console — not just re-read from the diff.

3. **`pnpm check` going green doesn't mean the dependency tree is safe.**
   Every roster check had been passing for days, so I ran `pnpm audit` as a
   deliberately separate sensor — nothing in `pnpm check` calls it — and it
   found 9 real vulnerabilities (4 high, 5 moderate) in transitive
   dev-tooling dependencies: `undici` via `jsdom`, and
   `postcss`/`nanoid`/`js-yaml`/`fast-uri` via `stylelint`'s toolchain. A
   prior run's `pnpm outdated` had already ruled out bumping this repo's
   direct pins (`typescript`, `jsdom`, `@types/*`) as major-version-only and
   not worth the risk for a static site, so rather than repeat that
   conclusion I tried the narrower move first: a plain `pnpm update`, which
   only resolves within the ranges `package.json` already declares. It
   bumped just `oxlint` and `vite` — no `package.json` range changed — and
   cleared all 9 vulnerabilities outright. I wrote the sequence into
   `CLAUDE.md` (`pnpm check` doesn't cover supply-chain risk; try the
   in-range update before a major bump) so a future run reaches for it
   instead of either ignoring `pnpm audit` or over-correcting into a risky
   upgrade, then verified both `pnpm audit` (clean) and the full
   `pnpm check` (24/24 tests) after the update, not just that the install
   step succeeded
   ([`2674092`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/2674092)).

_More moments will be added as the build continues; this assignment's window
is still open._

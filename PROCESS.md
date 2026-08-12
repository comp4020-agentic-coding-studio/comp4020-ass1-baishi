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
   the spec's own markup assertions all passed — but none of that checks what
   the SVG looks like. Screenshotting the rendered canvas at several slider
   values, rather than trusting the path coordinates, showed the body curve
   was a wave, not a curl: a squiggle with whiskers at every stroke count,
   never a shrimp. I redesigned `STROKES` around one coherent C-curl instead
   of retrying small tweaks against the same wrong shape, then verified the
   same way I'd found the bug — re-screenshotting at both marking viewports —
   before trusting it
   ([`168c2b0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/168c2b0)).
   No automated check can tell "shrimp" from "not a shrimp", so I wrote the
   rule into `CLAUDE.md`: the next change to this geometry gets checked the
   same way, not trusted on a green `pnpm check`
   ([`ccab92a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/ccab92a)).

2. **The interaction was telling visitors the answer it claimed to withhold.**
   The idea section's own copy says "nobody told you which stroke count was
   which as you dragged — that's the point." Using the built page, not the
   markup, showed that was false: the live `#phase-label` printed the verdict
   in plain sight at every slider position, handing a sighted visitor the
   judgement the essay claims they have to make themselves.
   `spec/assignment-1.test.ts` only asserted the label sat inside an
   `aria-live` region, true either way, so no test caught it. I made the
   verdict screen-reader-only rather than deleting it: a screen-reader user
   can't see the drawing to judge it visually, so the announcement is their
   equivalent of looking, while a sighted visitor now decides by eye alone,
   matching what the copy claims
   ([`d222b21`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/d222b21)).
   Verified live at both marking viewports — the visible readout, the
   still-updating clipped label, a clean console — not just re-read from the
   diff.

3. **A green `pnpm check` says nothing about the dependency tree.**
   `pnpm check` never calls `pnpm audit`, so I ran it separately and found 9
   real vulnerabilities (4 high, 5 moderate) in transitive dev-tooling deps
   behind `jsdom` and `stylelint`. A prior run's `pnpm outdated` had already
   ruled out bumping the repo's own pins — major-version-only, not worth the
   risk here — so instead of repeating that I tried the narrower move first:
   a plain `pnpm update`, which only resolves within the ranges
   `package.json` already declares. It moved just `oxlint` and `vite` and
   cleared every vulnerability. Wrote the sequence into `CLAUDE.md` — audit
   separately; try the in-range update before a major bump — and confirmed
   with a clean re-run of both `pnpm audit` and `pnpm check`
   ([`2674092`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass1-baishi/commit/2674092)).

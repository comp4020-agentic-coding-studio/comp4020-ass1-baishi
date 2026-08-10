---
updated: 2026-08-11
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 148h from cutoff (due noon
Mon 2026-08-17) — plan/build/deepen territory, not the finishing window.
Fetched the course source (`assessments/assignment-1.json`): the brief is
"build an interactive explainer of something you think more people should
know," marked 45% process legibility / 20% deployed artefact / 35% response
to brief, with `PROCESS.md` specifically capped at 400–600 words and
3–4 moments — and the strongest moments are ones where a correction landed
in the *harness* (a `CLAUDE.md` rule, a wired-up check) rather than in a
retry.

Took stock: the repo already had a finished single-page prototype (the
ink-shrimp stroke-reveal slider, keyed to Qi Baishi's 似与不似之间) from prior
runs, with `pnpm check` green and one moment already written up in
`PROCESS.md` (the wave-vs-curl geometry fix, `168c2b0`).

Found and fixed a second real issue this run, by using the live page rather
than reading the code: the "idea" section's copy claims "nobody told you
which stroke count was which as you dragged — that's the point," but the
visible `#phase-label` live region actually printed the verdict (不似/妙在/太似)
at every slider position, handing sighted visitors exactly the judgement the
essay says they have to make for themselves. No test caught this — the
existing spec only asserts the label sits inside an `aria-live` region, which
stayed true either way. Fixed by making the qualitative label
screen-reader-only (`.sr-only`): sighted visitors now see only a neutral
stroke count and have to judge by eye; screen-reader users, who can't see the
drawing, still get the announced verdict as their equivalent of looking.
Verified live with `agent-browser` at both marking viewports — visible
readout text, the still-live-but-visually-clipped label, clean console — not
just from the diff. Committed as `d222b21`, written up as PROCESS.md's second
moment in `404ba95`, pushed.

Ran a full deepening audit afterward, all clean, nothing further to fix:
- `CI=true pnpm check` — 24/24 tests green.
- axe-core (CDN injection against `dist/` via preview) — zero violations.
- `pnpm dlx html-validate dist/*.html` — only the known-benign
  `doctype-style`/`void-style` noise (this template's modern lowercase-
  doctype/self-closing-void style, not a real defect — see MEMORY.md's
  existing entry on this). No other rule category fired.
- `pnpm dlx linkinator ./dist` — 4 links, all 200, including the
  Wikipedia citation in the blockquote's `cite` attribute (a real, already-
  verified URL, not guessed).
- Real keyboard walk (`agent-browser press Tab` + `eval` on
  `document.activeElement`): tab order is the three nav links then the
  slider, in correct visual/logical order, with visible `outline: auto` at
  every stop (no `outline: none` reset in `styles.css`).

## Next action

The prototype is functionally solid and single-idea, matching the brief
tightly. Next run (still well before cutoff) should look at:

- `reflections/assignment-1.md` doesn't exist yet — fine for now
  (`pnpm check:evidence` correctly flags it missing), it's a finishing-window
  task, not a build/deepen one. Don't draft it prematurely; more moments may
  still land.
- Consider whether the prototype wants anything beyond the single slider
  interaction to fill remaining runway — the brief's exemplars (neal.fun,
  Ciechanowski) reward depth on *one* mechanic over breadth, so resist
  adding pages/features for their own sake; the "elsewhere it shows up"
  section already generalises the idea in prose. If a third `PROCESS.md`
  moment doesn't present itself from real use, that's a legitimate
  "verified, nothing needed" outcome per MEMORY.md's existing lesson, not a
  gap to force.
- `PROCESS.md` is currently ~2 moments; the spec wants 3–4, so there's room
  for one more good one before finishing, ideally another harness-level
  correction (a `CLAUDE.md` rule or a new spec test) rather than a routine
  retry-until-green.

---
updated: 2026-08-12
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 111h from cutoff (due noon
Mon 2026-08-17) — still deepen territory. Re-fetched the course source: brief
and spec unchanged.

Took stock: repo unchanged since the prior run (`2ed80ca`), tree clean, two
`PROCESS.md` moments, `pnpm check` green. Rather than re-run the exhausted
audit battery (axe-core, html-validate, tab-order, pointer-drag, resize,
resource timing — all logged clean across four prior runs), tried a genuinely
new angle: `pnpm audit`.

It found 9 real vulnerabilities (4 high, 5 moderate) in transitive
dev-tooling deps — `undici` via `jsdom`, `postcss`/`nanoid`/`js-yaml`/
`fast-uri` via `stylelint`'s toolchain. A prior run's `pnpm outdated` had
already ruled out bumping this repo's direct pins as major-only and not
worth it, but that doesn't mean nothing was fixable: a plain `pnpm update`
(in-range only, no `package.json` pin touched) bumped just `oxlint` and
`vite` and cleared every vulnerability outright, `pnpm check` still green
(24/24) after. Committed the fix (`2674092`), wrote the finding and the
try-in-range-before-major-bump sequence into `CLAUDE.md`, and added it as a
genuine third `PROCESS.md` moment (`1d5a360`) — the assignment's own spec
(unlike a crit's) explicitly asks for three or four moments, not fewer, and
the repo only had two. Trimmed `PROCESS.md` afterward (`76e8274`) to land
back inside the spec's 400–600 word budget (was 696, now 534). Pushed all
three commits; `origin/main` is at `76e8274`.

No other changes — a fresh whole-file read of `index.html`/`strokes.ts`/
`main.ts`/`styles.css` (continuing the practice of not just trusting the
tool-result log) turned up nothing else to fix.

## Next action

- `PROCESS.md` now has three moments (534 words), meeting the assignment
  spec's explicit "three or four" requirement — a prior gap this run closed.
  A fourth is optional, not required; don't manufacture one.
- The technical-audit angle is now genuinely exhausted including `pnpm
  audit`/`pnpm update` (see `MEMORY.md`'s updated entry). A future deepening
  run should look for a *different* new angle rather than re-running this
  battery, unless the code has changed since these checks ran.
- `reflections/assignment-1.md` still correctly doesn't exist yet — write it
  in the finishing window (inside 24h of the 2026-08-17 noon cutoff), along
  with the other doctrine finishing steps (verify live once shipped, etc.).
- Keep resisting scope growth — brief rewards one idea carried all the way,
  and the artefact itself (interaction, copy, geometry) still reads as
  intentionally scoped; this run's finding was a harness/process gap, not an
  artefact one.

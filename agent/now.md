---
updated: 2026-08-12
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 124h from cutoff (due noon
Mon 2026-08-17) — still deepen territory. Re-fetched the course source: brief
and spec unchanged again (interactive explainer, 45/20/35
process/artefact/brief, `PROCESS.md` 400–600 words with 3–4 moments,
strongest moments land in the harness not in a retry).

Took stock: repo unchanged since the last run (`b666e34`), tree clean, still
two moments in `PROCESS.md` (wave-vs-curl geometry `168c2b0`, phase-label
sighted/screen-reader split `d222b21`). `pnpm check` green (24/24 tests).

Ran the checks logged as done for crit-1/crit-2 but not yet for this repo
specifically:

- **axe-core CDN sweep** (inject `axe.min.js` via CDN into the served
  `dist/index.html`, `axe.run()`): zero violations.
- **`pnpm dlx html-validate dist/*.html`**: only the two expected non-issue
  rule categories (`doctype-style`, `void-style` — this template's
  intentional modern style vs. the tool's legacy-authoring preset, see
  `[[working-patterns]]`/MEMORY.md). No other rule fired — third repo in a
  row this holds, further confirming it's a real pattern rather than
  coincidence.
- Browser console: clean, no errors.
- `PROCESS.md` word count: 502 (within the 400–600 band).
- Full prose reread of `index.html` (idea + elsewhere sections): no defects,
  the sr-only phase-label fix still reads as intended against the copy's own
  claim.

Tried but confirmed infeasible in this sandboxed container (not merely
"didn't get to it"):

- **iOS touch emulation** (`agent-browser -p ios ...`): fails outright —
  `xcrun simctl` isn't present (no Xcode/macOS host). Not something a future
  run should retry expecting a different result here.
- **CDP-level network throttle** (bypassing `agent-browser`'s CLI, which only
  supports `--abort`/`--body`, no delay primitive): still no lower-level path
  without extra tooling investment not clearly justified by the marking
  criterion's wording. Re-confirmed rather than assumed.

No code changes this run — a legitimate "verified, nothing needed" outcome
across five distinct new checks, consistent with the standing lesson not to
manufacture busywork just to have a diff. Nothing was committed (nothing
changed).

## Next action

- The adversarial/audit-tooling angle is now genuinely exhausted for this
  repo: resize, keyboard tab-order + actuation, real pointer drag,
  resource/timing check, JS-abort proxy, axe-core, html-validate, console,
  word-count, and a full prose reread have all been run and found nothing.
  Touch and true network-throttle are confirmed infeasible in this sandbox,
  not just untried — don't re-attempt either expecting a different result
  unless the environment itself changes (e.g. a macOS host becomes
  available).
- Still only two `PROCESS.md` moments, and that continues to be fine — three
  runs now have found nothing new to fix, so there's genuinely nothing to
  write a third moment about yet. Only add one if a future run's build/edit
  work turns up a real harness-level correction, not by going looking for a
  fourth checking angle to force one.
- Keep resisting scope growth (extra pages/features/content) — the brief
  rewards one idea carried all the way, and every run this week has
  confirmed the current build already does this cleanly.
- `reflections/assignment-1.md` still correctly doesn't exist yet — that's a
  finishing-window task (inside 24h of the 2026-08-17 noon cutoff), not now.
  If a future run is the one that crosses into that window, write it then,
  along with the other finishing steps in the doctrine.

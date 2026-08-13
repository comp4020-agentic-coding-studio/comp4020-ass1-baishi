---
updated: 2026-08-13
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 87h from cutoff (due noon Mon
2026-08-17) — still deepen territory. Re-fetched the course source: brief and
spec unchanged from `MEMORY.md`.

Took stock: repo unchanged since the prior run (`3906002`), tree clean, up to
date with `origin/main`. The prior run had already exhausted the
technical/visual audit battery and the response-to-brief copy read for this
unchanged code, so this run looked for angles genuinely not yet tried rather
than repeating either:

- `pnpm check` — green (typecheck, build, lint, 24 tests).
- `pnpm audit` — clean (the in-range `pnpm update` from `2674092` still holds;
  no new advisories since).
- `pnpm check:evidence` / `scripts/check-evidence.ts` read directly — confirmed
  it checks three things (CLAUDE.md presence, PROCESS.md citations resolving,
  the current-deliverable reflection existing) and only the third currently
  fails, correctly: `reflections/assignment-1.md` doesn't exist yet, which is
  right this far from cutoff. CLAUDE.md presence and all `PROCESS.md` SHA
  citations were confirmed to resolve (no per-item failures logged for
  either), so the evidence check will go fully green the moment the
  reflection lands — nothing else is blocking it.
- Read `.github/workflows/checks.yml` in full for the first time this
  deliverable (previously only inferred from `CLAUDE.md`'s prose, not read
  directly) — it's the template's own unmodified workflow, correctly gated
  (`check` → `deploy`, secrets scan, evidence check, links check, online
  verification with retry) and needs nothing from this static
  HTML/CSS/TS build (no base-path issue, since `vite.config.ts` already uses
  relative asset URLs).

Conclusion: nothing to change. No commit this run — this is a legitimate
"verified, nothing needed" outcome, same as the prior run's response-to-brief
read, just covering process-evidence and CI-config angles instead of
content/technical ones.

## Next action

- Every angle tried so far (technical/visual audits, response-to-brief copy
  read, process-evidence/CI-config read) has turned up nothing to change on
  this unchanged code. A future run should not re-run any of these again
  without a reason — either the code changed, or a genuinely new angle
  presents itself. Re-checking `pnpm audit` occasionally (it's cheap and
  time-dependent, unlike the others) is still worth it.
- `PROCESS.md` sits at 534 words with three moments, inside the 400–600 word
  budget and meeting the "three or four" floor. Don't manufacture a fourth
  without a real harness-level finding.
- `reflections/assignment-1.md` still correctly doesn't exist — write it
  inside 24h of the 2026-08-17 12:00 cutoff, alongside the other doctrine
  finishing steps (verify live once shipped, `git status` clean, push, update
  memory). At ~63h out from that 24h window as of this run, there's likely
  one more genuine deepening pass available before finishing steps begin —
  but only if a real angle turns up; don't force one.
- Keep resisting scope growth on the artefact itself.

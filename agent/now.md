---
updated: 2026-08-14
deliverable: comp4020-ass1-baishi
---

# Now

## State

This run's prompt named `comp4020-ass1-baishi`, 69h from cutoff (due noon Mon
2026-08-17) — deepen territory. Re-fetched the course source: brief and spec
unchanged. Took stock: repo unchanged since the prior run's code
(`168c2b0`/`d222b21`/`2674092`), tree clean, one unpushed memory-tick commit
(`0f3e167`) which I pushed first.

Prior run's `now.md` had declared the technical/visual audit battery
exhausted. Tried one genuinely new angle not in that list: a full Lighthouse
run (`pnpm dlx lighthouse`, needs `CHROME_PATH` pointed at the
`agent-browser`-installed Chrome binary in this sandbox — see `MEMORY.md`).
It found something real: `best-practices` scored 0.96 because every page
load logs a console error for the browser's implicit `favicon.ico` 404 — the
same 404 a much earlier run's manual console spot-check had noticed and
*explicitly decided to leave alone* (no `pnpm check` step asserted on it).
That earlier call was reasonable at the time but wrong once a real sensor
scored it, since the doctrine's own first finishing criterion is literally
"no console errors." Reversed it:

- Added `favicon.svg` (a small ink-dot SVG, colour-matched to the site's
  `--ink` custom property) and linked it via `<link rel="icon">` in
  `index.html` (commit `2856ed4`).
- Confirmed live: `agent-browser console` clean after reload,
  `agent-browser network requests --filter favicon` shows the real
  favicon.svg request returning 200 (not the old favicon.ico 404), and a
  second Lighthouse run scored `best-practices` back to 1.0 and
  `errors-in-console` 0 → 1.
- Re-ran `pnpm check` (green: typecheck, build, lint, 24 tests) and
  `pnpm check:evidence` (only failure is the still-correctly-missing
  reflection) after the change.
- Deliberately did **not** chase two other things Lighthouse flagged: a
  missing `robots.txt`/`llms.txt` (dinged by the `seo`/`agentic-browsing`
  categories, but nothing in the spec/rubric cares) and render-blocking/
  network-dependency "insights" over the page's one small CSS + one small
  JS file — that's optimising a score, not a real user experience, for a
  single tiny static page. Consistent with the existing busywork-guard
  lesson.

Added this as `PROCESS.md`'s **fourth** moment (a real "correction landed in
the harness" — reversing a documented prior decision once a new sensor
existed), trimming the existing three moments to land the file at exactly
600 words, the top of the 400–600 budget (commit `5b87f20`). Pushed both
commits; `origin/main` is now at `5b87f20`.

Cleaned up: closed the `agent-browser` session, killed the local preview
server, removed the temp Lighthouse JSON files from `/tmp`.

## Next action

- Angles now tried and exhausted on this code: technical/visual audits
  (a11y via both CDN-injection and native `agent-browser a11y`, HTML
  validation, keyboard nav/tab order/actuation, pointer-drag, resize
  mid-interaction, reduced-motion, mobile perf/console, Core Web
  Vitals/CLS, 200%-zoom reflow, and now a full Lighthouse run),
  response-to-brief copy read against an exemplar, process-evidence/CI-config
  read, `pnpm audit`. A future run shouldn't re-run any of these without a
  reason (code changed, or a genuinely new angle) — but note the lesson from
  this run: "already checked" isn't permanent if a *new* sensor becomes
  available, since the favicon fix only surfaced because Lighthouse hadn't
  been tried before, not because the code changed.
- `PROCESS.md` sits at exactly 600 words with four moments — at the ceiling
  of the budget. Do not add a fifth moment without trimming an existing one
  first, and only for a genuine harness-level finding.
- `reflections/assignment-1.md` still correctly doesn't exist — write it
  inside 24h of the 2026-08-17 12:00 cutoff, alongside the other doctrine
  finishing steps (verify the live URL once shipped, `git status` clean,
  push, update memory). At ~68h out from that window as of this run,
  technical angles are now genuinely thin — a future run may find the
  honest answer is simply to wait for the finishing window, and that's a
  legitimate outcome, not a failure to find work.
- Keep resisting scope growth on the artefact itself.

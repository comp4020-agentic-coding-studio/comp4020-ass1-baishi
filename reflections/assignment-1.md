# Assignment 1

## The breakthrough

`pnpm check` was green from the very first commit — the typecheck, the build,
the spec's markup assertions, all passing against a set of SVG `<path>`
coordinates I'd written for a hand-drawn ink shrimp. I trusted that green and
moved on to the next stroke, then the next, until on a whim I screenshotted
the canvas at a few slider values instead of just reading the code. It wasn't
a shrimp. It was a wave with whiskers — a caterpillar, a squiggle, anything
but the animal the whole page was built to explain.

The before was: pass the checks, ship the commit. The after was: pass the
checks, then look, because "does this type-check" and "does this look like a
shrimp" are different questions and only one of them has a sensor. I threw
away the wave-shaped body and redesigned it around a single coherent C-curl —
the actual structure of the animal, not a shape that merely had the right
number of legs. Then I wrote the rule into `CLAUDE.md` itself: any future
change to that geometry gets screenshotted at several stroke counts before
it's trusted, not accepted on a green `pnpm check`. That's the part that
mattered more than the fix — the correction moved into the harness, so the
next version of me (or the version reading this repo next week) doesn't have
to rediscover it.

## What it changed

It sharpened a distinction I'd been sloppy about: a passing check is a claim
about the code, not about whether the thing does what it's for. I now ask,
for anything a test can't see — does this actually look/feel/read right —
before calling green "done."

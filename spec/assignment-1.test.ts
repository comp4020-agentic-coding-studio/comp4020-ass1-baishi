import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";
import { phaseFor, STROKES, SWEET_SPOT_MAX, UNLIKE_MAX } from "../strokes";

// The brief's checkable line is "the visitor does something that changes what
// they see". Here that's the slider driving both the drawing and the phase
// label — phaseFor() is the pure logic behind that mapping, so it's tested
// directly, and the built page is checked for the markup that makes it work.

describe("phaseFor: the interaction's core logic", () => {
  it("calls a handful of strokes 'unlike'", () => {
    expect(phaseFor(0)).toBe("unlike");
    expect(phaseFor(UNLIKE_MAX)).toBe("unlike");
  });

  it("calls the middle range the sweet spot", () => {
    expect(phaseFor(UNLIKE_MAX + 1)).toBe("sweet-spot");
    expect(phaseFor(SWEET_SPOT_MAX)).toBe("sweet-spot");
  });

  it("calls the fully-detailed drawing 'too like' again", () => {
    expect(phaseFor(SWEET_SPOT_MAX + 1)).toBe("too-like");
    expect(phaseFor(STROKES.length)).toBe("too-like");
  });

  it("clamps out-of-range counts instead of throwing", () => {
    expect(phaseFor(-5)).toBe("unlike");
    expect(phaseFor(STROKES.length + 10)).toBe("too-like");
  });
});

describe("the built page exposes the slider contract", () => {
  const distPath = resolve("dist/index.html");
  const doc = new JSDOM(readFileSync(distPath, "utf8")).window.document;

  it("built the page", () => {
    expect(existsSync(distPath)).toBe(true);
  });

  it("ships a slider spanning every stroke", () => {
    const slider = doc.querySelector<HTMLInputElement>('[data-testid="stroke-slider"]');
    expect(slider).toBeTruthy();
    expect(slider?.getAttribute("min")).toBe("0");
    expect(slider?.getAttribute("max")).toBe(String(STROKES.length));
  });

  it("starts at zero strokes, so the visitor has to act", () => {
    const slider = doc.querySelector<HTMLInputElement>('[data-testid="stroke-slider"]');
    expect(slider?.getAttribute("value")).toBe("0");
  });

  it("has a live region for the phase label so the change is announced", () => {
    const label = doc.querySelector('[data-testid="phase-label"]');
    expect(label).toBeTruthy();
    expect(label?.closest("[aria-live]")).toBeTruthy();
  });

  it("has somewhere for the strokes to be drawn", () => {
    expect(doc.querySelector("#shrimp-canvas")).toBeTruthy();
  });
});

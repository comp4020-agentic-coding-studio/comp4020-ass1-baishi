// The data and logic behind the one interaction on this page: reveal an ink
// shrimp one brushstroke at a time and watch where recognition lives. Kept
// separate from main.ts (which only touches the DOM) so the interaction's
// actual contract — how many strokes, and which phase a count falls in — is a
// plain function spec/assignment-1.test.ts can call directly.

export type StrokeShape =
  | { kind: "path"; d: string }
  | { kind: "circle"; cx: number; cy: number; r: number };

export interface Stroke {
  id: string;
  shape: StrokeShape;
  width: number;
  fill?: string;
  // Offsets the whole stroke a few px, for the one stroke (body-outline)
  // that needs to read as a second, over-traced line rather than sit
  // exactly on top of the gesture it's duplicating.
  offset?: { dx: number; dy: number };
}

// Ordered from the gestural core a painter would lay down first to the
// over-specified detail that stiffens the same subject into a diagram.
export const STROKES: Stroke[] = [
  // -- the gestural core (1-6): what a few loaded brush strokes can carry --
  // A shrimp curls: head high on the right, back arching down through the
  // belly, tail hooking back up and to the left. That C-curve is what the
  // rest of the strokes hang off.
  {
    id: "body-main",
    shape: {
      kind: "path",
      d: "M 490,130 C 430,95 350,110 320,160 C 290,210 220,230 175,200 C 140,175 120,140 115,105",
    },
    width: 9,
  },
  {
    id: "head-rostrum",
    shape: { kind: "path", d: "M 488,122 C 500,110 512,104 524,100" },
    width: 5,
  },
  {
    id: "antenna-1",
    shape: { kind: "path", d: "M 485,115 C 520,90 565,50 615,15" },
    width: 2.5,
  },
  {
    id: "antenna-2",
    shape: { kind: "path", d: "M 485,128 C 515,145 548,178 585,215" },
    width: 2.5,
  },
  {
    id: "eye",
    shape: { kind: "circle", cx: 480, cy: 119, r: 4.5 },
    width: 0,
    fill: "currentColor",
  },
  {
    id: "tail-fan-basic",
    shape: {
      kind: "path",
      d: "M 115,105 L 92,78 M 117,108 L 88,100 M 119,113 L 93,132",
    },
    width: 3.5,
  },
  // -- the sweet spot (7-10): a little more life, still gesture --
  {
    id: "body-segment-1",
    shape: { kind: "path", d: "M 355,140 Q 362,158 352,174" },
    width: 3,
  },
  {
    id: "body-segment-2",
    shape: { kind: "path", d: "M 300,175 Q 308,192 297,207" },
    width: 3,
  },
  {
    id: "body-segment-3",
    shape: { kind: "path", d: "M 230,215 Q 238,230 226,242" },
    width: 3,
  },
  {
    id: "leg-cluster-impression",
    shape: {
      kind: "path",
      d: "M 300,195 L 291,213 M 275,205 L 267,222 M 250,212 L 242,228 M 225,213 L 217,229 M 200,208 L 193,224",
    },
    width: 2.5,
  },
  // -- over-elaboration (11-16): every part accounted for, the life gone --
  {
    id: "antenna-detail-ticks",
    shape: {
      kind: "path",
      d: "M 515,95 L 523,85 M 545,70 L 553,60 M 575,45 L 583,35",
    },
    width: 1.5,
  },
  {
    id: "tail-fan-full",
    shape: {
      kind: "path",
      d: "M 114,106 L 100,68 M 115,107 L 93,82 M 116,109 L 86,96 M 117,111 L 85,112 M 118,113 L 90,128 M 119,115 L 98,142",
    },
    width: 2.5,
  },
  {
    id: "leg-cluster-full",
    shape: {
      kind: "path",
      d: "M 400,150 L 393,172 M 375,165 L 367,186 M 350,178 L 342,198 M 325,190 L 317,210 M 300,198 L 292,217 M 275,205 L 267,223 M 250,208 L 242,225 M 225,205 L 217,222 M 200,198 L 193,215 M 175,188 L 169,204",
    },
    width: 2,
  },
  {
    id: "body-outline",
    shape: {
      kind: "path",
      d: "M 490,130 C 430,95 350,110 320,160 C 290,210 220,230 175,200 C 140,175 120,140 115,105",
    },
    width: 1.5,
    offset: { dx: 6, dy: 7 },
  },
  {
    id: "shading-hatch",
    shape: {
      kind: "path",
      d: "M 220,190 L 230,200 M 240,185 L 250,195 M 260,180 L 270,190 M 280,175 L 290,185 M 300,170 L 310,180 M 320,165 L 330,175 M 340,155 L 350,165 M 360,145 L 370,155",
    },
    width: 1.2,
  },
  {
    id: "eye-detail",
    shape: { kind: "circle", cx: 481.5, cy: 117.5, r: 1.5 },
    width: 0,
    fill: "#f5efe1",
  },
];

export type Phase = "unlike" | "sweet-spot" | "too-like";

// Below this many strokes, nothing on the canvas commits to being a shrimp.
export const UNLIKE_MAX = 3;
// Through this many, it reads as a shrimp without over-explaining itself.
// Above it, every part has been individually accounted for.
export const SWEET_SPOT_MAX = 10;

export function phaseFor(count: number, total: number = STROKES.length): Phase {
  const clamped = Math.max(0, Math.min(count, total));
  if (clamped <= UNLIKE_MAX) return "unlike";
  if (clamped <= SWEET_SPOT_MAX) return "sweet-spot";
  return "too-like";
}

export function labelFor(phase: Phase): string {
  switch (phase) {
    case "unlike":
      return "不似 — too few marks. Nothing here has committed to being a shrimp yet.";
    case "sweet-spot":
      return "妙在似与不似之间 — the marvel, between likeness and unlikeness.";
    case "too-like":
      return "太似 — every leg accounted for, and the life has gone out of it.";
  }
}

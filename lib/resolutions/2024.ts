import type { Resolution } from "./types";

const resolutions: Resolution[] = [
  {
    name: "Publish 1 Paper in a Math Journal",
    goal: 1,
    progress: 0,
    unit: "Paper",
    plural: "Papers",
  },
  {
    name: "Read 5 books",
    goal: 5,
    progress: 0,
    unit: "book",
    plural: "books",
  },
  {
    name: "Go on 10 camping/backpacking trips",
    goal: 10,
    progress: 0,
    unit: "camping trip",
    plural: "camping trips",
  },
  {
    name: "Squat my own weight",
    goal: 160,
    progress: 140,
    unit: "lb",
    plural: "lbs",
  },
  {
    name: "Create and order a PCB",
    goal: 1,
    progress: 0,
    unit: "PCB",
    plural: "PCBs",
  },
  {
    name: "Write and record one song",
    goal: 1,
    progress: 0,
    unit: "song",
    plural: "songs",
  },
  {
    name: "Go on two road trips",
    goal: 2,
    progress: 1,
    unit: "road trip",
    plural: "road trips",
  },
  {
    name: "Get VO2 max above 50",
    goal: 50,
    progress: 42,
    unit: "METS",
    plural: "METS",
  },
  {
    name: "Invest ██% of annual income",
    goal: 80,
    progress: Math.round((77 / 12) * 0 * 100),
    unit: "%",
    plural: "%",
    redacted: true,
  },
  {
    name: "Get monthly shopping budget lower than grocery budget",
    goal: 100,
    progress: 0,
    unit: "% of grocery",
    plural: "% of grocery",
    success: (value) => value < 100,
  },
];

export default { resolutions, year: "2024" };

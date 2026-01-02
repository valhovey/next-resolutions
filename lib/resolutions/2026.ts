import type { Resolution } from "./types";

const resolutions: Resolution[] = [
  {
    name: "Read 5 books",
    goal: 5,
    progress: 0,
    unit: "book",
    plural: "books",
  },
  {
    name: "Mount AllSky Camera",
    goal: 1,
    progress: 0,
    unit: "AllSky Camera",
    plural: "AllSky Cameras",
  },
  {
    name: "Go on 10 camping/backpacking trips",
    goal: 10,
    progress: 0,
    unit: "camping trip",
    plural: "camping trips",
  },
  {
    name: "Get IOTD, APOD, or a similar award",
    goal: 1,
    progress: 0,
    unit: "image",
    plural: "images",
  },
  {
    name: "Make 1 new friend",
    goal: 1,
    progress: 0,
    unit: "Friend",
    plural: "Friends",
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
    progress: 0,
    unit: "road trip",
    plural: "road trips",
  },
  {
    name: "Give at least one talk",
    goal: 1,
    progress: 0,
    unit: "talk",
    plural: "talks",
  },
  {
    name: "Reach total investment goal",
    goal: 100,
    progress: 84,
    unit: "%",
    plural: "%",
    redacted: true,
  },
];

export default { resolutions, year: "2026" };

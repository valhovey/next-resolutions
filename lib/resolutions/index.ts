import type { Resolution, Resolutions } from "./types";
import twentySix from "./2026";

const years: Resolutions[] = [twentySix];

export const isCompleted = (resolution: Resolution): boolean =>
  resolution?.success
    ? resolution.success(resolution.progress)
    : resolution.progress >= resolution.goal;

export default years;

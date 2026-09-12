import { nearbyCommunities } from "@/lib/nav";
import { site } from "@/lib/site";

const nearbyZips = new Set<string>(nearbyCommunities.map((town) => town.zip));

export type ServiceAreaKind = "primary" | "nearby" | "other";

export function classifyZip(zip: string | null): ServiceAreaKind | null {
  if (!zip) return null;
  if (zip === site.zip) return "primary";
  if (nearbyZips.has(zip)) return "nearby";
  return "other";
}

export function isValidZip(value: string) {
  return /^\d{5}$/.test(value);
}

export function zipCoverageLine(zip: string | null) {
  const kind = classifyZip(zip);
  if (kind === "primary") {
    return `${zip} is the Freeport service area.`;
  }
  if (kind === "nearby") {
    return `${zip} is near Freeport — call to confirm a technician can take the job.`;
  }
  if (kind === "other" && zip) {
    return `Call to confirm coverage for ${zip}.`;
  }
  return null;
}

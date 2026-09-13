import { guides, type Guide } from "@/content/guides";

const SERVICE_GUIDE_RULES: Array<{
  test: (slug: string) => boolean;
  slugs: string[];
}> = [
  {
    test: (slug) => slug.startsWith("ac-") || slug.includes("commercial-ac"),
    slugs: ["ac-blowing-warm-air", "ac-freezing-up", "ac-constantly-running"],
  },
  {
    test: (slug) =>
      slug.startsWith("furnace-") ||
      slug.startsWith("heating-") ||
      slug.includes("commercial-heating"),
    slugs: [
      "furnace-not-heating",
      "furnace-short-cycling",
      "furnace-replacement-signals",
    ],
  },
  {
    test: (slug) =>
      slug.startsWith("hvac-repair") ||
      slug.includes("emergency") ||
      slug.includes("residential-hvac"),
    slugs: ["furnace-not-heating", "ac-blowing-warm-air", "hvac-strange-noises"],
  },
  {
    test: (slug) => slug.startsWith("hvac-maintenance"),
    slugs: ["hvac-maintenance-checklist"],
  },
  {
    test: (slug) => slug.startsWith("hvac-replacement"),
    slugs: ["furnace-replacement-signals", "hvac-maintenance-checklist"],
  },
  {
    test: (slug) => slug.includes("heat-pump"),
    slugs: ["heat-pump-basics-northern-illinois"],
  },
  {
    test: (slug) => slug.includes("mini-split") || slug.includes("ductless"),
    slugs: ["heat-pump-basics-northern-illinois", "uneven-temperatures"],
  },
  {
    test: (slug) =>
      slug.includes("indoor-air") ||
      slug.includes("filtration") ||
      slug.includes("humid"),
    slugs: ["indoor-air-quality-closed-homes"],
  },
  {
    test: (slug) => slug.startsWith("commercial"),
    slugs: ["hvac-maintenance-checklist", "uneven-temperatures"],
  },
];

export function relatedGuidesForService(slug: string): Guide[] {
  const seen = new Set<string>();
  const matched: Guide[] = [];

  for (const rule of SERVICE_GUIDE_RULES) {
    if (!rule.test(slug)) continue;
    for (const guideSlug of rule.slugs) {
      if (seen.has(guideSlug)) continue;
      const guide = guides.find((item) => item.slug === guideSlug);
      if (!guide) continue;
      seen.add(guideSlug);
      matched.push(guide);
    }
  }

  return matched.slice(0, 3);
}

import { guides, type Guide } from "@/content/guides";

const SERVICE_GUIDE_RULES: Array<{
  test: (slug: string) => boolean;
  slugs: string[];
}> = [
  {
    test: (slug) => slug.startsWith("ac-repair"),
    slugs: ["ac-blowing-warm-air", "ac-not-turning-on", "poor-airflow"],
  },
  {
    test: (slug) => slug.startsWith("ac-installation"),
    slugs: ["prepare-ac-after-winter", "ac-blowing-warm-air", "furnace-replacement-signals"],
  },
  {
    test: (slug) => slug.startsWith("furnace-repair"),
    slugs: ["furnace-not-heating", "furnace-blowing-cold-air", "furnace-short-cycling"],
  },
  {
    test: (slug) => slug.startsWith("furnace-installation"),
    slugs: ["furnace-replacement-signals", "furnace-not-heating", "carbon-monoxide-safety"],
  },
  {
    test: (slug) => slug.startsWith("heating-repair"),
    slugs: ["no-heat-in-house", "furnace-not-heating", "thermostat-not-working"],
  },
  {
    test: (slug) => slug.includes("emergency"),
    slugs: ["furnace-not-heating", "no-heat-in-house", "carbon-monoxide-safety"],
  },
  {
    test: (slug) => slug.startsWith("hvac-maintenance"),
    slugs: ["changing-a-furnace-filter", "prepare-ac-after-winter", "furnace-short-cycling"],
  },
  {
    test: (slug) => slug.includes("heat-pump"),
    slugs: ["heat-pump-basics-northern-illinois", "no-heat-in-house", "thermostat-not-working"],
  },
  {
    test: (slug) => slug.includes("mini-split") || slug.includes("ductless"),
    slugs: ["uneven-temperatures", "heat-pump-basics-northern-illinois", "ac-not-turning-on"],
  },
  {
    test: (slug) => slug.includes("indoor-air"),
    slugs: ["changing-a-furnace-filter", "poor-airflow", "carbon-monoxide-safety"],
  },
  {
    test: (slug) => slug.startsWith("commercial"),
    slugs: ["no-heat-in-house", "ac-blowing-warm-air", "hvac-strange-noises"],
  },
  {
    test: (slug) => slug.startsWith("residential"),
    slugs: ["uneven-temperatures", "furnace-not-heating", "ac-blowing-warm-air"],
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

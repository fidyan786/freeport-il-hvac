import { guides, type Guide } from "@/content/guides";

const SERVICE_GUIDE_RULES: Array<{
  test: (slug: string) => boolean;
  slugs: string[];
}> = [
  {
    test: (slug) => slug.startsWith("ac-repair"),
    slugs: ["water-under-the-air-conditioner", "ac-blowing-warm-air", "ac-not-turning-on", "freeport-summer-humidity-and-ac-runtime"],
  },
  {
    test: (slug) => slug.startsWith("ac-installation"),
    slugs: ["prepare-ac-after-winter", "ac-blowing-warm-air", "furnace-replacement-signals"],
  },
  {
    test: (slug) => slug.startsWith("furnace-repair"),
    slugs: ["when-a-furnace-locks-out", "furnace-not-heating", "high-efficiency-furnace-condensate-problems", "furnace-short-cycling"],
  },
  {
    test: (slug) => slug.startsWith("furnace-installation"),
    slugs: ["furnace-replacement-signals", "furnace-not-heating", "carbon-monoxide-safety"],
  },
  {
    test: (slug) => slug.startsWith("heating-repair"),
    slugs: ["how-urgent-a-no-heat-night-is", "no-heat-in-house", "hot-water-boilers-in-older-houses", "thermostat-not-working"],
  },
  {
    test: (slug) => slug.includes("emergency"),
    slugs: ["how-urgent-a-no-heat-night-is", "carbon-monoxide-alarms-for-gas-heat", "no-heat-in-house", "carbon-monoxide-safety"],
  },
  {
    test: (slug) => slug.startsWith("hvac-maintenance"),
    slugs: ["pre-winter-furnace-checklist", "what-a-heating-maintenance-visit-covers", "changing-a-furnace-filter", "prepare-ac-after-winter"],
  },
  {
    test: (slug) => slug.includes("heat-pump"),
    slugs: ["cold-climate-heat-pumps-northern-illinois", "dual-fuel-heat-pump-and-gas-furnace", "heat-pump-basics-northern-illinois", "thermostat-setbacks-on-a-cold-night"],
  },
  {
    test: (slug) => slug.includes("mini-split") || slug.includes("ductless"),
    slugs: ["ductless-for-one-cold-room", "why-an-upstairs-bedroom-stays-cold", "cold-climate-heat-pumps-northern-illinois", "uneven-temperatures"],
  },
  {
    test: (slug) => slug.includes("indoor-air"),
    slugs: ["dry-winter-air-in-a-freeport-house", "ventilation-and-combustion-air-in-a-tight-house", "changing-a-furnace-filter", "carbon-monoxide-alarms-for-gas-heat"],
  },
  {
    test: (slug) => slug.startsWith("commercial"),
    slugs: ["no-heat-in-house", "ac-blowing-warm-air", "hvac-strange-noises"],
  },
  {
    test: (slug) => slug.startsWith("residential"),
    slugs: ["why-an-upstairs-bedroom-stays-cold", "what-to-fix-before-you-replace-hvac-equipment", "uneven-temperatures", "ducts-in-basements-and-cold-attics"],
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

  return matched.slice(0, 4);
}

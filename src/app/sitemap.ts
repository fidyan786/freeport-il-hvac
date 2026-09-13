import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { indexablePaths } from "@/lib/nav";
import { getPublicOrigin } from "@/lib/site";

const guideDates = new Map(
  guides.map((guide) => [guide.href, guide.datePublished] as const),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getPublicOrigin();
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of indexablePaths) {
    const url = `${base}${path}`;
    if (seen.has(url)) continue;
    seen.add(url);
    const published = guideDates.get(path);
    entries.push(
      published ? { url, lastModified: published } : { url },
    );
  }

  return entries;
}

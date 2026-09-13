import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { indexablePaths } from "@/lib/nav";
import { getPublicOrigin } from "@/lib/site";

const guideDates = new Map(
  guides.map((guide) => [guide.href, guide.datePublished] as const),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getPublicOrigin();

  return indexablePaths.map((path) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${base}${path}`,
    };
    const published = guideDates.get(path);
    if (published) {
      entry.lastModified = published;
    }
    return entry;
  });
}

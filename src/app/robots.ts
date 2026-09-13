import type { MetadataRoute } from "next";
import { getPublicOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = getPublicOrigin();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

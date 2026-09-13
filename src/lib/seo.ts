import type { Metadata } from "next";
import { BRAND, getSiteUrl, site } from "@/lib/site";

export function absoluteUrl(path = "/", options?: { asset?: boolean }) {
  const base = getSiteUrl();
  if (path === "/" || path === "") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (options?.asset) {
    return `${base}${normalized.replace(/\/$/, "")}`;
  }
  return `${base}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}

export const SOCIAL_IMAGE = {
  url: absoluteUrl("/opengraph-image/"),
  width: 1200,
  height: 630,
  alt: `${BRAND.name} — heating and cooling in ${site.city}, ${site.state}`,
} as const;

function brandedTitle(title: string) {
  if (title.includes(BRAND.name) || title.includes(BRAND.shortName)) {
    return title;
  }
  return `${title} | ${BRAND.shortName}`;
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = brandedTitle(title);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: site.businessName,
      title: fullTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}

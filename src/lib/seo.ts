import type { Metadata } from "next";
import { getSiteUrl, site } from "@/lib/site";

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const brand = site.businessName;
  const ogTitle = title.includes(site.city) ? title : `${title} | ${site.city}, ${site.stateCode}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: brand,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

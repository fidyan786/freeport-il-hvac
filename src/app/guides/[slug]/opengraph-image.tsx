import { getGuide, guides } from "@/content/guides";
import { createOgImage, ogAlt, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-template";

export const dynamic = "force-static";

export const alt = ogAlt("Freeport HVAC guide");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  return createOgImage({
    title: guide?.metaTitle ?? "HVAC guide for Freeport, IL",
  });
}

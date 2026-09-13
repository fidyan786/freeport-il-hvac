import { getGuide } from "@/content/guides";
import { createOgImage, ogAlt, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-template";

export const alt = ogAlt("Freeport HVAC guide");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

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

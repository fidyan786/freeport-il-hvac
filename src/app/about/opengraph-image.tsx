import { createOgImage, ogAlt, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-template";

export const dynamic = "force-static";

export const alt = ogAlt("About this Freeport heating and cooling website");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return createOgImage({
    title: "About this Freeport heating and cooling website",
  });
}

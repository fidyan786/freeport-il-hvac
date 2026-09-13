import { createOgImage, ogAlt, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-template";

export const alt = ogAlt("HVAC contractor in Freeport, IL");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return createOgImage({
    title: "HVAC contractor in Freeport, IL",
  });
}

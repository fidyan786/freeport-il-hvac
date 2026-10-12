import { createOgImage, ogAlt, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-template";

export const dynamic = "force-static";

export const alt = ogAlt("Reliable heating and cooling for Freeport homes.");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpenGraphImage() {
  return createOgImage({
    title: "Reliable heating and cooling for Freeport homes.",
  });
}

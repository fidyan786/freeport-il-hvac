import { createOgImage, ogAlt, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-template";

export const alt = ogAlt("Contact Millrace Heating & Air in Freeport");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return createOgImage({
    title: "Contact a Freeport HVAC company",
  });
}

import { getService } from "@/content/services";
import { createOgImage, ogAlt, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-template";

export const alt = ogAlt("HVAC service in Freeport, IL");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  return createOgImage({
    title: service
      ? `${service.navLabel} in Freeport, IL`
      : "HVAC service in Freeport, IL",
  });
}

import { ImageResponse } from "next/og";
import { BRAND_COLORS } from "@/lib/brand";
import { BRAND, site } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function ogAlt(title?: string) {
  return title
    ? `${title} — ${BRAND.name}`
    : `${BRAND.name} — HVAC service in ${site.city}, ${site.state}`;
}

export function createOgImage({
  eyebrow = `${site.city.toUpperCase()}, ILLINOIS · ${site.zip}`,
  kicker = "MILLRACE HEATING & AIR",
  title,
}: {
  eyebrow?: string;
  kicker?: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BRAND_COLORS.navy,
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 5,
              color: BRAND_COLORS.brass,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              width: 64,
              height: 64,
              background: BRAND_COLORS.cream,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 28,
                height: 20,
                background: BRAND_COLORS.ember,
                clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: BRAND_COLORS.brass,
              letterSpacing: 4,
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 52 ? 44 : 54,
              lineHeight: 1.15,
              maxWidth: 980,
              marginTop: 16,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

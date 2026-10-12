import { ImageResponse } from "next/og";
import { BRAND_COLORS } from "@/lib/brand";
import { BRAND, phoneDisplayLabel, site } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function ogAlt(title?: string) {
  return title
    ? `${title} — ${BRAND.name}`
    : `${BRAND.name} — heating and cooling help in ${site.city}, ${site.state}`;
}

export function createOgImage({
  eyebrow = `${site.city}, Illinois · ${site.zip}`,
  title,
}: {
  eyebrow?: string;
  kicker?: string;
  title: string;
}) {
  const phone = phoneDisplayLabel();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F7F8FA",
          color: BRAND_COLORS.navy,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: BRAND_COLORS.navy,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              marginRight: 24,
            }}
          >
            <div
              style={{
                width: 36,
                height: 28,
                border: "4px solid white",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <div style={{ width: 8, height: 12, background: BRAND_COLORS.ember }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 42, fontWeight: 700 }}>
              {BRAND.name}
            </div>
            <div style={{ display: "flex", fontSize: 24, marginTop: 4 }}>{eyebrow}</div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 48 : 60, lineHeight: 1.15, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: BRAND_COLORS.ember }}>
          {phone}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

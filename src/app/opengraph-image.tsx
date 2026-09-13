import { ImageResponse } from "next/og";
import { BRAND, site } from "@/lib/site";

export const alt = `${BRAND.name} — HVAC service in ${site.city}, ${site.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1c1e1c",
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
            fontSize: 22,
            letterSpacing: 6,
            color: "#b9a48c",
          }}
        >
          {`${site.city.toUpperCase()}, ILLINOIS · 61032`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#8a5a3c",
              letterSpacing: 4,
            }}
          >
            MILLRACE HEATING & AIR
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              lineHeight: 1.15,
              maxWidth: 980,
              marginTop: 16,
            }}
          >
            Reliable heating and cooling for Freeport homes.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

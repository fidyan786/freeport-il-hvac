import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `HVAC service in ${site.city}, ${site.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c2238",
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
            color: "#c45c26",
          }}
        >
          {`${site.city.toUpperCase()}, ILLINOIS · 61032`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            Furnace and AC service for Stephenson County winters.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {`Call ${site.phoneDisplay}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { BRAND_COLORS } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BRAND_COLORS.navy,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 118,
            height: 118,
            border: "8px solid #F8F6F1",
            borderRadius: 59,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 52,
              height: 38,
              background: BRAND_COLORS.ember,
              clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}

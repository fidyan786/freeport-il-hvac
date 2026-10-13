import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/Logo";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: 32, height: 32 }}>
        <LogoMark />
      </div>
    ),
    size,
  );
}

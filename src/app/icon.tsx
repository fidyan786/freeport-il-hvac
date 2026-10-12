import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#123047",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 16,
            height: 12,
            borderTop: "2px solid white",
            borderLeft: "2px solid white",
            borderRight: "2px solid white",
            borderBottom: "2px solid white",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 4, height: 6, background: "#9A3412" }} />
        </div>
      </div>
    ),
    size,
  );
}

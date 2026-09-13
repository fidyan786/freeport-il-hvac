"use client";

import { BRAND_COLORS } from "@/lib/brand";
import { phoneDisplayLabel } from "@/lib/site";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, serif",
          background: BRAND_COLORS.cream,
          color: BRAND_COLORS.ink,
        }}
      >
        <main style={{ maxWidth: 640, margin: "4rem auto", padding: "0 1.25rem" }}>
          <h1>The site could not load</h1>
          <p>
            Please try again, or use {phoneDisplayLabel()} for HVAC help in
            Freeport, Illinois.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              background: BRAND_COLORS.ember,
              color: "white",
              border: 0,
              borderRadius: 6,
              padding: "0.85rem 1.25rem",
              fontWeight: 600,
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}

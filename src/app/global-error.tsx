"use client";

import { BRAND_COLORS } from "@/lib/brand";
import { phoneDisplayLabel, phoneHref } from "@/lib/site";

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
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontSize: "18px",
          background: BRAND_COLORS.cream,
          color: BRAND_COLORS.ink,
        }}
      >
        <main style={{ maxWidth: 640, margin: "4rem auto", padding: "0 1.25rem" }}>
          <h1>The site could not load</h1>
          <p>
            Please try again, or call {phoneDisplayLabel()} to be connected with
            a local heating and cooling professional in Freeport, Illinois.
          </p>
          {phoneHref() ? (
            <p>
              <a href={phoneHref() ?? undefined} data-cta-location="inline">
                {phoneDisplayLabel()}
              </a>
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => reset()}
            style={{
              background: BRAND_COLORS.navy,
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

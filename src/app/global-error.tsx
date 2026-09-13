"use client";

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
          background: "#f7f3ec",
          color: "#1a1c19",
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
              background: "#c45c26",
              color: "white",
              border: 0,
              padding: "0.85rem 1.25rem",
              fontWeight: 600,
              borderRadius: 999,
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}

import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="32" height="32" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="16" fill="#123047" />
        <path d="M14 36.4 32 18.6 50 36.4V52.6H14Z" fill="#F6F1E8" />
        <path
          d="M23.6 23.2c.4 2.5-1.5 3.7-1.5 6 0 2.1 1.5 3.5 3.4 3.5s3.4-1.5 3.4-3.6c0-2.7-2.2-4-2.2-6.6 0 .2-2.6.2-3.1.7Z"
          fill="#E4571A"
        />
        <path
          d="M43.2 31.1 44.45 35.03 48.48 34.15 45.7 37.2 48.48 40.25 44.45 39.37 43.2 43.3 41.95 39.37 37.92 40.25 40.7 37.2 37.92 34.15 41.95 35.03Z"
          fill="#1C4A66"
        />
        <path d="M29.3 43.4h5.4v9.2h-5.4z" fill="#123047" />
      </svg>
    ),
    size,
  );
}

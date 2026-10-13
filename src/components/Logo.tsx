const MARK_FLAME =
  "M23.6 23.2c.4 2.5-1.5 3.7-1.5 6 0 2.1 1.5 3.5 3.4 3.5s3.4-1.5 3.4-3.6c0-2.7-2.2-4-2.2-6.6 0 .2-2.6.2-3.1.7Z";
const MARK_SNOW =
  "M43.2,31.1L44.45,35.03L48.48,34.15L45.7,37.2L48.48,40.25L44.45,39.37L43.2,43.3L41.95,39.37L37.92,40.25L40.7,37.2L37.92,34.15L41.95,35.03Z";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="16" fill="#071422" />
      <rect
        x="1.4"
        y="1.4"
        width="61.2"
        height="61.2"
        rx="14.6"
        fill="none"
        stroke="#22D3EE"
        strokeOpacity="0.85"
        strokeWidth="1.4"
      />
      <path
        d="M16 17.2c5.2-4.4 26.8-4.4 32 0"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M14 36.4 32 18.6 50 36.4V52.6H14Z" fill="#E8F7FB" />
      <path d={MARK_FLAME} fill="#E85D04" />
      <path d={MARK_SNOW} fill="#0891B2" />
      <path d="M29.3 43.4h5.4v9.2h-5.4z" fill="#071422" />
    </svg>
  );
}

export function Logo({
  compact = false,
  decorative = false,
  invert = false,
  stacked = false,
}: {
  compact?: boolean;
  decorative?: boolean;
  invert?: boolean;
  stacked?: boolean;
}) {
  const name = invert ? "text-white" : "text-navy";
  const sub = invert ? "text-brass" : "text-ember";

  return (
    <span
      className={
        stacked
          ? "inline-flex flex-col items-center gap-2 text-center"
          : "flex min-w-0 items-center gap-2.5"
      }
      aria-hidden={decorative || undefined}
    >
      <LogoMark
        className={
          compact
            ? "logo-mark h-9 w-9 shrink-0"
            : "logo-mark h-11 w-11 shrink-0"
        }
      />
      <span className={stacked ? "leading-tight" : "min-w-0 leading-none"}>
        <span className={`wordmark-name block truncate ${name}`}>Millrace</span>
        <span className={`wordmark-sub block truncate ${sub}`}>
          Heating & Air
        </span>
      </span>
    </span>
  );
}

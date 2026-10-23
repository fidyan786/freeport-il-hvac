export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="18" fill="#14392b" />
      <rect
        x="1.35"
        y="1.35"
        width="61.3"
        height="61.3"
        rx="16.6"
        fill="none"
        stroke="#E3C27A"
        strokeWidth="1.5"
      />
      <path
        d="M18.6 45.8c.4-6.6 4.6-8.8 4.6-15.4 0-3.4-1.8-5.8-3.2-8.8 1.1 2.4 2.2 3.8 2.2 6 0 2-1.1 3.2-1.1 4.8 1.7-1.1 4.2-.9 5.8.6 2 1.8 3.1 4.6 3.1 7.6 0 4.2-3.1 7.4-7 7.4-3.3 0-4.8-1.4-4.4-2.2z"
        fill="#C9A24A"
      />
      <g
        fill="none"
        stroke="#F3E6C4"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform="translate(45 32)"
      >
        <path d="M0-10.5V10.5" />
        <path d="M-9.1-5.25 9.1 5.25" />
        <path d="M-9.1 5.25 9.1-5.25" />
        <path d="M0-10.5 2.1-8.2M0-10.5-2.1-8.2" />
        <path d="M0 10.5 2.1 8.2M0 10.5-2.1 8.2" />
        <path d="M-9.1-5.25-6.6-6.3M-9.1-5.25-7.8-3" />
        <path d="M9.1 5.25 6.6 6.3M9.1 5.25 7.8 3" />
        <path d="M9.1-5.25 6.6-6.3M9.1-5.25 7.8-3" />
        <path d="M-9.1 5.25-6.6 6.3M-9.1 5.25-7.8 3" />
      </g>
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

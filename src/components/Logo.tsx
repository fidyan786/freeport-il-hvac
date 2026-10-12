export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="8" fill="#123047" />
      <path
        d="M32 14 50 30h-6v20H20V30h-6Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <rect x="29" y="38" width="6" height="12" fill="#9A3412" />
    </svg>
  );
}

export function Logo({
  compact = false,
  decorative = false,
}: {
  compact?: boolean;
  decorative?: boolean;
  invert?: boolean;
}) {
  return (
    <span
      className="flex min-w-0 items-center gap-2.5"
      aria-hidden={decorative || undefined}
    >
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-lg font-semibold text-navy">
          Millrace
        </span>
        <span className="block truncate text-base text-navy">
          {compact ? "Heating & Air" : "Heating & Air"}
        </span>
      </span>
    </span>
  );
}

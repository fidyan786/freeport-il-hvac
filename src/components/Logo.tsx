export function LogoMark({
  invert = false,
  className = "h-10 w-10",
}: {
  invert?: boolean;
  className?: string;
}) {
  const disc = invert ? "#f7f6f3" : "#1c1e1c";
  const line = invert ? "#1c1e1c" : "#f7f6f3";
  const door = invert ? "#1c1e1c" : "#f7f3ec";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="31" fill={disc} />
      <g fill="none" stroke={line} strokeWidth="2.1" strokeLinecap="round">
        <circle cx="32" cy="32" r="17.5" />
        <circle cx="32" cy="32" r="5.5" />
        <path d="M32 14.5v12.2M32 37.3v12.2M14.5 32h12.2M37.3 32h12.2" />
        <path d="M20.1 20.1l8.6 8.6M35.3 35.3l8.6 8.6M20.1 43.9l8.6-8.6M35.3 28.7l8.6-8.6" />
      </g>
      <path d="M24.2 33.4 32 26.2l7.8 7.2v7.2H24.2z" fill="#8a5a3c" />
      <rect x="30.2" y="35.4" width="3.6" height="5.2" fill={door} />
    </svg>
  );
}

export function Logo({
  invert = false,
  compact = false,
  decorative = false,
}: {
  invert?: boolean;
  compact?: boolean;
  decorative?: boolean;
}) {
  return (
    <span
      className="flex min-w-0 items-center gap-2.5"
      aria-hidden={decorative || undefined}
    >
      <LogoMark invert={invert} className="h-10 w-10 shrink-0" />
      <span className="min-w-0">
        <span
          className={`block truncate text-[1.05rem] leading-none font-semibold tracking-[0.01em] sm:text-lg ${invert ? "text-white" : "text-spruce"}`}
        >
          Millrace
        </span>
        <span className="mt-1 block text-[0.62rem] leading-none font-semibold tracking-[0.18em] text-copper uppercase">
          {compact ? "HVAC · 61032" : "Heating & Air"}
        </span>
      </span>
    </span>
  );
}

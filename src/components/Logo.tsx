export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="31" fill="currentColor" />
      <g fill="none" stroke="#f7f3ec" strokeWidth="2.1" strokeLinecap="round">
        <circle cx="32" cy="32" r="17.5" />
        <circle cx="32" cy="32" r="5.5" />
        <path d="M32 14.5v12.2M32 37.3v12.2M14.5 32h12.2M37.3 32h12.2" />
        <path d="M20.1 20.1l8.6 8.6M35.3 35.3l8.6 8.6M20.1 43.9l8.6-8.6M35.3 28.7l8.6-8.6" />
      </g>
      <path
        d="M24.2 33.4 32 26.2l7.8 7.2v7.2H24.2z"
        fill="#c45c26"
      />
      <rect x="30.2" y="35.4" width="3.6" height="5.2" fill="#f7f3ec" />
    </svg>
  );
}

export function Logo({
  invert = false,
  compact = false,
}: {
  invert?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <LogoMark
        className={`h-10 w-10 shrink-0 ${invert ? "text-[#0c221c]" : "text-spruce"}`}
      />
      <span className="min-w-0">
        <span
          className={`block truncate text-[1.05rem] leading-none font-semibold tracking-[0.01em] sm:text-lg ${invert ? "text-white" : "text-spruce"}`}
        >
          Millrace
        </span>
        <span
          className={`mt-1 block text-[0.62rem] leading-none font-semibold tracking-[0.18em] uppercase ${invert ? "text-copper" : "text-copper"}`}
        >
          {compact ? "HVAC · 61032" : "Heating & Air"}
        </span>
      </span>
    </span>
  );
}

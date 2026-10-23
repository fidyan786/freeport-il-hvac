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
      <rect width="64" height="64" rx="15" fill="#14392b"/>
      <rect x="1" y="1" width="62" height="62" rx="14" fill="none" stroke="#c9a24a" strokeOpacity=".45" strokeWidth="1.2"/>
      <circle cx="32" cy="26.5" r="12.5" fill="none" stroke="#c9a24a" strokeWidth="2.8"/>
      <circle cx="32" cy="26.5" r="7.9" fill="none" stroke="#c9a24a" strokeWidth="1.4"/>
      <path d="M35.40 26.50L44.50 26.50" stroke="#c9a24a" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M45.70 26.50L49.50 26.50L49.50 28.90" fill="none" stroke="#c9a24a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34.40 28.90L40.84 35.34" stroke="#c9a24a" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M41.69 36.19L44.37 38.87L42.68 40.57" fill="none" stroke="#c9a24a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32.00 29.90L32.00 39.00" stroke="#c9a24a" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M32.00 40.20L32.00 44.00L29.60 44.00" fill="none" stroke="#c9a24a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.60 28.90L23.16 35.34" stroke="#c9a24a" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M22.31 36.19L19.63 38.87L17.93 37.18" fill="none" stroke="#c9a24a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.60 26.50L19.50 26.50" stroke="#c9a24a" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M18.30 26.50L14.50 26.50L14.50 24.10" fill="none" stroke="#c9a24a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.60 24.10L23.16 17.66" stroke="#c9a24a" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M22.31 16.81L19.63 14.13L21.32 12.43" fill="none" stroke="#c9a24a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32.00 23.10L32.00 14.00" stroke="#c9a24a" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M32.00 12.80L32.00 9.00L34.40 9.00" fill="none" stroke="#c9a24a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34.40 24.10L40.84 17.66" stroke="#c9a24a" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M41.69 16.81L44.37 14.13L46.07 15.82" fill="none" stroke="#c9a24a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="32" cy="26.5" r="3.2" fill="#c9a24a"/>
      <path d="M9 53.5c3.8-3.4 7.5-3.4 11.3 0s7.5 3.4 11.3 0 7.5-3.4 11.3 0 7.5 3.4 11.3 0" fill="none" stroke="#f3e6c4" strokeWidth="2.8" strokeLinecap="round"/>
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

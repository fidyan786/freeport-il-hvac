import { BRAND_COLORS } from "@/lib/brand";

export function LogoMark({
  invert = false,
  className = "h-10 w-10",
}: {
  invert?: boolean;
  className?: string;
}) {
  const fill = invert ? BRAND_COLORS.cream : BRAND_COLORS.navy;
  const line = invert ? BRAND_COLORS.navy : BRAND_COLORS.cream;
  const door = invert ? BRAND_COLORS.navy : BRAND_COLORS.cream;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="12" fill={fill} />
      <g
        fill="none"
        stroke={line}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="32" r="16" />
        <circle cx="32" cy="32" r="5.25" />
        <path d="M32 16v10.75M32 37.25V48M18.14 24l9.32 5.38M36.54 34.62l9.32 5.38M18.14 40l9.32-5.38M36.54 29.38l9.32-5.38" />
      </g>
      <path
        d="M24.4 33.6 32 26.6l7.6 7v7.6H24.4z"
        fill={BRAND_COLORS.ember}
      />
      <rect x="30.1" y="35.6" width="3.8" height="5.6" fill={door} />
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
      <LogoMark invert={invert} className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
      <span className="min-w-0">
        <span
          className={`block truncate font-serif text-[1.2rem] leading-none font-semibold tracking-tight sm:text-[1.32rem] ${invert ? "text-white" : "text-navy"}`}
        >
          Millrace
        </span>
        <span
          className={`mt-1 block text-[0.62rem] leading-none font-semibold tracking-[0.18em] uppercase ${invert ? "text-brass" : "text-ember"}`}
        >
          {compact ? "Heating & Air" : "Heating & Air · Freeport"}
        </span>
      </span>
    </span>
  );
}

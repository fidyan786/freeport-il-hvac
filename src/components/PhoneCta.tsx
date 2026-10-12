import { PhoneIcon } from "@/components/Icons";
import { ctaHref, phoneDisplayLabel, primaryCtaLabel } from "@/lib/site";

export type CallLocation = "header" | "hero" | "sticky" | "footer" | "inline";

type Props = {
  children?: React.ReactNode;
  className?: string;
  context: string;
  location?: CallLocation;
  variant?: "primary" | "secondary" | "light" | "ghost" | "text";
  "aria-label"?: string;
  iconOnly?: boolean;
};

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-brand bg-ember px-5 py-3 text-center text-base font-semibold text-white hover:bg-ember-dark",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-brand border border-navy/20 bg-white px-5 py-3 text-center text-base font-semibold text-navy hover:border-navy hover:bg-paper",
  light:
    "inline-flex items-center justify-center gap-2 rounded-brand bg-white px-5 py-3 text-center text-base font-semibold text-navy hover:bg-paper",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-brand border border-navy/20 px-5 py-3 text-center text-base font-semibold text-navy hover:bg-paper",
  text: "inline-flex items-center gap-2 text-base font-semibold text-navy underline-offset-4 hover:underline",
};

function isTelUriText(value: unknown) {
  return typeof value === "string" && /^\s*tel:/i.test(value);
}

function visibleLabel(children?: React.ReactNode) {
  if (children === undefined || children === null || children === false || children === "") {
    return primaryCtaLabel();
  }
  if (isTelUriText(children)) {
    return primaryCtaLabel();
  }
  return children;
}

export function PhoneCta({
  children,
  className = "",
  context,
  location = "inline",
  variant = "primary",
  iconOnly = false,
  "aria-label": ariaLabel,
}: Props) {
  const href = ctaHref();
  const tel = href.startsWith("tel:");
  const label = primaryCtaLabel();
  const accessibleName = ariaLabel ?? label;

  return (
    <a
      href={href}
      className={`${variants[variant]} min-h-12 ${className}`}
      data-cta={context}
      data-cta-location={location}
      data-cta-type={tel ? "phone" : "contact-fallback"}
      aria-label={iconOnly ? accessibleName : ariaLabel}
    >
      {iconOnly ? (
        <>
          <PhoneIcon className="h-5 w-5" />
          <span className="sr-only">{accessibleName}</span>
        </>
      ) : (
        visibleLabel(children)
      )}
    </a>
  );
}

export function PhonePlain({
  className = "",
  location = "inline",
}: {
  className?: string;
  location?: CallLocation;
}) {
  const href = ctaHref();
  const label = phoneDisplayLabel();
  return (
    <a
      href={href}
      className={className}
      data-cta="plain-number"
      data-cta-location={location}
      data-cta-type={href.startsWith("tel:") ? "phone" : "contact-fallback"}
    >
      {isTelUriText(label) ? primaryCtaLabel() : label}
    </a>
  );
}

export function CallNowCopy() {
  return primaryCtaLabel();
}

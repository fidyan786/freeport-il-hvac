import { PhoneIcon } from "@/components/Icons";
import { ctaHref, phoneDisplayLabel, primaryCtaLabel } from "@/lib/site";

type Props = {
  children?: React.ReactNode;
  className?: string;
  context: string;
  variant?: "primary" | "secondary" | "light" | "ghost" | "text";
  "aria-label"?: string;
  iconOnly?: boolean;
};

const variants = {
  primary:
    "cta-pulse inline-flex items-center justify-center gap-2 rounded-brand bg-ember px-5 py-3 text-center text-sm font-semibold tracking-wide text-white hover:bg-ember-dark",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-brand border border-navy/20 bg-white px-5 py-3 text-center text-sm font-semibold tracking-wide text-navy transition hover:border-navy hover:bg-paper",
  light:
    "inline-flex items-center justify-center gap-2 rounded-brand bg-white px-5 py-3 text-center text-sm font-semibold tracking-wide text-navy hover:bg-paper",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-brand border border-white/25 px-5 py-3 text-center text-sm font-semibold tracking-wide text-white hover:bg-white/10",
  text: "inline-flex items-center gap-2 font-semibold text-ember underline-offset-4 hover:underline",
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
      className={`${variants[variant]} ${className}`}
      data-cta={context}
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

export function PhonePlain({ className = "" }: { className?: string }) {
  const href = ctaHref();
  const label = phoneDisplayLabel();
  return (
    <a
      href={href}
      className={className}
      data-cta="plain-number"
      data-cta-type={href.startsWith("tel:") ? "phone" : "contact-fallback"}
    >
      {isTelUriText(label) ? primaryCtaLabel() : label}
    </a>
  );
}

export function CallNowCopy() {
  return primaryCtaLabel();
}

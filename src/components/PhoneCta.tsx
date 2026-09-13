import { ctaHref, isPhoneConfigured, phoneDisplayLabel, primaryCtaLabel } from "@/lib/site";

type Props = {
  children?: React.ReactNode;
  className?: string;
  context: string;
  variant?: "primary" | "secondary" | "light" | "ghost" | "text";
};

const variants = {
  primary:
    "cta-pulse inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-center text-sm font-semibold tracking-wide text-white shadow-[0_10px_24px_-12px_rgba(196,92,38,0.9)] hover:bg-copper-dark",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-spruce/20 bg-white px-5 py-3 text-center text-sm font-semibold tracking-wide text-spruce transition hover:border-spruce hover:bg-paper",
  light:
    "inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold tracking-wide text-spruce hover:bg-paper",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-center text-sm font-semibold tracking-wide text-white hover:bg-white/10",
  text: "inline-flex items-center gap-2 font-semibold text-copper underline-offset-4 hover:underline",
};

export function PhoneCta({
  children,
  className = "",
  context,
  variant = "primary",
}: Props) {
  const href = ctaHref();
  const tel = href.startsWith("tel:");

  return (
    <a
      href={href}
      className={`${variants[variant]} ${className}`}
      data-cta={context}
      data-cta-type={tel ? "phone" : "contact-fallback"}
    >
      {children ?? primaryCtaLabel()}
    </a>
  );
}

export function PhonePlain({ className = "" }: { className?: string }) {
  const href = ctaHref();
  return (
    <a
      href={href}
      className={className}
      data-cta="plain-number"
      data-cta-type={href.startsWith("tel:") ? "phone" : "contact-fallback"}
    >
      {phoneDisplayLabel()}
    </a>
  );
}

export function CallNowCopy() {
  return isPhoneConfigured() ? primaryCtaLabel() : "Request HVAC Service";
}

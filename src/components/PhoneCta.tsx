import { ctaHref, isPhoneConfigured, site } from "@/lib/site";

type Props = {
  children?: React.ReactNode;
  className?: string;
  context: string;
  variant?: "primary" | "secondary" | "light" | "text";
};

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-5 py-3 text-center text-sm font-bold tracking-wide text-white transition hover:bg-ember-dark",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-sm border border-navy/20 bg-white px-5 py-3 text-center text-sm font-semibold tracking-wide text-navy transition hover:border-navy hover:bg-paper",
  light:
    "inline-flex items-center justify-center gap-2 rounded-sm bg-white px-5 py-3 text-center text-sm font-semibold tracking-wide text-navy transition hover:bg-paper",
  text: "inline-flex items-center gap-2 font-semibold text-ember underline-offset-4 hover:underline",
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
      {children ?? (isPhoneConfigured() ? `Call ${site.phoneDisplay}` : `Call ${site.phoneDisplay}`)}
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
      {site.phoneDisplay}
    </a>
  );
}

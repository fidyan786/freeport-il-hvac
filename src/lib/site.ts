/**
 * Single source of truth for brand, NAP, and call tracking.
 * Never hardcode a phone number in page files.
 * Never invent a telephone number, address, hours, or reviews.
 */

export const BRAND = {
  name: "Millrace Heating & Air",
  shortName: "Millrace",
  chatbotName: "Millrace Assistant",
  tagline: "Heating and cooling for Freeport, Illinois",
} as const;

function readPublic(name: string, fallback = "") {
  const value = process.env[name]?.trim();
  if (!value) return fallback;
  if (value.includes("[") && value.includes("]")) return fallback;
  return value;
}

export const site = {
  businessName: readPublic("NEXT_PUBLIC_BUSINESS_NAME", BRAND.name),
  phoneDisplay: readPublic("NEXT_PUBLIC_PHONE_DISPLAY", "(703) 703-7855"),
  phoneTel: readPublic("NEXT_PUBLIC_PHONE_TEL", "7037037855"),
  hours: readPublic("NEXT_PUBLIC_BUSINESS_HOURS"),
  city: "Freeport",
  state: "Illinois",
  stateCode: "IL",
  county: "Stephenson County",
  zip: "61032",
  areaCode: "815",
  niche: "HVAC",
  email: "",
  address: null as string | null,
  geo: null as { lat: number; lng: number } | null,
  reviews: [] as Array<{
    author: string;
    quote: string;
    location?: string;
    date?: string;
  }>,
} as const;

export type SiteConfig = typeof site;

/**
 * Public canonical origin. Single source of truth for metadataBase,
 * canonical URLs, Open Graph URLs, sitemap, and robots.
 *
 * The live site is the Hostinger Node.js app on the apex domain. A vercel.app
 * host must not become canonical. Localhost is allowed only in development.
 */
export const PRODUCTION_HOST = "freeporthvacil.com";
export const PRODUCTION_ORIGIN = `https://${PRODUCTION_HOST}`;

function stripTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

function hostnameOf(origin: string) {
  try {
    const href = origin.includes("://") ? origin : `https://${origin}`;
    return new URL(href).hostname;
  } catch {
    return "";
  }
}

function isLocalHostname(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
}

function isPreviewVercelHost(hostname: string) {
  return hostname.endsWith(".vercel.app");
}

function finalizeCanonical(origin: string) {
  const normalized = stripTrailingSlash(origin);
  const hostname = hostnameOf(normalized);

  if (!hostname) {
    throw new Error(
      "Canonical site URL is invalid. Set NEXT_PUBLIC_SITE_URL to https://freeporthvacil.com.",
    );
  }

  if (isPreviewVercelHost(hostname)) {
    throw new Error(
      "Canonical site URL cannot be a vercel.app host. Use https://freeporthvacil.com.",
    );
  }

  if (isLocalHostname(hostname) && process.env.NODE_ENV === "production") {
    throw new Error(
      "Canonical site URL cannot be localhost in a production build.",
    );
  }

  return normalized;
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit && !explicit.includes("[")) {
    return finalizeCanonical(explicit);
  }

  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  return PRODUCTION_ORIGIN;
}

/** Origin for sitemap, robots, and Search Console. Never throws. */
export function getPublicOrigin() {
  try {
    return getSiteUrl();
  } catch {
    return PRODUCTION_ORIGIN;
  }
}

/**
 * HTML-tag token already present on the live site. Do not invent a replacement.
 * Override with NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION when GSC issues a new one.
 * A matching HTML-file token also lives at /google7129b29a73db544e.html.
 */
export const EXISTING_GOOGLE_SITE_VERIFICATION =
  "x0uFz9tFyvdygV8RR7eIe-omOKFxjPIDDOx_MaowXfo";

export function googleSiteVerification() {
  return (
    readPublic("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION") ||
    readPublic("GOOGLE_SITE_VERIFICATION") ||
    EXISTING_GOOGLE_SITE_VERIFICATION
  );
}

export function isPlaceholder(value: string) {
  if (!value) return true;
  return value.includes("[") && value.includes("]");
}

export function phoneDigits() {
  if (isPlaceholder(site.phoneDisplay) && isPlaceholder(site.phoneTel)) {
    return null;
  }
  const digits = (site.phoneTel || site.phoneDisplay).replace(/\D/g, "");
  if (digits.length < 10) return null;
  return digits.slice(-10);
}

export function isPhoneConfigured() {
  return Boolean(phoneDigits());
}

export function phoneE164() {
  const digits = phoneDigits();
  return digits ? `+1${digits}` : null;
}

/** Schema.org telephone. Example: +1-703-703-7855. tel: links stay compact via phoneE164(). */
export function phoneSchemaTelephone() {
  const digits = phoneDigits();
  if (!digits) return null;
  return `+1-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function phoneHref() {
  const e164 = phoneE164();
  return e164 ? `tel:${e164}` : null;
}

export function ctaHref() {
  return phoneHref() ?? "/contact/";
}

export function isHoursConfigured() {
  return Boolean(site.hours) && !isPlaceholder(site.hours);
}

export function isNameConfigured() {
  return Boolean(site.businessName) && !isPlaceholder(site.businessName);
}

export function primaryCtaLabel(action: "call" | "request" = "call") {
  if (isPhoneConfigured()) {
    return action === "call"
      ? `Call ${site.phoneDisplay}`
      : `Request service · ${site.phoneDisplay}`;
  }
  return "Request Service";
}

export function phoneDisplayLabel() {
  return isPhoneConfigured() ? site.phoneDisplay : "Request Service";
}

export function hoursLabel() {
  return isHoursConfigured() ? site.hours : "";
}

export const localLabel = `${site.city}, ${site.stateCode}`;
export const marketLabel = `${site.city}, ${site.state}`;

export const AFFILIATE_DISCLOSURE =
  "This website connects callers with independent local service providers. It is not itself a heating and cooling contractor.";

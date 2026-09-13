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
  phoneDisplay: readPublic("NEXT_PUBLIC_PHONE_DISPLAY", "888-989-8898"),
  phoneTel: readPublic("NEXT_PUBLIC_PHONE_TEL", "8889898898"),
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
 * Never use VERCEL_URL — preview deployments must not become canonical.
 * Localhost is allowed only on a local development machine.
 */
export const PRODUCTION_HOST = "freeport-il-hvac.vercel.app";
export const PRODUCTION_ORIGIN = `https://${PRODUCTION_HOST}`;
const FALLBACK_PRODUCTION_ORIGIN = PRODUCTION_ORIGIN;

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
  return hostname.endsWith(".vercel.app") && hostname !== PRODUCTION_HOST;
}

function finalizeCanonical(origin: string) {
  const normalized = stripTrailingSlash(origin);
  const hostname = hostnameOf(normalized);
  const vercelEnv = process.env.VERCEL_ENV;

  if (!hostname) {
    throw new Error(
      "Canonical site URL is invalid. Set NEXT_PUBLIC_SITE_URL to the production origin.",
    );
  }

  if (isLocalHostname(hostname) && (vercelEnv === "production" || vercelEnv === "preview")) {
    throw new Error(
      "Canonical site URL cannot be localhost on a Vercel deployment. Set NEXT_PUBLIC_SITE_URL.",
    );
  }

  if (isPreviewVercelHost(hostname) && vercelEnv === "production") {
    throw new Error(
      "Canonical site URL cannot be a preview Vercel host in production. Set NEXT_PUBLIC_SITE_URL.",
    );
  }

  return normalized;
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit && !explicit.includes("[")) {
    return finalizeCanonical(explicit);
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) {
    const host = production.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return finalizeCanonical(`https://${host}`);
  }

  const onVercel = Boolean(process.env.VERCEL);
  const localDev = process.env.NODE_ENV !== "production" && !onVercel;
  if (localDev) {
    return "http://localhost:3000";
  }

  return finalizeCanonical(FALLBACK_PRODUCTION_ORIGIN);
}

/** Origin for sitemap, robots, and Search Console. Never throws. */
export function getPublicOrigin() {
  if (process.env.VERCEL_ENV === "production") {
    const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (explicit && !explicit.includes("[")) {
      try {
        return finalizeCanonical(explicit);
      } catch {
        return PRODUCTION_ORIGIN;
      }
    }
    return PRODUCTION_ORIGIN;
  }

  try {
    return getSiteUrl();
  } catch {
    return PRODUCTION_ORIGIN;
  }
}

/**
 * Google Search Console HTML-tag token.
 * Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (or GOOGLE_SITE_VERIFICATION)
 * to the content value from Search Console. Never invent a token.
 */
export function googleSiteVerification() {
  const value =
    readPublic("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION") ||
    readPublic("GOOGLE_SITE_VERIFICATION");
  return value;
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

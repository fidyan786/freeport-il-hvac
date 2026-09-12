/**
 * Single source of truth for NAP, phone CTAs, and later call tracking.
 * Do not hardcode the phone number in page files.
 */

export const PLACEHOLDERS = {
  businessName: "[BUSINESS NAME]",
  phone: "[PHONE NUMBER]",
  hours: "[BUSINESS HOURS]",
} as const;

function readPublic(name: string, fallback: string) {
  const value = process.env[name]?.trim();
  return value && value.length > 0 ? value : fallback;
}

export const site = {
  businessName: readPublic(
    "NEXT_PUBLIC_BUSINESS_NAME",
    PLACEHOLDERS.businessName,
  ),
  phoneDisplay: readPublic(
    "NEXT_PUBLIC_PHONE_DISPLAY",
    PLACEHOLDERS.phone,
  ),
  phoneTel: readPublic("NEXT_PUBLIC_PHONE_TEL", ""),
  hours: readPublic("NEXT_PUBLIC_BUSINESS_HOURS", PLACEHOLDERS.hours),
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

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/\/$/, "")}`;

  // Never fall back to localhost in metadata or sitemap.
  return "https://freeport-il-hvac.vercel.app";
}

export function isPlaceholder(value: string) {
  return value.includes("[") && value.includes("]");
}

export function isPhoneConfigured() {
  if (isPlaceholder(site.phoneDisplay)) return false;
  const digits = (site.phoneTel || site.phoneDisplay).replace(/\D/g, "");
  return digits.length >= 10;
}

export function phoneHref() {
  if (!isPhoneConfigured()) return null;
  const digits = (site.phoneTel || site.phoneDisplay).replace(/\D/g, "");
  return `tel:+1${digits.slice(-10)}`;
}

export function ctaHref() {
  return phoneHref() ?? "/contact/";
}

export function isHoursConfigured() {
  return !isPlaceholder(site.hours) && site.hours.length > 0;
}

export function isNameConfigured() {
  return !isPlaceholder(site.businessName);
}

export const localLabel = `${site.city}, ${site.stateCode}`;
export const marketLabel = `${site.city}, ${site.state}`;

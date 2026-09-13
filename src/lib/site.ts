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
  phoneDisplay: readPublic("NEXT_PUBLIC_PHONE_DISPLAY"),
  phoneTel: readPublic("NEXT_PUBLIC_PHONE_TEL"),
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

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/\/$/, "")}`;

  return "https://freeport-il-hvac.vercel.app";
}

export function isPlaceholder(value: string) {
  if (!value) return true;
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
  return "Request HVAC Service";
}

export function phoneDisplayLabel() {
  return isPhoneConfigured() ? site.phoneDisplay : "Request HVAC Service";
}

export function hoursLabel() {
  return isHoursConfigured() ? site.hours : "Call to confirm availability";
}

export const localLabel = `${site.city}, ${site.stateCode}`;
export const marketLabel = `${site.city}, ${site.state}`;

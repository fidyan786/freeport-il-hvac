import { site } from "@/lib/site";

/** Puts the configured display phone at the end of a meta description. */
export function withCallPhone(description: string) {
  const lead = description
    .replace(/\s*Call\s+\(?\d{3}\)?[\s.-]*\d{3}[\s.-]*\d{4}\.?\s*$/i, "")
    .trim();
  return `${lead} Call ${site.phoneDisplay}.`;
}

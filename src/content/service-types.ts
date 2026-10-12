import { withCallPhone } from "@/lib/phone-meta";

export type ServiceCategory =
  | "heating"
  | "cooling"
  | "maintenance"
  | "heat-pump"
  | "ductless"
  | "iaq"
  | "commercial"
  | "emergency"
  | "residential";

export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  subsections?: { heading: string; paragraphs: string[] }[];
};

export type ServiceFaq = {
  q: string;
  a: string;
  detail: string;
};

export type ServicePageContent = {
  slug: string;
  href: string;
  category: ServiceCategory;
  navLabel: string;
  navDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  lede: string;
  image: string;
  imageAlt: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  related: string[];
  directAnswer?: string;
  decision?: {
    heading: string;
    paragraphs: string[];
    links: { href: string; label: string }[];
  };
  checks?: { name: string; text: string }[];
};

export function defineService(
  service: Omit<ServicePageContent, "href"> & { slug: string },
): ServicePageContent {
  const lead = service.metaDescription
    .replace(/\s*Call\s+\(?\d{3}\)?[\s.-]*\d{3}[\s.-]*\d{4}\.?\s*$/i, "")
    .trim();
  return {
    ...service,
    href: `/services/${service.slug}/`,
    metaDescription: withCallPhone(lead),
  };
}

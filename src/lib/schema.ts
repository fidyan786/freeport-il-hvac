import {
  getSiteUrl,
  isHoursConfigured,
  isNameConfigured,
  isPhoneConfigured,
  phoneE164,
  site,
} from "@/lib/site";
import { serviceLinks } from "@/lib/nav";

export function localBusinessSchema() {
  const url = `${getSiteUrl()}/`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: site.businessName,
    url,
    image: `${getSiteUrl()}/brand/logo-horizontal.png`,
    logo: `${getSiteUrl()}/brand/logo-icon.png`,
    areaServed: [
      {
        "@type": "City",
        name: site.city,
        containedInPlace: [
          {
            "@type": "AdministrativeArea",
            name: site.county,
          },
          {
            "@type": "State",
            name: site.state,
          },
        ],
      },
      {
        "@type": "PostalCode",
        name: site.zip,
        addressCountry: "US",
      },
    ],
    serviceType: serviceLinks.map((item) => item.label),
    knowsAbout: [
      "Furnace repair",
      "Air conditioning repair",
      "Emergency HVAC",
      "HVAC maintenance",
      "Heat pumps",
      "Ductless mini splits",
    ],
  };

  if (isPhoneConfigured()) {
    data.telephone = phoneE164() ?? site.phoneDisplay;
  }

  if (isHoursConfigured()) {
    data.openingHours = site.hours;
  }

  if (site.address) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: site.stateCode,
      postalCode: site.zip,
      addressCountry: "US",
    };
  }

  // Never emit ratings, review counts, geo, or address unless verified.
  return data;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isNameConfigured()
      ? site.businessName
      : `HVAC service in ${site.city}, ${site.stateCode}`,
    url: `${getSiteUrl()}/`,
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${getSiteUrl()}${path}`,
    areaServed: {
      "@type": "City",
      name: site.city,
    },
    provider: {
      "@type": "HVACBusiness",
      name: site.businessName,
      url: `${getSiteUrl()}/`,
    },
  };

  if (isPhoneConfigured()) {
    (data.provider as Record<string, unknown>).telephone =
      phoneE164() ?? site.phoneDisplay;
  }

  return data;
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: `${getSiteUrl()}${path}`,
    author: {
      "@type": "Organization",
      name: site.businessName,
    },
  };
}

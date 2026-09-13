import { nearbyCommunities, serviceLinks } from "@/lib/nav";
import { absoluteUrl } from "@/lib/seo";
import {
  BRAND,
  getSiteUrl,
  isHoursConfigured,
  isNameConfigured,
  isPhoneConfigured,
  phoneE164,
  site,
} from "@/lib/site";

function businessId() {
  return `${getSiteUrl()}/#business`;
}

function areaServed() {
  return [
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
    {
      "@type": "AdministrativeArea",
      name: site.county,
    },
    ...nearbyCommunities.map((town) => ({
      "@type": "City",
      name: town.name,
      postalCode: town.zip,
    })),
  ];
}

export function localBusinessSchema() {
  const url = absoluteUrl("/");
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": businessId(),
    name: site.businessName,
    alternateName: BRAND.shortName,
    description: `${BRAND.name} is an HVAC company in ${site.city}, ${site.state} (${site.zip}) offering furnace repair, air conditioning repair, heating and cooling service, and HVAC maintenance for homes and small businesses.`,
    url,
    image: absoluteUrl("/opengraph-image/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/apple-icon/"),
    },
    slogan: BRAND.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.stateCode,
      postalCode: site.zip,
      addressCountry: "US",
    },
    areaServed: areaServed(),
    serviceType: serviceLinks.map((item) => item.label),
    knowsAbout: [
      "HVAC contractor",
      "Residential HVAC",
      "Commercial HVAC",
      "Furnace repair",
      "Furnace installation",
      "Heating repair",
      "Air conditioning repair",
      "AC installation",
      "Emergency HVAC",
      "HVAC maintenance",
      "Heat pumps",
      "Ductless mini splits",
      "Indoor air quality",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `HVAC services in ${site.city}, ${site.stateCode}`,
      itemListElement: serviceLinks.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${item.label} in ${site.city}, ${site.stateCode}`,
          url: absoluteUrl(item.href),
        },
      })),
    },
  };

  if (site.address) {
    (data.address as Record<string, unknown>).streetAddress = site.address;
  }

  if (isPhoneConfigured()) {
    data.telephone = phoneE164() ?? site.phoneDisplay;
  }

  if (isHoursConfigured()) {
    data.openingHours = site.hours;
  }

  return data;
}

export function websiteSchema() {
  const url = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    name: isNameConfigured()
      ? site.businessName
      : `HVAC company in ${site.city}, ${site.stateCode}`,
    alternateName: `${site.city} HVAC`,
    url,
    inLanguage: "en-US",
    publisher: {
      "@id": businessId(),
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  const provider: Record<string, unknown> = {
    "@type": "HVACBusiness",
    "@id": businessId(),
    name: site.businessName,
    url: absoluteUrl("/"),
  };

  if (isPhoneConfigured()) {
    provider.telephone = phoneE164() ?? site.phoneDisplay;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    category: "HVAC",
    description,
    url: absoluteUrl(path),
    areaServed: [
      {
        "@type": "City",
        name: site.city,
      },
      {
        "@type": "AdministrativeArea",
        name: site.county,
      },
    ],
    provider,
  };
}

export function serviceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `HVAC services in ${site.city}, ${site.stateCode}`,
    itemListElement: serviceLinks.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${item.label} in ${site.city}, ${site.stateCode}`,
      url: absoluteUrl(item.href),
    })),
  };
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
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: site.businessName,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@id": businessId(),
    },
  };

  if (image) {
    data.image = absoluteUrl(image, { asset: true });
  }

  return data;
}

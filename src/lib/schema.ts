import { serviceLinks } from "@/lib/nav";
import { absoluteUrl } from "@/lib/seo";
import {
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

export function localBusinessSchema() {
  const url = absoluteUrl("/");
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": businessId(),
    name: site.businessName,
    url,
    image: absoluteUrl("/opengraph-image/"),
    logo: absoluteUrl("/apple-icon/"),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.stateCode,
      postalCode: site.zip,
      addressCountry: "US",
    },
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
      : `HVAC service in ${site.city}, ${site.stateCode}`,
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
}: {
  name: string;
  description: string;
  path: string;
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
    serviceType: name,
    description,
    url: absoluteUrl(path),
    areaServed: {
      "@type": "City",
      name: site.city,
    },
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
      name: item.label,
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

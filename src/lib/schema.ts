import { nearbyCommunities, serviceLinks } from "@/lib/nav";
import { absoluteUrl } from "@/lib/seo";
import {
  BRAND,
  getSiteUrl,
  isHoursConfigured,
  isPhoneConfigured,
  phoneSchemaTelephone,
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
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: site.county,
        containedInPlace: {
          "@type": "State",
          name: site.state,
        },
      },
    },
    {
      "@type": "AdministrativeArea",
      name: site.county,
    },
    ...nearbyCommunities.map((town) => ({
      "@type": "City",
      name: town.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: site.county,
      },
    })),
  ];
}

export function localBusinessSchema() {
  const url = absoluteUrl("/");
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": businessId(),
    name: site.businessName,
    alternateName: BRAND.shortName,
    description: `${BRAND.name} connects callers with independent local heating and cooling professionals in ${site.city}, ${site.state} (${site.zip}). This website is not itself a heating and cooling contractor.`,
    url,
    image: absoluteUrl("/opengraph-image/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/apple-icon/"),
    },
    slogan: BRAND.tagline,
    areaServed: areaServed(),
    knowsAbout: serviceLinks.map((item) => item.label),
  };

  if (isPhoneConfigured()) {
    data.telephone = phoneSchemaTelephone() ?? site.phoneDisplay;
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
    name: site.businessName,
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
    "@type": "Organization",
    "@id": businessId(),
    name: site.businessName,
    url: absoluteUrl("/"),
  };

  if (isPhoneConfigured()) {
    provider.telephone = phoneSchemaTelephone() ?? site.phoneDisplay;
  }
  provider.description =
    `${site.businessName} is a website that connects callers with independent local heating and cooling professionals. It is not itself a contractor and does not perform the repair.`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType ?? name,
    description,
    url: absoluteUrl(path),
    areaServed: areaServed(),
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

export function faqSchema(
  items: Array<{ q: string; a: string; detail?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.detail ? `${item.a} ${item.detail}` : item.a,
      },
    })),
  };
}

export function howToSchema({
  name,
  description,
  path,
  steps,
}: {
  name: string;
  description: string;
  path: string;
  steps: Array<{ name: string; text: string }>;
}) {
  const page = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${page}#check-${index + 1}`,
    })),
  };
}

export function speakableWebPage({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const page = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: page,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable"],
    },
    isPartOf: {
      "@type": "WebSite",
      name: site.businessName,
      url: absoluteUrl("/"),
    },
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image,
  authorName,
  articleSection,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
  articleSection?: string;
}) {
  const pageUrl = absoluteUrl(path);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Organization",
      name: authorName ?? site.businessName,
      url: absoluteUrl("/about/"),
    },
    publisher: {
      "@type": "Organization",
      name: site.businessName,
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/apple-icon/"),
      },
    },
  };

  if (articleSection) data.articleSection = articleSection;

  if (image) {
    data.image = absoluteUrl(image, { asset: true });
  }

  return data;
}

export const GUIDE_CATEGORY_IDS = [
  "climate",
  "furnaces",
  "cooling",
  "heat-pumps",
  "boilers",
  "indoor-air",
  "thermostats",
  "efficiency",
  "maintenance",
  "troubleshooting",
  "hiring",
  "safety",
] as const;

export type GuideCategoryId = (typeof GUIDE_CATEGORY_IDS)[number];

export type Guide = {
  slug: string;
  href: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  imageAlt: string;
  category?: GuideCategoryId;
  author?: string;
  body: { heading: string; paragraphs: string[] }[];
  relatedServices: string[];
  relatedGuides: string[];
};

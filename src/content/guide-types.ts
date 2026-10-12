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
  body: { heading: string; paragraphs: string[] }[];
  relatedServices: string[];
  relatedGuides: string[];
};

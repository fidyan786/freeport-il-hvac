import type { Guide, GuideCategoryId } from "@/content/guide-types";

export const EDITORIAL_AUTHOR = "Millrace Heating & Air editorial";
export const ARTICLE_DATE = "2026-10-30";

export function article(input: {
  slug: string;
  category: GuideCategoryId;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  image: string;
  imageAlt: string;
  body: Guide["body"];
  relatedServices: string[];
  relatedGuides: string[];
}): Guide {
  return {
    href: `/guides/${input.slug}/`,
    datePublished: ARTICLE_DATE,
    dateModified: ARTICLE_DATE,
    author: EDITORIAL_AUTHOR,
    ...input,
  };
}

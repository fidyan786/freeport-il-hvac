import { guides } from "@/content/guides";
import { services } from "@/content/services";

/** Public URLs for the XML and HTML sitemaps. Server-only: do not import from client components. */
export const indexablePaths = [
  "/",
  "/services/",
  ...services.map((service) => service.href),
  "/guides/",
  ...guides.map((guide) => guide.href),
  "/service-area/",
  "/about/",
  "/contact/",
  "/privacy-policy/",
  "/terms/",
  "/disclaimer/",
  "/image-credits/",
  "/sitemap/",
];

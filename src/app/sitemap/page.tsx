import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionCall } from "@/components/SectionCall";
import { guides } from "@/content/guides";
import { services } from "@/content/services";
import { indexablePaths } from "@/lib/nav";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "HTML Sitemap | Millrace Heating, Freeport, Illinois",
  description: `Every public page on Millrace Heating & Air, from Freeport furnace and AC topics to the guides and the Stephenson County service area. Call ${site.phoneDisplay}.`,
  path: "/sitemap/",
});

const staticLabels: Record<string, string> = {
  "/": "Home",
  "/services/": "Services",
  "/guides/": "Guides",
  "/service-area/": "Service area",
  "/about/": "About",
  "/contact/": "Call",
  "/privacy-policy/": "Privacy",
  "/terms/": "Terms",
  "/image-credits/": "Image credits",
  "/sitemap/": "Sitemap",
};

function labelFor(path: string) {
  return (
    staticLabels[path] ??
    services.find((service) => service.href === path)?.navLabel ??
    guides.find((guide) => guide.href === path)?.title ??
    path
  );
}

export default function HtmlSitemapPage() {
  const servicePaths = indexablePaths.filter((path) => path.startsWith("/services/") && path !== "/services/");
  const guidePaths = indexablePaths.filter((path) => path.startsWith("/guides/") && path !== "/guides/");
  const otherPaths = indexablePaths.filter(
    (path) => !path.startsWith("/services/") && !path.startsWith("/guides/"),
  );

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sitemap", path: "/sitemap/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Sitemap" },
        ]}
      />
      <h1 className="mt-6 text-4xl text-navy">Sitemap</h1>
      <SectionCall context="sitemap-hero" />
      <p className="mt-4 text-muted">
        Every public page on this site. The XML sitemap for crawlers is at{" "}
        <a className="font-semibold text-navy underline underline-offset-2" href="/sitemap.xml">
          /sitemap.xml
        </a>
        .
      </p>
      <SitemapGroup title="Site" paths={otherPaths} />
      <SitemapGroup title="Services" paths={servicePaths} />
      <SitemapGroup title="Guides" paths={guidePaths} />
    </article>
  );
}

function SitemapGroup({ title, paths }: { title: string; paths: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl text-navy">{title}</h2>
      <ul className="mt-4 grid gap-2">
        {paths.map((path) => (
          <li key={path}>
            <Link className="text-navy underline-offset-2 hover:underline" href={path}>
              {labelFor(path)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

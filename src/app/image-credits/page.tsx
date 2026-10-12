import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { IMAGE_CREDITS } from "@/lib/image-credits";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Image Credits | Millrace Heating, Freeport, Illinois",
  description: `Photo credits for the Freeport, IL heating and cooling pages, including Wikimedia Commons sources, authors, and licenses. Call ${site.phoneDisplay}.`,
  path: "/image-credits/",
});

export default function ImageCreditsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 leading-relaxed text-muted">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Image credits", path: "/image-credits/" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Image credits" },
        ]}
      />
      <h1 className="mt-6 text-4xl text-navy">Image credits</h1>
      <p className="mt-6">
        Photographs on this site are Creative Commons and public-domain files from Wikimedia Commons.
        Unsplash, Pexels, Pixabay, and Openverse were checked for closer HVAC
        photographs. Usable files that showed real equipment or Illinois winter
        homes, without another company’s uniform, came from Commons. They are
        not photos of a Freeport service call. Each picture is also saved as
        smaller WebP and AVIF files so the pages do not depend on an image
        optimizer.
      </p>
      <ul className="mt-8 grid gap-6">
        {IMAGE_CREDITS.map((item) => (
          <li key={item.file} className="border-t border-line pt-6">
            <p className="font-semibold text-navy">{item.alt}</p>
            <p className="mt-2">
              Photo by {item.author}.{" "}
              {item.licenseUrl ? (
                <a className="underline underline-offset-2" href={item.licenseUrl}>
                  {item.license}
                </a>
              ) : (
                item.license
              )}
              .{" "}
              <a className="underline underline-offset-2" href={item.sourceUrl}>
                Source file
              </a>
              .
            </p>
            <p className="mt-2">{item.changes}</p>
            <p className="mt-2">Used on: {item.used}.</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

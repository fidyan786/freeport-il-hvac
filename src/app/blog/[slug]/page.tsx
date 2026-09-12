import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getPost, posts, postPath } from "@/content/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: postPath(post.slug),
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/blog/" },
          { name: post.title, path: postPath(post.slug) },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: postPath(post.slug),
          datePublished: post.datePublished,
        })}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Guides", href: "/blog/" },
            { name: post.title },
          ]}
        />
        <h1 className="mt-6 font-serif text-4xl text-navy text-balance">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{post.hero}</p>
        <div className="mt-8 space-y-5 leading-relaxed text-ink">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12">
          <RelatedLinks links={post.related} />
        </div>
      </article>
      <FinalCta
        title="Need help in Freeport now?"
        body={`Call ${site.phoneDisplay} for furnace, AC, or emergency HVAC service.`}
        context={`blog-${post.slug}`}
      />
    </>
  );
}

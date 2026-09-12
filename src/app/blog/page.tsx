import Link from "next/link";
import { posts, postPath } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Freeport HVAC Guides",
  description:
    "Practical HVAC guides for Freeport, Illinois: furnace failures in winter, AC that fails after sitting idle, short cycling, indoor air, and heat pumps.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-ember uppercase">
        Guides · not a cost blog
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy">
        HVAC reading for Freeport homeowners
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Short pieces tied to real search problems in 61032. No installation
        cost articles. No fake local price surveys.
      </p>
      <ul className="mt-10 grid gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={postPath(post.slug)}
              className="block border border-line bg-white p-5 hover:border-navy"
            >
              <h2 className="font-semibold text-navy">{post.title}</h2>
              <p className="mt-2 text-sm text-muted">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

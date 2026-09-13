import Link from "next/link";

export function RelatedLinks({
  title,
  links,
}: {
  title?: string;
  links: Array<{ href: string; label: string; note?: string }>;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-spruce sm:text-3xl">
        {title ?? "Related Freeport HVAC pages"}
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="card-lift block rounded-2xl border border-line bg-white p-4 hover:border-copper"
            >
              <span className="font-semibold text-spruce">{link.label}</span>
              {link.note ? (
                <span className="mt-1 block text-sm text-muted">{link.note}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

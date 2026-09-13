export function FaqList({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-brand border border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-4 py-4 sm:px-5">
          <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              <span className="font-sans text-base font-semibold text-navy">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-ember group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export type FaqItem = { q: string; a: string; detail?: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-brand border border-line bg-white">
      {items.map((item) => (
        <details key={item.q} className="group px-4 py-4 sm:px-5">
          <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              <span className="font-sans text-base font-semibold text-navy">
                {item.q}
              </span>
              <span aria-hidden="true" className="mt-0.5 shrink-0 text-navy">
                +
              </span>
            </span>
          </summary>
          <div className="accordion-fade mt-3 max-w-3xl leading-relaxed text-muted">
            <p>{item.a}</p>
            {item.detail ? <p className="mt-3">{item.detail}</p> : null}
          </div>
        </details>
      ))}
    </div>
  );
}

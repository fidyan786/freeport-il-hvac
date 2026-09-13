export function FaqList({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const panelId = `faq-panel-${index}`;
        return (
          <details key={item.q} className="group py-5">
            <summary
              className="cursor-pointer list-none font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden"
              aria-controls={panelId}
            >
              <span className="flex items-start justify-between gap-4">
                <h3 className="font-sans text-base font-semibold text-navy">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-ember group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p
              id={panelId}
              className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base"
            >
              {item.a}
            </p>
          </details>
        );
      })}
    </div>
  );
}

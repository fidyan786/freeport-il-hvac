import { site } from "@/lib/site";

export function TrustSection() {
  if (site.reviews.length > 0) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
            From Freeport customers
          </p>
          <h2 className="mt-2 font-serif text-3xl text-spruce sm:text-4xl">
            What people tell us after the visit
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {site.reviews.map((review) => (
              <figure
                key={`${review.author}-${review.quote.slice(0, 24)}`}
                className="border border-line bg-cream p-6"
              >
                <blockquote className="text-sm leading-relaxed text-ink">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-spruce">
                  {review.author}
                  {review.location ? (
                    <span className="font-normal text-muted">
                      {" "}
                      · {review.location}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
          How we work
        </p>
        <h2 className="mt-2 font-serif text-3xl text-spruce sm:text-4xl">
          Straight answers for a house that needs heat or cooling
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Diagnosis first",
              text: "Age alone does not decide repair versus replacement. The equipment, the ducts, and how the house is behaving do.",
            },
            {
              title: "Clear next steps",
              text: "You hear what failed, what is safe to wait on, and what needs attention now — in plain language.",
            },
            {
              title: "Local to 61032",
              text: "Freeport winters and short summers shape the work. Nearby Stephenson County towns are confirmed when you call.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-line p-6">
              <h3 className="font-semibold text-spruce">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

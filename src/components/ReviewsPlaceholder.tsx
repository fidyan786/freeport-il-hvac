import { PhoneCta } from "@/components/PhoneCta";
import { site } from "@/lib/site";

export function ReviewsPlaceholder() {
  if (site.reviews.length === 0) {
    return (
      <div className="rounded-sm border border-dashed border-line bg-white p-6">
        <p className="font-semibold text-navy">[REAL REVIEWS TO BE ADDED]</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Customer reviews will appear here after completed jobs are verified.
          This site does not display star ratings, review counts, or testimonials
          that have not been supplied.
        </p>
        <PhoneCta context="reviews-empty" variant="secondary" className="mt-5">
          Call {site.phoneDisplay}
        </PhoneCta>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {site.reviews.map((review) => (
        <li key={`${review.author}-${review.quote}`} className="rounded-sm border border-line bg-white p-5">
          <p className="text-base leading-relaxed text-ink">“{review.quote}”</p>
          <p className="mt-4 text-sm font-semibold text-navy">{review.author}</p>
          {review.location ? (
            <p className="text-sm text-muted">{review.location}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

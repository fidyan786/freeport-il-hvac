import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsPlaceholder } from "@/components/ReviewsPlaceholder";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Freeport HVAC Reviews",
  description:
    "Customer reviews for HVAC service in Freeport, Illinois. Real comments only. No invented star ratings or review counts.",
  path: "/reviews/",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews/" },
        ])}
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Reviews" },
          ]}
        />
        <h1 className="mt-6 font-serif text-4xl text-navy">
          Reviews from Freeport HVAC customers
        </h1>
        <p className="mt-4 mb-8 max-w-2xl leading-relaxed text-muted">
          This page stays empty until real customers complete real jobs. We
          will not borrow competitor testimonials or publish a 4.9-star widget
          that is not ours.
        </p>
        <ReviewsPlaceholder />
      </div>
      <FinalCta
        title="Need service before reviews are posted?"
        body="Call. Work in Freeport should not wait on a testimonials module."
        context="reviews-final"
      />
    </>
  );
}

import { notFound } from "next/navigation";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { getService, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.navLabel} in Freeport, IL`,
    description: service.metaDescription,
    path: service.href,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}

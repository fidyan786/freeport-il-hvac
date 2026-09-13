import Image from "next/image";
import Link from "next/link";
import { IMAGE_SIZES } from "@/lib/images";

export function ServiceCard({
  href,
  title,
  text,
  image,
  imageAlt,
}: {
  href: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <Link href={href} className="card-lift group overflow-hidden border border-line bg-white">
      <div className="relative aspect-[16/10] overflow-hidden bg-line">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={IMAGE_SIZES.card}
          className="card-image object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-spruce">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
        <p className="card-arrow mt-4 text-sm font-semibold text-copper">
          Learn more →
        </p>
      </div>
    </Link>
  );
}

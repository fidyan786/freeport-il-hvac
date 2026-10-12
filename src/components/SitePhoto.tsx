import Image from "next/image";

export const PHOTO_WIDTH = 1200;
export const PHOTO_HEIGHT = 800;

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function SitePhoto({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={PHOTO_WIDTH}
      height={PHOTO_HEIGHT}
      sizes={sizes}
      priority={priority}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

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
  const directHero = src.startsWith("/photos/heroes/");
  return (
    <Image
      src={src}
      alt={alt}
      width={directHero ? 640 : PHOTO_WIDTH}
      height={directHero ? 427 : PHOTO_HEIGHT}
      sizes={directHero ? "(max-width: 1023px) 640px, 576px" : sizes}
      priority={priority}
      unoptimized={directHero}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

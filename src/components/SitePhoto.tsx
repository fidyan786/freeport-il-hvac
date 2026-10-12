import { PHOTO_WIDTHS } from "@/lib/photo-sizes";

const FALLBACK_WIDTHS = [480, 640, 960];

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

function baseName(src: string) {
  const file = src.split("/").pop() ?? "";
  return file.replace(/\.(webp|avif|jpe?g|png)$/i, "");
}

export function SitePhoto({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: Props) {
  const name = baseName(src);
  const widths = PHOTO_WIDTHS[name] ?? FALLBACK_WIDTHS;
  const srcFor = (width: number, ext: "avif" | "webp") =>
    `/photos/sized/${name}-${width}.${ext}`;
  const set = (ext: "avif" | "webp") =>
    widths.map((width) => `${srcFor(width, ext)} ${width}w`).join(", ");
  const fallbackWidth = widths.includes(640) ? 640 : widths[widths.length - 1];

  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        src={srcFor(fallbackWidth, "webp")}
        alt={alt}
        width={960}
        height={640}
        sizes={sizes}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        loading={priority ? "eager" : "lazy"}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    </picture>
  );
}

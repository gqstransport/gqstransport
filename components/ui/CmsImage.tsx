import Image from "next/image";
import { resolveMediaUrl, isBackendMediaUrl } from "@/lib/media-url";

type CmsImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

/** Renders CMS uploads reliably; uses Next/Image for local /assets only. */
export function CmsImage({
  src,
  alt,
  className = "",
  fill,
  sizes,
  priority,
}: CmsImageProps) {
  const resolved = resolveMediaUrl(src);

  if (isBackendMediaUrl(resolved)) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolved}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
        />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={resolved} alt={alt} className={className} />
    );
  }

  if (fill) {
    return (
      <Image
        src={resolved}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={resolved}
      alt={alt}
      width={800}
      height={500}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}

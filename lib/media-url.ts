const FALLBACK_IMAGE = "/assets/images/image_1.jpeg";

/** Resolve image paths for display (local assets or backend uploads via Next rewrite). */
export function resolveMediaUrl(src?: string): string {
  if (!src?.trim()) return FALLBACK_IMAGE;
  const trimmed = src.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  // Same-origin: proxied to gqs-backend in next.config rewrites
  if (trimmed.startsWith("/uploads/")) return trimmed;
  return trimmed;
}

export function isBackendMediaUrl(src: string): boolean {
  return src.startsWith("/uploads/") || /^https?:\/\//i.test(src);
}

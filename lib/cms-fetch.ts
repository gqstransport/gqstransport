import { getApiBaseUrl } from "./api";

export type CmsResource = "projects" | "blogs" | "services";

/**
 * Fetch CMS data from gqs-backend only (same source as gqs-admin).
 * Does not fall back to stale local data/*.json files.
 */
export async function fetchCmsJson<T>(resource: CmsResource): Promise<T[]> {
  const base = getApiBaseUrl().replace(/\/$/, "");
  const url = `${base}/api/${resource}`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`CMS ${resource} failed: ${res.status} ${res.statusText} (${url})`);
  }

  const data = await res.json();
  return Array.isArray(data) ? (data as T[]) : [];
}

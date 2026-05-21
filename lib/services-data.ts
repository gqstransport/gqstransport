import { fetchCmsJson } from "./cms-fetch";
import { sortByRecent } from "./sort";
import { ServiceSubpage, ServiceCategory, CATEGORIES, groupServices } from "./services-types";

export * from "./services-types";

export async function getServicesData(): Promise<ServiceCategory[]> {
  try {
    const flatServices = sortByRecent(await fetchCmsJson<ServiceSubpage>("services"));
    return groupServices(flatServices);
  } catch (error) {
    console.error("Error fetching services from CMS backend:", error);
    return CATEGORIES.map((cat) => ({ ...cat, services: [] }));
  }
}

export async function getServiceBySlug(slug: string) {
  const categories = await getServicesData();
  for (const category of categories) {
    if (category.slug === slug) return { type: "category" as const, data: category };
    const service = category.services.find((s) => s.slug === slug);
    if (service) return { type: "service" as const, data: service, category };
  }
  return null;
}

export async function getAllSlugs() {
  const categories = await getServicesData();
  const slugs: string[] = [];
  for (const category of categories) {
    slugs.push(category.slug);
    for (const service of category.services) {
      slugs.push(service.slug);
    }
  }
  return slugs;
}

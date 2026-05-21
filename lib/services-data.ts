import fs from "fs";
import path from "path";
import { apiUrl } from "./api";
import { ServiceSubpage, ServiceCategory, CATEGORIES, groupServices } from "./services-types";

export * from "./services-types";

function loadServicesFromFile(): ServiceSubpage[] {
  const dataFile = path.join(process.cwd(), "data", "services.json");
  if (!fs.existsSync(dataFile)) {
    return [];
  }
  const data = fs.readFileSync(dataFile, "utf8");
  return JSON.parse(data) as ServiceSubpage[];
}

export async function getServicesData(): Promise<ServiceCategory[]> {
  try {
    const res = await fetch(apiUrl("/api/services"), { cache: "no-store" });
    if (res.ok) {
      const flatServices = (await res.json()) as ServiceSubpage[];
      return groupServices(flatServices);
    }
  } catch (error) {
    console.error("Error fetching services from API:", error);
  }

  try {
    const flatServices = loadServicesFromFile();
    return groupServices(flatServices);
  } catch (error) {
    console.error("Error reading services:", error);
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

import { fetchCmsJson } from "./cms-fetch";
import { sortByRecent } from "./sort";

export interface ProjectItem {
  id: string;
  title: string;
  scope: string;
  location: string;
  equipment: string;
  challenge: string;
  image: string;
  status: string;
}

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const data = await fetchCmsJson<ProjectItem>("projects");
    return sortByRecent(data);
  } catch (error) {
    console.error("Error fetching projects from CMS backend:", error);
    return [];
  }
}

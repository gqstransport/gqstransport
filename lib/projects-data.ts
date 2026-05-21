import fs from "fs";
import path from "path";
import { apiUrl } from "./api";

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

function loadProjectsFromFile(): ProjectItem[] {
  const dataFile = path.join(process.cwd(), "data", "projects.json");
  if (!fs.existsSync(dataFile)) {
    return [];
  }
  const data = fs.readFileSync(dataFile, "utf8");
  return JSON.parse(data) as ProjectItem[];
}

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const res = await fetch(apiUrl("/api/projects"), { cache: "no-store" });
    if (res.ok) {
      return (await res.json()) as ProjectItem[];
    }
  } catch (error) {
    console.error("Error fetching projects from API:", error);
  }

  try {
    return loadProjectsFromFile();
  } catch (error) {
    console.error("Error reading projects:", error);
    return [];
  }
}

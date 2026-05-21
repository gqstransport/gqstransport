import { getProjects } from "@/lib/projects-data";
import { ProjectsListClient } from "./ProjectsListClient";

export async function ProjectsList() {
  const items = await getProjects();

  return (
    <section className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProjectsListClient items={items} />
      </div>
    </section>
  );
}

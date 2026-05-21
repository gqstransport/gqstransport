"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectItem } from "@/lib/projects-data";
import { CmsImage } from "@/components/ui/CmsImage";
import { ListPagination, PUBLIC_PAGE_SIZE } from "@/components/ui/ListPagination";

export function ProjectsListClient({ items }: { items: ProjectItem[] }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / PUBLIC_PAGE_SIZE));

  const paginated = useMemo(() => {
    const start = (page - 1) * PUBLIC_PAGE_SIZE;
    return items.slice(start, start + PUBLIC_PAGE_SIZE);
  }, [items, page]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-gray-500 font-medium">No projects to display yet.</p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {paginated.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={`/projects/${project.id}`}
              className="group block overflow-hidden rounded-sm border border-black/5 bg-[var(--color-surface-soft)] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/11] overflow-hidden border-b border-black/5">
                <CmsImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-primary-navy)]/80 p-8 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="mb-4 flex h-14 w-14 -translate-y-4 items-center justify-center rounded-full bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] transition-transform duration-500 group-hover:translate-y-0">
                    <ArrowUpRight className="h-7 w-7" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    View Full Case Study
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="space-y-4 p-8">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent-gold)]">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </div>
                <h3 className="font-heading text-xl font-black uppercase leading-tight tracking-tight text-[var(--color-primary-navy)] transition-colors group-hover:text-[var(--color-accent-gold)]">
                  {project.title}
                </h3>
                <p className="line-clamp-2 text-xs font-medium leading-relaxed text-gray-500">
                  {project.scope}
                </p>
                <div className="flex items-center justify-between border-t border-black/5 pt-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-primary-navy)]">
                    Case Study
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-accent-gold)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <ListPagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
}

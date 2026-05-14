import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function ProjectsList() {
  const t = await getTranslations("pages.projects.index");
  const items = (await t.raw("items")) as Array<{
    id: string;
    title: string;
    scope: string;
    location: string;
    equipment: string;
    challenge: string;
    image: string;
  }>;

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {items.map((project) => (
              <StaggerItem key={project.id}>
                <Link 
                  href={`/projects/${project.id}`} 
                  className="group block bg-[var(--color-surface-soft)] rounded-sm border border-black/5 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-black/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[var(--color-primary-navy)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                      <div className="h-14 w-14 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center text-[var(--color-primary-navy)] mb-4 -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowUpRight className="h-7 w-7" />
                      </div>
                      <span className="text-white font-black uppercase tracking-[0.2em] text-[10px]">View Full Case Study</span>
                    </div>

                    {/* Bottom Gradient for text readability if always visible */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-2 text-[var(--color-accent-gold)] font-bold text-[10px] uppercase tracking-widest">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                    <h3 className="font-heading text-xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight group-hover:text-[var(--color-accent-gold)] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">
                      {project.scope}
                    </p>
                    <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-primary-navy)]">Case Study</span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--color-accent-gold)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

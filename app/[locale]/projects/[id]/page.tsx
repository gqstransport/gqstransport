import { PageHero } from "@/components/common/PageHero";
import { MapPin, Box, Truck, AlertCircle, Calendar, ChevronLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Reveal } from "@/components/ui/motion-reveal";
import { getProjects } from "@/lib/projects-data";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const items = await getProjects();

  const project = items.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <PageHero 
        title={project.title}
        description={project.scope}
        label="Project Case Study"
        centered={true}
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: Gallery/Image */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal direction="up">
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl border border-gray-100">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-1 gradient-line" />
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-sm overflow-hidden bg-gray-100">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xs uppercase">Gallery Slot 1</div>
                </div>
                <div className="relative aspect-square rounded-sm overflow-hidden bg-gray-100">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xs uppercase">Gallery Slot 2</div>
                </div>
              </div>
            </div>

            {/* Right: Technical Details */}
            <div className="lg:col-span-5 space-y-12">
              <Reveal direction="right">
                <div className="space-y-6">
                  <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-colors mb-4">
                    <ChevronLeft className="h-4 w-4" /> Back to Projects
                  </Link>
                  <h2 className="text-3xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">Technical Breakdown</h2>
                  <div className="h-1.5 w-24 gradient-line" />
                </div>
              </Reveal>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-sm bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-primary-navy)] border border-[var(--color-border)]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent-gold)] mb-1">Project Site</p>
                    <p className="text-lg font-black text-[var(--color-primary-navy)] uppercase tracking-tight">{project.location}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-sm bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-primary-navy)] border border-[var(--color-border)]">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent-gold)] mb-1">Fleet Deployment</p>
                    <p className="text-base font-bold text-gray-600 uppercase leading-relaxed">{project.equipment}</p>
                  </div>
                </div>

                <div className="bg-[var(--color-surface-soft)] p-8 rounded-sm border-l-4 border-l-[var(--color-accent-gold)] relative overflow-hidden">
                  <AlertCircle className="absolute -top-4 -right-4 h-24 w-24 text-[var(--color-accent-gold)] opacity-[0.05]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary-navy)] mb-4">The Challenge</p>
                  <p className="text-sm font-medium text-gray-500 italic leading-relaxed">
                    "{project.challenge}"
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-100">
                   <div className="flex items-center gap-4 p-6 bg-[var(--color-primary-navy)] rounded-sm text-white">
                      <Calendar className="h-6 w-6 text-[var(--color-accent-gold)]" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Execution Period</p>
                        <p className="text-sm font-bold uppercase">Completed FY24</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

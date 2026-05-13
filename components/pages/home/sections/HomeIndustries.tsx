import { getTranslations } from "next-intl/server";
import { 
  Droplets, 
  Construction, 
  Factory, 
  Anchor, 
  Cpu, 
  HardHat 
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

const industryIcons = {
  oilGas: Droplets,
  construction: Construction,
  steel: Factory,
  ports: Anchor,
  manufacturing: Cpu,
  infrastructure: HardHat,
} as const;

export async function HomeIndustries() {
  const t = await getTranslations("pages.home.industries");

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <Reveal direction="up">
            <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] sm:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto mt-6" />
            <p className="text-xl text-gray-500 font-medium mt-8 leading-relaxed">
              {t("description")}
            </p>
          </Reveal>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(["oilGas", "construction", "steel", "ports", "manufacturing", "infrastructure"] as const).map((key) => {
              const Icon = industryIcons[key];
              return (
                <StaggerItem key={key}>
                  <div className="group relative bg-[var(--color-surface-soft)] p-12 border border-[var(--color-border)] rounded-sm overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 h-full">
                    {/* Background Hover Effect - Sophisticated Reveal */}
                    <div className="absolute inset-0 bg-[var(--color-primary-navy)] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-out" />
                    
                    <div className="relative z-10 space-y-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-white text-[var(--color-primary-navy)] group-hover:bg-[var(--color-accent-gold)] transition-all duration-500 shadow-sm group-hover:rotate-12">
                        <Icon className="h-10 w-10" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] group-hover:text-white transition-colors">
                          {t(`items.${key}.title`)}
                        </h3>
                        <p className="text-gray-500 group-hover:text-white/70 transition-colors leading-relaxed font-medium">
                          {t(`items.${key}.description`)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent-gold)]/5 group-hover:bg-[var(--color-accent-gold)]/20 rounded-bl-[100%] transition-all duration-700" />
                    
                    {/* Hover Arrow */}
                    <div className="absolute bottom-8 right-8 text-[var(--color-accent-gold)] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                       <span className="text-sm font-bold uppercase tracking-widest">Learn More →</span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

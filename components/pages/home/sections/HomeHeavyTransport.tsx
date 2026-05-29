import { getTranslations } from "next-intl/server";
import { Truck, Scale, ShieldCheck, Globe } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";
import Image from "next/image";

const solutionIcons = {
  flatbed: Truck,
  lowbed: Scale,
  heavyEquipment: ShieldCheck,
  crossBorder: Globe,
} as const;

const solutionImages = {
  flatbed: "/assets/images/card_flatbed.png",
  lowbed: "/assets/images/card_lowbed.png",
  heavyEquipment: "/assets/images/card_heavy.png",
  crossBorder: "/assets/images/card_crossborder.png",
} as const;

export async function HomeHeavyTransport() {
  const t = await getTranslations("pages.home.heavyTransport");

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20">
          <div className="max-w-3xl space-y-6">
            <Reveal direction="left">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] sm:text-5xl lg:text-6xl leading-[1.1]">
                  {t("title")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>
            
            <Reveal direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-2xl font-bold text-[var(--color-primary-navy)] italic">
                  {t("subtitle")}
                </p>
                <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">
                  {t("description")}
                </p>
              </div>
            </Reveal>
          </div>
          
          <Reveal direction="right" delay={0.3}>
            <div className="hidden lg:block h-32 w-32 border-8 border-[var(--color-surface-soft)] rounded-sm flex items-center justify-center">
               <Truck className="h-16 w-16 text-[var(--color-surface-soft)]" />
            </div>
          </Reveal>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(["flatbed", "lowbed", "heavyEquipment", "crossBorder"] as const).map((key) => {
              const Icon = solutionIcons[key];
              return (
                <StaggerItem key={key}>
                  <div className="group h-[380px] border border-[var(--color-border)] rounded-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[var(--color-primary-navy)]">
                       <Image 
                         src={solutionImages[key]} 
                         alt={t(`items.${key}.title`)} 
                         fill 
                         className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-100" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)] via-[var(--color-primary-navy)]/80 to-transparent group-hover:from-[var(--color-primary-navy)]/90 group-hover:via-[var(--color-primary-navy)]/40 group-hover:to-transparent transition-colors duration-500" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full p-10">
                      <div className="mb-auto inline-flex h-16 w-16 items-center justify-center rounded-sm bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] shadow-sm group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="mt-8">
                        <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4">
                          {t(`items.${key}.title`)}
                        </h3>
                        <p className="text-white/70 leading-relaxed text-sm font-medium">
                          {t(`items.${key}.description`)}
                        </p>
                      </div>
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

import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import Image from "next/image";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function HomeMachineryRental() {
  const t = await getTranslations("pages.home.machineryRental");

  return (
    <section className="bg-[var(--color-primary-navy)] py-24 lg:py-32 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10">
            <Reveal direction="left">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                  {t("title")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>
            
            <Reveal direction="left" delay={0.2}>
              <p className="text-xl text-white/70 leading-relaxed font-medium max-w-xl">
                {t("description")}
              </p>
            </Reveal>

            <div className="space-y-8">
              <Reveal direction="left" delay={0.3}>
                <h3 className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--color-accent-gold)]/50" />
                  {t("availableEquipmentTitle")}
                </h3>
              </Reveal>
              
              <StaggerContainer staggerDelay={0.05} delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {(t.raw("items") as string[]).map((item, idx) => (
                    <StaggerItem key={idx} direction="left">
                      <div className="flex items-center gap-4 group">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[var(--color-accent-gold)]/10 text-[var(--color-accent-gold)] border border-[var(--color-accent-gold)]/20 group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-primary-navy)] transition-all">
                          <Check className="h-3 w-3" strokeWidth={4} />
                        </div>
                        <span className="font-bold uppercase tracking-wide text-xs text-white/80 group-hover:text-white transition-colors">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>

            <Reveal direction="up" delay={0.6}>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/40 italic text-sm font-medium">
                  {t("footerNote")}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal direction="right" delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square relative rounded-sm overflow-hidden group shadow-2xl">
                    <Image src="/machinery-1.png" alt="Machinery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="aspect-[3/4] relative rounded-sm overflow-hidden group shadow-2xl">
                    <Image src="/machinery-2.png" alt="Machinery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] relative rounded-sm overflow-hidden group shadow-2xl">
                    <Image src="/machinery-3.png" alt="Machinery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="aspect-square relative rounded-sm overflow-hidden group shadow-2xl">
                    <Image src="/machinery-4.png" alt="Machinery" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
              </div>
            </Reveal>
            
            {/* Premium Badge */}
            <Reveal direction="up" delay={0.8}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-8 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center min-w-[180px] border-b-4 border-b-[var(--color-accent-gold)]">
                <p className="text-[var(--color-primary-navy)] text-4xl font-black italic leading-none">GQS</p>
                <p className="text-[var(--color-primary-navy)] text-[10px] font-bold uppercase tracking-[0.2em] mt-3 opacity-60">Elite Rental</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

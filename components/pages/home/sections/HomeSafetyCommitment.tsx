import { getTranslations } from "next-intl/server";
import { ShieldCheck, ClipboardCheck, Timer, UserCheck, HeartHandshake, Award } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";
import { Counter } from "@/components/ui/counter";

const commitmentIcons = [ShieldCheck, UserCheck, Timer, ClipboardCheck, HeartHandshake];

export async function HomeSafetyCommitment() {
  const t = await getTranslations("pages.home.safety");

  return (
    <section className="bg-[var(--color-primary-navy)] py-24 lg:py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10">
            <Reveal direction="left">
              <div className="space-y-4">
                <span className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Safety First Culture
                </span>
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1]">
                  {t("title")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                {t("description")}
              </p>
            </Reveal>

            <div className="pt-10 border-t border-white/10">
              <StaggerContainer staggerDelay={0.2}>
                <div className="flex flex-wrap gap-12">
                  <StaggerItem>
                    <div className="space-y-1">
                      <p className="text-4xl font-black text-[var(--color-accent-gold)] italic leading-none">
                        <Counter value="0" />
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">LTI Incidents</p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="space-y-1">
                      <p className="text-4xl font-black text-[var(--color-accent-gold)] italic leading-none">
                        <Counter value="100%" />
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Compliance</p>
                    </div>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </div>

          <div className="relative">
            <Reveal direction="right" delay={0.4}>
              <div className="glass-dark p-8 lg:p-12 rounded-sm border border-white/10 shadow-2xl relative z-10">
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-10 flex items-center gap-4">
                  <span className="h-px w-8 bg-[var(--color-accent-gold)]" />
                  {t("commitmentsTitle")}
                </h3>
                
                <StaggerContainer staggerDelay={0.1}>
                  <ul className="grid grid-cols-1 gap-6">
                    {(t.raw("items") as string[]).map((commitment, idx) => {
                      const Icon = commitmentIcons[idx % commitmentIcons.length];
                      return (
                        <StaggerItem key={idx}>
                          <li className="flex items-center gap-6 group p-4 rounded-sm hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[var(--color-accent-gold)]/10 text-[var(--color-accent-gold)] border border-[var(--color-accent-gold)]/20 group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-primary-navy)] transition-all duration-300">
                              <Icon className="h-6 w-6" />
                            </div>
                            <span className="text-white/80 font-bold uppercase tracking-wide text-sm group-hover:text-white transition-colors">
                              {commitment}
                            </span>
                          </li>
                        </StaggerItem>
                      );
                    })}
                  </ul>
                </StaggerContainer>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/30 italic text-xs text-center font-medium">
                    {t("footerNote")}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Decorative background element */}
            <div className="absolute -top-12 -right-12 h-64 w-64 bg-[var(--color-accent-gold)] opacity-10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 bg-blue-500 opacity-10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/common/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";
import { AlertTriangle, HardHat, HeartPulse, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default async function SafetyPage() {
  const t = await getTranslations("pages.safety");

  return (
    <main className="flex-1 bg-white">
      <PageHero
        title={t("title")}
        description={t("description")}
        label="Safety Excellence"
      />

      {/* Safety First Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-16">
            <Reveal direction="left" delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-[var(--color-border)] bg-gray-100">
                {/* Client requested placeholders */}
                <Image
                  src="/assets/images/safety_briefing_1780042042561.png"
                  alt="Safety Briefing Placeholder"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="space-y-6 lg:max-w-xl">
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                  {t("safetyFirstTitle")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {t("safetyFirstDescription")}
                </p>
                <div className="pt-6 grid grid-cols-2 gap-6 border-t border-[var(--color-border)]">
                   <div>
                     <p className="text-4xl font-black text-[var(--color-accent-gold)]">0</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">Lost Time Injuries</p>
                   </div>
                   <div>
                     <p className="text-4xl font-black text-[var(--color-accent-gold)]">100%</p>
                     <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">HSE Compliance</p>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Safety Pillars */}
      <section className="bg-[var(--color-surface-soft)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
              {t("pillarsTitle")}
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: HardHat, title: "PPE Compliance", desc: "Mandatory protective equipment for all site personnel." },
                { icon: AlertTriangle, title: "Risk Assessment", desc: "Comprehensive job safety analysis before every project." },
                { icon: ShieldAlert, title: "Equipment Safety", desc: "Strict maintenance schedules and pre-operation checks." },
                { icon: HeartPulse, title: "Health & Wellbeing", desc: "Ensuring our workforce is healthy and fit for duty." }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-white p-8 h-full border border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-300 group hover:-translate-y-2">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-[var(--color-primary-navy)] text-white mb-6 group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-primary-navy)] transition-colors">
                       <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-[var(--color-primary-navy)] mb-3">{item.title}</h3>
                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
      
      {/* Risk Management & Route Planning */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                  Risk Management & Route Planning
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Transporting abnormal loads requires meticulous planning to mitigate risks. Our engineering and logistics teams conduct thorough route surveys before any mobilization.
                </p>
                <ul className="space-y-3 mt-4 text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[var(--color-accent-gold)]" /> Swept-path analysis for oversized cargo</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[var(--color-accent-gold)]" /> Road infrastructure and bridge capacity checks</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[var(--color-accent-gold)]" /> Weather and traffic pattern monitoring</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[var(--color-accent-gold)]" /> Coordination with local traffic authorities and escorts</li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[var(--color-border)] shadow-md">
                <Image src="/assets/images/safety_route_1780042059332.png" alt="Route Survey" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Incident Response Protocol */}
      <section className="bg-[var(--color-primary-navy)] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-white">
              Incident Response & Emergency Protocols
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
            <p className="text-white/70 max-w-2xl mx-auto">While our goal is zero incidents, we are fully prepared with rapid response protocols to handle any unforeseen events.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "24/7 Command Center", desc: "Continuous monitoring of all active projects and transport fleets." },
               { title: "Rapid Deployment Teams", desc: "On-call safety officers and mechanics ready to dispatch immediately." },
               { title: "Client Communication", desc: "Transparent, real-time updates provided to stakeholders during any event." }
             ].map((item, idx) => (
               <div key={idx} className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-[var(--color-accent-gold)] transition-colors">
                 <h4 className="font-bold uppercase tracking-tight text-[var(--color-accent-gold)] mb-3">{item.title}</h4>
                 <p className="text-sm text-white/70 font-medium leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* Training and Drills Placeholder */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <Reveal direction="up">
                <div className="text-center mb-12">
                   <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                     Safety Training & Drills
                   </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative aspect-video rounded-sm overflow-hidden bg-gray-100 border border-[var(--color-border)] shadow-md">
                    <Image
                      src="/assets/images/safety_training_1780042079956.png"
                      alt="Operator Training Placeholder"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video rounded-sm overflow-hidden bg-gray-100 border border-[var(--color-border)] shadow-md">
                    <Image
                      src="/assets/images/safety_drill_1780042104770.png"
                      alt="Drill Placeholder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
             </Reveal>
        </div>
      </section>
    </main>
  );
}

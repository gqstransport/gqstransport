import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/common/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";
import { CheckCircle2, Award, Target, FileCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default async function QualityPage() {
  const t = await getTranslations("pages.quality");

  return (
    <main className="flex-1 bg-white">
      <PageHero
        title={t("title")}
        description={t("description")}
        label="Quality Standards"
      />

      {/* Quality Commitment Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                  {t("commitmentTitle")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {t("commitmentDescription")}
                </p>
                <div className="pt-6">
                   <h3 className="text-xl font-bold uppercase text-[var(--color-primary-navy)] mb-4">{t("coreStandards")}</h3>
                   <ul className="space-y-4">
                     {[
                       "ISO 9001:2015 Quality Management Systems",
                       "Rigorous Pre-Trip Inspections",
                       "Continuous Operator Training Programs",
                       "Customer Satisfaction Tracking"
                     ].map((standard, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                         <CheckCircle2 className="h-5 w-5 text-[var(--color-accent-gold)] shrink-0" />
                         {standard}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </Reveal>
            
            <Reveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-sm overflow-hidden shadow-lg border border-[var(--color-border)] bg-gray-100">
                  <Image src="/assets/images/quality_inspection_1780041901104.png" alt="Inspection" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-sm overflow-hidden shadow-lg border border-[var(--color-border)] mt-8 bg-gray-100">
                  <Image src="/assets/images/quality_equipment_1780041920414.png" alt="Equipment" fill className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="bg-[var(--color-primary-navy)] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-white">
              {t("accreditationsTitle")}
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
            <p className="text-white/70 max-w-2xl mx-auto">{t("accreditationsDescription")}</p>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "ISO 9001", desc: "Quality Management" },
                { icon: ShieldCheck, title: "TUV Certified", desc: "Riggers & Operators" },
                { icon: Target, title: "Aramco Approved", desc: "Vendor Compliance" },
                { icon: FileCheck, title: "SABIC Approved", desc: "Logistics Partner" }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-[var(--color-accent-gold)] transition-colors duration-300 text-center rounded-sm">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-sm bg-white/10 text-[var(--color-accent-gold)] mb-6">
                       <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold uppercase text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm font-medium uppercase tracking-wider">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
      
      {/* Quality Assurance Workflow Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
              Quality Assurance Workflow
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">Every project goes through our rigorous QA process from initiation to completion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {["1. Initial Assessment", "2. Engineering Review", "3. Equipment Prep", "4. Execution & Audit"].map((step, idx) => (
               <div key={idx} className="relative p-8 border border-[var(--color-border)] rounded-sm bg-gray-50 text-center group hover:bg-[var(--color-primary-navy)] transition-colors duration-300">
                 <div className="text-4xl font-black text-[var(--color-accent-gold)] mb-4 opacity-30 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                 <h4 className="font-bold uppercase tracking-tight text-[var(--color-primary-navy)] group-hover:text-white transition-colors">{step}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Fleet Maintenance Protocol Section */}
      <section className="bg-[var(--color-surface-soft)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[var(--color-border)] shadow-md">
                <Image src="/assets/images/quality_maintenance_1780041945810.png" alt="Maintenance" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                  Comprehensive Fleet Maintenance
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  We don't compromise on equipment reliability. Our in-house maintenance teams perform scheduled diagnostics and preventative maintenance on every piece of heavy machinery and transport vehicle in our fleet.
                </p>
                <ul className="space-y-3 mt-4 text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--color-accent-gold)]" /> Daily pre-operation vehicle checks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--color-accent-gold)]" /> Mileage and hours-based servicing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--color-accent-gold)]" /> OEM certified replacement parts only</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--color-accent-gold)]" /> Computerized maintenance management system (CMMS)</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery Placeholder */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <Reveal direction="up">
                <div className="text-center mb-12">
                   <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                     Quality in Action
                   </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {["/assets/images/quality_action_1_1780041987752.png", "/assets/images/quality_action_2_1780042006300.png", "/assets/images/quality_action_3_1780042023758.png"].map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 border border-[var(--color-border)] shadow-md">
                      <Image
                        src={src}
                        alt={`Quality Image ${i} Placeholder`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
             </Reveal>
        </div>
      </section>
    </main>
  );
}

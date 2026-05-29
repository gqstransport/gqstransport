import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/common/PageHero";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";
import { Activity, Map, ShieldCheck, Zap, Database, Cloud, Smartphone, Lock, Shield, FileCheck } from "lucide-react";
import Image from "next/image";

export default async function IoTPage() {
  const t = await getTranslations("pages.services.iot");

  return (
    <main className="flex-1 bg-white">
      <PageHero
        title={t("title")}
        description={t("description")}
        label="IoT & Telematics"
      />

      {/* Main Content Section with Placeholder Image */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                  {t("overviewTitle")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {t("overviewDescription")}
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Real-time fleet tracking and location data",
                    "Predictive maintenance alerts",
                    "Fuel efficiency monitoring",
                    "Driver behavior analysis"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <Zap className="h-5 w-5 text-[var(--color-accent-gold)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            
            <Reveal direction="right" delay={0.2}>
              <div className="relative aspect-video rounded-sm overflow-hidden bg-gray-100 border border-[var(--color-border)] shadow-xl">
                {/* Client requested placeholders */}
                <Image
                  src="/assets/images/iot_dashboard_1780041858553.png"
                  alt="IoT Dashboard Placeholder"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[var(--color-surface-soft)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
              {t("benefitsTitle")}
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Map, title: "Optimized Routing", desc: "Reduce travel time and fuel consumption with AI-powered route planning." },
                { icon: Activity, title: "Maximized Uptime", desc: "Identify mechanical issues before they cause costly breakdowns." },
                { icon: ShieldCheck, title: "Enhanced Safety", desc: "Monitor compliance and improve driver safety with real-time metrics." }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-white p-10 border border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-colors duration-300">
                    <item.icon className="h-10 w-10 text-[var(--color-accent-gold)] mb-6" />
                    <h3 className="text-xl font-bold uppercase text-[var(--color-primary-navy)] mb-3">{item.title}</h3>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
      
      {/* Another Placeholder Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
             <Reveal direction="up">
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] mb-8">
                  Telematics Integration Workflow
                </h3>
                <div className="relative w-full max-w-4xl mx-auto aspect-[21/9] rounded-sm overflow-hidden bg-gray-100 border border-[var(--color-border)] shadow-md">
                  <Image
                    src="/assets/images/iot_workflow_1780041878069.png"
                    alt="Workflow Diagram Placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 text-gray-500 font-medium max-w-2xl mx-auto">
                  Our fully integrated IoT stack ensures that every piece of machinery and heavy transport vehicle is monitored 24/7 for optimal performance.
                </p>
             </Reveal>
        </div>
      </section>
    {/* Integration Capabilities Section */}
      <section className="bg-[var(--color-surface-soft)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
              Seamless Integration Capabilities
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto" />
            <p className="mt-6 text-gray-500 font-medium max-w-2xl mx-auto">
              Our telematics stack is designed to integrate effortlessly with your existing corporate infrastructure, providing a unified view of your logistics operations.
            </p>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Database, title: "ERP Integration", desc: "Push real-time fleet data directly into SAP, Oracle, and other major enterprise resource planning systems." },
                { icon: Cloud, title: "Cloud APIs", desc: "Robust REST APIs for custom dashboard development and third-party logistics platform connections." },
                { icon: Smartphone, title: "Client Portals", desc: "Dedicated mobile and web portals giving you 24/7 visibility into your cargo's exact location and status." }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-white p-10 border border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-colors duration-300">
                    <item.icon className="h-10 w-10 text-[var(--color-accent-gold)] mb-6" />
                    <h3 className="text-xl font-bold uppercase text-[var(--color-primary-navy)] mb-3">{item.title}</h3>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
               <div className="bg-[var(--color-primary-navy)] p-12 rounded-sm text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Shield className="w-48 h-48" />
                 </div>
                 <h2 className="font-heading text-3xl font-black uppercase tracking-tight mb-6">
                   Data Security & Compliance
                 </h2>
                 <p className="text-white/80 font-medium mb-8 leading-relaxed">
                   In an era of digital vulnerabilities, we treat your telematics data with the same rigorous security protocols as our physical operations. Our systems are fully compliant with KSA data localization regulations.
                 </p>
                 <ul className="space-y-4">
                  {[
                    { icon: Lock, text: "End-to-End Encryption for all data streams" },
                    { icon: FileCheck, text: "Compliant with Saudi Data & AI Authority (SDAIA) guidelines" },
                    { icon: ShieldCheck, text: "Regular third-party penetration testing and security audits" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-medium">
                      <item.icon className="h-5 w-5 text-[var(--color-accent-gold)] shrink-0" />
                      {item.text}
                    </li>
                  ))}
                 </ul>
               </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="space-y-6">
                 <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                   Why Data Sovereignty Matters
                 </h3>
                 <div className="h-1.5 w-16 bg-[var(--color-accent-gold)]" />
                 <p className="text-lg text-gray-600 leading-relaxed font-medium">
                   For critical infrastructure projects and sensitive industrial movements, the security of telematics data is paramount. 
                 </p>
                 <p className="text-lg text-gray-600 leading-relaxed font-medium">
                   By ensuring all tracking and operational data is securely hosted and encrypted, we protect our clients against industrial espionage and operational sabotage, ensuring complete confidentiality from origin to destination.
                 </p>
              </div>
            </Reveal>
           </div>
        </div>
      </section>
    </main>
  );
}

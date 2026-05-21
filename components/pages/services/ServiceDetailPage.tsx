"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Truck, 
  Settings, 
  Briefcase, 
  ChevronRight,
  ShieldCheck,
  Clock,
  Wrench
} from "lucide-react";
import type { ServiceSubpage, ServiceCategory } from "@/lib/services-data";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/ui/motion-reveal";
import { CmsImage } from "@/components/ui/CmsImage";

type Props = {
  service: ServiceSubpage;
  category: ServiceCategory;
};

const processSteps = [
  { icon: Clock, title: "Initial Consultation", desc: "We assess your requirements, timeline, and technical constraints." },
  { icon: Wrench, title: "Technical Planning", desc: "Our engineers develop a precise execution or mobilization plan." },
  { icon: ShieldCheck, title: "Safe Execution", desc: "Deployment with certified operators adhering to strict safety protocols." }
];

export function ServiceDetailPage({ service, category }: Props) {
  return (
    <div className="flex flex-col bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-[var(--color-primary-navy)] border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <Link
            href={`/services/${category.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-[var(--color-accent-gold)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to {category.title}</span>
          </Link>
        </div>
      </div>

      <PageHero
        title={service.title}
        description={service.description}
        label={category.title}
        centered={true}
      />

      {/* Main Content & Applications (Split Layout) - Section 2 (Even) */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-surface-soft)] rounded-full blur-[100px] opacity-50 -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left: Overview Text */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-[var(--color-primary-navy)] prose-p:text-[var(--color-text-muted)]">
                  <h2 className="text-3xl font-bold md:text-4xl mb-6">Service Overview</h2>
                  <div className="h-1 w-20 bg-[var(--color-accent-gold)] mb-8" />
                  <p className="text-xl leading-relaxed">
                    {service.overview || service.description}
                  </p>
                </div>
              </Reveal>

              {/* Technical Fleet Specs if available */}
              {service.fleetDetails && (
                <Reveal direction="up" delay={0.2}>
                  <div className="mt-16 bg-[var(--color-primary-navy)] text-white rounded-sm p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                      <Truck className="w-64 h-64 -mt-10 -mr-10" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <Truck className="h-8 w-8 text-[var(--color-accent-gold)]" />
                        <h3 className="font-heading text-2xl font-bold">Technical Specifications</h3>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-8">
                        {service.fleetDetails.types && (
                          <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] block mb-3">Equipment Portfolio</span>
                            <ul className="space-y-2">
                              {service.fleetDetails.types.map((type) => (
                                <li key={type} className="flex items-center gap-2 text-sm font-medium">
                                  <ChevronRight className="h-4 w-4 text-[var(--color-accent-gold)]" />
                                  {type}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="space-y-6">
                          {service.fleetDetails.capacity && (
                            <div>
                              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] block mb-2">Maximum Capacity</span>
                              <p className="text-xl font-bold">{service.fleetDetails.capacity}</p>
                            </div>
                          )}
                          {service.fleetDetails.availability && (
                            <div>
                              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] block mb-2">Mobilization</span>
                              <p className="text-sm text-white/80">{service.fleetDetails.availability}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right: Applications Grid & Equipment Visual */}
            <div className="lg:col-span-5">
              <Reveal direction="left">
                <div className="sticky top-32 space-y-8">
                  {/* Service Visual Card */}
                  <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-black/5 group bg-[var(--color-surface-soft)]">
                    <CmsImage
                      src={service.image || category.image || "/assets/images/founder_operations.png"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4 rounded-sm">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[var(--color-accent-gold)] mb-0.5">
                        {category.title}
                      </span>
                      <span className="block text-sm font-bold text-white uppercase">
                        {service.title}
                      </span>
                    </div>
                  </div>

                  {service.applications && service.applications.length > 0 && (
                    <div className="bg-white border border-black/5 rounded-sm p-8 shadow-lg">
                      <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="h-6 w-6 text-[var(--color-accent-gold)]" />
                        <h3 className="font-heading text-xl font-bold text-[var(--color-primary-navy)]">
                          Primary Applications
                        </h3>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        {service.applications.map((app, i) => (
                          <motion.div 
                            key={app}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-sm bg-[var(--color-surface-soft)] group hover:bg-[var(--color-primary-navy)] hover:text-white transition-colors"
                          >
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-accent-gold)] group-hover:scale-150 transition-transform" />
                            <span className="font-medium group-hover:text-white text-[var(--color-primary-navy)] transition-colors">{app}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Section 3 (Odd) */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 lg:py-32 bg-[var(--color-primary-navy)]">
          <div className="container mx-auto px-4">
            <Reveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                  Key Advantages
                </h2>
                <div className="h-1 w-20 bg-[var(--color-accent-gold)] mx-auto" />
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, i) => (
                <Reveal key={feature} direction="up" delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-sm shadow-sm border border-black/5 h-full hover:border-[var(--color-accent-gold)] transition-colors group">
                    <CheckCircle2 className="h-8 w-8 text-[var(--color-accent-gold)] mb-6 group-hover:scale-110 transition-transform" />
                    <p className="text-lg font-semibold text-[var(--color-primary-navy)] leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section - Section 4 (Even) */}
      <section className="py-20 lg:py-32 bg-[var(--color-surface-soft)]">
        <div className="container mx-auto px-4">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--color-primary-navy)] mb-6">
                How We Operate
              </h2>
              <div className="h-1 w-20 bg-[var(--color-accent-gold)] mx-auto" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[var(--color-surface-soft)] -z-10" />
            
            {processSteps.map((step, i) => (
              <Reveal key={step.title} direction="up" delay={i * 0.2}>
                <div className="text-center relative">
                  <div className="w-24 h-24 mx-auto bg-[var(--color-primary-navy)] rounded-full flex items-center justify-center border-8 border-white shadow-xl mb-8 group hover:-translate-y-2 transition-transform">
                    <step.icon className="h-10 w-10 text-[var(--color-accent-gold)]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-primary-navy)] mb-4">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] px-4">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - Section 5 (Odd) */}
      <section className="py-20 lg:py-32 bg-[var(--color-primary-navy)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal direction="up">
            <h2 className="font-heading text-3xl font-bold text-white md:text-5xl mb-6">
              Ready to deploy {service.title.toLowerCase()}?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-white/70 mb-12">
              Contact our operations team today for a detailed consultation, technical assessment, and formal quotation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center rounded-sm bg-[var(--color-accent-gold)] px-10 py-5 text-sm font-bold uppercase tracking-wider text-[var(--color-primary-navy)] transition-all hover:brightness-110 shadow-xl shadow-black/20 hover:-translate-y-1"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-sm border-2 border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[var(--color-primary-navy)] hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

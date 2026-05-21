"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2, Shield, Zap, Target, Award, ArrowUpRight, BarChart, Settings, Users, Box } from "lucide-react";
import type { ServiceCategory } from "@/lib/services-data";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/ui/motion-reveal";
import { CmsImage } from "@/components/ui/CmsImage";


const categoryAltTexts: Record<string, string> = {
  "heavy-transport": "GQS Heavy Transport Services",
  "heavy-machinery-rental": "GQS Heavy Machinery Rental",
  "hiab-boom-truck-services": "GQS Hiab & Boom Truck Services",
  "project-logistics-support": "GQS Project Logistics Support",
  "industrial-support-services": "GQS Industrial Support Operations",
};

type Props = {
  category: ServiceCategory;
};

// Map some generic benefits for the category
const genericBenefits = [
  { icon: Shield, title: "Uncompromising Safety", description: "Strict adherence to international and local safety protocols." },
  { icon: Zap, title: "Rapid Mobilization", description: "Quick response teams ready to deploy across the Kingdom." },
  { icon: Target, title: "Precision Execution", description: "Meticulous planning and execution for complex operations." },
  { icon: Users, title: "Expert Coordination", description: "Dedicated project managers for every major deployment." }
];

export function ServiceCategoryPage({ category }: Props) {
  return (
    <div className="flex flex-col bg-white">
      <PageHero
        title={category.title}
        description={category.intro}
        label="Service Category Overview"
        centered={true}
      />

      {/* Overview & Value Proposition (Split Image & Text Layout) */}
      <section className="py-20 lg:py-32 overflow-hidden bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Category Description Text */}
            <div className="lg:col-span-7">
              <Reveal direction="right">
                <div className="space-y-8 text-left">
                  <div className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-surface-soft)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[var(--color-primary-navy)] border border-black/5">
                    <Box className="h-4 w-4 text-[var(--color-accent-gold)]" />
                    Category Profile
                  </div>
                  <h2 className="font-heading text-4xl font-bold text-[var(--color-primary-navy)] leading-tight md:text-5xl">
                    Transforming Industrial Logistics in KSA
                  </h2>
                  <div className="h-1 w-20 bg-[var(--color-accent-gold)]" />
                  <p className="text-xl text-[var(--color-text-muted)] leading-relaxed">
                    {category.description}
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/request-a-quote"
                      className="group inline-flex items-center gap-4 text-lg font-bold text-[var(--color-primary-navy)]"
                    >
                      <span className="border-b-2 border-transparent transition-colors group-hover:border-[var(--color-accent-gold)]">Discuss Your Project Requirements</span>
                      <ArrowRight className="h-5 w-5 text-[var(--color-accent-gold)] transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Stunning Category Image Frame with Glassmorphism */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square">
              <Reveal direction="left">
                <div className="relative h-full w-full rounded-sm overflow-hidden shadow-2xl border border-black/5 group">
                  <CmsImage
                    src={category.image || "/assets/images/founder_operations.png"}
                    alt={categoryAltTexts[category.slug] || "GQS Operations"}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Visual Accent Glow Frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm">
                    <span className="block text-xs font-black uppercase tracking-widest text-[var(--color-accent-gold)] mb-1">
                      {category.title}
                    </span>
                    <span className="block text-sm font-semibold text-white">
                      Operations Excellence & Technical Standards
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Category Core Values & Key Advantages */}
      <section className="py-20 bg-[var(--color-surface-soft)] border-y border-black/5">
        <div className="container mx-auto px-4">
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl font-bold text-[var(--color-primary-navy)] md:text-4xl">
                Uncompromising Standards in {category.title}
              </h2>
              <div className="mx-auto mt-6 h-1 w-20 bg-[var(--color-accent-gold)]" />
            </div>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {genericBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-sm shadow-md border border-black/5 group transition-all hover:border-[var(--color-accent-gold)] flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-sm bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-primary-navy)] group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-primary-navy)] transition-colors mb-6">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-bold text-[var(--color-primary-navy)] text-lg mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Bento Box Style) - Section 3 (Odd) */}
      <section className="py-20 lg:py-32 bg-[var(--color-primary-navy)] relative z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-4">
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-heading text-4xl font-bold text-white md:text-5xl mb-6">
                Explore Our Solutions
              </h2>
              <p className="text-xl text-white/70">
                Dive into our specialized services designed to support the kingdom's most demanding industrial and infrastructure projects.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.services.map((service, index) => (
              <Reveal key={service.slug} direction="up" delay={index * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full bg-white rounded-sm border border-black/5 p-8 transition-all hover:shadow-2xl hover:border-[var(--color-accent-gold)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-0 translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-6 w-6 text-[var(--color-accent-gold)]" />
                  </div>

                  <div className="h-12 w-12 rounded-sm bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-primary-navy)] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="h-6 w-6" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[var(--color-primary-navy)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] line-clamp-3 mb-8">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-primary-navy)]">
                    <span className="border-b border-transparent group-hover:border-[var(--color-primary-navy)] transition-colors">
                      Learn More
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Support Section - Section 4 (Even) */}
      {category.industries && category.industries.length > 0 && (
        <section className="py-20 lg:py-32 bg-[var(--color-surface-soft)] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <Reveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl font-bold text-[var(--color-primary-navy)] md:text-5xl">
                  Industries We Support
                </h2>
                <div className="mx-auto mt-6 h-1 w-20 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {category.industries.map((industry, index) => (
                <Reveal key={industry} direction="up" delay={index * 0.05}>
                  <div className="px-8 py-4 rounded-sm bg-white border border-black/5 text-[var(--color-primary-navy)] font-semibold shadow-sm hover:bg-[var(--color-primary-navy)] hover:text-white transition-all cursor-default">
                    {industry}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Section 5 (Odd) */}
      <section className="py-16 bg-[var(--color-primary-navy)] relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-sm bg-gradient-to-r from-[var(--color-accent-gold)] via-blue-500 to-[var(--color-primary-navy)] p-[2px] shadow-2xl hover:shadow-[0_0_40px_rgba(201,160,80,0.2)] transition-shadow duration-500">
            <div className="bg-[var(--color-primary-navy)] rounded-sm p-12 md:p-20 text-center relative overflow-hidden h-full w-full">
              {/* Abstract glowing shapes */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-accent-gold)] rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
              
              <Reveal direction="up">
                <h2 className="font-heading text-3xl font-bold text-white md:text-5xl mb-6 relative z-10">
                  Ready to optimize your {category.title.toLowerCase()}?
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
                  Contact our specialized operations team today for technical consultation and immediate mobilization support.
                </p>

                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                  <Link
                    href="/request-a-quote"
                    className="inline-flex items-center justify-center rounded-sm bg-[var(--color-accent-gold)] px-10 py-5 text-sm font-bold uppercase tracking-wider text-[var(--color-primary-navy)] transition-all hover:brightness-110 shadow-[0_0_20px_rgba(201,160,80,0.3)] hover:-translate-y-1"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-sm border-2 border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[var(--color-primary-navy)] hover:-translate-y-1"
                  >
                    Contact Operations
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

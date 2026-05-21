"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Truck,
  Settings,
  Anchor,
  Activity,
  ShieldCheck,
  MapPin,
  FastForward,
  Globe,
  Users,
  DollarSign,
  Briefcase,
  Award,
  ClipboardCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ServiceCategory, ServiceSubpage, groupServices } from "@/lib/services-types";
import { apiUrl } from "@/lib/api";
import { PageHero } from "@/components/common/PageHero";
import { ClientLogosMarquee } from "@/components/common/ClientLogosMarquee";
import { Reveal } from "@/components/ui/motion-reveal";
import Image from "next/image";


const categoryAltTexts: Record<string, string> = {
  "heavy-transport": "GQS Heavy Transport Services",
  "heavy-machinery-rental": "GQS Heavy Machinery Rental",
  "hiab-boom-truck-services": "GQS Hiab & Boom Truck Services",
  "project-logistics-support": "GQS Project Logistics Support",
  "industrial-support-services": "GQS Industrial Support Operations",
};

const whyChooseUs = [
  { icon: FastForward, title: "Fast Mobilization", description: "Rapid response and deployment across KSA." },
  { icon: Globe, title: "Nationwide Coverage", description: "Serving all major industrial cities and remote sites." },
  { icon: ShieldCheck, title: "Reliable Network", description: "A robust fleet and supplier network you can trust." },
  { icon: Users, title: "Experienced Team", description: "Professional coordination and skilled operators." },
  { icon: DollarSign, title: "Competitive Pricing", description: "Cost-effective solutions for every project scale." },
  { icon: Briefcase, title: "Project Expertise", description: "Deep experience in Oil & Gas and Infrastructure." },
];

const industries = [
  "Oil & Gas", "Construction", "Infrastructure", "Marine & Ports", "Manufacturing", "Steel & Fabrication"
];

const cities = ["Dammam", "Jubail", "Riyadh", "Khobar", "Jeddah", "Yanbu", "GCC Cross-Border Operations"];

const categoryIcons: Record<string, any> = {
  "heavy-transport": Truck,
  "heavy-machinery-rental": Settings,
  "hiab-boom-truck-services": Activity,
  "project-logistics-support": Anchor,
  "industrial-support-services": Briefcase,
};

export function ServicesPage() {
  const tSafety = useTranslations("pages.services.safetySection");
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);

  interface StandardItem {
    title: string;
    desc: string;
  }

  let standards: StandardItem[] = [];
  try {
    standards = tSafety.raw("standards") as StandardItem[];
  } catch (e) {
    console.error("Failed to load standards translations", e);
  }

  const standardIcons = [ShieldCheck, Award, ClipboardCheck, Users];
  const statsKeys = ["lti", "compliance", "audits"] as const;
  const statsIcons = {
    lti: ShieldCheck,
    compliance: Activity,
    audits: Award,
  };

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(apiUrl("/api/services"));
        const flatServices = (await res.json()) as ServiceSubpage[];
        setCategories(groupServices(flatServices));
      } catch (e) {
        console.error("Error loading services", e);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  return (
    <div className="flex flex-col">
      <PageHero
        title="Heavy Transport & Machinery Rental Services"
        description="GQS provides integrated heavy transport, machinery rental, lifting, and industrial logistics solutions across Saudi Arabia and GCC routes."
        label="Integrated Industrial Solutions"
        centered={true}
      />

      {/* Complete Services List Section */}
      <section className="bg-[var(--color-surface-soft)] py-20 lg:py-32 relative z-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-[var(--color-primary-navy)] md:text-5xl">
              Our Complete Range of Services
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-[var(--color-accent-gold)]" />
          </div>

          {loading ? (
            <div className="text-center text-gray-500 py-12">Loading GQS Services...</div>
          ) : (
            <div className="space-y-16">
              {categories.map((category, index) => {
                const Icon = categoryIcons[category.slug] || Truck;
                return (
                  <motion.div
                    key={category.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-sm border border-black/5 overflow-hidden shadow-xl"
                  >
                  <div className="grid lg:grid-cols-12">
                    {/* Category Details (Left Side) */}
                    <div className="lg:col-span-4 bg-[var(--color-primary-navy)] p-10 text-white flex flex-col justify-between">
                      <div>
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-sm bg-white/10 text-[var(--color-accent-gold)] mb-8">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="font-heading text-3xl font-bold mb-4">
                          {category.title}
                        </h3>
                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                          {category.description}
                        </p>
                      </div>
                      <Link
                        href={`/services/${category.slug}`}
                        className="group inline-flex items-center gap-3 text-[var(--color-accent-gold)] font-bold uppercase tracking-wider transition-all"
                      >
                        <span>View Category Overview</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>

                    {/* Middle Equipment Image Panel (Column 2) */}
                    <div className="lg:col-span-3 relative min-h-[300px] lg:min-h-full w-full overflow-hidden group bg-[var(--color-surface-soft)]">
                      <Image
                        src={category.image || "/assets/images/founder_operations.png"}
                        alt={categoryAltTexts[category.slug] || "GQS Services"}
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-navy)]/30 to-black/10 transition-opacity group-hover:opacity-40" />
                    </div>

                    {/* Specific Services List (Right Side, Column 3) */}
                    <div className="lg:col-span-5 p-10 bg-white flex flex-col justify-center">
                      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group block rounded-sm border border-black/5 bg-[var(--color-surface-soft)] p-6 transition-all hover:border-[var(--color-accent-gold)] hover:bg-white hover:shadow-lg"
                          >
                            <h4 className="font-heading text-lg font-bold text-[var(--color-primary-navy)] transition-colors group-hover:text-[var(--color-accent-gold)] mb-2">
                              {service.title}
                            </h4>
                            <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          )}
        </div>
      </section>

      {/* Qualifications & Safety Section */}
      <section className="bg-white py-20 lg:py-32 border-t border-black/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Heading & Stats */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-sm bg-[var(--color-primary-navy)]/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] border border-[var(--color-primary-navy)]/10 mb-6">
                  <ShieldCheck className="h-4 w-4 animate-pulse" />
                  {tSafety("subtitle")}
                </span>
                <h2 className="font-heading text-3xl font-bold text-[var(--color-primary-navy)] md:text-5xl leading-tight">
                  {tSafety("title")}
                </h2>
                <div className="mt-6 h-1 w-24 bg-[var(--color-accent-gold)]" />
                <p className="mt-8 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  {tSafety("description")}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-3 gap-6">
                {statsKeys.map((key) => {
                  const Icon = statsIcons[key];
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="bg-[var(--color-surface-soft)] rounded-sm border border-black/5 p-6 text-center hover:border-[var(--color-accent-gold)]/30 hover:shadow-md transition-all group"
                    >
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-accent-gold)] border border-black/5 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="block text-3xl font-heading font-black text-[var(--color-primary-navy)] mb-1">
                        {tSafety(`stats.${key}.value`)}
                      </span>
                      <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block leading-tight">
                        {tSafety(`stats.${key}.label`)}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Standards Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {Array.isArray(standards) && standards.map((standard, index) => {
                const CardIcon = standardIcons[index] || ShieldCheck;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-sm border border-black/5 p-8 shadow-sm hover:shadow-xl hover:border-[var(--color-accent-gold)] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-primary-navy)]/5 text-[var(--color-primary-navy)] group-hover:bg-[var(--color-primary-navy)] group-hover:text-white mb-6 transition-colors duration-300">
                        <CardIcon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-[var(--color-primary-navy)] mb-4 group-hover:text-[var(--color-accent-gold)] transition-colors">
                        {standard.title}
                      </h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                        {standard.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <ClientLogosMarquee />

      {/* Why Choose GQS - Section 3 (Odd) */}
      <section className="bg-[var(--color-primary-navy)] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
              Why Choose GQS?
            </h2>
            <div className="mt-6 h-1 w-24 bg-[var(--color-accent-gold)]" />
            <p className="mt-8 max-w-2xl text-lg text-white/70">
              We combine deep industry expertise with a robust operational network to deliver excellence in every project mobilization.
            </p>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-6 rounded-sm bg-white/5 backdrop-blur-sm p-8 border border-white/10 transition-all hover:border-[var(--color-accent-gold)] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] shadow-sm">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served - Section 4 (Even) */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[var(--color-primary-navy)] md:text-5xl leading-tight">
                Specialized Support for Critical Industries
              </h2>
              <p className="mt-8 text-lg text-[var(--color-text-muted)]">
                GQS supports Saudi Arabia's most vital sectors with precision logistics and high-performance equipment.
              </p>
              <div className="mt-12">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-3 text-lg font-bold text-[var(--color-primary-navy)] transition-all hover:gap-5 group"
                >
                  <span className="border-b-2 border-transparent group-hover:border-[var(--color-accent-gold)]">Explore Industries</span>
                  <ArrowRight className="h-6 w-6 text-[var(--color-accent-gold)] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div key={industry} className="rounded-sm bg-[var(--color-surface-soft)] border border-black/5 p-8 transition-all hover:bg-[var(--color-primary-navy)] hover:text-white group cursor-default">
                  <h4 className="text-lg font-bold text-[var(--color-primary-navy)] group-hover:text-white transition-colors">{industry}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Areas - Section 5 (Odd) */}
      <section className="bg-[var(--color-primary-navy)] py-20 lg:py-32 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-center" />
        
        {/* Animated Radar/Map UI Graphic */}
        <div className="absolute top-1/2 left-1/2 lg:left-3/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none opacity-20">
          <div className="absolute inset-0 rounded-full border border-[var(--color-accent-gold)]/30" />
          <div className="absolute inset-[15%] rounded-full border border-[var(--color-accent-gold)]/20" />
          <div className="absolute inset-[30%] rounded-full border border-[var(--color-accent-gold)]/40 border-dashed" />
          <div className="absolute inset-[45%] rounded-full border border-[var(--color-accent-gold)]/20" />
          
          {/* Radar Sweep Animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[15%] rounded-full border-t-2 border-r-2 border-[var(--color-accent-gold)] shadow-[0_0_30px_var(--color-accent-gold)] opacity-50"
          />
          
          {/* Glowing Epicenter (Dammam HQ) */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[var(--color-accent-gold)] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_var(--color-accent-gold)]" />
          <motion.div 
            animate={{ scale: [1, 2, 3], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 w-8 h-8 bg-[var(--color-accent-gold)] rounded-full -translate-x-1/2 -translate-y-1/2"
          />

          {/* Random Map Nodes representing cities */}
          <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
          <div className="absolute top-[60%] left-[80%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
          <div className="absolute top-[80%] left-[40%] w-3 h-3 bg-[var(--color-accent-gold)] rounded-full shadow-[0_0_10px_var(--color-accent-gold)]" />
          <div className="absolute top-[20%] left-[70%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Text Content (Left) */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <Reveal direction="right">
                <div className="inline-flex items-center gap-2 rounded-sm bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] border border-white/10 mb-6">
                  <Globe className="h-4 w-4" />
                  Regional Logistics Network
                </div>
                <h2 className="font-heading text-4xl font-bold text-white md:text-5xl leading-tight">
                  Unmatched Operational Coverage
                </h2>
                <div className="mx-auto lg:mx-0 mt-6 h-1 w-24 bg-[var(--color-accent-gold)]" />
                <p className="mt-8 text-lg text-white/70 leading-relaxed">
                  GQS maintains a powerful logistics network covering all major industrial hubs in Saudi Arabia. From specialized trans-shipments in Dammam to remote site mobilizations across the GCC, we guarantee rapid deployment.
                </p>
              </Reveal>
            </div>

            {/* Cities Grid (Right) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cities.map((city, index) => (
                  <Reveal key={city} direction="up" delay={index * 0.05}>
                    <div className="group relative overflow-hidden rounded-sm bg-white/5 backdrop-blur-md p-6 text-center border border-white/10 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-accent-gold)] cursor-default h-full flex flex-col items-center justify-center">
                      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.div 
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-[var(--color-accent-gold)]"
                        />
                      </div>
                      <MapPin className="mx-auto h-8 w-8 text-[var(--color-accent-gold)] transition-transform group-hover:scale-110 mb-3" />
                      <h3 className="font-bold text-white text-sm md:text-base leading-tight">{city}</h3>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Section 6 (Even) */}
      <section className="bg-[var(--color-surface-soft)] py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-sm bg-gradient-to-r from-[var(--color-accent-gold)] via-blue-500 to-[var(--color-primary-navy)] p-[2px] shadow-2xl hover:shadow-[0_0_40px_rgba(201,160,80,0.2)] transition-shadow duration-500">
            <div className="bg-[var(--color-primary-navy)] rounded-sm p-12 md:p-20 text-center relative overflow-hidden h-full w-full">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-accent-gold)] rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
              
              <h2 className="font-heading text-3xl font-bold text-white md:text-5xl mb-6 relative z-10">
                Need Reliable Transport & Equipment Support?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
                Join the leading companies across KSA that trust GQS for their industrial logistics and equipment needs.
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
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

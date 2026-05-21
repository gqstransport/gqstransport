"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { 
  ArrowRight, 
  Truck, 
  Settings, 
  Anchor, 
  Activity, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  Globe, 
  Users, 
  Box,
  Target,
  Clock,
  CheckCircle2,
  ChevronRight,
  Briefcase
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/ui/motion-reveal";

// --- Data Models based on User Content ---

const transportFleet = [
  {
    id: "flatbed",
    title: "Flatbed Trailers",
    description: "Reliable flatbed trailer solutions for transporting steel structures, pipes, containers, industrial materials, and general cargo across Saudi Arabia.",
    applications: ["Steel transport", "Container movement", "Construction materials", "Industrial cargo logistics"],
    features: ["Long-distance transport", "Industrial cargo support", "Flexible loading capacity"],
    icon: Truck,
    image: "/assets/images/fleet_flatbed.png",
  },
  {
    id: "lowbed",
    title: "Lowbed Trailers",
    description: "Heavy-duty lowbed trailer transportation solutions for oversized cargo, construction machinery, and heavy industrial equipment.",
    applications: ["Excavator transportation", "Crane mobilization", "Heavy machinery transport", "Infrastructure equipment movement"],
    features: ["Oversized cargo handling", "Heavy equipment transport", "Safe machinery mobilization"],
    icon: Anchor,
    image: "/assets/images/fleet_lowbed.png",
  },
  {
    id: "heavy-cargo",
    title: "Heavy Cargo Transport Vehicles",
    description: "Integrated heavy haulage and industrial cargo movement solutions for large-scale project operations.",
    applications: ["Project cargo handling", "Industrial equipment transport", "Oil & gas logistics", "Infrastructure support"],
    features: ["Specialized modular units", "Route survey planning", "Engineered tie-downs"],
    icon: Box,
    image: "/assets/images/fleet_heavy_cargo.png",
  },
  {
    id: "boom-trucks",
    title: "Boom Trucks / Hiab Trucks",
    description: "Professional lifting and transportation solutions for loading, unloading, and material handling operations.",
    applications: ["Site lifting support", "Equipment installation", "Industrial handling operations"],
    features: ["Integrated crane & deck", "Remote control operation", "Compact footprint"],
    icon: Activity,
    image: "/assets/images/fleet_boom_truck.png",
  }
];

const machineryEquipment = [
  {
    id: "excavators",
    title: "Excavators",
    description: "Reliable excavator rental solutions for excavation, earthmoving, trenching, and site preparation operations.",
    applications: ["Earthmoving", "Site excavation", "Infrastructure projects", "Construction support"],
    options: ["Daily Rental", "Weekly Rental", "Monthly Contracts"],
    icon: Settings,
    image: "/assets/images/fleet_excavator.png",
  },
  {
    id: "cranes",
    title: "Cranes",
    description: "Heavy lifting solutions for industrial, construction, and infrastructure projects requiring safe and efficient lifting operations.",
    applications: ["Structural lifting", "Equipment installation", "Industrial shutdown projects", "Material handling"],
    options: ["TUV Certified", "Aramco Approved", "Full Rigging Sets"],
    icon: Target,
    image: "/assets/images/fleet_crane.png",
  },
  {
    id: "wheel-loaders",
    title: "Wheel Loaders",
    description: "Efficient wheel loader rental solutions for material loading, site operations, and industrial handling support.",
    applications: ["Aggregate loading", "Construction support", "Site material movement"],
    options: ["High Capacity", "Fuel Efficient", "Operator Safety"],
    icon: Truck,
    image: "/assets/images/fleet_wheel_loader.png",
  },
  {
    id: "forklifts",
    title: "Forklifts",
    description: "Industrial forklift rental services for warehouse operations, cargo handling, and logistics support.",
    applications: ["Warehouse logistics", "Factory operations", "Port cargo handling", "Material movement"],
    options: ["Electric & Diesel", "Various Mast Heights", "Side-shift Capability"],
    icon: Box,
    image: "/assets/images/fleet_forklift.png",
  },
  {
    id: "earthmoving",
    title: "Earthmoving Equipment",
    description: "Comprehensive earthmoving machinery support for construction and infrastructure development projects.",
    applications: ["Land preparation", "Road development", "Infrastructure projects"],
    options: ["GPS Grade Control", "Heavy Attachments", "24/7 Support"],
    icon: Settings,
    image: "/assets/images/fleet_earthmoving.png",
  }
];

const industriesSupported = [
  { name: "Oil & Gas", icon: Zap },
  { name: "Construction", icon: Settings },
  { name: "Infrastructure", icon: Globe },
  { name: "Steel & Fabrication", icon: Box },
  { name: "Ports & Marine", icon: Anchor },
  { name: "Manufacturing", icon: Target },
];

const capabilities = [
  { title: "Nationwide Coverage", desc: "Providing transport and machinery support across major industrial cities in Saudi Arabia.", icon: MapPin },
  { title: "Fast Equipment Mobilization", desc: "Efficient coordination for urgent project and shutdown requirements.", icon: Zap },
  { title: "Flexible Rental Solutions", desc: "Daily, weekly, and long-term equipment rental support.", icon: Clock },
  { title: "Experienced Coordination Team", desc: "Professional operational support for smooth project execution.", icon: Users },
];

export function FleetEquipmentPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (ODD -> NAVY) */}
      <PageHero
        title="Heavy Transport Fleet & Equipment Solutions"
        description="GQS provides reliable heavy transport vehicles, industrial trailers, lifting equipment, and construction machinery rental solutions for projects across Saudi Arabia and GCC routes."
        label="Fleet & Capabilities"
        centered={true}
      />

      {/* 2. INTRODUCTION SECTION (EVEN -> CREAM) */}
      <section className="bg-[var(--color-surface-soft)] py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full mix-blend-screen blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-[var(--color-primary-navy)] md:text-5xl leading-tight">
                Reliable Fleet & Machinery Support for Industrial Projects
              </h2>
              <div className="mx-auto mt-8 h-1 w-24 bg-[var(--color-accent-gold)]" />
              <p className="mt-8 text-xl text-[var(--color-text-muted)] leading-relaxed">
                At Gulf Quality Structure Establishment (GQS), we provide integrated transport and machinery solutions supported by a reliable operational network and project coordination team.
              </p>
              <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
                Our fleet and equipment solutions are designed to support heavy cargo transportation, industrial lifting, construction operations, shutdown logistics, and infrastructure project mobilization across the Kingdom of Saudi Arabia. We focus on operational efficiency, safety, fast mobilization, and dependable project support tailored to client requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. TRANSPORT FLEET SECTION (ODD -> NAVY) */}
      <section className="bg-[var(--color-primary-navy)] py-20 lg:py-32 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal direction="up">
            <div className="text-center mb-20">
              <h2 className="font-heading text-4xl font-bold text-white md:text-5xl mb-6">
                Heavy Transport Fleet
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Professional trailer and cargo transportation solutions for industrial and infrastructure projects.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {transportFleet.map((fleet, index) => (
              <Reveal key={fleet.id} direction="up" delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-md rounded-sm border border-white/10 overflow-hidden h-full flex flex-col group hover:border-[var(--color-accent-gold)] hover:bg-white/10 transition-all duration-300">
                  {/* Image Header */}
                  <div className="relative w-full h-64 overflow-hidden bg-zinc-800">
                    <Image
                      src={fleet.image}
                      alt={fleet.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)] via-[var(--color-primary-navy)]/40 to-transparent" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] rounded-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <fleet.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {fleet.title}
                      </h3>
                    </div>
                    <p className="text-white/70 mb-8 leading-relaxed">
                      {fleet.description}
                    </p>
                    
                    <div className="mt-auto grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] mb-4">Applications</h4>
                        <ul className="space-y-2">
                          {fleet.applications.map((app) => (
                            <li key={app} className="flex items-start gap-2 text-sm text-white/80">
                              <ChevronRight className="h-4 w-4 shrink-0 text-[var(--color-accent-gold)] mt-0.5" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {fleet.features && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] mb-4">Features</h4>
                          <ul className="space-y-2">
                            {fleet.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-accent-gold)] mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MACHINERY & EQUIPMENT SECTION (EVEN -> CREAM) */}
      <section className="bg-white py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-[var(--color-primary-navy)] md:text-5xl mb-6">
                Heavy Machinery & Equipment Rental
              </h2>
              <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
                Flexible machinery rental solutions for construction, industrial, infrastructure, and logistics projects.
              </p>
            </div>
          </Reveal>

          {/* Interactive Tabs Layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-16">
            {/* Tab Controls */}
            <div className="lg:col-span-4 flex flex-col gap-2 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-surface-soft)] rounded-full hidden lg:block" />
              {machineryEquipment.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left px-6 py-5 rounded-sm transition-all duration-300 relative flex items-center gap-4 ${
                    activeTab === index 
                      ? "bg-[var(--color-primary-navy)] text-white shadow-xl translate-x-4 lg:translate-x-8" 
                      : "bg-[var(--color-surface-soft)] text-[var(--color-primary-navy)] hover:bg-[var(--color-primary-navy)]/10"
                  }`}
                >
                  <item.icon className={`h-6 w-6 ${activeTab === index ? "text-[var(--color-accent-gold)]" : "opacity-60"}`} />
                  <span className="font-bold text-lg">{item.title}</span>
                  {activeTab === index && (
                    <motion.div layoutId="activeTabIndicator" className="absolute -left-4 lg:-left-8 w-2 h-10 bg-[var(--color-accent-gold)] rounded-r-sm" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="lg:col-span-8 bg-[var(--color-surface-soft)] rounded-sm border border-black/5 shadow-sm min-h-[450px] overflow-hidden flex relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-screen blur-[80px] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full grid md:grid-cols-12 relative z-10"
                >
                  {/* Left Column: Details */}
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)] mb-8 shadow-xl">
                      {(() => {
                        const ActiveIcon = machineryEquipment[activeTab].icon;
                        return <ActiveIcon className="h-8 w-8" />;
                      })()}
                    </div>
                    
                    <h3 className="font-heading text-3xl font-bold text-[var(--color-primary-navy)] mb-4">
                      {machineryEquipment[activeTab].title}
                    </h3>
                    <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                      {machineryEquipment[activeTab].description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary-navy)] mb-4 flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-[var(--color-accent-gold)]" />
                          Applications
                        </h4>
                        <ul className="space-y-2">
                          {machineryEquipment[activeTab].applications.map((app) => (
                            <li key={app} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                              <ChevronRight className="h-4 w-4 shrink-0 text-[var(--color-accent-gold)] mt-0.5" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary-navy)] mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-gold)]" />
                          Options
                        </h4>
                        <div className="flex flex-col gap-2">
                          {machineryEquipment[activeTab].options.map((opt) => (
                            <div key={opt} className="bg-white px-3 py-2 rounded-sm border border-black/5 shadow-xs font-semibold text-[var(--color-primary-navy)] text-xs flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Machinery Image */}
                  <div className="md:col-span-5 relative min-h-[300px] md:min-h-full w-full overflow-hidden bg-zinc-200">
                    <Image
                      src={machineryEquipment[activeTab].image}
                      alt={machineryEquipment[activeTab].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--color-surface-soft)] via-transparent to-transparent w-full h-full" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES SUPPORTED SECTION (ODD -> NAVY) */}
      <section className="bg-[var(--color-primary-navy)] py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--color-accent-gold)] rounded-full mix-blend-screen blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
                Supporting Major Industries
              </h2>
              <div className="mx-auto mt-6 h-1 w-24 bg-[var(--color-accent-gold)]" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industriesSupported.map((industry, i) => (
              <Reveal key={industry.name} direction="up" delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 text-center h-full hover:-translate-y-2 hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-all duration-300 group">
                  <industry.icon className="h-10 w-10 mx-auto text-[var(--color-accent-gold)] group-hover:text-[var(--color-primary-navy)] transition-colors mb-4" />
                  <h4 className="font-bold text-white group-hover:text-[var(--color-primary-navy)] transition-colors text-sm">{industry.name}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OPERATIONAL CAPABILITIES SECTION (EVEN -> CREAM) */}
      <section className="bg-[var(--color-surface-soft)] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-[var(--color-primary-navy)] md:text-5xl">
                Operational Capabilities
              </h2>
              <div className="mx-auto mt-6 h-1 w-24 bg-[var(--color-accent-gold)]" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} direction="up" delay={i * 0.1}>
                <div className="bg-white p-8 rounded-sm shadow-sm border border-black/5 hover:border-[var(--color-accent-gold)] transition-colors h-full flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-surface-soft)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary-navy)] transition-all">
                    <cap.icon className="h-8 w-8 text-[var(--color-primary-navy)] group-hover:text-[var(--color-accent-gold)] transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-primary-navy)] mb-4">{cap.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SAFETY & QUALITY SECTION (ODD -> NAVY) */}
      <section className="bg-[var(--color-primary-navy)] py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 pointer-events-none">
          <ShieldCheck className="w-[600px] h-[600px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-gold)] to-transparent rounded-full mix-blend-screen opacity-20 animate-pulse" />
                <div className="absolute inset-10 border border-white/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-32 h-32 text-[var(--color-accent-gold)]" />
                </div>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div>
                <h2 className="font-heading text-3xl font-bold text-white md:text-5xl mb-6">
                  Safety & Operational Excellence
                </h2>
                <div className="h-1 w-24 bg-[var(--color-accent-gold)] mb-8" />
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  GQS is committed to maintaining safe operational procedures, reliable transport coordination, and professional equipment handling standards across every project.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Safe equipment operation",
                    "Timely project execution",
                    "Reliable logistics support",
                    "Customer satisfaction"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-[var(--color-accent-gold)]" />
                      </div>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION (EVEN -> CREAM) */}
      <section className="bg-white py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-sm bg-gradient-to-r from-[var(--color-accent-gold)] via-blue-500 to-[var(--color-primary-navy)] p-[2px] shadow-2xl hover:shadow-[0_0_40px_rgba(201,160,80,0.2)] transition-shadow duration-500">
            <div className="bg-[var(--color-primary-navy)] rounded-sm p-12 md:p-20 text-center relative overflow-hidden h-full w-full">
              {/* Abstract glowing shapes */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-accent-gold)] rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
              
              <Reveal direction="up">
                <h2 className="font-heading text-3xl font-bold text-white md:text-5xl mb-6 relative z-10">
                  Need Reliable Fleet & Equipment Support?
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
                  Contact GQS today for heavy transport, trailer rental, lifting solutions, and machinery rental services across Saudi Arabia.
                </p>

                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                  <Link
                    href="/request-a-quote"
                    className="inline-flex items-center justify-center rounded-sm bg-[var(--color-accent-gold)] px-10 py-5 text-sm font-bold uppercase tracking-wider text-[var(--color-primary-navy)] transition-all hover:brightness-110 shadow-[0_0_20px_rgba(201,160,80,0.3)] hover:-translate-y-1"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-sm border-2 border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[var(--color-primary-navy)] hover:-translate-y-1"
                  >
                    Call Operations Team
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

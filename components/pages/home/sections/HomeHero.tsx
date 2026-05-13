import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function HomeHero() {
  const t = await getTranslations("pages.home.hero");

  return (
    <section className="relative min-h-[800px] w-full overflow-hidden bg-[var(--color-primary-navy)] flex items-center">
      {/* Background Image with Enhanced Multi-layer Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-truck.png"
          alt="GQS Heavy Transport & Machinery Rental"
          fill
          className="object-cover object-center opacity-40 scale-105 animate-slow-zoom"
          priority
        />
        {/* Complex Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-navy)] via-[var(--color-primary-navy)]/80 to-transparent lg:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)] via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <StaggerContainer delay={0.2} staggerDelay={0.15}>
              <StaggerItem direction="left" distance={30}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-accent-gold)]/10 border border-[var(--color-accent-gold)]/30 text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-gold)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-gold)]"></span>
                  </span>
                  {t("kicker")}
                </span>
              </StaggerItem>

              <StaggerItem direction="left" distance={40}>
                <h1 className="font-heading text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl mt-6 text-balance">
                  {t("titleLead")}{" "}
                  <span className="block text-[var(--color-accent-gold)] uppercase italic mt-1 drop-shadow-sm">
                    {t("titleHighlight")}
                  </span>
                </h1>
              </StaggerItem>

              <StaggerItem direction="left" distance={50}>
                <p className="max-w-xl text-lg leading-relaxed text-white/80 font-medium mt-6 border-l-2 border-[var(--color-accent-gold)]/30 pl-6">
                  {t("description")}
                </p>
              </StaggerItem>

              <StaggerItem direction="up" distance={30}>
                <div className="flex flex-wrap gap-4 pt-8">
                  <Link
                    href="/request-a-quote"
                    className="group inline-flex h-14 items-center justify-center rounded-sm bg-[var(--color-accent-gold)] px-8 text-sm font-bold uppercase tracking-wider text-[var(--color-primary-navy)] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(226,184,68,0.3)] hover:shadow-[0_0_30px_rgba(226,184,68,0.5)]"
                  >
                    {t("primaryCta")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-14 items-center justify-center rounded-sm border border-white/20 bg-white/5 backdrop-blur-md px-8 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
                  >
                    {t("secondaryCta")}
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Features Checklist - Premium Card */}
          <div className="hidden lg:block lg:col-span-5">
            <Reveal direction="right" delay={0.6}>
              <div className="glass-dark p-10 rounded-sm space-y-8 relative group overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-accent-gold)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />
                
                <h3 className="text-[var(--color-accent-gold)] font-bold uppercase tracking-widest text-sm flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--color-accent-gold)]/50" />
                  {t("trustedPartner")}
                </h3>
                
                <ul className="space-y-6">
                  {(t.raw("features") as string[]).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-gold)]/10 text-[var(--color-accent-gold)] transition-transform group-hover/item:scale-110">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-white/90 font-medium group-hover/item:text-white transition-colors leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
                    {t("servingCities")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator or bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/50 to-transparent" />
    </section>
  );
}


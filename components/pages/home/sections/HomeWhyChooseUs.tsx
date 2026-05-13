import { getTranslations } from "next-intl/server";
import { Zap, Shield, DollarSign, Users, LayoutDashboard, Star } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

const whyIcons = {
  solutions: LayoutDashboard,
  mobilization: Zap,
  network: Shield,
  pricing: DollarSign,
  team: Users,
} as const;

export async function HomeWhyChooseUs() {
  const t = await getTranslations("pages.home.whyChooseUs");

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-primary-navy) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <Reveal direction="left">
              <span className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-2">
                <Star className="h-3 w-3 fill-current" />
                The GQS Advantage
              </span>
              <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] sm:text-4xl mt-2">
                {t("title")}
              </h2>
            </Reveal>
          </div>
          <Reveal direction="right">
            <p className="text-gray-500 font-medium max-w-sm md:text-right border-r-4 border-[var(--color-accent-gold)] pr-6 text-sm">
              Delivering excellence through safety, speed, and reliability across every project.
            </p>
          </Reveal>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[220px]">
            {/* Large Bento Item 1 */}
            <div className="md:col-span-8 md:row-span-2 group">
              <StaggerItem>
                <div className="h-full w-full p-8 bg-[var(--color-primary-navy)] rounded-sm relative overflow-hidden flex flex-col justify-end border border-white/5 shadow-2xl">
                  {/* Decorative background icon */}
                  <LayoutDashboard className="absolute -top-10 -right-10 h-64 w-64 text-white opacity-[0.03] rotate-12 group-hover:rotate-6 transition-transform duration-700" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="h-12 w-12 rounded-sm bg-[var(--color-accent-gold)] flex items-center justify-center text-[var(--color-primary-navy)] mb-4 shadow-xl shadow-black/20">
                      <LayoutDashboard className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      {t("items.solutions.title")}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed max-w-lg group-hover:text-white/80 transition-colors">
                      {t("items.solutions.description")}
                    </p>
                  </div>
                  
                  {/* Years of Excellence Badge inside bento */}
                  <div className="absolute top-10 right-10 p-6 glass-dark rounded-sm border-l-4 border-l-[var(--color-accent-gold)]">
                    <p className="text-3xl font-black text-[var(--color-accent-gold)] italic leading-none">15+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mt-2">Years</p>
                  </div>
                </div>
              </StaggerItem>
            </div>

            {/* Small Bento Item 1: Mobilization */}
            <div className="md:col-span-4 md:row-span-1 group">
              <StaggerItem>
                <div className="h-full w-full p-8 bg-[var(--color-surface-soft)] rounded-sm border border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-500 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-sm bg-[var(--color-primary-navy)] flex items-center justify-center text-white">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-primary-navy)] uppercase tracking-tight">
                      {t("items.mobilization.title")}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {t("items.mobilization.description")}
                  </p>
                </div>
              </StaggerItem>
            </div>

            {/* Small Bento Item 2: Network */}
            <div className="md:col-span-4 md:row-span-1 group">
              <StaggerItem>
                <div className="h-full w-full p-8 bg-white rounded-sm border border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-500 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-sm bg-[var(--color-accent-gold)] flex items-center justify-center text-[var(--color-primary-navy)]">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-primary-navy)] uppercase tracking-tight">
                      {t("items.network.title")}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {t("items.network.description")}
                  </p>
                </div>
              </StaggerItem>
            </div>

            {/* Bento Item: Pricing (Horizontal) */}
            <div className="md:col-span-6 md:row-span-1 group">
              <StaggerItem>
                <div className="h-full w-full p-8 bg-[var(--color-accent-gold)] rounded-sm flex items-center gap-8 group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="hidden sm:flex h-16 w-16 shrink-0 rounded-sm bg-[var(--color-primary-navy)] items-center justify-center text-white shadow-lg">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight mb-2">
                      {t("items.pricing.title")}
                    </h3>
                    <p className="text-[var(--color-primary-navy)]/70 text-sm font-medium">
                      {t("items.pricing.description")}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </div>

            {/* Bento Item: Team (Horizontal) */}
            <div className="md:col-span-6 md:row-span-1 group">
              <StaggerItem>
                <div className="h-full w-full p-8 bg-gray-50 rounded-sm border border-[var(--color-border)] flex items-center gap-8 hover:bg-white transition-colors duration-500">
                  <div className="hidden sm:flex h-16 w-16 shrink-0 rounded-sm bg-gray-200 items-center justify-center text-[var(--color-primary-navy)]">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight mb-2">
                      {t("items.team.title")}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">
                      {t("items.team.description")}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

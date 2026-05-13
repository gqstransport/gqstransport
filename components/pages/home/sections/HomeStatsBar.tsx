import { getTranslations } from "next-intl/server";
import { Handshake, Briefcase, Construction, Headphones } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

const stats = [
  { value: "150+", labelKey: "clients", icon: Handshake },
  { value: "300+", labelKey: "projects", icon: Briefcase },
  { value: "100+", labelKey: "machines", icon: Construction },
  { value: "24/7", labelKey: "support", icon: Headphones },
] as const;

export async function HomeStatsBar() {
  const t = await getTranslations("pages.home.stats");

  return (
    <section className="bg-[var(--color-accent-gold)] border-y border-[var(--color-primary-navy)]/10 py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-primary-navy)]/5 to-transparent" />
      <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-primary-navy)]/5 to-transparent" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-primary-navy)]/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.labelKey}>
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-sm bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)] shadow-lg transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <p className="text-4xl font-black tracking-tight text-[var(--color-primary-navy)] italic">
                    <Counter value={stat.value} />
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary-navy)]/60 group-hover:text-[var(--color-primary-navy)] transition-colors">
                    {t(stat.labelKey)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { Target, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/ui/motion-reveal";

export async function HomeVisionMission() {
  const t = await getTranslations("pages.home");

  return (
    <section className="bg-[var(--color-surface-soft)] py-24 lg:py-32 border-y border-gray-200/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <Reveal direction="left">
            <div className="group relative bg-white p-12 lg:p-16 shadow-sm hover:shadow-2xl transition-all duration-700 rounded-sm overflow-hidden border-b-4 border-b-[var(--color-accent-gold)] h-full">
              <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700">
                <Lightbulb className="w-48 h-48" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)] shadow-lg group-hover:rotate-6 transition-transform">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                    {t("vision.title")}
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-gray-500 font-bold italic border-l-4 border-gray-100 pl-6">
                  "{t("vision.description")}"
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal direction="right">
            <div className="group relative bg-white p-10 lg:p-12 shadow-sm hover:shadow-2xl transition-all duration-700 rounded-sm overflow-hidden border-b-4 border-b-[var(--color-primary-navy)] h-full">
              <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700">
                <Target className="w-40 h-40" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] shadow-lg group-hover:-rotate-6 transition-transform">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-[var(--color-primary-navy)]">
                    {t("mission.title")}
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-gray-500 font-bold italic border-l-4 border-gray-100 pl-6">
                  "{t("mission.description")}"
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

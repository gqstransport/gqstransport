import { getTranslations } from "next-intl/server";
import { Anchor, Briefcase, Calendar, Map, Navigation, Ship } from "lucide-react";

const logisticIcons = [Anchor, Briefcase, Calendar, Map, Navigation, Ship];

export async function HomeProjectLogistics() {
  const t = await getTranslations("pages.home.projectLogistics");

  return (
    <section className="bg-[var(--color-surface-soft)] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-primary-navy) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="space-y-4">
            <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] sm:text-5xl leading-tight">
              {t("title")}
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed mt-8">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {(t.raw("items") as string[]).map((item, idx) => {
            const Icon = logisticIcons[idx % logisticIcons.length];
            return (
              <div key={idx} className="flex gap-6 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-white border border-gray-100 text-[var(--color-primary-navy)] shadow-sm transition-all duration-300 group-hover:bg-[var(--color-primary-navy)] group-hover:text-[var(--color-accent-gold)] group-hover:scale-110 group-hover:-rotate-3">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <span className="text-[var(--color-accent-gold)] font-black text-sm italic opacity-50">0{idx + 1}</span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[var(--color-primary-navy)] leading-tight">
                    {item}
                  </h3>
                  <div className="h-0.5 w-0 bg-[var(--color-accent-gold)] transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-10 bg-[var(--color-primary-navy)] rounded-sm text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <p className="text-white text-xl font-medium relative z-10">
            {t("footerNote")}
          </p>
        </div>
      </div>
    </section>
  );
}

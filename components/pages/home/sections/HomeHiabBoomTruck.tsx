import { getTranslations } from "next-intl/server";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export async function HomeHiabBoomTruck() {
  const t = await getTranslations("pages.home.hiabBoomTruck");

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] sm:text-5xl leading-tight">
                {t("title")}
              </h2>
              <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("description")}
            </p>

            <div className="space-y-6">
              <h3 className="text-[var(--color-primary-navy)] font-bold uppercase tracking-widest text-sm">
                {t("idealForTitle")}
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {(t.raw("items") as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="h-1 w-8 bg-[var(--color-accent-gold)] transition-all group-hover:w-12" />
                    <span className="font-bold uppercase tracking-wide text-sm text-[var(--color-primary-navy)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-gray-500 italic text-sm">
                {t("footerNote")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl mb-8 group">
              <Image 
                src="/hiab-truck.png" 
                alt="Hiab Truck" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-[var(--color-surface-soft)] rounded-sm border-l-4 border-[var(--color-accent-gold)]">
                <MoveUpRight className="h-8 w-8 text-[var(--color-accent-gold)] mb-4" />
                <h4 className="font-bold uppercase tracking-tight text-[var(--color-primary-navy)] mb-2">Safe Lifting</h4>
                <p className="text-sm text-gray-600">Precision control and certified rigging for all industrial material handling.</p>
              </div>
              <div className="p-8 bg-[var(--color-primary-navy)] text-white rounded-sm border-l-4 border-[var(--color-accent-gold)]">
                <MoveUpRight className="h-8 w-8 text-[var(--color-accent-gold)] mb-4" />
                <h4 className="font-bold uppercase tracking-tight text-white mb-2">Fast Mobilization</h4>
                <p className="text-sm text-white/70">Ready to deploy across major industrial cities in Saudi Arabia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

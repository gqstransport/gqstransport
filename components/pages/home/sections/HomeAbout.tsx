import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Reveal } from "@/components/ui/motion-reveal";

export async function HomeAbout() {
  const t = await getTranslations("pages.home.aboutUs");

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal direction="left">
            <div className="relative group">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/about-logistics.png"
                  alt="About GQS Logistics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/40 to-transparent" />
              </div>
              
              {/* Premium Badge */}
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-sm shadow-2xl hidden md:block border-l-4 border-l-[var(--color-accent-gold)]">
                <p className="text-[var(--color-primary-navy)] font-black text-5xl italic leading-none">GQS</p>
                <p className="text-[var(--color-primary-navy)] font-bold text-[10px] uppercase tracking-[0.3em] mt-3 opacity-70">Industrial Support</p>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[var(--color-accent-gold)] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal direction="right" delay={0.2}>
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] sm:text-4xl leading-[1.1] text-balance">
                  {t("title")}
                </h2>
                <div className="h-1 w-20 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>
            
            <Reveal direction="right" delay={0.4}>
              <div className="space-y-6 text-base leading-relaxed text-gray-600">
                <p className="font-bold text-[var(--color-primary-navy)] text-lg border-l-4 border-[var(--color-accent-gold)] pl-6">
                  {t("description")}
                </p>
                <p className="text-gray-500 font-medium">
                  {t("descriptionSecondary")}
                </p>
                <div className="p-5 bg-[var(--color-surface-soft)] rounded-sm italic border border-[var(--color-border)] text-sm">
                  "{t("commitment")}"
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.6}>
              <div className="pt-4">
                <Link
                  href="/about-us"
                  className="group inline-flex h-14 items-center justify-center bg-[var(--color-primary-navy)] px-10 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] hover:shadow-[0_10px_20px_rgba(12,31,60,0.2)] active:scale-95 rounded-sm"
                >
                  {t("cta")}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

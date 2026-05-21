import { getTranslations } from "next-intl/server";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/motion-reveal";
import Image from "next/image";

export async function AboutFounderMessage() {
  const t = await getTranslations("pages.aboutUs.founderMessage");

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden border-y border-gray-100 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Quote Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <Reveal direction="right">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-[var(--color-primary-navy)]/5 text-[var(--color-accent-gold)] mb-4">
                <Quote className="h-6 w-6 fill-current" />
              </div>
              
              <div className="space-y-6">
                <h2 className="font-heading text-2xl lg:text-3xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
                  {t("title")}
                </h2>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed text-gray-600 italic font-serif relative">
                  "{t("content")}"
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100 flex flex-col gap-1">
                <p className="text-lg font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
                  {t("author")}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-gold)]">
                  {t("position")}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Stunning Image Frame */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square">
            <Reveal direction="left" className="h-full w-full">
              <div className="relative h-full w-full rounded-sm overflow-hidden shadow-2xl border border-black/5 group">
                <Image
                  src="/assets/images/founder_operations.png"
                  alt="GQS Heavy Lifting Operations"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual Accent Glow Frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm">
                  <span className="block text-xs font-black uppercase tracking-widest text-[var(--color-accent-gold)] mb-1">
                    Quality Structure Establishment
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    Operations Excellence in Lifting & Transport
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Award } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function AboutCertifications() {
  const t = await getTranslations("pages.aboutUs.certifications");
  const items = (await t.raw("items")) as string[];

  return (
    <section className="bg-[var(--color-surface-soft)] py-20 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <Reveal direction="left">
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)] shadow-lg">
                  <Award className="h-6 w-6" />
                </div>
                <h2 className="font-heading text-2xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
                  {t("title")}
                </h2>
              </div>
            </Reveal>

            <StaggerContainer staggerDelay={0.1}>
              <div className="flex flex-wrap gap-4">
                {items.map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="px-6 py-3 bg-white border border-[var(--color-border)] rounded-sm text-xs font-bold text-gray-500 uppercase tracking-widest hover:border-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-all cursor-default shadow-sm">
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          <Reveal direction="right">
            <div className="relative group">
              <div className="aspect-[1.4/1] relative bg-white p-4 rounded-sm border border-[var(--color-border)] shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-gold)]/5 to-transparent pointer-events-none" />
                <Image
                  src="/assets/images/certificate.png"
                  alt="GQS Certification"
                  fill
                  className="object-contain p-8 group-hover:opacity-100 transition-opacity duration-700"
                />
                {/* Decorative Seal */}
                <div className="absolute bottom-8 right-8 h-20 w-20 rounded-full border-4 border-[var(--color-accent-gold)]/20 flex items-center justify-center">
                  <Award className="h-10 w-10 text-[var(--color-accent-gold)]/20" />
                </div>
              </div>
              <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Official ISO Accreditation
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

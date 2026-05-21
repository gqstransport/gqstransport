import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";
import { CheckCircle2 } from "lucide-react";

export async function AboutCompanyOverview() {
  const t = await getTranslations("pages.aboutUs.companyOverview");
  const homeT = await getTranslations("pages.home.aboutUs");

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <Reveal direction="left">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl lg:text-4xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
                  {t("title")}
                </h2>
                <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="space-y-6 text-lg leading-relaxed text-gray-600 font-medium">
                <p>{t("description")}</p>
                <p className="text-gray-500">{homeT("descriptionSecondary")}</p>
              </div>
            </Reveal>

            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {["Reliable Mobilization", "Safety Certified", "GCC Coverage", "Expert Logistics"].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-center gap-3 group">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-gold)]/10 text-[var(--color-accent-gold)] group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="font-bold text-[var(--color-primary-navy)] text-sm uppercase tracking-wide">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          <Reveal direction="right">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl z-10">
                <Image
                  src="/assets/images/image_12.jpeg"
                  alt="Company Overview"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-[var(--color-accent-gold)]/20" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-[var(--color-accent-gold)]/20" />
              <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[var(--color-accent-gold)] rounded-sm -translate-y-1/2 opacity-10 blur-2xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

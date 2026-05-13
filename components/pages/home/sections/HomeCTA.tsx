import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export async function HomeCTA() {
  const t = await getTranslations("pages.home.cta");

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="relative bg-[var(--color-primary-navy)] rounded-sm overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] border border-white/5">
            {/* Advanced Decorative Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[var(--color-accent-gold)] to-transparent opacity-[0.05] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 px-8 py-20 lg:p-24 text-center">
              <div className="max-w-4xl mx-auto space-y-12">
                <StaggerContainer staggerDelay={0.2}>
                  <StaggerItem>
                    <div className="space-y-4">
                      <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-white sm:text-5xl leading-[1.1] text-balance">
                        {t("title")}
                      </h2>
                      <div className="h-1.5 w-24 bg-[var(--color-accent-gold)] mx-auto mt-4" />
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="space-y-4 max-w-2xl mx-auto">
                      <p className="text-lg text-white/80 font-medium leading-relaxed">
                        {t("description")}
                      </p>
                      <p className="text-sm text-white/40 uppercase tracking-[0.2em] font-bold">
                        {t("descriptionSecondary")}
                      </p>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="pt-10 flex flex-col lg:flex-row items-center justify-center gap-12">
                      <Link
                        href="/request-a-quote"
                        className="group inline-flex h-16 items-center justify-center bg-[var(--color-accent-gold)] px-12 text-sm font-bold uppercase tracking-widest text-[var(--color-primary-navy)] transition-all hover:bg-white hover:scale-105 shadow-[0_0_30px_rgba(226,184,68,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] rounded-sm"
                      >
                        {t("primaryCta")}
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                      
                      <div className="flex flex-col sm:flex-row items-center gap-10">
                        <div className="flex items-center gap-5 group cursor-pointer">
                          <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-white/5 border border-white/10 text-white transition-all group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-primary-navy)] group-hover:scale-110">
                            <PhoneCall className="h-6 w-6" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">{t("contactText")}</p>
                            <p className="text-xl font-black text-white italic tracking-tight">+966 55 000 0000</p>
                          </div>
                        </div>

                        <div className="hidden sm:block w-px h-12 bg-white/10" />

                        <div className="flex items-center gap-5 group cursor-pointer">
                          <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-white/5 border border-white/10 text-white transition-all group-hover:bg-[var(--color-accent-gold)] group-hover:text-[var(--color-primary-navy)] group-hover:scale-110">
                            <Mail className="h-6 w-6" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Email Us</p>
                            <p className="text-xl font-black text-white italic tracking-tight">info@gqs.sa</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

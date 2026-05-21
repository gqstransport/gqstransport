import { getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";
import { phoneToTelHref, phoneToWhatsAppHref } from "@/lib/site-contact";

export async function ContactDetails() {
  const t = await getTranslations("header");
  const contactT = await getTranslations("pages.contactUs.index");

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone Support",
      value: t("phone"),
      href: phoneToTelHref(t("phone")),
      color: "bg-[var(--color-surface-soft)] text-[var(--color-primary-navy)]"
    },
    {
      icon: Mail,
      label: "Email Inquiry",
      value: t("email"),
      href: `mailto:${t("email")}`,
      color: "bg-[var(--color-surface-soft)] text-[var(--color-primary-navy)]"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat With Us",
      href: phoneToWhatsAppHref(t("phone")),
      color: "bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)]",
      isHighlighted: true
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <StaggerItem key={idx}>
                  <a
                    href={info.href}
                    className={`group flex flex-col items-center text-center p-10 rounded-sm border transition-all duration-500 h-full ${
                      info.isHighlighted 
                        ? 'bg-[var(--color-primary-navy)] border-[var(--color-primary-navy)] text-white shadow-2xl hover:scale-105' 
                        : 'bg-white border-[var(--color-border)] hover:border-[var(--color-accent-gold)] hover:shadow-xl'
                    }`}
                  >
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      info.isHighlighted ? 'bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)]' : info.color
                    }`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <p className={`text-[10px] font-bold uppercase tracking-[0.3em] ${info.isHighlighted ? 'text-[var(--color-accent-gold)]' : 'text-gray-400'}`}>
                        {info.label}
                      </p>
                      <p className="text-xl font-black uppercase tracking-tight">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

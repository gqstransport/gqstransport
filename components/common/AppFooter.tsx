import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { ClientLogosMarquee } from "@/components/common/ClientLogosMarquee";
import { NewsletterForm } from "@/components/common/NewsletterForm";
import Image from "next/image";

export async function AppFooter() {
  const t = await getTranslations();

  return (
    <footer className="bg-[var(--color-primary-navy)] text-white relative overflow-hidden flex flex-col">
      {/* Light Theme Marquee attached to top of footer */}
      <ClientLogosMarquee />

      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tight italic">Stay Updated</h3>
              <p className="text-white/60 text-sm">Subscribe to our newsletter for the latest updates on heavy transport routes and machinery availability.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="group flex shrink-0 items-center gap-3 transition-transform duration-200 mb-8">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 transition-transform group-hover:scale-105">
                <Image
                  src="/assets/images/logo.png"
                  alt="GQS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-start select-none">
                <span className="font-heading text-lg sm:text-xl font-black leading-none tracking-tight text-white transition-colors group-hover:text-[var(--color-accent-gold)] uppercase">
                  Gulf Quality
                </span>
                <span className="font-heading text-[10px] sm:text-[11px] font-bold leading-none tracking-[0.25em] text-[var(--color-accent-gold)] transition-colors group-hover:text-white mt-1.5 uppercase">
                  Structure
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Gulf Quality Structure Establishment (GQS) is your trusted industrial support partner in Saudi Arabia, specializing in heavy transport, machinery rental, and project logistics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent-gold)]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["home", "aboutUs", "services", "industries", "contactUs"].map((key) => (
                <li key={key}>
                  <Link
                    href={`/${key === "home" ? "" : key}`}
                    className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <div className="h-px w-0 bg-[var(--color-accent-gold)] transition-all group-hover:w-4" />
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent-gold)]">
              Core Services
            </h4>
            <ul className="space-y-4">
              <li className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-default">Heavy Cargo Transportation</li>
              <li className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-default">Flatbed & Lowbed Rental</li>
              <li className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-default">Heavy Machinery Rental</li>
              <li className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-default">Hiab & Boom Truck Services</li>
              <li className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-default">Industrial Logistics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent-gold)]">
              Contact Details
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="h-5 w-5 shrink-0 text-[var(--color-accent-gold)] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold leading-relaxed text-white/50 group-hover:text-white transition-colors">
                  Dammam, Kingdom of Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="h-5 w-5 shrink-0 text-[var(--color-accent-gold)] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="h-5 w-5 shrink-0 text-[var(--color-accent-gold)] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors">info@gqsksa.com</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Globe className="h-5 w-5 shrink-0 text-[var(--color-accent-gold)] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors">www.gqsksa.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 border-t border-white/5 pt-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
            Reliable Heavy Transport & Machinery Solutions Across Saudi Arabia
          </p>
          <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white/10">
            © {new Date().getFullYear()} GULF QUALITY STRUCTURE EST. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


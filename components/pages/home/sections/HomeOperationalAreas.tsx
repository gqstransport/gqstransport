import { getTranslations } from "next-intl/server";
import { MapPin, Globe2 } from "lucide-react";

export async function HomeOperationalAreas() {
  const t = await getTranslations("pages.home.operationalAreas");

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-[var(--color-primary-navy)] sm:text-5xl leading-tight">
                {t("title")}
              </h2>
              <div className="h-1.5 w-24 bg-[var(--color-accent-gold)]" />
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {(t.raw("cities") as string[]).map((city, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-[var(--color-surface-soft)] rounded-sm border-l-4 border-transparent hover:border-[var(--color-accent-gold)] hover:bg-white hover:shadow-md transition-all group">
                  <MapPin className="h-5 w-5 text-[var(--color-accent-gold)] shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-bold uppercase tracking-wider text-sm text-[var(--color-primary-navy)]">{city}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)]">
                <Globe2 className="h-6 w-6" />
              </div>
              <p className="text-gray-500 font-medium italic">
                {t("footerNote")}
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Visual representation of Saudi Arabia / GCC Map */}
            <div className="aspect-square bg-[var(--color-primary-navy)] rounded-sm p-12 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
               
               <div className="relative z-10 text-center space-y-4">
                  <div className="inline-block p-4 bg-[var(--color-accent-gold)] rounded-sm mb-4">
                    <Globe2 className="h-12 w-12 text-[var(--color-primary-navy)] animate-pulse" />
                  </div>
                  <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter">KINGDOM WIDE</h3>
                  <p className="text-white/60 font-bold tracking-widest uppercase text-xs">Logistic Network</p>
               </div>

               {/* Random pins */}
               <div className="absolute top-1/4 left-1/3 h-3 w-3 bg-[var(--color-accent-gold)] rounded-full animate-ping" />
               <div className="absolute bottom-1/3 right-1/4 h-3 w-3 bg-[var(--color-accent-gold)] rounded-full animate-ping delay-75" />
               <div className="absolute top-1/2 right-1/2 h-3 w-3 bg-[var(--color-accent-gold)] rounded-full animate-ping delay-150" />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-8 -left-8 bg-[var(--color-accent-gold)] p-8 rounded-sm shadow-xl hidden md:block">
              <p className="text-[var(--color-primary-navy)] font-black text-2xl italic leading-none">24/7</p>
              <p className="text-[var(--color-primary-navy)] font-bold text-[10px] uppercase tracking-tighter mt-1">Operational Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

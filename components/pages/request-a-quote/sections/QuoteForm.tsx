import { getTranslations } from "next-intl/server";
import { Send, User, Building, Truck, MapPin, Calendar, Paperclip, ChevronRight, Box } from "lucide-react";
import { Reveal } from "@/components/ui/motion-reveal";

export async function QuoteForm() {
  const t = await getTranslations("pages.requestAQuote.index");

  return (
    <section className="bg-[var(--color-surface-soft)] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <form className="bg-white p-8 lg:p-16 shadow-2xl rounded-sm border border-gray-100 space-y-12 relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 left-0 w-full h-2 gradient-line" />

            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">Project Details Form</h2>
              <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Please fill out the technical requirements below</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Personal & Company */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="Industrial Corp" className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  </div>
                </div>
              </div>

              {/* Service & Equipment */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Service Required</label>
                  <div className="relative">
                    <Truck className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors appearance-none">
                      <option>Heavy Transport</option>
                      <option>Machinery Rental</option>
                      <option>Hiab Service</option>
                      <option>Project Logistics</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Specific Equipment Needed</label>
                  <div className="relative">
                    <Box className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="e.g. 50T Lowbed, 20T Excavator" className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  </div>
                </div>
              </div>

              {/* Logistics */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="Dammam Port" className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Drop-off Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="Riyadh Site B" className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  </div>
                </div>
              </div>

              {/* Duration & Attachment */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Rental Duration / Schedule</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="e.g. 2 Weeks, Starting June 1st" className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Project Specs (Optional)</label>
                  <div className="relative">
                    <Paperclip className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="file" className="w-full bg-gray-50 border border-gray-100 rounded-sm py-[13px] pl-12 pr-4 text-xs file:hidden cursor-pointer" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-300 font-bold uppercase pointer-events-none">Upload PDF/JPG</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button type="submit" className="w-full group bg-[var(--color-primary-navy)] text-white py-6 rounded-sm font-black uppercase tracking-[0.3em] text-sm hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 active:scale-[0.98]">
                Request Technical Quote
                <ChevronRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="mt-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Our estimation team will respond within 24 operational hours
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

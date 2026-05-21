"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Send, User, Building, Truck, MapPin, Calendar, Paperclip, ChevronRight, Box, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/motion-reveal";

function formatErrorMessage(data: unknown): string {
  if (data && typeof data === "object" && "error" in data) {
    const err = (data as { error: unknown }).error;
    if (typeof err === "string") return err;
    if (err && typeof err === "object" && "formErrors" in err) {
      return "Please check your input and try again.";
    }
  }
  return "Something went wrong. Please try again.";
}

export function QuoteForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Heavy Transport");
  const [equipment, setEquipment] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [schedule, setSchedule] = useState("");
  const [notes, setNotes] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    setAttachment(e.target.files?.[0] ?? null);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("company", company);
      formData.append("email", email);
      if (phone.trim()) formData.append("phone", phone.trim());
      formData.append("service", service);
      if (equipment.trim()) formData.append("equipment", equipment.trim());
      formData.append("pickupLocation", pickupLocation);
      formData.append("dropoffLocation", dropoffLocation);
      formData.append("schedule", schedule);
      if (notes.trim()) formData.append("notes", notes.trim());
      if (attachment) formData.append("attachment", attachment);

      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(formatErrorMessage(data));
        return;
      }
      setSuccess(true);
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setService("Heavy Transport");
      setEquipment("");
      setPickupLocation("");
      setDropoffLocation("");
      setSchedule("");
      setNotes("");
      setAttachment(null);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[var(--color-surface-soft)] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <form onSubmit={onSubmit} className="bg-white p-8 lg:p-16 shadow-2xl rounded-sm border border-gray-100 space-y-12 relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 left-0 w-full h-2 gradient-line" />

            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">Project Details Form</h2>
              <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Please fill out the technical requirements below</p>
            </div>

            {success ? (
              <p className="rounded-sm border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 text-center">
                Thank you — your quote request was submitted successfully.
              </p>
            ) : null}
            {error ? (
              <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800 text-center" role="alert">
                {error}
              </p>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Personal & Company */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="quote-name" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-name"
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-company" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Company Name</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-company"
                      type="text"
                      name="company"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Industrial Corp"
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-email" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-phone" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone (optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 ..."
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Equipment */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="quote-service" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Service Required</label>
                  <div className="relative">
                    <Truck className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    <select
                      id="quote-service"
                      name="service"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors appearance-none"
                    >
                      <option>Heavy Transport</option>
                      <option>Machinery Rental</option>
                      <option>Hiab Service</option>
                      <option>Project Logistics</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-equipment" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Specific Equipment Needed</label>
                  <div className="relative">
                    <Box className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-equipment"
                      type="text"
                      name="equipment"
                      value={equipment}
                      onChange={(e) => setEquipment(e.target.value)}
                      placeholder="e.g. 50T Lowbed, 20T Excavator"
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Logistics */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="quote-pickup" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-pickup"
                      type="text"
                      name="pickupLocation"
                      required
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Dammam Port"
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-dropoff" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Drop-off Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-dropoff"
                      type="text"
                      name="dropoffLocation"
                      required
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      placeholder="Riyadh Site B"
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Duration & Attachment */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="quote-schedule" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Rental Duration / Schedule</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-schedule"
                      type="text"
                      name="schedule"
                      required
                      value={schedule}
                      onChange={(e) => setSchedule(e.target.value)}
                      placeholder="e.g. 2 Weeks, Starting June 1st"
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-notes" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Additional Notes (optional)</label>
                  <textarea
                    id="quote-notes"
                    name="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any extra context for our team..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="quote-attachment" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Project Specs (Optional)</label>
                  <div className="relative">
                    <Paperclip className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="quote-attachment"
                      type="file"
                      name="attachment"
                      onChange={onFileChange}
                      className="w-full bg-gray-50 border border-gray-100 rounded-sm py-[13px] pl-12 pr-4 text-xs file:hidden cursor-pointer"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-300 font-bold uppercase pointer-events-none">Upload PDF/JPG</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full group bg-[var(--color-primary-navy)] text-white py-6 rounded-sm font-black uppercase tracking-[0.3em] text-sm hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
              >
                {loading ? "Submitting…" : "Request Technical Quote"}
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

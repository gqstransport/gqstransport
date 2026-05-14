"use client";

import { motion } from "framer-motion";
import { Truck, Settings, Anchor, Box, Globe, Activity, ShieldCheck, Zap } from "lucide-react";

const marqueeItems = [
  { text: "Heavy Transport", icon: Truck },
  { text: "Machinery Rental", icon: Settings },
  { text: "Project Logistics", icon: Anchor },
  { text: "Oversized Cargo", icon: Box },
  { text: "Cross-Border Support", icon: Globe },
  { text: "Hiab & Boom Trucks", icon: Activity },
  { text: "Certified Safety", icon: ShieldCheck },
  { text: "Rapid Mobilization", icon: Zap },
];

export function ClientLogosMarquee() {
  return (
    <div className="w-full overflow-hidden bg-[var(--color-surface-soft)] py-5 border-y border-black/5 flex whitespace-nowrap relative">
      {/* Soft gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-surface-soft)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-surface-soft)] to-transparent z-10" />

      <motion.div
        className="flex items-center gap-12 min-w-max px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* We map twice to ensure smooth infinite loop without gaps */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <div 
            key={i} 
            className="flex items-center gap-3 group cursor-default"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm border border-black/5 group-hover:border-[var(--color-accent-gold)] transition-colors">
              <item.icon className="h-4 w-4 text-[var(--color-accent-gold)]" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-primary-navy)] opacity-70 group-hover:opacity-100 transition-opacity">
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

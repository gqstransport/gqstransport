"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[60] flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)] shadow-2xl transition-all hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] group border border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
          
          {/* Subtle indicator */}
          <div className="absolute inset-0 rounded-sm border border-white/20 animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

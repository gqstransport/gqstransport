"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function Reveal({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
  distance = 50,
}: RevealProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      style={{ position: "relative", width, overflow: "visible" }}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 20,
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        show: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

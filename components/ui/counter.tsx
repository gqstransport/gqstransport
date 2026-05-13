"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({
  value,
  duration = 2,
}: {
  value: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and suffix (e.g., "150+" -> { num: 150, suffix: "+" })
  const match = value.match(/(\d+)(.*)/);
  const targetNumber = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, motionValue, targetNumber]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toString() + suffix);
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{displayValue}</span>;
}

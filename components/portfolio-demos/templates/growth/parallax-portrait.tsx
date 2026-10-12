"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** Slow vertical drift on the hero portrait. Static when reduced motion is preferred. */
export function ParallaxPortrait({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <motion.div style={reduce ? undefined : { y }} className="absolute -inset-y-[8%] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}

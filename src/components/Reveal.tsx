"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/** Fade-and-rise scroll reveal, disabled under prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface EyebrowProps {
  children: ReactNode;
  light?: boolean;
}

/** Small letterspaced section label with a gold rule. */
export function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <Reveal>
      <p
        className={`flex items-center gap-4 text-[11px] font-medium uppercase tracking-mega ${
          light ? "text-stone" : "text-gold"
        }`}
      >
        <span
          aria-hidden="true"
          className={`inline-block h-px w-10 ${light ? "bg-stone/60" : "bg-gold/70"}`}
        />
        {children}
      </p>
    </Reveal>
  );
}

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

/** Subtle Kerala kasavu-inspired divider: fine gold lines with a diamond motif. */
export function KasavuDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/70" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
      <span className="h-[3px] w-[3px] rotate-45 bg-gold/40" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/70" />
    </div>
  );
}
/** Bold repeating kasavu-style motif band, like a saree border strip. */
export function KasavuBand({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden border-y border-gold/25 bg-coal py-3 ${className}`}
    >
      <div className="animate-marquee mx-auto flex w-max items-center" style={{ animationDuration: "80s" }}>
        {Array.from({ length: 64 }).map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-5 h-1.5 w-1.5 rotate-45 bg-gold/60" />
            <span className="h-px w-8 bg-gold/25" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Small letterspaced section label with a gold rule that draws in. */
export function Eyebrow({ children, light = false }: EyebrowProps) {
  const reduce = useReducedMotion();
  return (
    <Reveal>
      <p
        className={`flex items-center gap-4 text-[11px] font-medium uppercase tracking-mega ${
          light ? "text-stone" : "text-gold"
        }`}
      >
        <motion.span
          aria-hidden="true"
          initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block h-px w-10 origin-left ${light ? "bg-stone/60" : "bg-gold/70"}`}
        />
        {children}
      </p>
    </Reveal>
  );
}

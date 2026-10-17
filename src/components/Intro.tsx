"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SITE } from "@/data/site";

/**
 * Brief cinematic brand reveal. Plays once on load (max ~2s),
 * skippable by click or scroll, fully disabled under prefers-reduced-motion.
 */
export function Intro() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2100);
    const skip = () => setDone(true);
    window.addEventListener("wheel", skip, { passive: true });
    window.addEventListener("touchmove", skip, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
    };
  }, []);

  if (reduce) return null;

  const brand = SITE.name.toUpperCase().split("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-ink"
          onClick={() => setDone(true)}
          role="presentation"
          aria-hidden="true"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-6 text-[11px] font-medium uppercase tracking-mega text-gold"
          >
            Est. {SITE.founded}
          </motion.p>
          <h1 className="flex overflow-hidden font-serif text-4xl font-light tracking-[0.08em] text-ivory sm:text-6xl md:text-7xl">
            {brand.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + i * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 pl-[0.35em] text-[11px] font-medium uppercase text-stone"
          >
            Tripunithura
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            className="mt-10 h-px w-40 origin-left bg-gold/50"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

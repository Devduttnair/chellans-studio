"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { SITE } from "@/data/site";

const line1 = "An enduring art".split(" ");
const line2 = "of capturing moments.".split(" ");

function StaggerLine({ words, delay }: { words: string[]; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-1">
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="mr-[0.28em] inline-block last:mr-0"
          initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: delay + i * 0.09,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const base = reduce ? 0 : 2.4;

  return (
    <section id="top" aria-label="Introduction" className="relative h-[100svh] min-h-[560px] overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover ${reduce ? "" : "animate-kenburns"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
      </div>

      {/* Copy */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-28 sm:px-8 sm:pb-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: base }}
          className="mb-5 text-[11px] font-medium uppercase tracking-mega text-gold"
        >
          Photography Studio · Est. {SITE.founded}
        </motion.p>
        <h1 className="max-w-4xl font-serif text-[13vw] font-light leading-[1.02] text-ivory sm:text-7xl md:text-8xl">
          <StaggerLine words={line1} delay={base + 0.1} />
          <StaggerLine words={line2} delay={base + 0.35} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: base + 0.9 }}
          className="mt-6 max-w-xl text-sm font-light leading-relaxed text-ivory/75 sm:text-base"
        >
          Established 1976, Tripunithura, Kerala. Portraits, weddings,
          cinematic films, restoration and fine-art framing, crafted with five
          decades of care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: base + 1.1 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="bg-ivory px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ink transition-colors hover:bg-gold"
          >
            Explore Our Work
          </a>
          <a
            href="#enquiry"
            className="border border-ivory/40 px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ivory transition-all hover:border-gold hover:text-gold"
          >
            Contact Studio
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#heritage"
        aria-label="Scroll to heritage section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: base + 1.6 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-mega text-ivory/60">
          Scroll
        </span>
        <span className="block h-10 w-px bg-ivory/40">
          <span className="animate-scroll-cue block h-full w-full bg-gold" />
        </span>
        <ArrowDown className="h-3.5 w-3.5 text-ivory/60" aria-hidden="true" />
      </motion.a>
    </section>
  );
}

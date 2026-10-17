"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { SITE } from "@/data/site";

const AUTOPLAY_MS = 6500;

const SLIDES = [
  {
    src: "/images/hero.webp",
    alt: "Bride and groom in a cinematic wedding portrait",
    caption: "Weddings",
  },
  {
    src: "/images/photo-4.jpg",
    alt: "Indian couple celebrating haldi ceremony with yellow floral decor",
    caption: "Celebrations",
  },
  {
    src: "/images/video-1.jpg",
    alt: "Professional cinema camera set up on an outdoor film set",
    caption: "Cinematic craft",
  },
] as const;

const line1 = "An enduring art".split(" ");
const line2 = "of capturing moments.".split(" ");

const PARTICLES = [
  { left: "8%", bottom: "18%", size: 5, duration: 11, delay: 0, opacity: 0.7 },
  { left: "18%", bottom: "32%", size: 3, duration: 14, delay: 2.5, opacity: 0.5 },
  { left: "32%", bottom: "12%", size: 6, duration: 12, delay: 5, opacity: 0.6 },
  { left: "47%", bottom: "26%", size: 4, duration: 15, delay: 1.2, opacity: 0.55 },
  { left: "58%", bottom: "16%", size: 3, duration: 10, delay: 7, opacity: 0.5 },
  { left: "68%", bottom: "34%", size: 5, duration: 13, delay: 3.4, opacity: 0.65 },
  { left: "78%", bottom: "20%", size: 4, duration: 11.5, delay: 8.2, opacity: 0.5 },
  { left: "88%", bottom: "30%", size: 3, duration: 14.5, delay: 4.6, opacity: 0.55 },
  { left: "93%", bottom: "12%", size: 6, duration: 12.5, delay: 6.1, opacity: 0.6 },
  { left: "25%", bottom: "42%", size: 3, duration: 16, delay: 9, opacity: 0.45 },
] as const;

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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length),
    []
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [reduce, paused]);

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative h-[100svh] min-h-[560px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx > 48) prev();
        else if (dx < -48) next();
        touchX.current = null;
      }}
    >
      {/* Backdrop carousel */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((s, i) => {
          const active = i === index;
          return (
            <motion.div
              key={s.src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 1.8, ease: "easeInOut" }}
            >
              <Image
                src={s.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover ${reduce || !active ? "" : "animate-kenburns"}`}
              />
            </motion.div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
      </div>

      {/* Drifting light particles */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="animate-float-up absolute rounded-full bg-gold/70 blur-[2px]"
              style={{
                left: p.left,
                bottom: p.bottom,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}

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

      {/* Carousel controls */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: base + 1.4 }}
          className="absolute bottom-7 right-5 z-10 flex items-center gap-4 sm:right-8"
          role="group"
          aria-label="Hero slideshow controls"
        >
          <span className="text-[11px] font-medium uppercase tracking-mega text-ivory/70" aria-live="polite">
            {String(index + 1).padStart(2, "0")}
            <span className="mx-2 text-ivory/30">/</span>
            <span className="text-ivory/40">{String(SLIDES.length).padStart(2, "0")}</span>
          </span>
          <span className="relative block h-px w-16 overflow-hidden bg-ivory/20" aria-hidden="true">
            <span
              key={index}
              className={`absolute inset-y-0 left-0 bg-gold ${paused ? "[animation-play-state:paused]" : ""} animate-hero-progress`}
            />
          </span>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous hero image"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next hero image"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>
      )}

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

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  animate,
} from "motion/react";
import { Eyebrow, Reveal } from "./Reveal";
import { SITE } from "@/data/site";

const START = SITE.founded;
const NOW = 2026;

function YearCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [year, setYear] = useState<number>(START);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(START, NOW, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setYear(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {reduce ? NOW : year}
    </span>
  );
}

export function Heritage() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [110, -40]);

  return (
    <section
      id="heritage"
      ref={sectionRef}
      aria-label="Our heritage since 1976"
      className="relative overflow-hidden bg-ivory text-ink"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <Eyebrow light>Our Heritage</Eyebrow>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-5xl font-serif text-4xl font-light leading-[1.08] sm:text-6xl md:text-7xl">
            Some moments become memories.{" "}
            <span className="italic text-ink/70">
              Some memories become timeless.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Year treatment */}
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <p className="font-serif text-[26vw] font-light leading-none text-ink/90 sm:text-[7rem] lg:text-[8.5rem]">
                <YearCounter />
              </p>
              <p className="mt-4 flex items-center gap-4 text-[11px] font-medium uppercase tracking-mega text-ink/60">
                <span aria-hidden="true" className="inline-block h-px w-10 bg-gold" />
                Five decades of craft
              </p>
              <p className="mt-8 max-w-sm text-[15px] font-light leading-relaxed text-ink/70">
                {SITE.name} opened its doors in Tripunithura in {START}, in
                the age of film. Generation after generation, the people of
                this town have trusted the studio with their weddings, their
                portraits and their family milestones.
              </p>
              <p className="mt-5 max-w-sm text-[15px] font-light leading-relaxed text-ink/70">
                Cameras have changed, from darkroom to digital. The patience,
                the eye for light and the care for every print have not. Today
                the studio pairs that long experience with modern photography,
                cinematic videography and fine-art framing.
              </p>
            </Reveal>
          </div>

          {/* Cinematic photo composition with parallax */}
          <div className="relative lg:col-span-8">
            {!reduce && (
              <div
                aria-hidden="true"
                className="animate-spin-slow absolute -top-12 left-0 z-10 h-28 w-28 sm:-top-14 sm:h-36 sm:w-36"
              >
                <svg viewBox="0 0 120 120" className="h-full w-full">
                  <defs>
                    <path
                      id="heritage-badge-circle"
                      d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                    />
                  </defs>
                  <text
                    className="fill-ink/60"
                    style={{ fontSize: "10px", letterSpacing: "2.6px" }}
                  >
                    <textPath href="#heritage-badge-circle">
                      CHELLAN&apos;S STUDIO · EST 1976 ·
                    </textPath>
                  </text>
                </svg>
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
              </div>
            )}
            <motion.figure style={{ y: yA }} className="relative ml-auto w-[86%]">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11]">
                <Image
                  src="/images/heritage-craft.webp"
                  alt="Hands holding a vintage film camera, a nod to the craft of photography"
                  fill
                  sizes="(max-width: 1024px) 86vw, 55vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-[11px] uppercase tracking-wide-xl text-ink/50">
                The craft, then and now · illustrative photograph
              </figcaption>
            </motion.figure>
            <motion.figure
              style={{ y: yB }}
              className="absolute -bottom-10 left-0 w-[46%] border-[6px] border-ivory shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/heritage-cameras.jpg"
                  alt="Collection of vintage film cameras"
                  fill
                  sizes="(max-width: 1024px) 40vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </motion.figure>
            <div aria-hidden="true" className="h-16 sm:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

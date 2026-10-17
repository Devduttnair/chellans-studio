"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Frame, Printer, Layers, HandHeart } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { SITE } from "@/data/site";

const POINTS = [
  {
    icon: Frame,
    title: "Custom framing",
    copy: "Wooden frames in classic and contemporary finishes, cut and fitted for your photograph.",
  },
  {
    icon: Printer,
    title: "Fine-art printing",
    copy: "Rich, archival quality prints with deep blacks and true tones, in sizes for every wall.",
  },
  {
    icon: Layers,
    title: "Printing from various media",
    copy: "Old negatives, albums, or the photos on your phone. If it holds a memory, it can be printed.",
  },
  {
    icon: HandHeart,
    title: "Made to be kept",
    copy: "Every frame leaves the studio ready to hang, and ready to be handed down.",
  },
];

export function Frames() {
  const reduce = useReducedMotion();
  return (
    <section id="frames" aria-label="Frames and fine prints" className="bg-coal">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <Eyebrow>Frames & Fine Prints</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <h2 className="font-serif text-4xl font-light leading-tight text-ivory sm:text-6xl">
              Photographs deserve{" "}
              <span className="italic text-gold">better than a screen</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-[15px] font-light leading-relaxed text-stone">
              A printed photograph is a different object from a file. It has
              weight, texture and presence. {SITE.name} frames and prints
              photographs to museum standards, so the moments you love become
              part of the room you live in. Visit the studio to see frame
              samples and finishes in person.
            </p>
          </Reveal>
        </div>

        {/* Gallery composition */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              src: "/images/frames-2.jpg",
              alt: "Elegant black and white framed photographs on a modern interior wall",
              ratio: "aspect-[4/3]",
            },
            {
              src: "/images/frames-3.jpg",
              alt: "Cozy gallery wall of framed pictures with soft ambient lighting",
              ratio: "aspect-[3/4] md:aspect-[3/4]",
            },
            {
              src: "/images/frames-1.jpg",
              alt: "Black and white framed photographs arranged on a gallery wall",
              ratio: "aspect-[4/3]",
            },
          ].map((img, i) => (
            <motion.figure
              key={img.src}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden ${img.ratio} ${
                i === 1 ? "md:-mt-8" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-60"
              />
            </motion.figure>
          ))}
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-wide-xl text-stone/60">
          Illustrative sample photographs
        </p>

        {/* Points */}
        <div className="mt-16 grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="bg-coal">
              <div className="h-full p-8">
                <p.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl font-light text-ivory">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-stone">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

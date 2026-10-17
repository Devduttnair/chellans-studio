"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { GALLERY, CATEGORY_LABELS, type Category } from "@/data/images";
import { Eyebrow, Reveal } from "./Reveal";

type Filter = "all" | Category;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "portraits", label: CATEGORY_LABELS.portraits },
  { id: "photography", label: CATEGORY_LABELS.photography },
  { id: "videography", label: CATEGORY_LABELS.videography },
  { id: "restoration", label: CATEGORY_LABELS.restoration },
  { id: "frames", label: CATEGORY_LABELS.frames },
];

function Lightbox({
  index,
  items,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  items: typeof GALLERY;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  const touchX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${item.caption}`}
      className="fixed inset-0 z-[96] flex flex-col bg-ink/97 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx > 48) onPrev();
        else if (dx < -48) onNext();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="text-[11px] uppercase tracking-mega text-stone">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 sm:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-full"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              sizes="90vw"
              className="max-h-[68vh] w-auto max-w-full object-contain"
              priority
            />
          </motion.figure>
        </AnimatePresence>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold sm:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold sm:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        className="px-5 pb-8 pt-4 text-center sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-serif text-2xl font-light text-ivory">{item.caption}</p>
        <p className="mt-2 text-[11px] uppercase tracking-wide-xl text-stone">
          {CATEGORY_LABELS[item.category]} · Illustrative sample photograph
        </p>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const items = filter === "all" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  const openAt = useCallback(
    (globalIndex: number) => {
      const item = GALLERY[globalIndex];
      const inFiltered = items.findIndex((g) => g.src === item.src);
      setLightbox(inFiltered);
    },
    [items]
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  return (
    <section id="work" aria-label="Selected work" className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <Eyebrow>Portfolio</Eyebrow>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-4xl font-light leading-tight text-ivory sm:text-6xl">
              Selected <span className="italic text-gold">work</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm font-light leading-relaxed text-stone">
              A glimpse of the studio&apos;s range, from portraits to prints.
              Photographs shown are illustrative samples, not the
              studio&apos;s own work.
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.15}>
          <div
            role="tablist"
            aria-label="Filter portfolio by category"
            className="mt-12 flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setFilter(f.id);
                    setLightbox(null);
                  }}
                  className={`border px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide-xl transition-all ${
                    active
                      ? "border-gold bg-gold text-ink"
                      : "border-ivory/20 text-ivory/70 hover:border-gold/60 hover:text-gold"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <motion.div layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode={reduce ? "sync" : "popLayout"}>
            {items.map((item) => {
              const globalIndex = GALLERY.findIndex((g) => g.src === item.src);
              return (
                <motion.figure
                  layout={!reduce}
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative mb-5 break-inside-avoid overflow-hidden bg-coal"
                >
                  <button
                    type="button"
                    onClick={() => openAt(globalIndex)}
                    aria-label={`Open image: ${item.caption}`}
                    className="block w-full cursor-zoom-in text-left"
                  >
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: `${item.w} / ${item.h}` }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span>
                        <span className="block font-serif text-xl font-light text-ivory">
                          {item.caption}
                        </span>
                        <span className="mt-1 block text-[10px] uppercase tracking-wide-xl text-gold">
                          {CATEGORY_LABELS[item.category]}
                        </span>
                      </span>
                      <Expand className="h-5 w-5 shrink-0 text-ivory/80" />
                    </figcaption>
                  </button>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            index={lightbox}
            items={items}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

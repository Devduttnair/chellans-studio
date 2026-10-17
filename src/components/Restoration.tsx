"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { SITE } from "@/data/site";

/**
 * Interactive before/after restoration slider.
 * Pointer-draggable and keyboard accessible (arrow keys).
 * Both images are illustrative demonstration samples.
 */
export function Restoration() {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(4, p - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(96, p + 4));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(4);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(96);
    }
  };

  return (
    <section id="restoration" aria-label="Photo restoration demonstration" className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Restoration</Eyebrow>
            <Reveal>
              <h2 className="mt-8 font-serif text-4xl font-light leading-tight text-ivory sm:text-6xl">
                Time damages photographs.{" "}
                <span className="italic text-gold">Craft brings them back.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-stone">
                Faded colours, torn corners, water marks and years of wear.{" "}
                {SITE.name} restores damaged photographs by hand, so the faces
                that matter to your family are never lost to time.
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-stone/80">
                Drag the handle to compare. This is an illustrative
                demonstration of restoration work, not a studio client
                photograph.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div
              ref={trackRef}
              className="relative aspect-[3/4] w-full cursor-ew-resize select-none overflow-hidden bg-coal sm:aspect-[4/5]"
              onPointerDown={(e) => {
                dragging.current = true;
                (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
                setFromClientX(e.clientX);
              }}
              onPointerMove={(e) => {
                if (dragging.current) setFromClientX(e.clientX);
              }}
              onPointerUp={() => {
                dragging.current = false;
              }}
              onPointerCancel={() => {
                dragging.current = false;
              }}
            >
              {/* After (base layer) */}
              <Image
                src="/images/restore-after.webp"
                alt="Restored black and white portrait, clean and sharp"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                loading="lazy"
                className="pointer-events-none object-cover"
                draggable={false}
              />
              {/* Before (clipped overlay) */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <Image
                  src="/images/restore-before.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  loading="lazy"
                  className="pointer-events-none object-cover"
                  draggable={false}
                />
              </div>

              {/* Handle */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0"
                style={{ left: `${pos}%` }}
              >
                <div className="absolute inset-y-0 -left-px w-[2px] bg-ivory/90" />
              </div>
              <div
                role="slider"
                tabIndex={0}
                aria-label="Restoration comparison slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                aria-valuetext={`${Math.round(pos)} percent restored view`}
                onKeyDown={onKeyDown}
                className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/40 bg-ink/70 text-ivory backdrop-blur-sm"
                style={{ left: `${pos}%` }}
              >
                <ChevronsLeftRight className="h-5 w-5" />
              </div>

              <span
                aria-hidden="true"
                className="absolute left-4 top-4 bg-ink/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide-xl text-ivory backdrop-blur-sm"
              >
                Before
              </span>
              <span
                aria-hidden="true"
                className="absolute right-4 top-4 bg-gold/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide-xl text-ink"
              >
                After
              </span>
            </div>
            <p className="mt-3 text-center text-[11px] uppercase tracking-wide-xl text-stone/70">
              Illustrative demonstration · drag or use arrow keys
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

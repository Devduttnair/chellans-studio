"use client";

import { MapPin, ArrowUpRight, Navigation } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { SITE } from "@/data/site";

/**
 * Neutral Google presence section. Links out to the real listing.
 * No ratings, counts, or testimonials are shown or claimed.
 */
export function Reviews() {
  return (
    <section id="reviews" aria-label="Google reviews and listing" className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <div className="relative overflow-hidden border border-ivory/10 bg-coal px-6 py-14 sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
          />
          <Eyebrow>Reputation</Eyebrow>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl">
                Five decades of trust,{" "}
                <span className="italic text-gold">one neighbourhood</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-stone">
                {SITE.name} has served Tripunithura since {SITE.founded}. Read
                what visitors say on our Google listing, or find directions to
                the studio.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <a
                  href={SITE.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-ivory px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ink transition-colors hover:bg-gold"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Read Google Reviews
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={SITE.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-ivory/30 px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
              <p className="mt-5 text-xs font-light text-stone/70 lg:text-right">
                Opens Google Maps in a new tab
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

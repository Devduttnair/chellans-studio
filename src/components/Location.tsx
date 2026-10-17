"use client";

import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { SITE, WHATSAPP_LINK } from "@/data/site";

export function Location() {
  return (
    <>
      <section id="visit" aria-label="Visit the studio" className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
          <Eyebrow>Visit</Eyebrow>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <h2 className="font-serif text-4xl font-light leading-tight text-ivory sm:text-6xl">
                  In the heart of{" "}
                  <span className="italic text-gold">Tripunithura</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <address className="mt-8 flex items-start gap-4 not-italic">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed text-ivory/85">
                    {SITE.address.full}
                  </span>
                </address>
                <a
                  href={SITE.phoneHref}
                  className="mt-6 flex items-center gap-4 text-ivory transition-colors hover:text-gold"
                >
                  <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="font-serif text-2xl font-light tracking-wide">
                    {SITE.phoneDisplay}
                  </span>
                </a>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={SITE.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ivory/30 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-wide-xl text-ivory transition-colors hover:border-gold hover:text-gold"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Directions
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ivory/30 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-wide-xl text-ivory transition-colors hover:border-gold hover:text-gold"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-wide-xl text-ink transition-colors hover:bg-ivory"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Studio
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden border border-ivory/10">
                <iframe
                  title={`Map showing the location of ${SITE.name} in Tripunithura, Kerala`}
                  src={SITE.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-wide-xl text-stone/60">
                Map data © Google · Interactive map
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-ivory/10 bg-ink" aria-label="Footer">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-serif text-2xl font-light text-ivory">{SITE.name}</p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-mega text-gold">
                Est. {SITE.founded} · Tripunithura
              </p>
              <p className="mt-5 max-w-xs text-sm font-light italic leading-relaxed text-stone">
                {SITE.tagline}
              </p>
            </div>
            <nav aria-label="Footer">
              <p className="text-[11px] font-medium uppercase tracking-mega text-stone">
                Explore
              </p>
              <ul className="mt-5 space-y-3 text-sm font-light text-ivory/75">
                {[
                  ["#heritage", "Heritage"],
                  ["#work", "Portfolio"],
                  ["#services", "Services"],
                  ["#frames", "Frames & Prints"],
                  ["#enquiry", "Enquire"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="transition-colors hover:text-gold">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-mega text-stone">
                Contact
              </p>
              <address className="mt-5 space-y-3 text-sm font-light not-italic text-ivory/75">
                <p>{SITE.address.full}</p>
                <p>
                  <a href={SITE.phoneHref} className="transition-colors hover:text-gold">
                    {SITE.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={SITE.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    Find us on Google Maps
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="mt-12 border-t border-ivory/10 pt-8">
            <p className="text-xs font-light leading-relaxed text-stone/70">
              Concept demonstration website. Photographs shown are illustrative
              samples, not the studio&apos;s own work.
            </p>
            <p className="mt-3 text-xs font-light text-stone/50">
              © 2026 {SITE.name}, Tripunithura. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

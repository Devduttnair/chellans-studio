"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { SITE, QUICK_SERVICES, whatsappEnquiry } from "@/data/site";

interface Service {
  title: string;
  copy: string;
  image: string;
  alt: string;
  index: string;
}

const SERVICES_LIST: Service[] = [
  {
    title: "Professional Photography",
    copy: "Weddings, family occasions and portraits, photographed with patience and an eye for the unposed moment. The studio has covered the celebrations of Tripunithura for decades.",
    image: "/images/photo-1.jpg",
    alt: "Newlywed Indian couple embracing outdoors in traditional wedding attire",
    index: "01",
  },
  {
    title: "Cinematic Videography",
    copy: "Films of your occasions with a cinematic eye, from quiet preparation to full celebration, edited with the same care given to every frame.",
    image: "/images/video-1.jpg",
    alt: "Professional cinema camera set up on an outdoor film set",
    index: "02",
  },
  {
    title: "Studio Portraits",
    copy: "Classic portraiture in the studio, with considered light and unhurried direction. Portraits that sit on your wall for generations, not seasons.",
    image: "/images/portrait-1.jpg",
    alt: "Moody studio portrait of a woman in a black dress against a dark background",
    index: "03",
  },
  {
    title: "Photo Frames & Fine Prints",
    copy: "Museum style framing and fine-art prints that turn photographs into heirlooms. Printing from various media, from old negatives to the photos on your phone.",
    image: "/images/frames-1.jpg",
    alt: "Black and white framed photographs arranged on a gallery wall",
    index: "04",
  },
  {
    title: "Photo Retouching",
    copy: "Thoughtful retouching that polishes a photograph while keeping it honest and natural. Skin, light and colour, refined by hand.",
    image: "/images/retouch.jpg",
    alt: "Close-up studio portrait used to demonstrate photo retouching",
    index: "05",
  },
  {
    title: "Photo Restoration",
    copy: "Torn, faded and damaged photographs brought back to life, detail by careful detail. The faces your family thought were lost, returned.",
    image: "/images/restore-after.webp",
    alt: "Restored black and white studio portrait of a young woman",
    index: "06",
  },
];

function ServiceRow({ service, flip }: { service: Service; flip: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 ${
        flip ? "" : ""
      }`}
    >
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: flip ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`relative overflow-hidden ${flip ? "lg:order-2" : ""}`}
      >
        <div className="group relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/10 transition-opacity duration-700 group-hover:opacity-0"
          />
        </div>
        <p
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 left-0 font-serif text-8xl font-light text-ivory/10 sm:text-9xl"
        >
          {service.index}
        </p>
      </motion.div>

      <div className={flip ? "lg:order-1" : ""}>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-mega text-gold">
            {service.index}
          </p>
          <h3 className="mt-4 font-serif text-3xl font-light text-ivory sm:text-5xl">
            {service.title}
          </h3>
          <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-stone">
            {service.copy}
          </p>
          <a
            href={whatsappEnquiry(
              `Hello ${SITE.name}, I would like to enquire about ${service.title}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 border-b border-gold/50 pb-1 text-[11px] font-semibold uppercase tracking-wide-xl text-gold transition-colors hover:border-gold hover:text-ivory"
          >
            Enquire about this service
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-2 text-[11px] font-light text-stone/70">
            Opens WhatsApp with your enquiry ready to send
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" aria-label="Services" className="overflow-clip bg-coal">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <Eyebrow>Services</Eyebrow>
        <Reveal>
          <h2 className="mt-8 max-w-3xl font-serif text-4xl font-light leading-tight text-ivory sm:text-6xl">
            Everything a photograph needs,{" "}
            <span className="italic text-gold">under one roof</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-stone">
            Photographs shown are illustrative samples. Every service below is
            available at the studio in Tripunithura.
          </p>
        </Reveal>

        <div className="mt-8 divide-y divide-ivory/10">
          {SERVICES_LIST.map((s, i) => (
            <ServiceRow key={s.title} service={s} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-10 border-t border-ivory/10 pt-14 sm:pt-20">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-mega text-gold">
              Also at the studio
            </p>
            <h3 className="mt-4 max-w-2xl font-serif text-3xl font-light leading-tight text-ivory sm:text-4xl">
              Everyday prints, gifts{" "}
              <span className="italic text-gold">and keepsakes</span>
            </h3>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-stone">
              Passport photos in a minute, mug printing, album designing and
              more, available over the counter at both studios.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_SERVICES.map((title, i) => (
              <Reveal key={title} delay={(i % 3) * 0.06}>
                <a
                  href={whatsappEnquiry(
                    `Hello ${SITE.name}, I would like to enquire about ${title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between gap-4 bg-coal p-6 transition-colors hover:bg-ink"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[10px] text-gold" aria-hidden="true">
                      ◆
                    </span>
                    <span className="font-serif text-xl font-light text-ivory transition-colors group-hover:text-gold">
                      {title}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-stone transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

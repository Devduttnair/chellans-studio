"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/data/site";

const LINKS = [
  { href: "#heritage", label: "Heritage" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#frames", label: "Frames" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      {/* Scroll progress */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-gold"
        />
      )}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: reduce ? 0 : 2.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
          scrolled
            ? "border-b border-ivory/10 bg-ink/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a href="#top" className="group flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.06em] text-ivory transition-colors group-hover:text-gold sm:text-2xl">
              {SITE.name}
            </span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-mega text-stone">
              Est. {SITE.founded}
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] font-medium uppercase tracking-wide-xl text-ivory/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#enquiry"
                className="border border-gold/60 px-5 py-2.5 text-[11px] font-medium uppercase tracking-wide-xl text-gold transition-all hover:bg-gold hover:text-ink"
              >
                Enquire
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={SITE.phoneHref}
              aria-label={`Call ${SITE.name}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[95] flex flex-col bg-ink/97 backdrop-blur-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <span className="font-serif text-xl text-ivory">{SITE.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8">
              <ul className="space-y-2">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-ivory/10 py-4 font-serif text-4xl font-light text-ivory transition-colors hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="pt-6"
                >
                  <a
                    href="#enquiry"
                    onClick={() => setOpen(false)}
                    className="inline-block bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-wide-xl text-ink"
                  >
                    Enquire Now
                  </a>
                </motion.li>
              </ul>
            </nav>
            <p className="px-8 pb-10 text-xs uppercase tracking-wide-xl text-stone">
              {SITE.phoneDisplay} · Tripunithura · Kakkanad
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

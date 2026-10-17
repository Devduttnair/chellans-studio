"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { SITE, whatsappEnquiry } from "@/data/site";

export function WhatsAppFloat() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={whatsappEnquiry(
        `Hello ${SITE.name}! I'd like to enquire about your services.`
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
      initial={false}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
      className={`fixed bottom-5 right-5 z-40 flex items-center justify-center rounded-full border border-gold/50 bg-ivory text-ink shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-colors hover:bg-gold ${
        visible ? "" : "pointer-events-none"
      }`}
      style={{ height: 52, width: 52 }}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </motion.a>
  );
}

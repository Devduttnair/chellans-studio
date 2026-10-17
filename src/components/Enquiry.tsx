"use client";

import { useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { SITE, SERVICES, whatsappEnquiry } from "@/data/site";

const inputClass =
  "w-full border border-ivory/20 bg-ink px-4 py-3.5 text-[15px] font-light text-ivory placeholder:text-stone/50 transition-colors focus:border-gold focus:outline-none";

export function Enquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(SERVICES[0]);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please share your name and phone number so the studio can reach you.");
      return;
    }
    setError("");
    const lines = [
      `Hello ${SITE.name},`,
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Service of interest: ${service}`,
      `Preferred date: ${date || "Flexible"}`,
      message.trim() ? `Message: ${message.trim()}` : null,
    ].filter(Boolean) as string[];
    window.open(whatsappEnquiry(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="enquiry" aria-label="Enquire with the studio" className="bg-ivory text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow light>Enquiry</Eyebrow>
            <Reveal>
              <h2 className="mt-8 font-serif text-4xl font-light leading-tight sm:text-6xl">
                Begin the <span className="italic text-ink/60">conversation</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-ink/70">
                Tell the studio what you have in mind. Weddings, portraits,
                restoration of an old family photograph, or framing for your
                walls. Every enquiry is answered personally.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`${whatsappEnquiry(`Hello ${SITE.name}, I would like to make an enquiry.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ivory transition-colors hover:bg-gold hover:text-ink"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Us
                </a>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border border-ink/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ink transition-colors hover:border-gold hover:text-ink"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={submit}
              className="border border-ink/15 bg-ivory p-6 shadow-[0_20px_60px_-30px_rgba(16,16,16,0.35)] sm:p-10"
              aria-label="Enquiry form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="enq-name" className="mb-2 block text-[11px] font-medium uppercase tracking-wide-xl text-ink/60">
                    Your name *
                  </label>
                  <input
                    id="enq-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="enq-phone" className="mb-2 block text-[11px] font-medium uppercase tracking-wide-xl text-ink/60">
                    Phone number *
                  </label>
                  <input
                    id="enq-phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 ..."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="enq-service" className="mb-2 block text-[11px] font-medium uppercase tracking-wide-xl text-ink/60">
                    Service of interest
                  </label>
                  <select
                    id="enq-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-ink text-ivory">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="enq-date" className="mb-2 block text-[11px] font-medium uppercase tracking-wide-xl text-ink/60">
                    Preferred date
                  </label>
                  <input
                    id="enq-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`${inputClass} [color-scheme:dark]`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="enq-message" className="mb-2 block text-[11px] font-medium uppercase tracking-wide-xl text-ink/60">
                    Message
                  </label>
                  <textarea
                    id="enq-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your occasion, the photographs you want restored, or the frames you have in mind."
                    className={`${inputClass} resize-y`}
                  />
                </div>
              </div>

              {error && (
                <p role="alert" className="mt-4 text-sm font-medium text-red-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ivory transition-colors hover:bg-gold hover:text-ink sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send via WhatsApp
              </button>
              <p className="mt-4 text-xs font-light leading-relaxed text-ink/55">
                Pressing send opens WhatsApp with your enquiry written out. You
                send it from your own WhatsApp. Nothing is stored on this
                website.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

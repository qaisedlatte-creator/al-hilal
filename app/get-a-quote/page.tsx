"use client";

import { useState } from "react";
import Image from "next/image";
import { COMPANY } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";

const SERVICE_OPTIONS = [
  "Offset Printing — Brochures, Cards, Flyers, Letterheads, Calendars, Catalogues, Booklets",
  "Digital Printing — Stickers, Roll-Ups, Pop-Ups, Banners, Acrylic Signs, Sign Boards, Window Films",
  "Corporate Gifts — Sublimation, T-Shirts, Canvas Bags, Cups, Pens, Engraving, Gift Sets",
  "Rubber Stamps",
  "Signage & Advertising",
  "Multiple services",
];

export default function GetAQuotePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", quantity: "", message: "" });

  const update = (f: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [f]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  const inputClass = "w-full border border-border bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-steel/40 focus:outline-none focus:border-navy transition-colors";
  const labelClass = "text-[10px] font-semibold uppercase tracking-[0.12em] text-steel mb-1.5 block";

  return (
    <>
      <section className="bg-ivory pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Free Quote</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              Tell us what
              <br />
              <span className="text-navy">you need.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-5 max-w-xl">
            <p className="body-large text-steel">
              Fill in the details below or contact us directly — we&rsquo;re easy to reach.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 bg-ivory">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
          <FadeIn>
            {status === "sent" ? (
              <div className="py-12 flex flex-col gap-5">
                <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#1B5E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-display font-bold text-2xl text-charcoal">Enquiry received.</h2>
                <p className="text-steel body-md">We&rsquo;ll get back to you as soon as possible. For faster response, WhatsApp us at <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g,"")}`} className="text-navy underline">{COMPANY.whatsapp}</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Name *</label><input type="text" required value={form.name} onChange={update("name")} className={inputClass} placeholder="Your name" /></div>
                  <div><label className={labelClass}>Company</label><input type="text" value={form.company} onChange={update("company")} className={inputClass} placeholder="Company name" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Email *</label><input type="email" required value={form.email} onChange={update("email")} className={inputClass} placeholder="you@company.com" /></div>
                  <div><label className={labelClass}>Phone / WhatsApp</label><input type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+971 XX XXX XXXX" /></div>
                </div>
                <div>
                  <label className={labelClass}>Service Required *</label>
                  <select required value={form.service} onChange={update("service")} className={inputClass}>
                    <option value="">Select service…</option>
                    {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div><label className={labelClass}>Quantity / Size</label><input type="text" value={form.quantity} onChange={update("quantity")} className={inputClass} placeholder="e.g. 500 business cards, 2 roll-up banners" /></div>
                <div>
                  <label className={labelClass}>Project Details *</label>
                  <textarea required rows={6} value={form.message} onChange={update("message")} className={`${inputClass} resize-none`} placeholder="Describe what you need — materials, colours, sizes, deadline, and any other relevant details." />
                </div>
                <button type="submit" disabled={status === "sending"} className="self-start flex items-center gap-2 px-7 py-3.5 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Submit Enquiry →"}
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-col gap-4">
            <div className="bg-navy p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-ivory/20">
                  <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-display font-bold text-ivory text-sm">AL HILAL</p>
                  <p className="text-[9px] text-ivory/30 uppercase tracking-[0.12em]">{COMPANY.established} · Sharjah</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href={`tel:${COMPANY.phone}`} className="text-sm text-ivory/70 hover:text-ivory transition-colors">{COMPANY.phone}</a>
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-ivory/70 hover:text-ivory transition-colors">{COMPANY.email}</a>
                <p className="text-[11px] text-ivory/30 leading-relaxed mt-1">{COMPANY.address}</p>
              </div>
            </div>

            <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-[#25D366] hover:bg-[#1DAA53] transition-colors group">
              <div>
                <p className="text-white font-bold text-sm">WhatsApp</p>
                <p className="text-white/70 text-xs">{COMPANY.whatsapp}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 18 18" fill="white"><path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/></svg>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { COMPANY } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";

const SERVICE_OPTIONS = [
  "Offset Printing", "Digital Printing", "Large Format Printing",
  "Corporate Gifts & Branded Merchandise", "Uniforms & Workwear",
  "Rubber Stamps", "Signage & Advertising", "Multiple Services",
];

const TIMELINE_OPTIONS = [
  "Standard (5–7 working days)", "Rush (2–3 working days)",
  "Next day", "I need advice on timing",
];

export default function GetAQuotePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", quantity: "", timeline: "", description: "" });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  const inputClass = "w-full border border-border bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-steel/40 focus:outline-none focus:border-navy transition-colors";
  const labelClass = "text-[10px] font-semibold uppercase tracking-[0.12em] text-steel mb-2 block";

  return (
    <>
      <section className="bg-ivory pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <FadeIn>
            <SectionLabel>Get a Quote</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              Tell us what
              <br />
              <span className="text-navy">you need.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-steel">
              Fill in the form and we&rsquo;ll return a detailed quotation within 4 business hours.
              No obligation. Prefer instant response?{" "}
              <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} className="text-charcoal underline hover:text-navy transition-colors" target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp.
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-ivory">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <FadeIn>
            {status === "sent" ? (
              <div className="py-12 flex flex-col gap-5">
                <div className="w-14 h-14 bg-green/10 rounded-full flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 11l4 4 8-8" stroke="#1B5E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-display font-bold text-2xl text-charcoal">Quote request received.</h2>
                <p className="text-steel body-large max-w-md">Our production team will review your brief and return a detailed quotation within 4 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Name *</label><input type="text" required value={form.name} onChange={update("name")} className={inputClass} placeholder="Full name" /></div>
                  <div><label className={labelClass}>Company</label><input type="text" value={form.company} onChange={update("company")} className={inputClass} placeholder="Company name" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className={labelClass}>Email *</label><input type="email" required value={form.email} onChange={update("email")} className={inputClass} placeholder="you@company.com" /></div>
                  <div><label className={labelClass}>Phone / WhatsApp</label><input type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+971 XX XXX XXXX" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Service Required *</label>
                    <select required value={form.service} onChange={update("service")} className={inputClass}>
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div><label className={labelClass}>Quantity / Size</label><input type="text" value={form.quantity} onChange={update("quantity")} className={inputClass} placeholder="e.g. 500 brochures, 3 banners" /></div>
                </div>
                <div>
                  <label className={labelClass}>Timeline</label>
                  <select value={form.timeline} onChange={update("timeline")} className={inputClass}>
                    <option value="">Select timeline…</option>
                    {TIMELINE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Project Description *</label>
                  <textarea required rows={6} value={form.description} onChange={update("description")} className={`${inputClass} resize-none`} placeholder="Describe your project — format, size, colours, materials, finishing, and any specific requirements. More detail = more accurate quote." />
                </div>
                <div>
                  <button type="submit" disabled={status === "sending"} className="flex items-center gap-2 px-7 py-3.5 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors disabled:opacity-60">
                    {status === "sending" ? "Submitting…" : "Submit Quote Request →"}
                  </button>
                  <p className="mt-3 text-[11px] text-steel">Response within 4 business hours. No obligation.</p>
                </div>
              </form>
            )}
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.15} className="flex flex-col gap-5">
            <div className="bg-navy p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-ivory/20">
                  <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-display font-bold text-ivory text-sm">AL HILAL</p>
                  <p className="text-[9px] text-ivory/30 uppercase tracking-[0.12em]">Est. 1999 · Sharjah</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "25+ years of production experience",
                  "ISO-calibrated colour management",
                  "In-house finishing & fabrication",
                  "UAE-wide delivery and installation",
                  "Dedicated account manager",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[12px] text-ivory/50">
                    <span className="mt-1 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 border border-border">
              <p className="label text-steel mb-3">Prefer to call?</p>
              <a href={`tel:${COMPANY.phone}`} className="font-display font-bold text-xl text-charcoal hover:text-navy transition-colors">{COMPANY.phone}</a>
            </div>

            <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 px-5 py-4 bg-[#25D366] text-white group hover:bg-[#1DAA53] transition-colors">
              <div>
                <p className="font-semibold text-sm">WhatsApp Us</p>
                <p className="text-[11px] text-white/70 mt-0.5">{COMPANY.whatsapp}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/></svg>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

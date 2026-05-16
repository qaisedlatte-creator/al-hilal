"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";

const SERVICE_OPTIONS = [
  "Offset Printing",
  "Digital Printing",
  "Large Format Printing",
  "Corporate Gifts & Branded Merchandise",
  "Uniforms & Workwear",
  "Rubber Stamps",
  "Signage & Advertising",
  "Multiple Services",
];

const TIMELINE_OPTIONS = [
  "Standard (5–7 working days)",
  "Rush (2–3 working days)",
  "Next day",
  "I need advice on timing",
];

export default function GetAQuotePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    quantity: "",
    timeline: "",
    description: "",
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputClass =
    "border border-border px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-green transition-colors w-full";
  const labelClass = "text-xs font-medium uppercase tracking-[0.1em] text-muted mb-2 block";

  return (
    <>
      <section className="bg-paper pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Get a Quote</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              Tell us what
              <br />
              you need.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-6 max-w-xl">
            <p className="body-large text-muted">
              Fill in the form below and we&rsquo;ll return a detailed quotation within 4 business hours.
              Prefer to speak directly?{" "}
              <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} className="text-ink underline hover:text-green transition-colors" target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp.
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-paper">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-start">
          {/* Form */}
          <FadeIn>
            {status === "sent" ? (
              <div className="py-16 flex flex-col gap-6 items-start">
                <div className="w-14 h-14 bg-green/10 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="#1E3A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-display font-bold text-3xl text-ink">Quote request received.</h2>
                <p className="text-muted body-large max-w-md">
                  Thank you for your enquiry. Our production team will review your brief and return a detailed quotation within 4 business hours.
                </p>
                <p className="text-muted text-sm">
                  Need to speak to someone now? Call us on{" "}
                  <a href={`tel:${COMPANY.phone}`} className="text-ink underline">{COMPANY.phone}</a>
                  {" "}or{" "}
                  <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} className="text-ink underline" target="_blank" rel="noopener noreferrer">
                    WhatsApp us.
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input type="text" required value={form.name} onChange={update("name")} className={inputClass} placeholder="Full name" />
                  </div>
                  <div>
                    <label className={labelClass}>Company</label>
                    <input type="text" value={form.company} onChange={update("company")} className={inputClass} placeholder="Company name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input type="email" required value={form.email} onChange={update("email")} className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone / WhatsApp</label>
                    <input type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+971 XX XXX XXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Service Required *</label>
                    <select required value={form.service} onChange={update("service")} className={inputClass}>
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Approximate Quantity</label>
                    <input type="text" value={form.quantity} onChange={update("quantity")} className={inputClass} placeholder="e.g. 500 brochures, 3 banners" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Required Timeline</label>
                  <select value={form.timeline} onChange={update("timeline")} className={inputClass}>
                    <option value="">Select timeline…</option>
                    {TIMELINE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Project Description *</label>
                  <textarea
                    required
                    rows={7}
                    value={form.description}
                    onChange={update("description")}
                    className={`${inputClass} resize-none`}
                    placeholder="Please describe your project in detail — format, size, colours, materials, finishing, and any specific requirements. The more detail you provide, the more accurate your quotation will be."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center gap-2 px-8 py-4 bg-green text-paper text-sm font-medium tracking-wide hover:bg-green-hover transition-colors disabled:opacity-60"
                  >
                    {status === "sending" ? "Submitting…" : "Submit Quote Request"}
                    {status !== "sending" && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                  <p className="mt-3 text-xs text-muted">
                    Response within 4 business hours. No obligation.
                  </p>
                </div>
              </form>
            )}
          </FadeIn>

          {/* Sidebar — trust signals */}
          <FadeIn delay={0.15} className="flex flex-col gap-6 lg:pt-2">
            <div className="border-t-2 border-green pt-6">
              <h3 className="font-display font-bold text-lg text-ink mb-2">Why Al Hilal?</h3>
              <ul className="flex flex-col gap-3 mt-4">
                {[
                  "25+ years of production experience",
                  "ISO-calibrated colour management",
                  "In-house finishing and fabrication",
                  "UAE-wide delivery and installation",
                  "Dedicated account manager on every project",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted mb-3">Prefer to call?</p>
              <a href={`tel:${COMPANY.phone}`} className="font-display font-bold text-xl text-ink hover:text-green transition-colors block">
                {COMPANY.phone}
              </a>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted mb-3">WhatsApp</p>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm font-medium text-ink hover:border-green hover:text-green transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor" className="text-[#25D366]">
                  <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0zm0 16.5a7.5 7.5 0 0 1-3.9-1.1l-.27-.165-2.82.735.75-2.745-.18-.285A7.5 7.5 0 1 1 9 16.5z"/>
                </svg>
                Message us on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

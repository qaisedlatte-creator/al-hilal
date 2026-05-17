"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  const inputClass = "w-full border border-border bg-paper px-4 py-3 text-sm text-charcoal placeholder:text-steel/40 focus:outline-none focus:border-navy transition-colors";

  return (
    <>
      <section className="bg-ivory pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <FadeIn>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              Let&rsquo;s talk about
              <br />
              <span className="text-navy">your project.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-steel">
              Tell us what you need. Most quotations returned within 4 business hours.
              Prefer instant response? WhatsApp us directly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-ivory">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <FadeIn>
            <div className="flex flex-col gap-8">
              {[
                { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { label: "WhatsApp", value: COMPANY.whatsapp, href: `https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}` },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-gold pl-5">
                  <p className="label text-steel mb-1">{item.label}</p>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-display font-bold text-xl text-charcoal hover:text-navy transition-colors">
                    {item.value}
                  </a>
                </div>
              ))}
              <div className="border-l-2 border-border pl-5">
                <p className="label text-steel mb-1">Location</p>
                <address className="not-italic font-medium text-charcoal">{COMPANY.address}</address>
              </div>
              <div className="border-l-2 border-border pl-5">
                <p className="label text-steel mb-2">Hours</p>
                <p className="text-charcoal text-sm font-medium">Mon – Sat: 8:00am – 6:00pm</p>
                <p className="text-steel text-xs mt-1">Friday: 9:00am – 1:00pm, 3:00pm – 6:00pm</p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            {status === "sent" ? (
              <div className="flex flex-col gap-5 py-10">
                <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#1B5E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-display font-bold text-2xl text-charcoal">Message received.</h2>
                <p className="text-steel body-md">Our team will respond within 4 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="label text-steel">Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className={inputClass} placeholder="Full name" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="label text-steel">Company</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} className={inputClass} placeholder="Company name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="label text-steel">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="label text-steel">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className={inputClass} placeholder="+971 XX XXX XXXX" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="label text-steel">Message *</label>
                  <textarea required rows={6} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className={`${inputClass} resize-none`} placeholder="Tell us about your project — service needed, quantities, timeline, and any specifics." />
                </div>
                <button type="submit" disabled={status === "sending"} className="self-start flex items-center gap-2 px-7 py-3.5 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  const inputClass = "w-full border border-border bg-paper px-4 py-3 text-sm text-charcoal placeholder:text-steel/40 focus:outline-none focus:border-navy transition-colors";

  return (
    <>
      <section className="bg-ivory pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Contact Us</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              Let&rsquo;s talk.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 bg-ivory">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Info */}
          <FadeIn>
            <div className="flex flex-col gap-8">
              {/* Phone 1 */}
              <div className="border-l-2 border-gold pl-5">
                <p className="label text-steel mb-1.5">Phone</p>
                <a href={`tel:${COMPANY.phone}`} className="font-display font-bold text-2xl text-charcoal hover:text-navy transition-colors block">
                  {COMPANY.phone}
                </a>
              </div>

              {/* Phone 2 / WhatsApp */}
              <div className="border-l-2 border-[#25D366] pl-5">
                <p className="label text-steel mb-1.5">WhatsApp</p>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-2xl text-charcoal hover:text-[#25D366] transition-colors block"
                >
                  {COMPANY.whatsapp}
                </a>
              </div>

              {/* Email */}
              <div className="border-l-2 border-border pl-5">
                <p className="label text-steel mb-1.5">Email</p>
                <a href={`mailto:${COMPANY.email}`} className="font-display font-bold text-xl text-charcoal hover:text-navy transition-colors">
                  {COMPANY.email}
                </a>
              </div>

              {/* Address */}
              <div className="border-l-2 border-border pl-5">
                <p className="label text-steel mb-1.5">Location</p>
                <address className="not-italic">
                  <p className="font-semibold text-charcoal text-base">AL HILAL Print Press</p>
                  <p className="text-steel text-sm mt-1">Offset, Digital &amp; Advertising Services (STAMPS)</p>
                  <p className="text-steel text-sm mt-1">Al Arouba St - Al Ghuwair</p>
                  <p className="text-steel text-sm">Hay Al Gharb - Sharjah, UAE</p>
                </address>
              </div>

              {/* Social */}
              <div className="border-l-2 border-border pl-5">
                <p className="label text-steel mb-3">Follow Us</p>
                <div className="flex flex-col gap-2">
                  <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-steel hover:text-charcoal transition-colors flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                    @alhilalprinting_
                  </a>
                  <a href={COMPANY.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-steel hover:text-charcoal transition-colors flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.8 8a2.75 2.75 0 0 0-1.936-1.948C18.2 5.6 12 5.6 12 5.6s-6.2 0-7.864.452A2.75 2.75 0 0 0 2.2 8 28.8 28.8 0 0 0 1.75 12a28.8 28.8 0 0 0 .45 4 2.75 2.75 0 0 0 1.936 1.948C5.8 18.4 12 18.4 12 18.4s6.2 0 7.864-.452A2.75 2.75 0 0 0 21.8 16a28.8 28.8 0 0 0 .45-4 28.8 28.8 0 0 0-.45-4zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
                    @ALHILALPrintingadvertising
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-sm overflow-hidden border border-border">
                <iframe
                  src={COMPANY.mapsEmbed}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Hilal Print Press location"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn delay={0.1}>
            <div className="bg-paper border border-border p-7">
              <h2 className="font-display font-bold text-xl text-charcoal mb-6">Send us a message</h2>

              {status === "sent" ? (
                <div className="flex flex-col gap-4 py-8">
                  <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="#1B5E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl text-charcoal">Message sent.</h3>
                  <p className="text-steel body-md">We&rsquo;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="label text-steel">Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className={inputClass} placeholder="Your name" />
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
                    <label className="label text-steel">Service Needed</label>
                    <select value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} className={inputClass}>
                      <option value="">Select…</option>
                      <option>Offset Printing</option>
                      <option>Digital Printing</option>
                      <option>Corporate Gifts</option>
                      <option>Rubber Stamps</option>
                      <option>Signage & Advertising</option>
                      <option>Multiple / Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="label text-steel">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className={`${inputClass} resize-none`} placeholder="Tell us about your project…" />
                  </div>
                  <button type="submit" disabled={status === "sending"} className="self-start flex items-center gap-2 px-7 py-3.5 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors disabled:opacity-60">
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

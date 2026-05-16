"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <>
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Get In Touch</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              Let&rsquo;s talk about
              <br />
              your project.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-paper">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact info */}
          <FadeIn>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-3">Email</p>
                <a href={`mailto:${COMPANY.email}`} className="font-display font-bold text-2xl text-ink hover:text-green transition-colors">
                  {COMPANY.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-3">Phone</p>
                <a href={`tel:${COMPANY.phone}`} className="font-display font-bold text-2xl text-ink hover:text-green transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-3">WhatsApp</p>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-2xl text-ink hover:text-green transition-colors"
                >
                  {COMPANY.whatsapp}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-3">Location</p>
                <address className="not-italic font-medium text-ink">
                  {COMPANY.address}
                </address>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-3">Hours</p>
                <p className="text-ink font-medium">
                  Monday – Saturday: 8:00am – 6:00pm
                  <br />
                  <span className="text-muted text-sm">Friday: 9:00am – 1:00pm, 3:00pm – 6:00pm</span>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            {status === "sent" ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#1E3A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-display font-bold text-2xl text-ink">Message received.</h2>
                <p className="text-muted body-md">
                  Thank you for reaching out. Our team will respond within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="border border-border px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-green transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="border border-border px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-green transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="border border-border px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-green transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="border border-border px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-green transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium uppercase tracking-[0.1em] text-muted">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="border border-border px-4 py-3 text-sm text-ink bg-paper focus:outline-none focus:border-green transition-colors resize-none"
                    placeholder="Tell us about your project — what you need, quantities, timeline, and any other details."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="self-start flex items-center gap-2 px-8 py-4 bg-green text-paper text-sm font-medium tracking-wide hover:bg-green-hover transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  {status !== "sending" && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}

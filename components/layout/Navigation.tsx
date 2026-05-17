"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/site";

const SERVICES = [
  { href: "/services/offset-printing", label: "Offset Printing", desc: "Brochures, cards, flyers & more" },
  { href: "/services/digital-printing", label: "Digital Printing", desc: "Stickers, banners, roll-ups & more" },
  { href: "/services/large-format-printing", label: "Large Format", desc: "Hoardings, billboards, signage" },
  { href: "/services/corporate-gifts", label: "Corporate Gifts", desc: "Sublimation, engraving & gift sets" },
  { href: "/services/rubber-stamps", label: "Rubber Stamps", desc: "Self-inking, pre-inked, custom" },
  { href: "/services/signage-advertising", label: "Signage & Advertising", desc: "Indoor & outdoor advertising" },
];

const NAV_LINKS = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ivory/98 backdrop-blur-md shadow-sm border-b border-border" : "bg-ivory border-b border-border/60"
        }`}
      >
        <div className="site-shell flex items-center justify-between" style={{ height: "72px" }}>

          {/* Logo — bigger, more premium */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-navy/10 shadow-sm">
              <Image src="/logo.jpg" alt="Al Hilal Printing & Advertising" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-navy tracking-tight" style={{ fontSize: "17px", letterSpacing: "-0.02em" }}>
                AL HILAL
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.16em] text-steel mt-0.5">
                Print &amp; Branding
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium transition-colors rounded-sm ${pathname.startsWith("/services") ? "text-navy" : "text-charcoal hover:text-navy"}`}>
                Services
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""} text-steel`}>
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-ivory border border-border shadow-card-hover overflow-hidden"
                  >
                    {SERVICES.map((s) => (
                      <Link key={s.href} href={s.href} className="flex flex-col px-4 py-3 hover:bg-surface transition-colors border-b border-border/40 last:border-0">
                        <span className="text-[13px] font-semibold text-charcoal">{s.label}</span>
                        <span className="text-[11px] text-steel mt-0.5">{s.desc}</span>
                      </Link>
                    ))}
                    <Link href="/services" className="flex items-center gap-1.5 px-4 py-3 bg-navy text-ivory text-[12px] font-semibold uppercase tracking-wider hover:bg-navy-mid transition-colors">
                      All Services →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 text-[13px] font-medium rounded-sm transition-colors ${
                  pathname === link.href ? "text-navy" : "text-charcoal hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-medium text-steel hover:text-navy transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor" className="text-[#25D366]">
                <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/get-a-quote"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-navy text-ivory text-[13px] font-semibold hover:bg-navy-mid transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-[5px] p-2 text-charcoal"
            aria-label="Open menu"
          >
            <span className="block w-[22px] h-[1.5px] bg-current" />
            <span className="block w-[15px] h-[1.5px] bg-current" />
            <span className="block w-[22px] h-[1.5px] bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-navy flex flex-col"
          >
            <div className="flex items-center justify-between px-5 border-b border-ivory/10" style={{ height: "72px" }}>
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-ivory/20">
                  <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" />
                </div>
                <span className="font-display font-bold text-ivory text-base tracking-tight">AL HILAL</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-ivory/60 hover:text-ivory p-2" aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-0.5">
              <p className="text-[9px] uppercase tracking-[0.16em] text-ivory/30 font-semibold mb-3">Services</p>
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="py-3.5 text-ivory/80 hover:text-ivory text-[15px] font-medium border-b border-ivory/8 last:border-0 transition-colors flex items-center justify-between">
                  {s.label}
                  <span className="text-ivory/20 text-xs">→</span>
                </Link>
              ))}
              <div className="mt-6 pt-5 border-t border-ivory/10 flex flex-col gap-0.5">
                {[{ href: "/services", label: "All Services" }, { href: "/gallery", label: "Gallery" }, { href: "/about", label: "About" }, { href: "/blog", label: "Blog" }, { href: "/faq", label: "FAQ" }, { href: "/contact", label: "Contact" }].map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-3 text-ivory text-xl font-display font-bold hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="px-5 py-5 border-t border-ivory/10 flex flex-col gap-3">
              <Link href="/get-a-quote" onClick={() => setMobileOpen(false)} className="w-full bg-gold text-navy text-center py-4 font-bold text-sm tracking-wide">
                Get a Free Quote
              </Link>
              <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white text-center py-4 text-sm font-semibold flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/></svg>
                WhatsApp Us
              </a>
              <div className="flex items-center justify-center gap-4 pt-1">
                <a href={`tel:${COMPANY.phone}`} className="text-xs text-ivory/40 hover:text-ivory transition-colors">{COMPANY.phone}</a>
                <span className="w-px h-3 bg-ivory/10" />
                <a href={`mailto:${COMPANY.email}`} className="text-xs text-ivory/40 hover:text-ivory transition-colors">{COMPANY.email}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const SITE_URL = "https://www.alhilalprint.com";

export const COMPANY = {
  name: "Al Hilal Printing & Advertising",
  shortName: "Al Hilal",
  tagline: "Print & Branding",
  email: "alhilalsales@gmail.com",
  phone: "+971 50 9454953",
  whatsapp: "+971 50 6790859",
  address: "Al Arouba St - Al Ghuwair - Hay Al Gharb, Sharjah, UAE",
  addressFull: "AL HILAL Print Press, Offset, Digital & Advertising Services (STAMPS)\nAl Arouba St - Al Ghuwair - Hay Al Gharb - Sharjah - United Arab Emirates",
  established: "1993",
  yearsLabel: "Est. 1993",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.4642201522634!2d55.3885145!3d25.355753800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5a33d0404dd1%3A0xdbb0a605822839c1!2sAL%20HILAL%20Stamps%2C%20Offset%2C%20Digital%20%26%20Advertising%20Services.!5e0!3m2!1sen!2sin!4v1740418231042!5m2!1sen!2sin",
  instagram: "https://www.instagram.com/alhilalprinting_",
  youtube: "https://www.youtube.com/@ALHILALPrintingadvertising",
};

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Brief",
    description:
      "We define scope, quantities, substrates, brand requirements, and delivery expectations before production begins.",
    timeline: "Day 1",
  },
  {
    number: "02",
    title: "Pre-press",
    description:
      "Artwork is checked for colour profiles, bleed, resolution, and substrate suitability before any press run.",
    timeline: "Day 1–2",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Press, finishing, lamination, cutting, binding — managed in-house with quality checks at each stage.",
    timeline: "Day 2–5",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Completed work is quality-checked, packed, and dispatched or installed to schedule.",
    timeline: "Day 3–6",
  },
] as const;

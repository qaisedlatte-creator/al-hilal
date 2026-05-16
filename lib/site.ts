export const SITE_URL = "https://www.alhilalprint.com";

export const COMPANY = {
  name: "Al Hilal Print & Advertising",
  shortName: "Al Hilal",
  email: "info@alhilalprint.com",
  phone: "+971 6 123 4567",
  whatsapp: "+971 50 123 4567",
  address: "Industrial Area 1, Sharjah, UAE",
  established: "1999",
  years: "25+",
};

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Brief",
    description:
      "We define objectives, audiences, quantities, substrates, brand constraints, and delivery expectations before a single sheet is produced.",
    timeline: "Day 1",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Artwork is refined for legibility, hierarchy, production efficiency, and brand consistency across every format in scope.",
    timeline: "Day 1-2",
  },
  {
    number: "03",
    title: "Pre-press",
    description:
      "Files are checked for color profile accuracy, bleed, trapping, finishing tolerances, and substrate suitability.",
    timeline: "Day 2",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Our team selects the right press, quantity strategy, and material combination to balance speed, consistency, and cost.",
    timeline: "Day 2-4",
  },
  {
    number: "05",
    title: "Finishing",
    description:
      "Lamination, folding, binding, die-cutting, mounting, stitching, or packaging are executed to presentation standards.",
    timeline: "Day 3-5",
  },
  {
    number: "06",
    title: "Delivery",
    description:
      "Completed items are quality checked, packed, and dispatched for installation, event load-in, branch delivery, or client pickup.",
    timeline: "Day 4-6",
  },
] as const;

export const HOME_STATS = [
  { value: "25+", label: "Years in print" },
  { value: "1000+", label: "Clients served" },
  { value: "7", label: "Core services" },
  { value: "UAE", label: "Delivery footprint" },
] as const;

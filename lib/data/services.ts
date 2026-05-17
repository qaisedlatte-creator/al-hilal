export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  items: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "offset-printing",
    title: "Offset Printing",
    shortTitle: "Offset",
    tagline: "High-volume, precision colour printing",
    description:
      "Professional offset printing for all your business stationery and marketing materials — delivering consistent colour quality at volume.",
    items: ["Brochures", "Business Cards", "Flyers", "Letter Heads", "Calendars", "Catalogues", "Booklets"],
    image: "/images/services/offset-printing.jpg",
    metaTitle: "Offset Printing Services Sharjah UAE | Al Hilal",
    metaDescription: "Professional offset printing for brochures, business cards, flyers, letterheads, calendars, catalogues and booklets. Sharjah, UAE.",
  },
  {
    slug: "digital-printing",
    title: "Digital Printing",
    shortTitle: "Digital",
    tagline: "On-demand print for signage, displays & more",
    description:
      "Fast-turnaround digital printing for promotional materials, displays, stickers, and indoor/outdoor signage.",
    items: ["Stickers", "Roll-Ups", "Pop-Ups", "Banners", "Acrylic Signs", "Sign Boards", "Window Films"],
    image: "/images/services/digital-printing.jpg",
    metaTitle: "Digital Printing Services Sharjah UAE | Al Hilal",
    metaDescription: "Digital printing for stickers, roll-ups, pop-ups, banners, acrylic signs, sign boards and window films. Fast turnaround, Sharjah UAE.",
  },
  {
    slug: "large-format-printing",
    title: "Large Format Printing",
    shortTitle: "Large Format",
    tagline: "Wide-format outdoor & indoor print production",
    description:
      "Large format printing for hoardings, outdoor banners, building graphics, exhibition stands, and large-scale signage across UAE.",
    items: ["Outdoor Hoardings", "Building Wraps", "Flex Banners", "Exhibition Stands", "Backlit Displays", "Vinyl Graphics", "Canvas Prints"],
    image: "/images/services/large-format.jpg",
    metaTitle: "Large Format Printing UAE | Hoardings & Banners | Al Hilal",
    metaDescription: "Large format printing for outdoor hoardings, flex banners, exhibition stands and building graphics across UAE. Sharjah based.",
  },
  {
    slug: "corporate-gifts",
    title: "Corporate Gifts",
    shortTitle: "Gifts",
    tagline: "Branded merchandise & promotional products",
    description:
      "Custom-branded corporate gifts and promotional merchandise for businesses, events, and recognition programmes.",
    items: ["Sublimation Printing", "T-Shirt Printing", "Epoxy Coating", "Canvas Bags", "Cups & Pens", "Etching & Engraving", "Momentous", "Custom Gift Sets", "Uniform Set Printing"],
    image: "/images/services/corporate-gifts.jpg",
    metaTitle: "Corporate Gifts & Branded Merchandise UAE | Al Hilal",
    metaDescription: "Corporate gifts, sublimation printing, t-shirt printing, engraving, canvas bags, custom gift sets. Sharjah, UAE.",
  },
  {
    slug: "rubber-stamps",
    title: "Rubber Stamps",
    shortTitle: "Stamps",
    tagline: "Official stamps for business & documentation",
    description:
      "Self-inking, pre-inked, and traditional rubber stamps for offices, businesses, legal, and government use across the UAE.",
    items: ["Self-Inking Stamps", "Pre-Inked Stamps", "Traditional Stamps", "Date Stamps", "Address Stamps", "Company Stamps", "Flash Stamps"],
    image: "/images/services/rubber-stamps.jpg",
    metaTitle: "Rubber Stamps UAE | Self-Inking & Custom Stamps | Al Hilal",
    metaDescription: "Custom rubber stamps in UAE. Self-inking, pre-inked, date stamps, company stamps. Same-day production. Sharjah based.",
  },
  {
    slug: "signage-advertising",
    title: "Signage & Advertising",
    shortTitle: "Signage",
    tagline: "Outdoor & indoor advertising production",
    description:
      "Large-format outdoor signage, indoor displays, vehicle graphics, and advertising material production for businesses across UAE.",
    items: ["Outdoor Hoardings", "Indoor Signage", "LED & Backlit Displays", "Vehicle Wraps", "Exhibition Stands", "Wayfinding Systems", "Construction Boards"],
    image: "/images/services/signage.jpg",
    metaTitle: "Signage & Advertising Production UAE | Al Hilal",
    metaDescription: "Signage and advertising production for outdoor, indoor, vehicle wraps and exhibitions across UAE. Sharjah based.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}

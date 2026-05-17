export interface CaseStudy {
  client: string;
  logo: string | null;
  category: string;
  produced: string[];
  description: string;
  bgColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    client: "Ramada",
    logo: "/images/clients/ramada.jpg",
    category: "Hospitality",
    produced: ["Stationery", "Menu Printing", "Promotional Materials"],
    description:
      "Printed stationery, menus, and promotional collateral for hotel operations and guest communications.",
    bgColor: "#0D2137",
  },
  {
    client: "Pearl Imperial",
    logo: "/images/clients/pearl-imperial.jpg",
    category: "Hospitality",
    produced: ["Branded Materials", "Signage", "Corporate Printing"],
    description:
      "Full branded print package including reception signage, corporate stationery, and marketing materials.",
    bgColor: "#1A2F1A",
  },
  {
    client: "Drip Burgers",
    logo: "/images/clients/drip-burgers.jpg",
    category: "Food & Beverage",
    produced: ["Menu Printing", "Packaging", "Stickers", "Branding"],
    description:
      "Brand collateral including menus, packaging stickers, signage, and branded merchandise for restaurant locations.",
    bgColor: "#2A1A0A",
  },
  {
    client: "AASA Group",
    logo: "/images/clients/aasa-group.jpg",
    category: "Corporate",
    produced: ["Office Stationery", "Rubber Stamps", "Brochures", "Business Cards"],
    description:
      "Corporate print essentials including full stationery suite, rubber stamps, brochures, and business card printing.",
    bgColor: "#1A1A2E",
  },
  {
    client: "Avenue",
    logo: "/images/clients/avenue.jpg",
    category: "Retail & Events",
    produced: ["Banners", "Roll-Ups", "Event Signage", "Promotional Print"],
    description:
      "Event and promotional print production including banners, roll-up stands, and visual display materials.",
    bgColor: "#2A1A2E",
  },
  {
    client: "Legend",
    logo: "/images/clients/legend.jpg",
    category: "Corporate",
    produced: ["Corporate Gifts", "T-Shirt Printing", "Branded Merchandise"],
    description:
      "Custom branded merchandise including t-shirt printing, corporate gift sets, and promotional merchandise programmes.",
    bgColor: "#0D2137",
  },
];

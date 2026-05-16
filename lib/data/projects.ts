export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "offset" | "digital" | "large-format" | "gifts" | "signage" | "uniforms";
  categoryLabel: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  year: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "radisson-blu-sharjah-brand-collateral",
    title: "Brand Collateral Suite",
    client: "Radisson Blu Sharjah",
    category: "offset",
    categoryLabel: "Offset Printing",
    description:
      "Complete guest-facing brand collateral for a 380-room hotel property — from arrival welcome cards to in-room directories, restaurant menus, and conference materials.",
    challenge:
      "The property needed a full refresh of all guest-facing printed materials ahead of a regional relaunch, with consistent brand execution across 14 distinct print formats — all within a six-week window.",
    solution:
      "We managed a phased production schedule using our offset press for high-volume items and digital production for personalised and variable data pieces. Pantone colour matching ensured absolute consistency across all materials, despite different paper weights and finishes.",
    result:
      "All 14 print formats delivered and installed before the launch date. Zero colour variance complaints. The hotel's brand manager described the consistency as 'exactly what we needed to make the relaunch feel seamless.'",
    tags: ["Offset", "Brand Collateral", "Hospitality", "Multi-format"],
    year: "2024",
    featured: true,
  },
  {
    slug: "emaar-commercial-exhibition-stand",
    title: "Citywide Exhibition Campaign",
    client: "Emaar Commercial",
    category: "large-format",
    categoryLabel: "Large Format Printing",
    description:
      "Full exhibition graphics package for a major property launch — spanning a 600sqm show pavilion, 40 outdoor hoardings, and a complete wayfinding system across four UAE locations.",
    challenge:
      "High-resolution graphics at scale, with critical colour matching to the developer's premium brand standards, and a simultaneous installation across multiple locations in a 72-hour window.",
    solution:
      "Our large format team produced all materials on UV flatbed and roll-to-roll presses using fade-resistant inks rated for 5 years outdoor exposure. Installation teams deployed simultaneously at all four locations.",
    result:
      "Campaign launched on schedule across all locations. Outdoor hoardings generated significant earned media pickup. The property launch was oversubscribed within 48 hours of opening.",
    tags: ["Large Format", "Outdoor", "Exhibition", "Real Estate"],
    year: "2024",
    featured: true,
  },
  {
    slug: "spinneys-ramadan-gifting-programme",
    title: "Ramadan Gifting Programme",
    client: "Spinneys UAE",
    category: "gifts",
    categoryLabel: "Corporate Gifts",
    description:
      "A curated corporate gifting programme for 1,200 retail staff and key suppliers — premium hampers, branded packaging, and personalised cards produced for Ramadan.",
    challenge:
      "1,200 identical gift sets, each requiring personalised recipient cards, with a 10-day production and delivery window during peak Ramadan season — when supply chains across the region are compressed.",
    solution:
      "We pre-sourced all gift components three weeks in advance. Variable data digital printing produced all 1,200 unique cards in a single automated run. All packing and fulfilment was handled in-house.",
    result:
      "Full delivery completed 2 days ahead of schedule. Zero fulfilment errors. The programme has since been retained as an annual contract.",
    tags: ["Corporate Gifts", "Personalisation", "Retail", "Fulfilment"],
    year: "2023",
    featured: true,
  },
  {
    slug: "dubai-expo-event-production",
    title: "Global Event Production",
    client: "Expo Pavilion Operator",
    category: "large-format",
    categoryLabel: "Large Format & Signage",
    description:
      "Complete print and signage production for a national pavilion at a major international expo — spanning environmental graphics, directional systems, and daily-refreshed event materials.",
    challenge:
      "A dynamic event environment requiring both permanent environmental graphics and rapidly-updated daily event materials, produced to the same quality standards throughout a six-month event.",
    solution:
      "We established a dedicated production cell with allocated press time for this client's daily digital print needs, alongside the large-format permanent graphics produced in the pre-event build phase.",
    result:
      "Uninterrupted supply for six months, zero days without required materials. The pavilion was cited in multiple industry publications as one of the event's best-presented national presences.",
    tags: ["Large Format", "Events", "Signage", "Long-term Supply"],
    year: "2022",
    featured: false,
  },
  {
    slug: "al-futtaim-uniform-programme",
    title: "Group Uniform Programme",
    client: "Al-Futtaim Group",
    category: "uniforms",
    categoryLabel: "Uniforms & Workwear",
    description:
      "Annual uniform supply and refresh for a 3,000-person workforce across retail, automotive, and hospitality divisions — with consistent embroidery and print quality across all divisions.",
    challenge:
      "Three distinct business divisions, each with different uniform requirements, fabric specifications, and brand guidelines — all requiring the same standard of embroidery precision and turnaround time.",
    solution:
      "Separate brand profiles were set up for each division in our production system. All embroidery digitisation was approved once and locked, ensuring consistent stitch density and colour matching across every annual refresh.",
    result:
      "On-time delivery for all three divisions for three consecutive years. Zero embroidery quality disputes. Expanded contract to include seasonal workwear refresh for outdoor roles.",
    tags: ["Uniforms", "Embroidery", "Large Scale", "Retail"],
    year: "2023",
    featured: false,
  },
  {
    slug: "life-pharmacy-retail-signage",
    title: "Retail Signage Rollout",
    client: "Life Pharmacy",
    category: "signage",
    categoryLabel: "Signage & Advertising",
    description:
      "A complete exterior and interior signage refresh across 35 pharmacy branches across the UAE, standardising brand presentation and improving in-store navigation.",
    challenge:
      "35 branches across multiple emirates, each with different store dimensions and fitting conditions, requiring identical brand presentation — all completed without disrupting retail trading hours.",
    solution:
      "Site surveys were completed at all 35 locations before a single sign was produced. All fabrication was done centrally. Night-time installation teams worked branch-by-branch on a rolling schedule.",
    result:
      "Full network refresh completed in 8 weeks. All 35 branches signed and operational. Brand compliance improved significantly across the network according to the client's internal audit.",
    tags: ["Signage", "Retail", "Rollout", "Healthcare"],
    year: "2024",
    featured: false,
  },
  {
    slug: "gitex-tech-week-exhibitor-production",
    title: "GITEX Exhibition Package",
    client: "Regional Tech Enterprise",
    category: "large-format",
    categoryLabel: "Large Format & Offset",
    description:
      "Complete exhibition production package for a 200sqm GITEX stand — environmental graphics, printed collateral, and branded gift sets for 2,000 visitors.",
    challenge:
      "A 72-hour build window, complex graphics requiring pixel-perfect brand execution at scale, and 2,000 high-quality visitor packs needed simultaneously.",
    solution:
      "Large format graphics, printed collateral, and corporate gifts were produced in parallel production streams. A dedicated account manager coordinated across all three streams with a shared deadline.",
    result:
      "Stand completed within build window. All 2,000 visitor packs delivered on day one. The client reported highest-ever lead volume from the event.",
    tags: ["Large Format", "Offset", "Corporate Gifts", "Events"],
    year: "2024",
    featured: false,
  },
  {
    slug: "hilton-hotel-menu-relaunch",
    title: "F&B Menu Relaunch",
    client: "Hilton Hotels & Resorts UAE",
    category: "offset",
    categoryLabel: "Offset Printing",
    description:
      "Menu redesign and production for 6 restaurant and bar concepts within a flagship UAE property — 8 menu formats, premium materials, and seasonal update programme.",
    challenge:
      "Eight distinct menu formats across six F&B concepts, each with different dimensions, materials, and finishing requirements — including leather-bound, linen-wrapped, and wiro-bound formats.",
    solution:
      "Our finishing team managed all eight formats simultaneously under a coordinated schedule. Premium substrates were pre-sourced and a seasonal reprinting programme was set up to accommodate menu changes without full reprints.",
    result:
      "All menus approved and installed before restaurant re-opening. The property's F&B director described them as 'setting a new benchmark for the hotel group's printed materials.'",
    tags: ["Offset", "Hospitality", "Premium Finishing", "Menus"],
    year: "2023",
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return category === "all"
    ? projects
    : projects.filter((p) => p.category === category);
}

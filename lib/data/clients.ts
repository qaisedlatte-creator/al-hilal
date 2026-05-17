export interface Client {
  name: string;
  logo: string | null;
  category: string;
}

export const clients: Client[] = [
  { name: "Pullman", logo: null, category: "Hospitality" },
  { name: "Ramada", logo: "/images/clients/ramada.jpg", category: "Hospitality" },
  { name: "Pearl Imperial", logo: "/images/clients/pearl-imperial.jpg", category: "Hospitality" },
  { name: "AASA Group", logo: "/images/clients/aasa-group.jpg", category: "Corporate" },
  { name: "Drip Burgers", logo: "/images/clients/drip-burgers.jpg", category: "F&B" },
  { name: "Avenue", logo: "/images/clients/avenue.jpg", category: "Retail" },
  { name: "IRC", logo: "/images/clients/irc.jpg", category: "Corporate" },
  { name: "Ruqaya", logo: "/images/clients/ruqaya.jpg", category: "Corporate" },
  { name: "Legend", logo: "/images/clients/legend.jpg", category: "Corporate" },
  { name: "Sported", logo: null, category: "Sports" },
  { name: "UQC International", logo: null, category: "Corporate" },
];

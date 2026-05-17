import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D2137",
        "navy-mid": "#1A3A5C",
        "navy-light": "#E8EEF6",
        ivory: "#F5F2EB",
        paper: "#FDFCF9",
        surface: "#EDE9E0",
        charcoal: "#1C1C2E",
        steel: "#64748B",
        gold: "#C8902E",
        "gold-light": "#F5E6C8",
        border: "#DDD9CE",
        ink: "#0D2137",
        muted: "#64748B",
        green: "#1B5E3B",
        "green-hover": "#245246",
        cream: "#F0EBE0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 32px rgba(13, 33, 55, 0.10)",
        "card-hover": "0 16px 48px rgba(13, 33, 55, 0.16)",
      },
      maxWidth: {
        site: "1280px",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee2": "marquee2 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
} satisfies Config;

export default config;

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
        ink: "#0C0C0C",
        paper: "#FAFAF8",
        surface: "#F0EDE8",
        border: "#E2DFD9",
        muted: "#737373",
        green: "#1E3A2A",
        "green-hover": "#295039",
        cream: "#F6F1E8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 60px rgba(12, 12, 12, 0.08)",
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
} satisfies Config;

export default config;

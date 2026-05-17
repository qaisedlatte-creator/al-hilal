"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/site";

const STATS = [
  { value: `Est. ${COMPANY.established}`, label: "Sharjah, UAE" },
  { value: "5", label: "Service lines" },
  { value: "UAE", label: "Delivery coverage" },
  { value: "24h", label: "Stamp turnaround" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy py-12 overflow-hidden">
      <div className="site-shell">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-ivory/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-1 md:px-8 first:pl-0 last:pr-0"
            >
              <span className="font-display font-bold text-ivory leading-none" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}>
                {stat.value}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-ivory/30">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

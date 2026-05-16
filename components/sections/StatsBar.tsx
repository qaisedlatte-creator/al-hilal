"use client";

import { motion } from "framer-motion";
import { HOME_STATS } from "@/lib/site";

export default function StatsBar() {
  return (
    <section className="bg-ink py-14 md:py-16 overflow-hidden">
      <div className="site-shell">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-paper/10">
          {HOME_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-1.5 md:px-10 first:pl-0 last:pr-0"
            >
              <span
                className="font-display font-bold text-paper leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </span>
              <span className="text-xs font-sans font-medium uppercase tracking-[0.12em] text-paper/40">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

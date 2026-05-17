import { type ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[10px] font-sans font-semibold uppercase tracking-[0.14em] mb-3 ${
        light ? "text-ivory/40" : "text-navy/60"
      } ${className}`}
    >
      <span className={`w-4 h-px ${light ? "bg-ivory/30" : "bg-navy/30"}`} />
      {children}
    </span>
  );
}

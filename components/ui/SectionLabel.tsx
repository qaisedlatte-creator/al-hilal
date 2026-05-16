import { type ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-sans font-semibold uppercase tracking-[0.14em] mb-4 ${
        light ? "text-paper/50" : "text-green"
      } ${className}`}
    >
      {children}
    </span>
  );
}

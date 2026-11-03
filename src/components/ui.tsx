"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, tone = "mint" }: { children: ReactNode; tone?: "mint" | "navy" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase ${
        tone === "mint"
          ? "border-mint/30 bg-mint-soft text-[#0f7a53]"
          : "border-navy/15 bg-sky-soft text-navy"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "mint" ? "bg-mint" : "bg-navy"}`} />
      {children}
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand-icon.svg" alt="" width={34} height={32} aria-hidden />
      <span className="display text-xl font-bold tracking-tight text-ink">
        Vulo<span className="text-navy">Form</span>
      </span>
    </span>
  );
}


"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GITHUB_URL } from "@/lib/site";

export default function Cta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [80, 36]);
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, 10]);

  return (
    <>
      <section ref={ref} className="px-4 pb-10 sm:px-6">
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative mx-auto max-w-6xl overflow-hidden bg-gradient-to-br from-sky-soft via-white to-mint-soft px-6 py-24 text-center ring-1 ring-line sm:py-32"
        >
          <motion.div style={{ y: y1 }} className="absolute top-10 left-[8%] hidden rotate-[-8deg] rounded-2xl bg-white px-4 py-3 text-sm font-semibold shadow-lg sm:block">
            ✉️ Confirmation sent
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute right-[8%] bottom-14 hidden rotate-[6deg] rounded-2xl bg-white px-4 py-3 text-sm font-semibold shadow-lg sm:block">
            📈 Exported to CSV
          </motion.div>
          <h2 className="mx-auto max-w-3xl text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
            Your next form is <span className="text-navy">two minutes</span> away.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink-soft">
            Install from Plugins › Add New, pick a template, hit Publish. That&apos;s the whole tutorial.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={GITHUB_URL}
              className="rounded-full bg-navy px-8 py-4 hover:bg-navy-light font-semibold text-white shadow-[0_18px_40px_-16px_rgba(0,75,242,0.7)] transition-all hover:-translate-y-0.5"
            >
              Download VuloForm — free
            </a>
            <a
              href={`${GITHUB_URL}/docs`}
              className="rounded-full border border-line bg-white px-8 py-4 font-semibold transition-colors hover:border-navy/30"
            >
              Read the docs
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-soft">WordPress 6.4+ · PHP 7.4+ · GPLv2 or later</p>
        </motion.div>
      </section>
    </>
  );
}

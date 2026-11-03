"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Eyebrow, Reveal } from "./ui";

const promises = [
  ["No account", "You never sign up with VuloLabs. Install, activate, build."],
  ["No subscription", "Free and GPL-licensed. Nothing to renew, nothing locked."],
  ["No limits", "Unlimited forms. Unlimited submissions. Forever."],
  ["No telemetry", "No connection to VuloLabs, no visitor data sent anywhere."],
];

export default function Privacy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section id="privacy" ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      {/* parallax word bands */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 -z-10 space-y-2 select-none">
        <motion.p style={{ x: x1 }} className="text-[clamp(5rem,14vw,12rem)] display leading-none font-bold whitespace-nowrap text-sky-soft">
          your data · your site · your data · your site
        </motion.p>
        <motion.p style={{ x: x2 }} className="text-[clamp(5rem,14vw,12rem)] display leading-none font-bold whitespace-nowrap text-mint-soft">
          no strings · no trackers · no strings · no trackers
        </motion.p>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Privacy & ownership</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Everything stays on <span className="text-navy">your</span> site.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            VuloForm doesn&apos;t contact any external service on its own. Data only leaves your server when you set up a
            webhook or notification.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="h-full rounded-[24px] border border-line bg-white/85 p-6 backdrop-blur">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-lg font-bold text-white">✓</span>
                <h3 className="mt-5 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            ["IP addresses off by default", "Visitor IPs aren't stored unless you switch it on."],
            ["WordPress privacy tools", "Works with Export Personal Data and Erase Personal Data."],
            ["Policy text, suggested", "Adds suggested wording to the WordPress privacy policy guide."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-[24px] bg-sky-soft/70 p-6">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{b}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

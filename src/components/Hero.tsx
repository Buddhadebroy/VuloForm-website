"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GITHUB_URL } from "@/lib/site";
import { ease } from "./ui";

const headline = ["Every", "form", "your", "website", "needs."];

function useTyping(text: string, start: number, speed = 70) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let iv: ReturnType<typeof setInterval>;
    const t = setTimeout(() => {
      iv = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
    }, start);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, [text, start, speed]);
  return out;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // scroll parallax layers
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yChipsFast = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const yChipsMid = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // pointer tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const px = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 80, damping: 20 });
  const py = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 20 });

  const name = useTyping("Ada Lovelace", 1300);
  const email = useTyping("ada@analytical.co", 2400, 55);
  const [topic, setTopic] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTopic(true), 3700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 lg:pb-36"
    >
      {/* background blobs */}
      <motion.div style={{ y: yBack }} className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="dotted absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-sky-soft blur-3xl" />
        <div className="absolute top-20 right-[-120px] h-[460px] w-[460px] rounded-full bg-mint-soft blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/3 h-[420px] w-[420px] rounded-full bg-peach-soft blur-3xl" />
      </motion.div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <motion.div style={{ y: yText, opacity: fade }}>
          <motion.a
            href="#privacy"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/70 py-1.5 pr-4 pl-1.5 text-sm text-ink-soft backdrop-blur"
          >
            <span className="rounded-full bg-mint px-2.5 py-0.5 text-xs font-bold text-white">Free</span>
            No account · No subscription · No limits
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </motion.a>

          <h1 className="mt-7 text-[clamp(2.5rem,5.6vw,4.6rem)] leading-[1.02] font-bold tracking-[-0.02em] text-ink">
            {headline.map((w, i) => (
              <span key={w + i} className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className="inline-block pr-[0.22em]"
                  initial={{ y: "110%", rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="relative inline-block text-navy"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease }}
              >
                One{" "}
                <span className="relative inline-block">
                  simple
                  <svg viewBox="0 0 300 20" className="absolute -bottom-1 left-0 h-3 w-full" preserveAspectRatio="none" aria-hidden>
                    <motion.path
                      d="M2 14 C 60 4, 140 4, 298 12"
                      fill="none"
                      stroke="#19b37b"
                      strokeWidth="6"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.2, ease }}
                    />
                  </svg>
                </span>{" "}
                builder.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            VuloForm is a drag-and-drop form builder for WordPress. Build a form, publish it, drop it on a page — and read
            what people send, all inside your own site.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={GITHUB_URL}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-7 py-4 hover:bg-navy-light font-semibold text-white shadow-[0_18px_40px_-16px_rgba(0,75,242,0.7)] transition-all hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Download VuloForm
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#builder"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-4 font-semibold text-ink transition-colors hover:border-navy/30"
            >
              See how it works
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-ink-soft"
          >
            {[
              ["21", "field types"],
              ["10", "ready-made forms"],
              ["0", "trackers or telemetry"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="display text-3xl font-bold text-ink">{n}</dt>
                <dd>{l}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* visual */}
        <div className="relative mx-auto w-full max-w-md [perspective:1200px] lg:max-w-none">
          <motion.div style={{ y: yCard }}>
            <motion.div
              initial={{ opacity: 0, y: 60, rotateX: 18 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease }}
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              className="relative rounded-[28px] border border-line bg-white p-6 shadow-[0_40px_80px_-40px_rgba(13,26,69,0.45)] sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-mint uppercase">Step 1 of 2</p>
                  <h3 className="mt-1 text-xl font-bold">Get in touch</h3>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-8 rounded-full bg-navy" />
                  <span className="h-1.5 w-8 rounded-full bg-line" />
                </div>
              </div>

              <label className="block text-sm font-medium text-ink-soft">Name</label>
              <div className="mt-1.5 mb-4 flex h-12 items-center rounded-xl border border-line bg-cream/60 px-4">
                {name}
                {name.length < 12 && <span className="caret ml-px h-5 w-0.5 bg-navy" />}
              </div>

              <label className="block text-sm font-medium text-ink-soft">Email</label>
              <div
                className={`mt-1.5 mb-4 flex h-12 items-center rounded-xl border bg-cream/60 px-4 transition-colors ${
                  email.length > 0 ? "border-navy/50 ring-4 ring-navy/10" : "border-line"
                }`}
              >
                {email}
                {email.length > 0 && email.length < 17 && <span className="caret ml-px h-5 w-0.5 bg-navy" />}
                {email.length === 17 && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto text-mint">
                    ✓
                  </motion.span>
                )}
              </div>

              <label className="block text-sm font-medium text-ink-soft">What&apos;s this about?</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {["Sales question", "Problem with an order"].map((o, i) => (
                  <div
                    key={o}
                    className={`rounded-xl border px-3 py-2.5 text-sm transition-all duration-500 ${
                      topic && i === 1 ? "border-mint bg-mint-soft font-semibold text-[#0f7a53]" : "border-line"
                    }`}
                  >
                    {o}
                  </div>
                ))}
              </div>

              <motion.div
                initial={false}
                animate={{ height: topic ? "auto" : 0, opacity: topic ? 1 : 0 }}
                transition={{ duration: 0.6, ease }}
                className="overflow-hidden"
              >
                <div className="pt-4">
                  <label className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                    Order number
                    <span className="rounded-md bg-lilac-soft px-1.5 py-0.5 text-[10px] font-bold text-[#6b45d6] uppercase">
                      Conditional
                    </span>
                  </label>
                  <div className="mt-1.5 h-12 rounded-xl border border-dashed border-[#6b45d6]/40 bg-lilac-soft/40" />
                </div>
              </motion.div>

              <button className="mt-6 w-full rounded-xl bg-navy py-3.5 font-semibold text-white">Next →</button>
            </motion.div>
          </motion.div>

          {/* floating chips */}
          <motion.div style={{ y: yChipsFast, x: px }} className="absolute -top-8 -left-6 sm:-left-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 1.4 }, scale: { delay: 1.4, ease }, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint-soft text-lg">📬</span>
              <div className="text-sm">
                <p className="font-semibold">Submission #128</p>
                <p className="text-xs text-ink-soft">just now · New</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yChipsMid, x: py }} className="absolute top-1/2 -right-4 sm:-right-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
              transition={{ opacity: { delay: 1.7 }, scale: { delay: 1.7, ease }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
              className="rounded-2xl border border-line bg-white px-4 py-3 font-mono text-xs shadow-lg"
            >
              <span className="text-ink-soft">POST</span> /webhook
              <span className="ml-2 rounded-md bg-mint-soft px-1.5 py-0.5 font-bold text-[#0f7a53]">200</span>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yChipsFast }} className="absolute -bottom-10 left-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: [-3, 2, -3] }}
              transition={{ opacity: { delay: 2 }, scale: { delay: 2, ease }, rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" } }}
              className="rounded-2xl bg-butter-soft px-4 py-3 text-sm font-semibold shadow-lg ring-1 ring-[#f0dc95]"
            >
              🛡️ Spam blocked — no CAPTCHA
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

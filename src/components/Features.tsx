"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { Eyebrow, Reveal } from "./ui";

function Card({
  className = "",
  title,
  body,
  children,
  delay = 0,
}: {
  className?: string;
  title: string;
  body: string;
  children?: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={`group relative overflow-hidden rounded-[28px] p-7 ${className}`}>
      <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="h-full">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 max-w-md leading-relaxed text-ink-soft">{body}</p>
        {children}
      </motion.div>
    </Reveal>
  );
}

const subs = [
  ["#131", "Priya S.", "New", "bg-mint-soft text-[#0f7a53]"],
  ["#130", "Marco R.", "Read", "bg-sky-soft text-navy"],
  ["#129", "free-$$$", "Spam", "bg-peach-soft text-[#b4532a]"],
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ySlow = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yFast = useTransform(scrollYProgress, [0, 1], [140, -140]);

  return (
    <section id="features" ref={ref} className="relative py-28 sm:py-36">
      <motion.div style={{ y: ySlow }} className="absolute top-40 -left-20 -z-10 h-72 w-72 rounded-full bg-mint-soft blur-3xl" />
      <motion.div style={{ y: yFast }} className="absolute right-0 bottom-20 -z-10 h-80 w-80 rounded-full bg-peach-soft blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="navy">Everything included</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Built-in, not bolted on.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">No add-ons to buy, no tiers to unlock. Every feature ships in the free plugin.</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          <Card
            className="bg-white md:col-span-4"
            title="Submissions, right in WordPress"
            body="Search, filter by status and date, mark as read, new or spam. Export to CSV. Optional automatic deletion after a set number of days."
          >
            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              {subs.map(([id, who, st, cls], i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="flex items-center justify-between border-b border-line px-4 py-3 text-sm last:border-0"
                >
                  <span className="font-mono text-ink-soft">{id}</span>
                  <span className="flex-1 px-4 font-medium">{who}</span>
                  <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${cls}`}>{st}</span>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card
            className="bg-navy text-white md:col-span-2 [&_p]:text-white/70"
            title="21 field types"
            body="From short text to file uploads, addresses, hidden fields and page breaks."
            delay={0.1}
          >
            <div className="mt-6 flex flex-wrap gap-1.5">
              {["Email", "Phone", "Date", "Time", "Upload", "Address", "Consent", "Calc", "HTML", "…"].map((f) => (
                <span key={f} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                  {f}
                </span>
              ))}
            </div>
          </Card>

          <Card
            className="bg-butter-soft md:col-span-2"
            title="Notifications"
            body="Email your team with placeholders for any answer, send visitors a confirmation, or text yourself via VuloMail."
          >
            <div className="mt-6 rounded-2xl bg-white p-4 font-mono text-xs leading-relaxed">
              New message from <span className="rounded bg-mint-soft px-1 text-[#0f7a53]">{"{name}"}</span>
              <br />
              Topic: <span className="rounded bg-mint-soft px-1 text-[#0f7a53]">{"{topic}"}</span>
            </div>
          </Card>

          <Card
            className="bg-white md:col-span-2"
            title="Signed webhooks"
            body="Send each submission as JSON over HTTPS. Background delivery, two retries, optional secret — every attempt logged."
            delay={0.08}
          >
            <div className="mt-6 space-y-1.5 font-mono text-xs">
              {[
                ["attempt 1", "500", "bg-peach-soft text-[#b4532a]"],
                ["attempt 2", "200", "bg-mint-soft text-[#0f7a53]"],
              ].map(([a, c, cls]) => (
                <div key={a} className="flex justify-between rounded-lg bg-cream px-3 py-2">
                  {a} <span className={`rounded px-1.5 font-bold ${cls}`}>{c}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card
            className="bg-mint-soft md:col-span-2"
            title="Spam? Handled."
            body="A hidden trap field, a minimum fill time and a per-visitor rate limit. No CAPTCHA, no puzzles, no third parties."
            delay={0.16}
          >
            <div className="mt-6 flex gap-2 text-xs font-semibold">
              {["🍯 Honeypot", "⏱️ Fill time", "🚦 Rate limit"].map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </Card>

          <Card
            className="bg-sky-soft md:col-span-3"
            title="Safe file uploads"
            body="Only a fixed list of safe types. Content checked against the extension. Stored under random names in a protected folder."
          >
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white p-4 text-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-soft">📄</span>
              <div className="flex-1">
                <p className="font-medium">resume.pdf</p>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.4 }}
                    className="h-full bg-navy"
                  />
                </div>
              </div>
              <span className="font-mono text-xs text-ink-soft">a8f3…e1.pdf</span>
            </div>
          </Card>

          <Card
            className="bg-lilac-soft md:col-span-3"
            title="Your theme, your style"
            body="Forms follow your theme. Per form, set label position, spacing, accent and text colour, size, corner roundness and button alignment."
            delay={0.08}
          >
            <div className="mt-6 flex items-center gap-3">
              {["#004bf2", "#19b37b", "#6b45d6", "#e56b3f", "#0d1a45"].map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07, type: "spring" }}
                  className="h-9 w-9 rounded-full ring-4 ring-white"
                  style={{ background: c }}
                />
              ))}
              <span className="ml-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold">+ custom CSS class</span>
            </div>
          </Card>

          <Card
            className="bg-white md:col-span-6"
            title="Accessible by default — and featherweight"
            body="Plain HTML with labels on every control, fieldsets for groups, errors linked to fields and announced to screen readers, full keyboard use. The public form ships no React and no jQuery, and works without JavaScript on your own site."
          >
            <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium">
              {["♿ Screen-reader friendly", "⌨️ Keyboard first", "🪶 No React / jQuery on the front end", "🔌 Works without JS"].map((t) => (
                <span key={t} className="rounded-full border border-line px-4 py-2">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

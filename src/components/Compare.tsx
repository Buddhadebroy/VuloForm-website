"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { allSources, CHECKED_ON, profiles } from "@/lib/compare-data";
import { CostChart, FeatureTable } from "./CompareViews";
import { ease, Eyebrow, Reveal } from "./ui";

const tabs = [
  { id: "table", label: "Feature by feature" },
  { id: "cost", label: "What it costs" },
] as const;

export default function Compare() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("table");
  return (
    <section id="compare" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-40 -z-10 mx-auto h-[500px] max-w-5xl rounded-full bg-sky-soft/60 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="navy">How it compares</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            The features others charge for, <span className="text-navy">free.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            We compared VuloForm with seven widely used WordPress form plugins, using each one&apos;s own pricing
            page and WordPress.org listing. Here&apos;s what you get without paying — and what it costs to get the rest.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              aria-pressed={tab === t.id}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                tab === t.id ? "text-white" : "bg-white text-ink-soft hover:text-ink"
              }`}
            >
              {tab === t.id && (
                <motion.span layoutId="compare-pill" className="absolute inset-0 rounded-full bg-navy" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </Reveal>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease }}
            >
              {tab === "table" ? <FeatureTable /> : <CostChart />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* honest take */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-[28px] bg-mint-soft p-7">
            <h3 className="text-xl font-bold">Where VuloForm stands out</h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink">
              <li>✓ Every feature is in the free plugin — there is no paid tier to upsell you to.</li>
              <li>✓ Conditional logic and calculations are enforced again on your server, not just in the browser.</li>
              <li>✓ Webhooks are signed, retried twice and logged on each submission — free.</li>
              <li>✓ Spam protection needs no CAPTCHA and sends no visitor data to another company.</li>
              <li>✓ No account, no telemetry, and IP addresses aren&apos;t stored unless you switch it on.</li>
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[28px] border border-line bg-white p-7">
            <h3 className="text-xl font-bold">Where others are stronger</h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              <li>• <b className="text-ink">Payments.</b> VuloForm doesn&apos;t take payments. WPForms, Formidable, Fluent Forms and Forminator include Stripe for free.</li>
              <li>• <b className="text-ink">Integrations.</b> The paid tiers of WPForms, Gravity Forms and others connect directly to CRMs, email-marketing tools and Zapier. VuloForm offers webhooks.</li>
              <li>• <b className="text-ink">Track record.</b> VuloForm is at version 1.0. The others have years of releases and large communities behind them.</li>
              <li>• <b className="text-ink">Specialist extras.</b> Things like quizzes, e-signatures, PDF generation and user registration are available elsewhere.</li>
            </ul>
          </Reveal>
        </div>

        {/* detailed head-to-head pages */}
        <Reveal className="mt-10 rounded-[28px] border border-line bg-white p-7 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Detailed head-to-head comparisons</h3>
              <p className="mt-1 text-[15px] text-ink-soft">One page per plugin: features, pricing, who each suits, and honest trade-offs.</p>
            </div>
            <Link href="/compare" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-light">
              See the full comparison →
            </Link>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((p) => (
              <li key={p.slug}>
                <Link href={`/compare/${p.slug}`} className="flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm font-semibold transition-colors hover:border-navy/30 hover:bg-sky-soft">
                  VuloForm vs {p.name}
                  <span aria-hidden className="text-navy">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <details className="group mt-6 rounded-2xl border border-line bg-white/70 px-5 py-4 text-sm">
          <summary className="cursor-pointer list-none font-semibold text-ink-soft group-open:text-ink">
            Sources & method <span className="text-xs font-normal">(checked {CHECKED_ON})</span>
          </summary>
          <p className="mt-3 text-ink-soft">
            Each column describes the plugin&apos;s free version as stated by its maker; where a feature is paid we name
            the cheapest plan the pricing page lists it under. Plans and prices change — check the vendor&apos;s site
            before you buy. All product names are trademarks of their owners; this comparison isn&apos;t affiliated with
            or endorsed by them.
          </p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {allSources.map(([l, u]) => (
              <li key={u}>
                <a href={u} target="_blank" rel="noopener noreferrer" className="text-navy underline decoration-navy/30 underline-offset-2 hover:decoration-navy">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

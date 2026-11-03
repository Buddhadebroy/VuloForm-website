import type { Metadata } from "next";
import Link from "next/link";
import { CostChart, FeatureTable } from "@/components/CompareViews";
import GetItBanner from "@/components/GetItBanner";
import PageShell from "@/components/PageShell";
import { Eyebrow } from "@/components/ui";
import { allSources, CHECKED_ON, profiles } from "@/lib/compare-data";

export const metadata: Metadata = {
  title: "VuloForm vs other WordPress form plugins — full comparison",
  description:
    "Compare VuloForm with Contact Form 7, WPForms, Gravity Forms, Ninja Forms, Formidable, Fluent Forms and Forminator: free features, pricing and honest trade-offs.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <Eyebrow tone="navy">Comparison</Eyebrow>
          <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            VuloForm vs the other WordPress form plugins
          </h1>
          <p className="mt-5 text-lg text-ink-soft">
            Seven widely used plugins, compared using each maker&apos;s own pricing page and WordPress.org listing
            (checked {CHECKED_ON}). Columns describe the free version; where a feature is paid we name the cheapest plan.
          </p>
        </div>

        <h2 className="mt-14 mb-5 text-2xl font-bold">Feature by feature</h2>
        <FeatureTable />

        <h2 className="mt-14 mb-5 text-2xl font-bold">What it costs</h2>
        <CostChart />

        <h2 className="mt-14 text-2xl font-bold">Pick a head-to-head</h2>
        <p className="mt-2 text-ink-soft">Each page covers features, pricing, who the plugin suits, and where it beats VuloForm.</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {profiles.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/compare/${p.slug}`}
                className="group block h-full rounded-[24px] border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-lg"
              >
                <span className="flex items-center justify-between text-lg font-bold">
                  VuloForm vs {p.name}
                  <span aria-hidden className="text-navy transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="mt-2 block text-[15px] leading-relaxed text-ink-soft">{p.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>

        <details className="group mt-10 rounded-2xl border border-line bg-white/70 px-5 py-4 text-sm">
          <summary className="cursor-pointer list-none font-semibold text-ink-soft group-open:text-ink">
            Sources &amp; method <span className="text-xs font-normal">(checked {CHECKED_ON})</span>
          </summary>
          <p className="mt-3 text-ink-soft">
            Plans and prices change — check the vendor&apos;s site before you buy. All product names are trademarks of their
            owners; this comparison isn&apos;t affiliated with or endorsed by them.
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
      <GetItBanner />
    </PageShell>
  );
}

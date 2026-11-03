import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CostChart, FeatureTable } from "@/components/CompareViews";
import GetItBanner from "@/components/GetItBanner";
import PageShell from "@/components/PageShell";
import { Eyebrow } from "@/components/ui";
import { CHECKED_ON, costs, profileBySlug, profiles, sources } from "@/lib/compare-data";

export function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/compare/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = profileBySlug(slug);
  if (!p) return {};
  return {
    title: `VuloForm vs ${p.name} — features, pricing & honest comparison`,
    description: `${p.tagline} Feature table, pricing and who each plugin suits (checked ${CHECKED_ON}).`,
    alternates: { canonical: `/compare/${p.slug}` },
  };
}

// Unknown slugs must answer 404, so params is read before streaming starts.
// Known slugs are prerendered by generateStaticParams, so this only blocks for unknown ones.
export const instant = false;

export default async function CompareDetail({ params }: PageProps<"/compare/[slug]">) {
  const { slug } = await params;
  const p = profileBySlug(slug);
  if (!p) notFound();
  return (
    <PageShell>
      <Content p={p} />
    </PageShell>
  );
}

function Content({ p }: { p: NonNullable<ReturnType<typeof profileBySlug>> }) {
  const theirCost = costs.find((c) => c.id === p.id)!;
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
          <Link href="/compare" className="hover:text-ink">Compare</Link> <span aria-hidden>/</span> VuloForm vs {p.name}
        </nav>

        <div className="mt-6 max-w-3xl">
          <Eyebrow tone="navy">Head-to-head</Eyebrow>
          <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            VuloForm vs {p.name}
          </h1>
          <p className="mt-5 text-lg text-ink-soft">{p.verdict}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[28px] bg-mint-soft p-7">
            <h2 className="text-xl font-bold">Choose VuloForm if…</h2>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed">
              {p.chooseVulo.map((t) => <li key={t}>✓ {t}</li>)}
            </ul>
          </div>
          <div className="rounded-[28px] border border-line bg-white p-7">
            <h2 className="text-xl font-bold">Choose {p.name} if…</h2>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              {p.chooseThem.map((t) => <li key={t}>• {t}</li>)}
            </ul>
          </div>
        </div>

        <h2 className="mt-16 mb-5 text-2xl font-bold">Feature comparison</h2>
        <FeatureTable ids={["vulo", p.id]} />

        <div className="mt-10 rounded-[28px] bg-butter-soft p-7">
          <h2 className="text-xl font-bold">Price</h2>
          <p className="mt-2 text-[15px] leading-relaxed">{p.pricing}</p>
          <p className="mt-2 text-sm text-ink-soft">
            {theirCost.name} · {theirCost.plan}: {theirCost.detail}
          </p>
        </div>

        <div className="mt-14 max-w-3xl space-y-12">
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-2xl font-bold">{s.h}</h2>
              {s.p.map((para) => (
                <p key={para} className="mt-4 text-[17px] leading-relaxed text-ink-soft">{para}</p>
              ))}
            </section>
          ))}
        </div>

        <h2 className="mt-16 mb-5 text-2xl font-bold">How the cost compares across all plugins</h2>
        <CostChart />

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6">
            {p.faqs.map(([q, a]) => (
              <div key={q}>
                <dt className="font-bold">{q}</dt>
                <dd className="mt-1.5 text-ink-soft">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Compare with other plugins</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profiles.filter((o) => o.slug !== p.slug).map((o) => (
              <li key={o.slug}>
                <Link href={`/compare/${o.slug}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-navy/30 hover:bg-sky-soft">
                  vs {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-xs leading-relaxed text-ink-soft">
          Facts checked {CHECKED_ON} against each vendor&apos;s own pricing page and WordPress.org listing; columns describe
          the free version. Plans and prices change, so check before you buy. Product names are trademarks of their owners;
          this page isn&apos;t affiliated with or endorsed by them.
          {sources[p.id].length > 0 && (
            <>
              {" "}Sources:{" "}
              {sources[p.id].map(([l, u], i) => (
                <span key={u}>
                  {i > 0 && ", "}
                  <a href={u} target="_blank" rel="noopener noreferrer" className="text-navy underline underline-offset-2">{l}</a>
                </span>
              ))}
              .
            </>
          )}
        </p>
      </div>
      <GetItBanner title={`Ready to try VuloForm instead of ${p.name}?`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
    </>
  );
}

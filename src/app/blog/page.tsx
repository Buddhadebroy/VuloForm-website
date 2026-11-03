import type { Metadata } from "next";
import Link from "next/link";
import GetItBanner from "@/components/GetItBanner";
import PageShell from "@/components/PageShell";
import { Eyebrow } from "@/components/ui";
import { posts } from "@/content/all-posts";
import { wordCount } from "@/content/types";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "The VuloForm blog — WordPress form guides and comparisons",
  description:
    "Practical guides on WordPress forms: multi-step forms, conditional logic, saving submissions, spam protection, privacy, webhooks and plugin comparisons.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const [lead, ...rest] = posts;
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            WordPress forms, <span className="text-navy">explained.</span>
          </h1>
          <p className="mt-5 text-lg text-ink-soft">
            Practical guides and honest comparisons for anyone building forms in WordPress.
          </p>
        </div>

        <Link
          href={`/blog/${lead.slug}`}
          className="group mt-12 block rounded-[32px] bg-gradient-to-br from-sky-soft via-white to-mint-soft p-8 ring-1 ring-line transition-all hover:-translate-y-0.5 hover:shadow-xl sm:p-12"
        >
          <span className="text-xs font-semibold tracking-wide text-navy uppercase">Latest · {lead.category}</span>
          <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl">{lead.title}</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">{lead.description}</p>
          <p className="mt-5 text-sm text-ink-soft">
            {formatDate(lead.date)} · {Math.ceil(wordCount(lead) / 220)} min read
            <span className="ml-3 font-semibold text-navy">Read →</span>
          </p>
        </Link>

        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-[28px] border border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-lg"
              >
                <span className="text-xs font-semibold tracking-wide text-[#0f7a53] uppercase">{p.category}</span>
                <h2 className="mt-2 text-xl leading-snug font-bold">{p.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.description}</p>
                <p className="mt-auto pt-5 text-sm text-ink-soft">
                  {formatDate(p.date)} · {Math.ceil(wordCount(p) / 220)} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <GetItBanner />
    </PageShell>
  );
}

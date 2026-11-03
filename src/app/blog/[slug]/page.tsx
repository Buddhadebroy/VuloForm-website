import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogToc from "@/components/BlogToc";
import GetItBanner from "@/components/GetItBanner";
import PageShell from "@/components/PageShell";
import { posts, postBySlug } from "@/content/all-posts";
import { wordCount } from "@/content/types";
import { profileBySlug } from "@/lib/compare-data";
import { formatDate } from "@/lib/format";
import { SITE_URL } from "@/lib/site";

const sectionId = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.description, publishedTime: p.date },
  };
}

// Unknown slugs must answer 404, so params is read before streaming starts.
// Known slugs are prerendered by generateStaticParams, so this only blocks for unknown ones.
export const instant = false;

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  return (
    <PageShell>
      <Content post={post} />
    </PageShell>
  );
}

function Content({ post }: { post: NonNullable<ReturnType<typeof postBySlug>> }) {
  const related = (post.compare ?? []).map(profileBySlug).filter((x) => !!x);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "VuloLabs" },
    publisher: { "@type": "Organization", name: "VuloLabs" },
  };

  const toc = post.sections.map((s) => ({ id: sectionId(s.h), label: s.h }));

  return (
    <>
      <div className="mx-auto max-w-6xl gap-12 px-4 sm:px-6 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)]">
      <div className="hidden lg:col-start-1 lg:row-start-1 lg:block lg:pt-1"><BlogToc items={toc} variant="sidebar" /></div>
      <article className="min-w-0 max-w-3xl lg:col-start-2 lg:row-start-1">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
          <Link href="/blog" className="hover:text-ink">Blog</Link> <span aria-hidden>/</span> {post.category}
        </nav>
        <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-sm text-ink-soft">
          By the VuloForm team · {formatDate(post.date)} · {Math.ceil(wordCount(post) / 220)} min read
        </p>

        <BlogToc items={toc} variant="inline" />

        <div className="mt-10 space-y-5 text-[18px] leading-[1.75] text-ink">
          {post.intro.map((t) => <p key={t}>{t}</p>)}
        </div>

        {post.sections.map((s) => (
          <section key={s.h} id={sectionId(s.h)} className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{s.h}</h2>
            <div className="mt-4 space-y-5 text-[18px] leading-[1.75] text-ink-soft">
              {s.p.map((t) => <p key={t}>{t}</p>)}
              {s.list && (
                <ul className="list-disc space-y-2 pl-6 marker:text-navy">
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </div>
          </section>
        ))}

        <div className="mt-12 space-y-5 rounded-[28px] bg-sky-soft p-7 text-[18px] leading-[1.75]">
          {post.outro.map((t) => <p key={t}>{t}</p>)}
        </div>

        {related.length > 0 && (
          <aside className="mt-12" aria-label="Related comparisons">
            <h2 className="text-lg font-bold">Related comparisons</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/compare/${r.slug}`} className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-navy/30 hover:bg-sky-soft">
                    VuloForm vs {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>
      </div>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Keep reading</h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {more.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block h-full rounded-[24px] border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-lg">
                <span className="text-xs font-semibold tracking-wide text-[#0f7a53] uppercase">{p.category}</span>
                <span className="mt-2 block font-bold leading-snug">{p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <GetItBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
    </>
  );
}

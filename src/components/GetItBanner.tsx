import { GITHUB_URL } from "@/lib/site";

export default function GetItBanner({ title = "Try VuloForm free" }: { title?: string }) {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <div className="rounded-[32px] bg-gradient-to-br from-sky-soft via-white to-mint-soft px-6 py-14 text-center ring-1 ring-line sm:py-16">
        <h2 className="mx-auto max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-lg text-ink-soft">
          Install from Plugins › Add New, pick a template, hit Publish. No account, no subscription, no limits.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={GITHUB_URL} className="rounded-full bg-navy px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-light">
            Download VuloForm — free
          </a>
          <a href={`${GITHUB_URL}/docs`} className="rounded-full border border-line bg-white px-7 py-3.5 font-semibold transition-colors hover:border-navy/30">
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}

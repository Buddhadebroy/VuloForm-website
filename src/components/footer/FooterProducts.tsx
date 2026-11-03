import { vuloProducts } from "@/lib/site";

export default function FooterProducts() {
  return (
    <section aria-labelledby="more-from-vulolabs" className="mt-12 border-t border-line pt-8">
      <h2 id="more-from-vulolabs" className="text-xs font-bold tracking-wider text-ink uppercase">
        More from VuloLabs
      </h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-3">
        {vuloProducts.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener"
              className="group block h-full rounded-2xl bg-cream p-5 transition-all hover:-translate-y-0.5 hover:bg-sky-soft"
            >
              <span className="flex items-center justify-between text-lg font-bold text-ink">
                {p.name}
                <span aria-hidden className="text-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </span>
              <span className="mt-1 block text-[15px] leading-snug text-ink-soft">{p.blurb}</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

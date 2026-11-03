"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

export default function BlogToc({ items, variant }: { items: TocItem[]; variant: "sidebar" | "inline" }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e) => !!e);
    // A heading is "current" once it crosses into the top band below the fixed nav.
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-100px 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-1 border-l border-line">
      {items.map((i) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            aria-current={active === i.id ? "location" : undefined}
            className={`-ml-px block border-l-2 py-1.5 pr-2 pl-4 text-sm leading-snug transition-colors ${
              active === i.id ? "border-navy font-bold text-navy" : "border-transparent text-ink-soft hover:text-ink"
            }`}
          >
            {i.label}
          </a>
        </li>
      ))}
    </ol>
  );

  if (variant === "inline") {
    return (
      <details className="mt-8 rounded-2xl border border-line bg-white px-5 py-3 lg:hidden">
        <summary className="cursor-pointer text-sm font-bold">Table of contents</summary>
        <nav aria-label="Table of contents" className="mt-3">{list}</nav>
      </details>
    );
  }

  return (
    <nav aria-label="Table of contents" className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block">
      <p className="mb-3 text-xs font-bold tracking-wide text-ink-soft uppercase">On this page</p>
      {list}
    </nav>
  );
}

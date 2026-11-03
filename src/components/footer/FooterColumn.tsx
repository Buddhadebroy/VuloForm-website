import Link from "next/link";
import type { FooterGroup } from "@/lib/footer-data";

const linkClass = "text-[15px] text-ink-soft transition-colors hover:text-navy";

export default function FooterColumn({ group }: { group: FooterGroup }) {
  const id = `footer-${group.title.toLowerCase()}`;
  return (
    <nav aria-labelledby={id}>
      <h2 id={id} className="text-xs font-bold tracking-wider text-ink uppercase">{group.title}</h2>
      <ul className="mt-4 space-y-3">
        {group.links.map((l) => (
          <li key={l.href}>
            {l.external ? (
              <a href={l.href} className={linkClass}>{l.label}</a>
            ) : (
              <Link href={l.href} className={linkClass}>{l.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

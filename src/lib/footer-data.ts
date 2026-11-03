import { profiles } from "./compare-data";
import { GITHUB_URL } from "./site";

export type FooterLink = { label: string; href: string; external?: boolean };
export type FooterGroup = { title: string; links: FooterLink[] };

export const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Builder", href: "/#builder" },
      { label: "Logic", href: "/#logic" },
      { label: "Features", href: "/#features" },
      { label: "Privacy", href: "/#privacy" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "User guide", href: `${GITHUB_URL}/docs/user`, external: true },
      { label: "Developers", href: `${GITHUB_URL}/docs/developer`, external: true },
      { label: "Source code", href: GITHUB_URL, external: true },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "All comparisons", href: "/compare" },
      ...profiles.slice(0, 4).map((p) => ({ label: `vs ${p.name}`, href: `/compare/${p.slug}` })),
    ],
  },
];

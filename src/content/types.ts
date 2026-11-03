export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date */
  date: string;
  category: string;
  intro: string[];
  sections: { h: string; p: string[]; list?: string[] }[];
  /** closing paragraph(s) with the call to action */
  outro: string[];
  /** related head-to-head pages, by profile slug */
  compare?: string[];
};

export const wordCount = (p: Post) =>
  [...p.intro, ...p.sections.flatMap((s) => [s.h, ...s.p, ...(s.list ?? [])]), ...p.outro]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

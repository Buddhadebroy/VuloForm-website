import { NextResponse, type NextRequest } from "next/server";
import { posts } from "@/content/all-posts";
import { profiles } from "@/lib/compare-data";

const known = {
  compare: new Set(profiles.map((p) => p.slug)),
  blog: new Set(posts.map((p) => p.slug)),
};

/*
 * With Cache Components the prerendered shell commits a 200 status before the page
 * can call notFound(), so unknown slugs would be served as soft 404s. Rewriting them
 * to a path with no route makes Next.js answer with a real 404 and the not-found page.
 */
export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");
  const slugs = known[section as keyof typeof known];
  if (slugs && slug && !slugs.has(slug)) {
    return NextResponse.rewrite(new URL("/_not-found-slug", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/compare/:slug", "/blog/:slug"],
};

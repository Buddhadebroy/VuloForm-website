import { GITHUB_URL } from "@/lib/site";
import { Logo } from "../ui";

export default function FooterBrand() {
  return (
    <div className="max-w-xs">
      <Logo />
      <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
        Build and review forms inside WordPress. Free, no account, no limits.
      </p>
      <a
        href={GITHUB_URL}
        className="mt-6 inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-light"
      >
        Download — free
      </a>
    </div>
  );
}

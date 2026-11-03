import { footerGroups } from "@/lib/footer-data";
import FooterBottom from "./footer/FooterBottom";
import FooterBrand from "./footer/FooterBrand";
import FooterColumn from "./footer/FooterColumn";
import FooterProducts from "./footer/FooterProducts";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6">
      <div className="rounded-[32px] bg-white p-7 ring-1 ring-line sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <FooterBrand />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((g) => <FooterColumn key={g.title} group={g} />)}
          </div>
        </div>
        <FooterProducts />
        <FooterBottom />
      </div>
    </footer>
  );
}

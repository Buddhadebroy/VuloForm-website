import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-28 sm:pt-36">{children}</main>
      <Footer />
    </>
  );
}

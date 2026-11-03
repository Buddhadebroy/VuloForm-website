import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import Builder from "@/components/Builder";
import Logic from "@/components/Logic";
import Features from "@/components/Features";
import Compare from "@/components/Compare";
import Embed from "@/components/Embed";
import Privacy from "@/components/Privacy";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Templates />
        <Builder />
        <Logic />
        <Features />
        <Compare />
        <Embed />
        <Privacy />
        <Faq />
      </main>
      <Cta />
      <Footer />
    </>
  );
}

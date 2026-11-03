"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { GITHUB_URL } from "@/lib/site";
import { Logo } from "./ui";

const links = [
  { href: "/#builder", label: "Builder" },
  { href: "/#logic", label: "Logic" },
  { href: "/#features", label: "Features" },
  { href: "/compare", label: "Compare" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border border-line/80 bg-white/75 shadow-[0_10px_40px_-20px_rgba(13,26,69,0.35)] backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Link href="/" aria-label="VuloForm home">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-sky-soft hover:text-navy"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            className="hidden rounded-full bg-navy px-5 py-2.5 hover:bg-navy-light text-sm font-semibold text-white transition-all hover:-translate-y-0.5 active:translate-y-0 sm:inline-block"
          >
            Get it free
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/80 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 right-4 left-4 rounded-3xl border border-line bg-white p-3 shadow-xl md:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link onClick={() => setOpen(false)} href={l.href} className="block rounded-2xl px-4 py-3 font-medium hover:bg-sky-soft">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={GITHUB_URL} className="mt-1 block rounded-2xl bg-navy px-4 py-3 text-center font-semibold text-white">
              Get it free
            </a>
          </li>
        </motion.ul>
      )}
    </motion.header>
  );
}

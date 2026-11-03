"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ease, Eyebrow, Reveal } from "./ui";

const tabs = [
  {
    id: "block",
    label: "Block editor",
    desc: "Add the VuloForm block to any page or post and pick a published form from the list.",
    code: `<!-- wp:vuloform/form {"formId":12} /-->`,
  },
  {
    id: "shortcode",
    label: "Shortcode",
    desc: "Paste it into a page, a text widget, or any page builder's shortcode element.",
    code: `[vuloform id="12"]`,
  },
  {
    id: "php",
    label: "PHP",
    desc: "Render a form straight from your theme or plugin.",
    code: `<?php echo vuloform_render( 12 ); ?>`,
  },
  {
    id: "embed",
    label: "Another website",
    desc: "Landing page, shop or static site — not an iframe, so it inherits the host page's fonts and width.",
    code: `<div data-vuloform="12"></div>
<script src="https://example.com/wp-content/plugins/vuloform/
  assets/js/public/vuloform-embed.min.js
  ?site=https%3A%2F%2Fexample.com%2Fwp-json" async></script>`,
  },
];

export default function Embed() {
  const [active, setActive] = useState(tabs[0].id);
  const [copied, setCopied] = useState(false);
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <Eyebrow tone="navy">Publish anywhere</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            One form.
            <br />
            Every place you need it.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Drop it on a WordPress page, or paste a tiny snippet into a site that doesn&apos;t run WordPress at all.
            Submissions always land back home.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActive(t.id);
                  setCopied(false);
                }}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === t.id ? "text-white" : "text-ink-soft hover:text-ink"
                }`}
              >
                {active === t.id && (
                  <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-navy" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-[28px] bg-ink p-2 shadow-[0_40px_80px_-40px_rgba(13,26,69,0.6)]">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(tab.code).catch(() => {});
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1600);
                }}
                className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
            <div className="min-h-[200px] rounded-[22px] bg-[#13235a] p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease }}
                >
                  <pre className="overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre-wrap text-[#9ff0c9]">{tab.code}</pre>
                  <p className="mt-6 border-t border-white/10 pt-4 text-sm text-white/60">{tab.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

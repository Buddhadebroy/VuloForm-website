"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ease, Eyebrow, Reveal } from "./ui";

const faqs = [
  ["Is there a limit on forms or submissions?", "No. Build as many forms as you like and collect as many submissions as you get."],
  [
    "Do I need another plugin?",
    "No. VuloForm works by itself. VuloMail is optional — it makes email delivery more reliable and is required for SMS notifications.",
  ],
  [
    "Can I put a form on a site that isn't WordPress?",
    "Yes. Copy the snippet under “On another website” on the form's Share tab and paste it into that page's HTML. Your WordPress site must stay online, and the form needs JavaScript on the other site.",
  ],
  [
    "Is there a CAPTCHA?",
    "No. Forms are protected by a hidden trap field, a minimum fill time and a rate limit. Developers can connect another anti-spam service with the vuloform_spam_check filter.",
  ],
  [
    "Can conditional logic be bypassed?",
    "No. The rules are checked again on your server. A field hidden by its rules is never stored, and a required field can't be skipped by turning off JavaScript.",
  ],
  [
    "Are uploaded files public?",
    "They're stored under long random names in a folder that blocks direct access on Apache and LiteSpeed. Administrators download them through WordPress. On nginx, ask your host to block wp-content/uploads/vuloform/.",
  ],
  [
    "Does “Handed off” mean the email was delivered?",
    "It means your site's mail system accepted it. VuloForm can't see whether it reached the inbox — if mail goes missing, check spam and consider an SMTP plugin such as VuloMail.",
  ],
  [
    "What is removed when I delete the plugin?",
    "Nothing, by default, so a reinstall picks up where you left off. To remove everything, choose “Delete everything” under VuloForm › Settings first.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">Good questions.</h2>
          <p className="mt-5 text-lg text-ink-soft">Straight answers, no small print.</p>
        </Reveal>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold"
              >
                {q}
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0, backgroundColor: open === i ? "#19b37b" : "#e9eeff" }}
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xl ${open === i ? "text-white" : "text-navy"}`}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-xl pb-6 leading-relaxed text-ink-soft">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

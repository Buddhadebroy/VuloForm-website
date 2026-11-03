"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ease, Eyebrow } from "./ui";

const palette = [
  "Short text", "Long text", "Email", "Phone", "Number", "Website", "Dropdown",
  "Single choice", "Multiple choice", "Consent", "Date", "Time", "File upload",
  "Name", "Address", "Hidden", "Calculation", "Heading", "Text / HTML", "Divider", "Page break",
];

const steps = [
  {
    title: "Drag fields in",
    body: "Field types on the left, your form in the middle. Drag to add, drag to reorder — or use the buttons and keyboard instead.",
  },
  {
    title: "Tune every detail",
    body: "Select a field to change its label, make it required, or add conditional logic in the inspector on the right.",
  },
  {
    title: "Preview the real thing",
    body: "Try the form exactly as visitors will see it. Nothing you enter in the preview is sent or saved.",
  },
  {
    title: "Publish & share",
    body: "Changes save as a draft by themselves. Hit Publish, then add it with the block, a shortcode, or an embed snippet.",
  },
];

const canvasFields = [
  { label: "Name", type: "Name" },
  { label: "Email address", type: "Email" },
  { label: "Topic", type: "Dropdown" },
  { label: "Your message", type: "Long text", tall: true },
];

export default function Builder() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [step, setStep] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setStep(Math.min(3, Math.floor(v * 4.2))));
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const shown = step === 0 ? 3 : 4;

  return (
    <section id="builder" ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* story */}
          <div>
            <Eyebrow tone="navy">The builder</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
              Three panes.
              <br />
              <span className="text-ink-soft">Zero guesswork.</span>
            </h2>
            <div className="mt-8 hidden h-1 w-full overflow-hidden rounded-full bg-line sm:block">
              <motion.div style={{ width: bar }} className="h-full rounded-full bg-mint" />
            </div>
            <ol className="mt-6 space-y-2">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className={`rounded-2xl p-4 transition-all duration-500 ${
                    i === step ? "bg-white shadow-[0_16px_40px_-24px_rgba(13,26,69,0.4)]" : "opacity-45"
                  }`}
                >
                  <p className="flex items-center gap-3 font-bold">
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full text-sm transition-colors ${
                        i <= step ? "bg-navy text-white" : "bg-line text-ink-soft"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {s.title}
                  </p>
                  <AnimatePresence initial={false}>
                    {i === step && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="overflow-hidden pl-10 text-sm leading-relaxed text-ink-soft"
                      >
                        <span className="block pt-2">{s.body}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ol>
          </div>

          {/* mock app */}
          <div className="relative hidden rounded-[28px] border border-line bg-white p-2 shadow-[0_50px_100px_-50px_rgba(13,26,69,0.5)] sm:block">
            <div className="flex items-center justify-between rounded-t-[22px] border-b border-line px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff8f7a]" />
                <span className="h-3 w-3 rounded-full bg-[#ffd36b]" />
                <span className="h-3 w-3 rounded-full bg-[#5fd39c]" />
                <span className="ml-3 text-sm font-semibold">Contact us</span>
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase transition-colors ${
                    step === 3 ? "bg-mint-soft text-[#0f7a53]" : "bg-butter-soft text-[#9a7a12]"
                  }`}
                >
                  {step === 3 ? "Published" : "Draft · saved"}
                </span>
              </div>
              <div className="flex gap-2 text-xs font-semibold">
                <span className={`rounded-lg px-3 py-1.5 transition-colors ${step === 2 ? "bg-navy text-white" : "bg-cream"}`}>Preview</span>
                <motion.span
                  animate={step === 3 ? { scale: [1, 1.12, 1] } : {}}
                  className={`rounded-lg px-3 py-1.5 transition-colors ${step === 3 ? "bg-mint text-white" : "bg-navy text-white"}`}
                >
                  Publish
                </motion.span>
              </div>
            </div>

            <div className="grid min-h-[430px] grid-cols-[150px_1fr_170px] gap-2 p-2">
              {/* palette */}
              <div className={`overflow-hidden rounded-2xl bg-cream p-3 transition-opacity duration-500 ${step === 2 ? "opacity-30" : ""}`}>
                <p className="mb-2 text-[10px] font-bold tracking-wider text-ink-soft uppercase">Fields</p>
                <div className="grid gap-1.5">
                  {palette.slice(0, 12).map((p) => (
                    <span
                      key={p}
                      className={`rounded-lg border bg-white px-2.5 py-1.5 text-[11px] font-medium transition-all ${
                        step === 0 && p === "Long text" ? "border-navy text-navy shadow-md" : "border-line"
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                  <span className="text-[10px] text-ink-soft">+ 9 more</span>
                </div>
              </div>

              {/* canvas */}
              <div className="dotted relative rounded-2xl bg-cream/50 p-4">
                <AnimatePresence>
                  {step === 0 && (
                    <motion.span
                      initial={{ x: -170, y: 80, opacity: 0, rotate: -6 }}
                      animate={{ x: 30, y: 250, opacity: [0, 1, 1, 0], rotate: 0 }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6, ease }}
                      className="absolute top-0 left-0 z-10 rounded-lg border border-navy bg-white px-2.5 py-1.5 text-[11px] font-medium text-navy shadow-xl"
                    >
                      Long text ✋
                    </motion.span>
                  )}
                </AnimatePresence>
                <div className="space-y-3">
                  {canvasFields.slice(0, shown).map((f, i) => (
                    <motion.div
                      layout
                      key={f.label}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`rounded-xl border bg-white p-3 transition-all duration-500 ${
                        step === 1 && i === 2 ? "border-navy ring-4 ring-navy/10" : "border-line"
                      } ${step === 2 ? "border-transparent shadow-sm" : ""}`}
                    >
                      <p className="mb-1.5 flex items-center justify-between text-xs font-semibold">
                        {f.label}
                        {step < 2 && <span className="text-[9px] font-medium text-ink-soft">{f.type}</span>}
                      </p>
                      <div className={`rounded-lg bg-cream ${f.tall ? "h-16" : "h-7"}`} />
                    </motion.div>
                  ))}
                  {step >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl bg-navy py-2.5 text-center text-xs font-semibold text-white"
                    >
                      Send message
                    </motion.div>
                  )}
                </div>
                <AnimatePresence>
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-x-4 bottom-4 rounded-xl border border-mint/40 bg-white p-3 font-mono text-[11px] shadow-xl"
                    >
                      <p className="mb-1 font-sans text-[10px] font-bold text-mint uppercase">Share</p>
                      [vuloform id=&quot;12&quot;]
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* inspector */}
              <div className={`rounded-2xl bg-cream p-3 transition-opacity duration-500 ${step === 2 ? "opacity-30" : ""}`}>
                <p className="mb-2 text-[10px] font-bold tracking-wider text-ink-soft uppercase">
                  {step === 1 ? "Topic · Dropdown" : "Form"}
                </p>
                {step === 1 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 text-[11px]">
                    <div className="rounded-lg bg-white p-2">Label: Topic</div>
                    <div className="flex items-center justify-between rounded-lg bg-white p-2">
                      Required <span className="h-4 w-7 rounded-full bg-mint p-0.5"><span className="ml-auto block h-3 w-3 rounded-full bg-white" /></span>
                    </div>
                    <div className="rounded-lg bg-white p-2">
                      Choices
                      <p className="mt-1 text-ink-soft">Sales · Support · Order</p>
                    </div>
                    <div className="rounded-lg border border-[#6b45d6]/30 bg-lilac-soft p-2 text-[#6b45d6]">
                      Conditional logic: on
                    </div>
                  </motion.div>
                ) : (
                  <div className="space-y-2 text-[11px] text-ink-soft">
                    <div className="rounded-lg bg-white p-2">Label position: top</div>
                    <div className="flex items-center gap-2 rounded-lg bg-white p-2">
                      Accent <span className="h-3.5 w-3.5 rounded-full bg-navy" />
                    </div>
                    <div className="rounded-lg bg-white p-2">Corners: rounded</div>
                    <div className="rounded-lg bg-white p-2">Undo · Redo</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

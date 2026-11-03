"use client";

import { AnimatePresence, motion, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { ease, Eyebrow, Reveal } from "./ui";

const topics = ["Sales question", "Problem with an order", "Something else"];

function ConditionalDemo() {
  const [topic, setTopic] = useState(topics[0]);
  const showOrder = topic === "Problem with an order";
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-line bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-[#6b45d6]">
        <span className="rounded-md bg-lilac-soft px-2 py-1">Rule</span>
        Show <b>Order number</b> when <b>Topic</b> is “Problem with an order”
      </div>
      <p className="text-sm font-medium text-ink-soft">Topic</p>
      <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label="Topic">
        {topics.map((t) => (
          <button
            key={t}
            role="radio"
            aria-checked={t === topic}
            onClick={() => setTopic(t)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              t === topic ? "border-navy bg-navy text-white" : "border-line hover:border-navy/40"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <AnimatePresence initial={false}>
        {showOrder && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease }}
            className="overflow-hidden"
          >
            <label className="mt-5 block text-sm font-medium text-ink-soft">
              Order number <span className="text-[#d24b4b]">*</span>
              <input
                placeholder="e.g. 10482"
                className="mt-1.5 block h-12 w-full rounded-xl border border-[#6b45d6]/40 bg-lilac-soft/40 px-4 text-ink outline-none focus:ring-4 focus:ring-[#6b45d6]/15"
              />
            </label>
          </motion.div>
        )}
      </AnimatePresence>
      <label className="mt-5 block text-sm font-medium text-ink-soft">
        Message
        <div className="mt-1.5 h-20 rounded-xl border border-line bg-cream/60" />
      </label>
      <p className="mt-auto pt-6 text-xs text-ink-soft">
        ↑ Try it. Rules run in the browser as visitors type — and are enforced again on your server.
      </p>
    </div>
  );
}

function Num({ value }: { value: number }) {
  const s = useSpring(value, { stiffness: 140, damping: 20 });
  const t = useTransform(s, (v) => `$${v.toFixed(2)}`);
  useEffect(() => s.set(value), [s, value]);
  return <motion.span>{t}</motion.span>;
}

function CalcDemo() {
  const [qty, setQty] = useState(3);
  const [plan, setPlan] = useState(24);
  const [step, setStep] = useState(0);
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-line bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-xs font-semibold tracking-wider text-mint uppercase">Step {step + 1} of 2</p>
        <div className="flex gap-1.5">
          {[0, 1].map((i) => (
            <motion.span
              key={i}
              animate={{ width: i === step ? 40 : 16, backgroundColor: i <= step ? "#004bf2" : "#e7e3d8" }}
              className="h-1.5 rounded-full"
            />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div
            key="s1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease }}
          >
            <p className="text-sm font-medium text-ink-soft">Package</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {[
                ["Basic", 24],
                ["Deluxe", 49],
              ].map(([l, p]) => (
                <button
                  key={l}
                  onClick={() => setPlan(p as number)}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    plan === p ? "border-mint bg-mint-soft" : "border-line hover:border-mint/50"
                  }`}
                >
                  <p className="font-semibold">{l}</p>
                  <p className="text-sm text-ink-soft">${p} each</p>
                </button>
              ))}
            </div>
            <p className="mt-5 text-sm font-medium text-ink-soft">Quantity</p>
            <div className="mt-2 flex items-center gap-3">
              <button
                aria-label="Decrease"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-11 w-11 place-items-center rounded-xl border border-line text-xl hover:bg-cream"
              >
                −
              </button>
              <span className="w-10 text-center text-2xl font-bold">{qty}</span>
              <button
                aria-label="Increase"
                onClick={() => setQty((q) => Math.min(20, q + 1))}
                className="grid h-11 w-11 place-items-center rounded-xl border border-line text-xl hover:bg-cream"
              >
                +
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="s2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease }}
            className="space-y-4"
          >
            <p className="text-sm font-medium text-ink-soft">Delivery address</p>
            <div className="h-12 rounded-xl border border-line bg-cream/60" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 rounded-xl border border-line bg-cream/60" />
              <div className="h-12 rounded-xl border border-line bg-cream/60" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-6 flex items-center justify-between rounded-2xl bg-butter-soft px-5 py-4">
        <span className="text-sm font-semibold">
          Total <span className="font-normal text-ink-soft">= quantity × price</span>
        </span>
        <span className="text-2xl font-bold tabular-nums">
          <Num value={qty * plan} />
        </span>
      </div>
      <div className="mt-auto flex gap-2 pt-6">
        {step === 1 && (
          <button onClick={() => setStep(0)} className="rounded-xl border border-line px-5 py-3 font-semibold">
            ← Back
          </button>
        )}
        <button
          onClick={() => setStep((s) => (s === 0 ? 1 : 0))}
          className="flex-1 rounded-xl bg-navy py-3 font-semibold text-white"
        >
          {step === 0 ? "Next →" : "Start over"}
        </button>
      </div>
    </div>
  );
}

export default function Logic() {
  return (
    <section id="logic" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-24 -z-10 mx-auto h-[600px] max-w-5xl rounded-full bg-lilac-soft/70 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Smart forms</Eyebrow>
          <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Forms that think <span className="text-mint">before</span> they ask.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Show, hide or require fields based on other answers. Split long forms into steps. Work out totals live —
            then recompute them on your server so nobody can fake the numbers.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <h3 className="mb-4 pl-2 text-lg font-bold">Conditional logic</h3>
            <ConditionalDemo />
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="mb-4 pl-2 text-lg font-bold">Multi-step + calculations</h3>
            <CalcDemo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

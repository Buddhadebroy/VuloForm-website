"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { costs, plugins, rows, type Cell, type PluginId } from "@/lib/compare-data";
import { ease } from "./ui";

export function CellView({ c }: { c: Cell }) {
  const icon =
    c.k === "yes" ? (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-mint text-xs font-bold text-white" aria-label="Included free">
        ✓
      </span>
    ) : c.k === "paid" ? (
      <span className="rounded-md bg-butter-soft px-1.5 py-0.5 text-[11px] font-bold text-[#8a6a00] ring-1 ring-[#f0dc95]" aria-label="Paid plan">
        $ Paid
      </span>
    ) : c.k === "addon" ? (
      <span className="rounded-md bg-peach-soft px-1.5 py-0.5 text-[11px] font-bold text-[#a84d24]" aria-label="Add-on">
        + Add-on
      </span>
    ) : (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-line text-xs font-bold text-ink-soft" aria-label="Not included">
        –
      </span>
    );
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      {icon}
      {c.note && <span className="max-w-[118px] text-[11px] leading-tight text-ink-soft">{c.note}</span>}
    </div>
  );
}

export function FeatureTable({ ids }: { ids?: PluginId[] }) {
  const cols = plugins.map((p, i) => ({ p, i })).filter(({ p }) => !ids || ids.includes(p.id));
  const narrow = cols.length <= 2;
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-white">
      <div className="overflow-x-auto" data-lenis-prevent>
        <table className={`w-full border-collapse text-sm ${narrow ? "min-w-[560px]" : "min-w-[1040px]"}`}>
          <caption className="sr-only">Feature comparison of WordPress form plugins, free versions</caption>
          <thead>
            <tr>
              <th scope="col" className="sticky left-0 z-10 w-[220px] bg-white p-5 text-left align-bottom text-xs font-semibold tracking-wider text-ink-soft uppercase">
                Free version includes
              </th>
              {cols.map(({ p }) => (
                <th
                  key={p.id}
                  scope="col"
                  className={`p-4 align-bottom ${p.id === "vulo" ? "rounded-t-2xl bg-sky-soft" : ""}`}
                >
                  <span className={`block text-[15px] font-bold ${p.id === "vulo" ? "text-navy" : "text-ink"}`}>{p.name}</span>
                  <span className="mt-0.5 block text-xs font-normal text-ink-soft">{p.sub}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={r.label} className="group border-t border-line">
                <th scope="row" className="sticky left-0 z-10 bg-white p-5 text-left font-semibold group-hover:bg-cream">
                  {r.label}
                  {r.hint && <span className="mt-0.5 block text-xs font-normal text-ink-soft">{r.hint}</span>}
                </th>
                {cols.map(({ p, i }) => (
                  <td
                    key={p.id}
                    className={`px-2 py-4 align-top transition-colors ${
                      p.id === "vulo" ? "bg-sky-soft group-hover:bg-[#dfe7ff]" : "group-hover:bg-cream"
                    } ${ri === rows.length - 1 && p.id === "vulo" ? "rounded-b-2xl" : ""}`}
                  >
                    <CellView c={r.cells[i]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line px-5 py-4 text-xs text-ink-soft">
        <span className="flex items-center gap-2"><span className="grid h-4 w-4 place-items-center rounded-full bg-mint text-[9px] text-white">✓</span> In the free version</span>
        <span className="flex items-center gap-2"><span className="rounded bg-butter-soft px-1 font-bold text-[#8a6a00]">$</span> Paid plan (cheapest named)</span>
        <span className="flex items-center gap-2"><span className="rounded bg-peach-soft px-1 font-bold text-[#a84d24]">+</span> Paid add-on</span>
        <span className="flex items-center gap-2"><span className="grid h-4 w-4 place-items-center rounded-full bg-line text-[9px]">–</span> Not included</span>
        <span className="sm:ml-auto">Scroll sideways on small screens →</span>
      </div>
    </div>
  );
}

export function CostChart() {
  const max = 300;
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div className="rounded-[28px] border border-line bg-white p-6 sm:p-8">
      <h3 className="text-lg font-bold">Yearly price to get all five essentials on one site</h3>
      <p className="mt-1 text-sm text-ink-soft">
        Conditional logic, multi-step forms, calculations, file uploads and webhooks — cheapest plan that has them all,
        as shown on each pricing page in October 2026. Hover a bar for the plan.
      </p>
      <ul className="mt-8 space-y-3" role="list">
        {costs.map((c, i) => {
          const pct = c.price ? (c.price / max) * 100 : 0;
          const isVulo = c.id === "vulo";
          return (
            <li
              key={c.id}
              className="relative grid grid-cols-[110px_1fr] items-center gap-3 sm:grid-cols-[150px_1fr]"
              onMouseEnter={() => setHover(c.id)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(c.id)}
              onBlur={() => setHover(null)}
              tabIndex={0}
            >
              <span className={`text-sm font-semibold ${isVulo ? "text-navy" : ""}`}>{c.name}</span>
              <div className="flex h-9 items-center gap-3">
                {c.price ? (
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: `${pct * 0.66}%` }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.07, ease }}
                    className={`h-5 flex-none rounded-r-[4px] transition-colors ${hover === c.id ? "bg-navy-light" : "bg-navy"}`}
                  />
                ) : (
                  <span className={`h-5 w-1 rounded-r-[4px] ${c.price === 0 ? "bg-mint" : "bg-line"}`} />
                )}
                <span className="text-sm font-bold whitespace-nowrap tabular-nums">
                  {c.price === null ? (
                    <span className="font-medium text-ink-soft">Not available</span>
                  ) : c.price === 0 ? (
                    <span className="text-[#0f7a53]">Free</span>
                  ) : (
                    `$${c.price % 1 ? c.price.toFixed(2) : c.price}/yr`
                  )}
                </span>
              </div>
              <AnimatePresence>
                {hover === c.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    role="tooltip"
                    className="pointer-events-none absolute top-full left-[110px] z-20 mt-1 max-w-xs rounded-xl border border-line bg-white p-3 text-xs shadow-xl sm:left-[150px]"
                  >
                    <p className="font-bold">{c.name} · {c.plan}</p>
                    <p className="mt-1 text-ink-soft">{c.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-xs text-ink-soft">
        Several vendors show a first-year discount; where the page states a renewal price it&apos;s in the tooltip.
        Prices in USD, excluding tax.
      </p>
    </div>
  );
}


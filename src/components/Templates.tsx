const row1 = [
  ["💬", "Contact", "bg-sky-soft"],
  ["🧭", "General inquiry", "bg-mint-soft"],
  ["🎯", "Lead generation", "bg-peach-soft"],
  ["📰", "Newsletter signup", "bg-butter-soft"],
  ["⭐", "Feedback", "bg-lilac-soft"],
];
const row2 = [
  ["📊", "Survey", "bg-mint-soft"],
  ["🎟️", "Event registration", "bg-sky-soft"],
  ["💼", "Job application", "bg-butter-soft"],
  ["🛟", "Support request", "bg-peach-soft"],
  ["🧾", "Order or quote inquiry", "bg-lilac-soft"],
];

function Row({ items, reverse }: { items: string[][]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <ul className={`flex shrink-0 gap-4 pr-4 ${reverse ? "marquee-reverse" : "marquee"}`}>
        {doubled.map(([icon, label, bg], i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className={`flex items-center gap-3 rounded-2xl ${bg} px-5 py-4 text-lg font-semibold whitespace-nowrap text-ink`}
          >
            <span className="text-2xl">{icon}</span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Templates() {
  return (
    <section className="py-16" aria-label="Ready-made forms">
      <p className="mb-8 text-center text-sm font-semibold tracking-widest text-ink-soft uppercase">
        Start from ten ready-made forms — or a blank page
      </p>
      <div className="space-y-4">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </section>
  );
}

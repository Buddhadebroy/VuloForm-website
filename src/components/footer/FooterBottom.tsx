export default function FooterBottom() {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-sm text-ink-soft sm:flex-row">
      <p>© 2026 VuloLabs. All rights reserved.</p>
      <p className="flex items-center gap-2">
        <span aria-hidden className="h-2 w-2 rounded-full bg-mint" />
        Free and open source
      </p>
    </div>
  );
}

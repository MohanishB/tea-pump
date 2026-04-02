export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Tea Pump</p>
        <p>Fuel up. Sip out.</p>
      </div>
    </footer>
  );
}

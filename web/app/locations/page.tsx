const locations = [
  {
    name: "Tea Pump — Main Outlet",
    area: "Your City",
    hours: "7:00 AM – 11:00 PM",
    status: "Open",
  },
  {
    name: "Tea Pump — Express",
    area: "Your Area",
    hours: "8:00 AM – 10:00 PM",
    status: "Opening soon",
  },
];

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Locations</h1>
          <p className="mt-1 text-sm text-slate-600">
            Find a Tea Pump near you (we’ll connect this to PostgreSQL later)
          </p>
        </div>

        <a
          className="rounded-lg border border-black/15 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
          href="/menu"
        >
          View Menu
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">{loc.name}</div>
                <div className="mt-1 text-sm text-slate-600">{loc.area}</div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  loc.status === "Open"
                    ? "bg-emerald-500/15 text-emerald-700"
                    : "bg-slate-900/10 text-slate-700"
                }`}
              >
                {loc.status}
              </span>
            </div>

            <div className="mt-4 rounded-xl bg-slate-950 px-4 py-3 text-white">
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Hours
              </div>
              <div className="mt-1 font-[var(--font-mono)] tracking-wide">
                {loc.hours}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="#"
                className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Get Directions
              </a>
              <a
                href="#"
                className="rounded-lg border border-black/15 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
              >
                Call Store
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

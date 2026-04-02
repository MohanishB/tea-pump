export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left */}
        <div className="space-y-5">
          <p className="inline-flex rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-slate-700">
            Our story
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for fast chai stops — with a{" "}
            <span className="text-brand">Tea Pump</span> twist
          </h1>

          <p className="text-base leading-7 text-slate-700">
            Tea Pump is a quick, high-quality café experience inspired by the
            energy of a petrol pump — efficient, bold, and always ready to fuel
            your day. We serve fresh chai, coolers, coffee, and quick bites with
            consistent quality across locations.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/menu"
              className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Explore Menu
            </a>
            <a
              href="/locations"
              className="rounded-lg border border-black/15 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80"
            >
              Find a Location
            </a>
          </div>
        </div>

        {/* Right: “Pump Panel” */}
        <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                What we stand for
              </div>
              <h2 className="mt-2 text-xl font-semibold">Speed. Consistency. Taste.</h2>
              <p className="mt-1 text-sm text-slate-700">
                Simple choices that scale into a franchise-friendly system.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 px-4 py-3 text-white">
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Badge
              </div>
              <div className="mt-1 font-[var(--font-mono)] tracking-wider">
                TP • 001
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-black/10 bg-white/70 p-4">
              <div className="text-sm font-semibold">Quality</div>
              <div className="mt-1 text-sm text-slate-600">
                Fresh ingredients & consistent recipes
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-white/70 p-4">
              <div className="text-sm font-semibold">Speed</div>
              <div className="mt-1 text-sm text-slate-600">
                Quick service, easy pickup flow
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-white/70 p-4">
              <div className="text-sm font-semibold">Scale</div>
              <div className="mt-1 text-sm text-slate-600">
                Multi-location ready foundation
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </main>
  );
}

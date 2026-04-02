import { fetchMenu, fetchSpecial, DEFAULT_STORE_SLUG } from '@/lib/api';

function formatINR(n: number) {
  return `₹${n}`;
}

export default async function Home() {
  let special = null;
  let items: { name: string; desc: string; price: string }[] = [];

  try {
    const [sp, menu] = await Promise.all([
      fetchSpecial(DEFAULT_STORE_SLUG),
      fetchMenu(DEFAULT_STORE_SLUG),
    ]);

    special = sp;

    items = menu.slice(0, 8).map((m) => ({
      name: m.name,
      desc: m.description ?? '',
      price: formatINR(m.priceInr),
    }));
  } catch {
    // fallback so UI doesn't break if API is down
    items = [
      { name: 'Masala Chai', desc: 'Fast pickup', price: '₹12' },
      { name: 'Adrak Chai', desc: 'Ginger • Cozy', price: '₹12' },
      { name: 'Elaichi Chai', desc: 'Cardamom • Cozy', price: '₹12' },
      { name: 'Cold Coffee', desc: 'Icy • Refreshing', price: '₹119' },
    ];
  }

  return (
    <div className="min-h-screen text-slate-900">
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-slate-700">
              Petrol-pump energy. Café comfort.
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fuel your day at <span className="text-brand">Tea Pump</span>
            </h1>

            <p className="text-base leading-7 text-slate-700">
              Premium chai, iced coolers, and quick bites — served fast with a bold pump-station vibe.
              Grab, sip, and go.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/menu"
                className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                View Menu
              </a>
              <a
                href="/locations"
                className="rounded-lg border border-black/15 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80"
              >
                Find a Location
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Today’s Special
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  {special?.itemName ?? 'Sandwich • Paneer'}
                </h2>

                <p className="mt-1 text-sm text-slate-700">
                  {special?.subtitle ?? 'Order • Pay • Go'}
                </p>
              </div>

              <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold">
                {special ? formatINR(special.priceInr) : '₹179'}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
              {(special?.tags?.length ? special.tags : ['Fast pickup', 'Spiced', 'Tangy']).map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section id="menu" className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Quick Picks</h3>
              <p className="mt-1 text-sm text-slate-600">Popular items across stores</p>
            </div>
            <a className="text-sm font-semibold text-brand hover:text-brand-dark" href="/order">
              Order now →
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((it) => (
              <div
                key={it.name}
                className="rounded-2xl border border-black/10 bg-white/60 p-4 shadow-sm hover:bg-white/80"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-semibold">{it.name}</div>
                  <div className="text-sm font-semibold text-slate-900">{it.price}</div>
                </div>
                <div className="mt-1 text-sm text-slate-600">{it.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm" id="loyalty">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Loyalty Fuel</h3>
              <p className="mt-1 text-sm text-slate-600">6/9 stamps to a free drink</p>
            </div>
            <a
              href="#"
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Join Loyalty
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
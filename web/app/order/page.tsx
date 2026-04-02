const categories = [
  {
    title: "Chai",
    items: [
      { name: "Masala Chai", desc: "Fast pickup", price: 12 },
      { name: "Adrak Chai", desc: "Ginger • Cozy", price: 12 },
      { name: "Elaichi Chai", desc: "Cardamom • Cozy", price: 12 },
    ],
  },
  {
    title: "Cold & Refreshing",
    items: [
      { name: "Cold Coffee", desc: "Icy • Refreshing", price: 119 },
      { name: "Lassi", desc: "Icy • Refreshing", price: 50 },
    ],
  },
  {
    title: "Snacks",
    items: [
      { name: "Shegao Kachori", desc: "Crisp • Spiced • Perfect pair", price: 50 },
      { name: "Tikka Pav", desc: "Spiced • Tangy", price: 50 },
      { name: "Veg Maggi", desc: "Hot • Veggie • Comfort", price: 50 },
    ],
  },
];

function PriceDisplay({ value }: { value: number }) {
  return (
    <div className="rounded-xl bg-slate-950 px-3 py-2 text-right text-white shadow-sm">
      <div className="text-[10px] uppercase tracking-wider text-white/60">Price</div>
      <div className="font-[var(--font-mono)] text-lg leading-none">₹{value}</div>
    </div>
  );
}

function CartRow({
  name,
  price,
  qty,
}: {
  name: string;
  price: number;
  qty: number;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-black/10 bg-white/70 p-4">
      <div>
        <div className="text-sm font-semibold">{name}</div>
        <div className="mt-1 text-xs text-slate-600">₹{price} each</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="h-9 w-9 rounded-lg border border-black/10 bg-white/80 text-sm font-semibold hover:bg-white"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <div className="min-w-8 text-center font-[var(--font-mono)] text-sm">
          {qty}
        </div>
        <button
          type="button"
          className="h-9 w-9 rounded-lg border border-black/10 bg-white/80 text-sm font-semibold hover:bg-white"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function OrderPage() {
  // Static demo cart for now (we’ll wire state + API next)
  const demoCart = [
    { name: "Masala Chai", price: 12, qty: 2 },
    { name: "Veg Maggi", price: 50, qty: 1 },
  ];

  const subtotal = demoCart.reduce((sum, it) => sum + it.price * it.qty, 0);
  const taxes = Math.round(subtotal * 0.05); // demo 5%
  const total = subtotal + taxes;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="inline-flex rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-slate-700">
            Order Online (Scaffold)
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">Build your order</h1>
          <p className="mt-1 text-sm text-slate-600">
            Next step: add cart state + checkout + API integration.
          </p>
        </div>

        <a
          href="/menu"
          className="rounded-lg border border-black/15 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
        >
          View Menu
        </a>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Left: Items */}
        <section className="lg:col-span-2 space-y-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm"
            >
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-xl font-semibold">{cat.title}</h2>
                <div className="text-xs text-slate-600">
                  Tap items to add (next step)
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {cat.items.map((it) => (
                  <button
                    key={it.name}
                    type="button"
                    className="group rounded-2xl border border-black/10 bg-white/70 p-5 text-left shadow-sm hover:bg-white/90"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-base font-semibold">{it.name}</div>
                        <div className="mt-1 text-sm text-slate-600">{it.desc}</div>
                      </div>
                      <PriceDisplay value={it.price} />
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                      + Add to cart
                      <span className="text-brand/60 group-hover:text-brand">
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Right: Cart */}
        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Cart
              </div>
              <div className="mt-1 text-lg font-semibold">Pickup order</div>
            </div>

            <div className="rounded-xl bg-slate-950 px-4 py-3 text-white">
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Items
              </div>
              <div className="mt-1 font-[var(--font-mono)] tracking-wider">
                {demoCart.reduce((s, i) => s + i.qty, 0)}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {demoCart.map((it) => (
              <CartRow key={it.name} name={it.name} price={it.price} qty={it.qty} />
            ))}
          </div>

          <div className="mt-6 space-y-2 rounded-2xl border border-black/10 bg-white/70 p-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-700">Subtotal</span>
              <span className="font-[var(--font-mono)]">₹{subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-700">Taxes (demo)</span>
              <span className="font-[var(--font-mono)]">₹{taxes}</span>
            </div>
            <div className="h-px bg-black/10" />
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-[var(--font-mono)] font-semibold">₹{total}</span>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Checkout (next step)
          </button>

          <p className="mt-3 text-xs text-slate-600">
            We’ll add location selection + pickup time + payments after cart state.
          </p>
        </aside>
      </div>
    </main>
  );
}

import { fetchMenu, DEFAULT_STORE_SLUG, MenuItemDto } from '@/lib/api';

function formatINR(n: number) {
  return `₹${n}`;
}

function titleForCategory(cat: string) {
  if (cat === 'chai') return 'Chai';
  if (cat === 'coolers') return 'Cold & Refreshing';
  if (cat === 'snacks') return 'Snacks';
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

function PriceDisplay({ value }: { value: number }) {
  return (
    <div className="rounded-xl bg-slate-950 px-3 py-2 text-right text-white shadow-sm">
      <div className="text-[10px] uppercase tracking-wider text-white/60">Price</div>
      <div className="font-[var(--font-mono)] text-lg leading-none">{formatINR(value)}</div>
    </div>
  );
}

export default async function MenuPage() {
  let items: MenuItemDto[] = [];
  try {
    items = await fetchMenu(DEFAULT_STORE_SLUG);
  } catch {
    items = [];
  }

  const grouped = items.reduce<Record<string, MenuItemDto[]>>((acc, it) => {
    acc[it.category] = acc[it.category] ?? [];
    acc[it.category].push(it);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Menu</h1>
          <p className="mt-1 text-sm text-slate-600">Quick picks and café favorites</p>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {categories.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 text-sm text-slate-700">
            Menu not available right now.
          </div>
        ) : (
          categories.map((cat) => (
            <section key={cat} className="space-y-4">
              <div className="flex items-end justify-between">
                <h2 className="text-xl font-semibold">{titleForCategory(cat)}</h2>
                <span className="text-xs text-slate-600">{grouped[cat].length} items</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[cat].map((it) => (
                  <div
                    key={it.id}
                    className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm hover:bg-white/80"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-base font-semibold">{it.name}</div>
                        <div className="mt-1 text-sm text-slate-600">{it.description ?? ''}</div>
                      </div>
                      <PriceDisplay value={it.priceInr} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  );
}
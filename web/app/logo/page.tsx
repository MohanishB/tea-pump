import { LogoNozzleDrop, LogoMeterCup, LogoTPBadge } from "@/components/Logo";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-4 flex items-center gap-4">
        {children}
      </div>
      <div className="mt-3 text-xs text-slate-600">
        Tip: These scale cleanly and inherit <span className="font-[var(--font-mono)]">text-brand</span>.
      </div>
    </div>
  );
}

export default function LogoPreviewPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Logo Options</h1>
      <p className="mt-2 text-sm text-slate-600">
        Pick one and we’ll plug it into the header + favicon later.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card title="A) Pump nozzle + tea drop">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand text-white">
            <LogoNozzleDrop className="h-9 w-9 text-white" />
          </div>
          <LogoNozzleDrop className="h-10 w-10 text-brand" />
          <LogoNozzleDrop className="h-10 w-10 text-slate-950" />
        </Card>

        <Card title="B) Fuel meter + tea cup">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand text-white">
            <LogoMeterCup className="h-9 w-9 text-white" />
          </div>
          <LogoMeterCup className="h-10 w-10 text-brand" />
          <LogoMeterCup className="h-10 w-10 text-slate-950" />
        </Card>

        <Card title="C) TP monogram badge">
          <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand text-white">
            <LogoTPBadge className="h-9 w-9 text-white" />
          </div>
          <LogoTPBadge className="h-10 w-10 text-brand" />
          <LogoTPBadge className="h-10 w-10 text-slate-950" />
        </Card>
      </div>
    </main>
  );
}

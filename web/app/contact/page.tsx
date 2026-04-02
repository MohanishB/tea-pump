export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
          <p className="mt-1 text-sm text-slate-600">
            Questions, feedback, or franchise interest — reach out.
          </p>
        </div>

        <a
          href="/about"
          className="rounded-lg border border-black/15 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
        >
          About Tea Pump
        </a>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Contact form (UI only for now) */}
        <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
          <div className="text-lg font-semibold">Send a message</div>
          

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                className="mt-2 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none focus:border-black/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none focus:border-black/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Reason</label>
              <select className="mt-2 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none focus:border-black/20">
                <option>General</option>
                <option>Feedback</option>
                <option>Franchise</option>
                <option>Careers</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none focus:border-black/20"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info panel */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Business
            </div>
            <div className="mt-2 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-semibold">Email:</span> hello@teapump.in
              </div>
              <div>
                <span className="font-semibold">Phone:</span> +91-XXXXXXXXXX
              </div>
              <div>
                <span className="font-semibold">Hours:</span> 7:00 AM – 11:00 PM
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-slate-950 p-6 text-white shadow-sm">
            <div className="text-[10px] uppercase tracking-wider text-white/60">
              Franchise inquiry
            </div>
            <div className="mt-2 text-lg font-semibold">Open your own Tea Pump</div>
            <p className="mt-2 text-sm text-white/75">
              Share your city and timeline — we’ll reply with requirements,
              investment range, and rollout steps.
            </p>

            <a
              href="#"
              className="mt-5 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Franchise form →
            </a>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Location
            </div>
            <div className="mt-2 text-sm text-slate-700">
              NIT Complex Raghuji Nagar, Nagpur.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

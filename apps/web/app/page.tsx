import Link from "next/link"

const FEATURES = [
  {
    title: "Vision Inventory",
    body: "Pan your phone across the shelf. Bottles named, categorized, fill level estimated by a WebGPU meniscus shader. Your bar becomes structured data.",
  },
  {
    title: "Tonight's Menu",
    body: "Geo-, weather-, season- and taste-graph-aware. Every evening, TopShelf composes a printable 5–7 cocktail menu using only what you own. Original drinks, not recipe lookups.",
  },
  {
    title: "The Bartender",
    body: "A voice-first persona. Greets you by name. Knows your shelf. Asks what you're in the mood for. Listens. Pushes back. Adapts.",
  },
  {
    title: "Live Coaching",
    body: "Camera tracks your pour in real time. Corrects gently. Confirms technique. Times dilution. You make a better drink.",
  },
  {
    title: "The Flavor Graph",
    body: "A weighted graph of ingredients, flavors, techniques. Every reaction you give propagates as edge weight tuned for you. The system gets weirder and more yours.",
  },
  {
    title: "Bar Program",
    body: "For working bars. Upload your backbar — TopShelf designs seasonal menus, costs them out, trains staff, simulates margins.",
  },
]

export default function LandingPage() {
  return (
    <main className="grain">
      {/* ───── Nav ───── */}
      <header className="border-b border-[color:var(--hairline)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="font-display text-xl tracking-tight text-cream">
            Top<span className="text-bitters">Shelf</span>
          </div>
          <nav className="hidden gap-8 text-sm text-mercury md:flex">
            <a href="#how" className="transition hover:text-cream">
              How it works
            </a>
            <a href="#program" className="transition hover:text-cream">
              For bars
            </a>
            <a href="#manifesto" className="transition hover:text-cream">
              Manifesto
            </a>
          </nav>
          <Link
            href="/menu"
            className="rounded-md border border-bitters/50 bg-bitters/10 px-4 py-2 text-sm text-cream transition hover:bg-bitters/20"
          >
            Try the demo
          </Link>
        </div>
      </header>

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pt-32 lg:pt-40">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-carbon/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-mercury">
              <span className="h-1.5 w-1.5 rounded-full bg-bitters" />
              Pre-alpha · The Sentient Bar
            </div>
            <h1 className="text-balance font-display text-5xl leading-[1.02] text-cream sm:text-7xl lg:text-8xl">
              Every bottle you own,{" "}
              <span className="italic text-bitters">composing itself</span> into
              tonight's menu.
            </h1>
            <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-mercury sm:text-xl">
              TopShelf reads your shelf, learns the shape of your taste, and writes original
              cocktails from exactly what you have on hand. A bartender's palate, externalized.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-2 rounded-lg bg-cream px-6 py-3 text-sm font-medium text-onyx transition hover:bg-bitters"
              >
                Compose a menu
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--hairline)] px-6 py-3 text-sm text-mercury transition hover:border-cream/30 hover:text-cream"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 top-32 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--bitters) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* hairline */}
        <div className="mx-auto h-px max-w-7xl bg-[color:var(--hairline)]" />
      </section>

      {/* ───── How it works ───── */}
      <section id="how" className="border-b border-[color:var(--hairline)]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.22em] text-bitters">
                The system
              </div>
              <h2 className="font-display text-4xl text-cream sm:text-5xl">
                A palate, externalized.
              </h2>
            </div>
            <p className="max-w-md text-mercury">
              The best bars run on a bartender's intuition. TopShelf holds that intuition in a
              structured graph and a multimodal model — then hands it back to you.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-[color:var(--hairline)] sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="group relative bg-carbon p-8 transition hover:bg-carbon-elev"
              >
                <div className="mb-6 font-mono text-xs text-bitters">
                  {String(i + 1).padStart(2, "0")} /
                </div>
                <h3 className="mb-3 font-display text-2xl text-cream">{f.title}</h3>
                <p className="text-sm leading-relaxed text-mercury">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Bar program ───── */}
      <section id="program" className="border-b border-[color:var(--hairline)]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.22em] text-bitters">
                For bars
              </div>
              <h2 className="font-display text-4xl text-cream sm:text-5xl">
                A menu-engineering platform that thinks like a creative director.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-mercury">
                Upload your backbar. TopShelf designs a seasonal cocktail program, costs every
                drink to the milliliter, generates staff training cards, and simulates margins at
                your covers. Iterate the program weekly in conversation.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 text-sm text-mercury">
                <span className="h-px w-12 bg-bitters" />
                Private beta opening Q3
              </div>
            </div>
            <div className="rounded-xl border border-[color:var(--hairline)] bg-carbon p-8">
              <div className="space-y-6 font-mono text-sm">
                <Row label="Avg cost per drink" value="$2.43" />
                <Row label="Avg menu price" value="$17.00" />
                <Row label="Theoretical margin" value="85.7%" accent />
                <Row label="Seasonal drinks generated" value="42 / week" />
                <Row label="Staff training cards" value="auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Manifesto ───── */}
      <section id="manifesto">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-bitters">
            The manifesto
          </div>
          <p className="font-display text-3xl leading-snug text-cream sm:text-4xl">
            The best drinks are not built from recipes. They're built from a palate — a sense for
            what wants to live next to what, which corner of the flavor space hasn't been visited
            tonight, what the season demands.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-mercury">
            That palate has historically been locked inside a handful of bartenders. We are taking
            it out.
          </p>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t border-[color:var(--hairline)]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
          <div className="font-display text-lg text-cream">
            Top<span className="text-bitters">Shelf</span>
            <span className="ml-3 font-sans text-xs uppercase tracking-[0.18em] text-ash">
              Pre-alpha
            </span>
          </div>
          <div className="text-xs text-ash">
            © 2026 TopShelf. Drink at your own pace.
          </div>
        </div>
      </footer>
    </main>
  )
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-[color:var(--hairline)] pb-3 last:border-0 last:pb-0">
      <span className="text-mercury">{label}</span>
      <span className={accent ? "text-bitters" : "text-cream"}>{value}</span>
    </div>
  )
}

import Link from "next/link"
import { SHELF_PRESETS } from "@/lib/shelf-presets"
import { MenuComposer } from "@/components/menu-composer"

export const metadata = {
  title: "Compose a menu · TopShelf",
}

export default function MenuPage() {
  return (
    <main className="grain min-h-screen">
      <header className="border-b border-[color:var(--hairline)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-display text-xl tracking-tight text-cream">
            Top<span className="text-bitters">Shelf</span>
          </Link>
          <span className="text-xs uppercase tracking-[0.18em] text-ash">Composer</span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="mb-3 text-xs uppercase tracking-[0.22em] text-bitters">
          Tonight's menu
        </div>
        <h1 className="font-display text-4xl leading-tight text-cream sm:text-6xl">
          Choose a shelf. Tell me the mood.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mercury">
          TopShelf composes the menu from the ingredients on hand. Pick a preset shelf below — in
          production, this is your phone-scanned inventory.
        </p>

        <MenuComposer shelves={SHELF_PRESETS} />
      </section>
    </main>
  )
}

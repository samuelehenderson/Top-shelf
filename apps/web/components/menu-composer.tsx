"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ingredientById } from "@topshelf/flavor-graph"
import type { ShelfPreset } from "@/lib/shelf-presets"
import type { MenuResponse } from "@/app/api/menu/route"
import type { Cocktail } from "@/lib/menu-schema"

const MOOD_OPTIONS = [
  "spirit-forward",
  "low-ABV",
  "something bitter",
  "smoky",
  "bright and herbal",
  "after a long day",
] as const

export function MenuComposer({ shelves }: { shelves: ShelfPreset[] }) {
  const [shelfId, setShelfId] = useState<string>(shelves[0]!.id)
  const [mood, setMood] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<MenuResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const currentShelf = shelves.find((s) => s.id === shelfId)!

  async function compose() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shelfId, mood: mood || undefined }),
      })
      const data = (await res.json()) as MenuResponse
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "request failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-12 space-y-12">
      {/* Shelf picker */}
      <div>
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-bitters">
          01 / Your shelf
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {shelves.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setShelfId(s.id)}
              className={
                "rounded-lg border p-5 text-left transition " +
                (s.id === shelfId
                  ? "border-bitters bg-bitters/10 text-cream"
                  : "border-[color:var(--hairline)] bg-carbon text-mercury hover:border-cream/30")
              }
            >
              <div className="font-display text-lg text-cream">{s.name}</div>
              <p className="mt-2 text-xs leading-relaxed text-mercury">{s.description}</p>
              <div className="mt-3 font-mono text-[10px] text-ash">
                {s.shelfIds.length} bottles
              </div>
            </button>
          ))}
        </div>

        {/* Inventory preview */}
        <details className="mt-4 rounded-lg border border-[color:var(--hairline)] bg-carbon/60 p-4 text-sm">
          <summary className="cursor-pointer text-mercury">
            Inventory · {currentShelf.shelfIds.length} ingredients
          </summary>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-ash md:grid-cols-3">
            {currentShelf.shelfIds.map((id) => {
              const ing = ingredientById(id)
              return (
                <li key={id}>
                  <span className="text-mercury">{ing?.name ?? id}</span>
                </li>
              )
            })}
          </ul>
        </details>
      </div>

      {/* Mood */}
      <div>
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-bitters">
          02 / Mood (optional)
        </div>
        <div className="flex flex-wrap gap-2">
          {MOOD_OPTIONS.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMood(mood === m ? "" : m)}
              className={
                "rounded-full border px-4 py-1.5 text-xs transition " +
                (mood === m
                  ? "border-bitters bg-bitters/10 text-cream"
                  : "border-[color:var(--hairline)] text-mercury hover:border-cream/30")
              }
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Compose */}
      <div>
        <button
          type="button"
          disabled={loading}
          onClick={compose}
          className="group inline-flex items-center gap-3 rounded-lg bg-cream px-7 py-3.5 text-sm font-medium text-onyx transition hover:bg-bitters disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Spinner /> Composing
            </>
          ) : (
            <>
              Compose tonight's menu
              <span className="transition group-hover:translate-x-1">→</span>
            </>
          )}
        </button>
        {error && <p className="mt-3 text-sm text-vermouth">{error}</p>}
      </div>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.section
            key="result"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-[color:var(--hairline)] bg-carbon p-8 shadow-card sm:p-12"
          >
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em]">
              <span className="text-bitters">The Menu</span>
              <span className="text-ash">
                Source:{" "}
                {result.source === "claude" ? (
                  <span className="text-absinthe">live · Claude Opus 4.7</span>
                ) : (
                  <span className="text-citrine">seeded demo data</span>
                )}
                {result.cached && (result.cached.read > 0 || result.cached.creation > 0) && (
                  <span className="ml-3 text-ash">
                    · cache read {result.cached.read} / write {result.cached.creation}
                  </span>
                )}
              </span>
            </div>
            <h2 className="font-display text-4xl text-cream sm:text-5xl">{result.menu.title}</h2>
            <p className="mt-5 max-w-2xl text-balance text-lg italic leading-relaxed text-mercury">
              {result.menu.prologue}
            </p>

            <div className="mt-12 space-y-px">
              {result.menu.cocktails.map((c, i) => (
                <CocktailCard key={i} index={i} cocktail={c} />
              ))}
            </div>

            {result.note && (
              <p className="mt-8 border-t border-[color:var(--hairline)] pt-4 text-xs italic text-ash">
                {result.note}
              </p>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

function CocktailCard({ cocktail, index }: { cocktail: Cocktail; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
      className="grid grid-cols-12 gap-6 border-t border-[color:var(--hairline)] py-8 first:border-t-0 first:pt-0"
    >
      <div className="col-span-12 sm:col-span-5">
        <div className="mb-2 font-mono text-xs text-ash">№ {String(index + 1).padStart(2, "0")}</div>
        <h3 className="font-display text-3xl leading-tight text-cream">{cocktail.name}</h3>
        <p className="mt-2 text-sm italic text-bitters">{cocktail.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-mercury">{cocktail.story}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {cocktail.flavorAxis.map((f) => (
            <span
              key={f}
              className="rounded-full border border-[color:var(--hairline)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mercury"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:col-span-3">
        <Meta label="Glass" value={cocktail.glass} />
        <Meta label="Ice" value={cocktail.ice} />
        <Meta label="Technique" value={cocktail.technique} />
        <Meta label="Garnish" value={cocktail.garnish} fullSpan />
      </div>

      <div className="col-span-12 sm:col-span-4">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-bitters">
          Ingredients
        </div>
        <ul className="space-y-1 text-sm">
          {cocktail.ingredients.map((ing, j) => {
            const meta = ingredientById(ing.ingredientId)
            return (
              <li key={j} className="flex items-baseline justify-between gap-3">
                <span className="text-cream">{meta?.name ?? ing.ingredientId}</span>
                <span className="font-mono text-xs text-mercury">{ing.measurement}</span>
              </li>
            )
          })}
        </ul>

        <div className="mt-5 mb-2 font-mono text-[10px] uppercase tracking-wider text-bitters">
          Method
        </div>
        <ol className="space-y-1.5 text-sm text-mercury">
          {cocktail.steps.map((s, j) => (
            <li key={j} className="flex gap-3">
              <span className="mt-[2px] font-mono text-[10px] text-ash">{j + 1}</span>
              <span>{s.instruction}</span>
            </li>
          ))}
        </ol>
      </div>
    </motion.article>
  )
}

function Meta({ label, value, fullSpan }: { label: string; value: string; fullSpan?: boolean }) {
  return (
    <div className={fullSpan ? "col-span-2" : undefined}>
      <div className="mb-0.5 font-mono text-[10px] uppercase tracking-wider text-bitters">
        {label}
      </div>
      <div className="text-cream">{value}</div>
    </div>
  )
}

function Spinner() {
  return (
    <span
      aria-hidden
      className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-onyx/30 border-t-onyx"
    />
  )
}

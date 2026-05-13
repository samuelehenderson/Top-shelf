import type { Category, Edge, Ingredient } from "./types"
import { ingredients, edges } from "./data/index"

const byId = new Map<string, Ingredient>(ingredients.map((i) => [i.id, i]))

const adjacency = (() => {
  const m = new Map<string, Edge[]>()
  for (const e of edges) {
    if (!m.has(e.from)) m.set(e.from, [])
    if (!m.has(e.to)) m.set(e.to, [])
    m.get(e.from)!.push(e)
    // edges are stored directed but pairings are symmetric; mirror.
    m.get(e.to)!.push({ from: e.to, to: e.from, weight: e.weight, rationale: e.rationale })
  }
  return m
})()

export function ingredientById(id: string): Ingredient | undefined {
  return byId.get(id)
}

export function ingredientsByCategory(category: Category): Ingredient[] {
  return ingredients.filter((i) => i.category === category && !i.deprecated)
}

export function pairWeight(a: string, b: string): number {
  const adj = adjacency.get(a)
  if (!adj) return 0
  return adj.find((e) => e.to === b)?.weight ?? 0
}

export function neighborsOf(id: string, minWeight = 0.5): Edge[] {
  return (adjacency.get(id) ?? []).filter((e) => e.weight >= minWeight)
}

/**
 * Compact a subset of the graph into a prompt-friendly description for the model.
 * Called per-request with the user's shelf so the cacheable system block stays
 * stable while the user-specific facts go in the per-request block.
 */
export function describeForPrompt(shelfIds: string[]): string {
  const lines: string[] = []
  lines.push("## Available shelf")
  for (const id of shelfIds) {
    const ing = byId.get(id)
    if (!ing) continue
    const flavorNames = ing.flavors.join(", ")
    lines.push(
      `- ${ing.name}${ing.subcategory ? ` (${ing.subcategory})` : ""}` +
        ` — flavors: ${flavorNames}${ing.notes ? ` · ${ing.notes}` : ""}`,
    )
  }

  lines.push("")
  lines.push("## Notable pairings within this shelf")
  const set = new Set(shelfIds)
  const surfaced = new Set<string>()
  for (const e of edges) {
    if (!set.has(e.from) || !set.has(e.to)) continue
    const key = [e.from, e.to].sort().join("|")
    if (surfaced.has(key)) continue
    surfaced.add(key)
    if (e.weight < 0.7) continue
    const a = byId.get(e.from)?.name ?? e.from
    const b = byId.get(e.to)?.name ?? e.to
    lines.push(`- ${a} ↔ ${b} (${e.weight.toFixed(2)})${e.rationale ? ` — ${e.rationale}` : ""}`)
  }

  return lines.join("\n")
}

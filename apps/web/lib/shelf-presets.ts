/**
 * Pre-built shelves the demo lets the user pick from. Each maps to a set of
 * ingredient IDs in @topshelf/flavor-graph and a corresponding fallback menu.
 */

export interface ShelfPreset {
  id: string
  name: string
  description: string
  shelfIds: string[]
}

export const SHELF_PRESETS: ShelfPreset[] = [
  {
    id: "starter-classic",
    name: "The Starter Shelf",
    description: "Everything you need for the canon — Manhattan, Old Fashioned, Negroni, Daiquiri, Martini.",
    shelfIds: [
      "i.bourbon",
      "i.rye",
      "i.gin-london-dry",
      "i.rum-white",
      "i.vermouth-sweet",
      "i.vermouth-dry",
      "i.campari",
      "i.bitters-aromatic",
      "i.bitters-orange",
      "i.lemon-juice",
      "i.lime-juice",
      "i.simple-syrup",
      "i.demerara-syrup",
    ],
  },
  {
    id: "smoke-and-citrus",
    name: "Smoke & Citrus",
    description: "An agave-and-Islay-leaning shelf. Mezcal, bourbon, scotch, bitter amaros, salt at the rim.",
    shelfIds: [
      "i.mezcal-espadin",
      "i.tequila-blanco",
      "i.bourbon",
      "i.scotch-blended",
      "i.scotch-islay",
      "i.cynar",
      "i.campari",
      "i.bitters-mole",
      "i.bitters-aromatic",
      "i.lime-juice",
      "i.grapefruit-juice",
      "i.lemon-juice",
      "i.agave-syrup",
      "i.honey-syrup",
      "i.demerara-syrup",
      "i.soda-water",
      "i.ginger-root",
    ],
  },
  {
    id: "garden-evening",
    name: "The Garden Shelf",
    description: "Gin, herbs, citrus, elderflower, tonic. Quiet, floral, summer-leaning.",
    shelfIds: [
      "i.gin-london-dry",
      "i.gin-contemporary",
      "i.vermouth-dry",
      "i.vermouth-bianco",
      "i.elderflower-liqueur",
      "i.aperol",
      "i.bitters-orange",
      "i.lemon-juice",
      "i.lime-juice",
      "i.simple-syrup",
      "i.honey-syrup",
      "i.tonic-water",
      "i.soda-water",
      "i.mint-leaf",
      "i.basil-leaf",
      "i.thyme-sprig",
    ],
  },
]

export function shelfById(id: string): ShelfPreset | undefined {
  return SHELF_PRESETS.find((s) => s.id === id)
}

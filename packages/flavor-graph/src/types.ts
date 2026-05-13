/**
 * TopShelf flavor graph — type surface.
 *
 * The graph has four node kinds (Ingredient, Flavor, Technique, Glass) and
 * weighted edges between them. It is the structured backbone the model
 * reasons over when generating menus.
 */

export type Category =
  | "whiskey"
  | "gin"
  | "vodka"
  | "rum"
  | "tequila"
  | "mezcal"
  | "brandy"
  | "amaro"
  | "vermouth"
  | "liqueur"
  | "bitters"
  | "wine"
  | "fortified"
  | "fruit"
  | "herb"
  | "spice"
  | "sweetener"
  | "modifier"
  | "mixer"

export type Subcategory =
  // whiskey
  | "bourbon"
  | "rye"
  | "scotch-blended"
  | "scotch-single-malt-islay"
  | "scotch-single-malt-highland"
  | "scotch-single-malt-speyside"
  | "irish"
  | "japanese-whisky"
  // agave
  | "tequila-blanco"
  | "tequila-reposado"
  | "tequila-anejo"
  | "mezcal-joven"
  | "mezcal-espadin"
  // gin
  | "gin-london-dry"
  | "gin-old-tom"
  | "gin-genever"
  | "gin-contemporary"
  // rum
  | "rum-white"
  | "rum-aged"
  | "rum-blackstrap"
  | "rum-rhum-agricole"
  | "rum-overproof"
  // amari
  | "amaro-light"
  | "amaro-medium"
  | "amaro-dark"
  | "fernet"
  // liqueurs
  | "orange-liqueur"
  | "herbal-liqueur"
  | "nut-liqueur"
  | "coffee-liqueur"
  | "fruit-liqueur"
  // misc
  | "absinthe"
  | "chartreuse"
  | "champagne"
  | "sparkling-wine"
  | "prosecco"

export interface Ingredient {
  id: string
  name: string
  category: Category
  subcategory?: Subcategory
  abv?: number
  origin?: string
  /** representative flavor node ids — coarse facets. */
  flavors: string[]
  /** notes shown in UI / fed to the model as additional context. */
  notes?: string
  /** common shelf bottle examples (for vision OCR canonicalization). */
  examples?: string[]
  deprecated?: boolean
}

export interface Flavor {
  id: string
  name: string
  /** axis grouping (e.g. "sweet", "bitter", "smoke") for charts. */
  axis: FlavorAxis
}

export type FlavorAxis =
  | "sweet"
  | "bitter"
  | "sour"
  | "salty"
  | "umami"
  | "aromatic"
  | "smoke"
  | "spice"
  | "earth"
  | "fruit"
  | "floral"
  | "herbal"
  | "wood"

export interface Technique {
  id: string
  name: string
  description: string
}

export interface Glass {
  id: string
  name: string
  volumeMl: number
}

/** Weighted edge between any two nodes. Weight in [0, 1]. */
export interface Edge {
  from: string
  to: string
  weight: number
  /** human-readable rationale, surfaced in explanations. */
  rationale?: string
}

export interface FlavorGraphData {
  ingredients: Ingredient[]
  flavors: Flavor[]
  techniques: Technique[]
  glasses: Glass[]
  edges: Edge[]
}

import type { Edge } from "../types"

/**
 * Seed edges. Weight in [0, 1]. 1.0 = canonical pairing, 0.5 = plausible.
 * These are bartender heuristics, not statistical priors — the model treats
 * them as soft hints, not constraints.
 */
export const edges: Edge[] = [
  // ---- canonical spirit pairings ----
  { from: "i.bourbon", to: "i.vermouth-sweet", weight: 0.95, rationale: "Manhattan family." },
  { from: "i.rye", to: "i.vermouth-sweet", weight: 1.0, rationale: "The Manhattan." },
  { from: "i.rye", to: "i.absinthe", weight: 0.9, rationale: "Sazerac." },
  { from: "i.rye", to: "i.bitters-peychauds", weight: 0.95, rationale: "Sazerac." },
  { from: "i.bourbon", to: "i.demerara-syrup", weight: 0.9, rationale: "Old Fashioned." },
  { from: "i.bourbon", to: "i.bitters-aromatic", weight: 0.95, rationale: "Old Fashioned." },
  { from: "i.gin-london-dry", to: "i.vermouth-dry", weight: 1.0, rationale: "The Martini." },
  { from: "i.gin-london-dry", to: "i.lemon-juice", weight: 0.9, rationale: "Sour family." },
  { from: "i.gin-london-dry", to: "i.tonic-water", weight: 0.95, rationale: "G&T." },
  { from: "i.gin-london-dry", to: "i.campari", weight: 0.9, rationale: "Negroni." },
  { from: "i.gin-london-dry", to: "i.vermouth-sweet", weight: 0.85, rationale: "Negroni." },
  { from: "i.gin-old-tom", to: "i.vermouth-sweet", weight: 0.9, rationale: "Martinez." },
  { from: "i.gin-old-tom", to: "i.maraschino", weight: 0.85, rationale: "Martinez." },
  { from: "i.tequila-blanco", to: "i.lime-juice", weight: 1.0, rationale: "Margarita / Paloma." },
  { from: "i.tequila-blanco", to: "i.cointreau", weight: 0.95, rationale: "Margarita." },
  { from: "i.tequila-blanco", to: "i.grapefruit-juice", weight: 0.9, rationale: "Paloma." },
  { from: "i.mezcal-espadin", to: "i.lime-juice", weight: 0.9 },
  { from: "i.mezcal-espadin", to: "i.cynar", weight: 0.85, rationale: "Smoke + artichoke." },
  { from: "i.mezcal-espadin", to: "i.grapefruit-juice", weight: 0.85 },
  { from: "i.rum-white", to: "i.lime-juice", weight: 1.0, rationale: "Daiquiri." },
  { from: "i.rum-white", to: "i.simple-syrup", weight: 0.95, rationale: "Daiquiri." },
  { from: "i.rum-aged", to: "i.lime-juice", weight: 0.85 },
  { from: "i.rum-aged", to: "i.orgeat", weight: 0.9, rationale: "Mai Tai." },
  { from: "i.rum-aged", to: "i.curacao", weight: 0.9, rationale: "Mai Tai." },
  { from: "i.rum-jamaican", to: "i.pineapple-juice", weight: 0.95, rationale: "Tiki backbone." },
  { from: "i.rum-jamaican", to: "i.lime-juice", weight: 0.9 },
  { from: "i.cognac", to: "i.lemon-juice", weight: 0.9, rationale: "Sidecar." },
  { from: "i.cognac", to: "i.cointreau", weight: 0.95, rationale: "Sidecar." },
  { from: "i.cognac", to: "i.curacao", weight: 0.85 },
  { from: "i.calvados", to: "i.lemon-juice", weight: 0.85 },
  { from: "i.pisco", to: "i.lime-juice", weight: 0.95, rationale: "Pisco Sour." },

  // ---- bittering ----
  { from: "i.campari", to: "i.vermouth-sweet", weight: 1.0, rationale: "Negroni / Americano." },
  { from: "i.campari", to: "i.soda-water", weight: 0.85, rationale: "Americano." },
  { from: "i.aperol", to: "i.prosecco", weight: 1.0, rationale: "Spritz." },
  { from: "i.aperol", to: "i.soda-water", weight: 0.85 },
  { from: "i.cynar", to: "i.vermouth-sweet", weight: 0.85 },
  { from: "i.cynar", to: "i.lemon-juice", weight: 0.7 },
  { from: "i.averna", to: "i.bourbon", weight: 0.85, rationale: "Black Manhattan family." },
  { from: "i.fernet-branca", to: "i.coffee-liqueur", weight: 0.7 },
  { from: "i.amaro-nonino", to: "i.bourbon", weight: 0.9, rationale: "Paper Plane." },
  { from: "i.amaro-nonino", to: "i.aperol", weight: 0.9, rationale: "Paper Plane." },
  { from: "i.amaro-nonino", to: "i.lemon-juice", weight: 0.85, rationale: "Paper Plane." },

  // ---- bitters as seasoning ----
  { from: "i.bitters-aromatic", to: "i.bourbon", weight: 0.9 },
  { from: "i.bitters-aromatic", to: "i.rum-aged", weight: 0.85 },
  { from: "i.bitters-orange", to: "i.gin-london-dry", weight: 0.85 },
  { from: "i.bitters-mole", to: "i.mezcal-espadin", weight: 0.9 },
  { from: "i.bitters-mole", to: "i.tequila-reposado", weight: 0.85 },
  { from: "i.bitters-peychauds", to: "i.cognac", weight: 0.8 },

  // ---- modifiers ----
  { from: "i.maraschino", to: "i.gin-old-tom", weight: 0.85 },
  { from: "i.maraschino", to: "i.rum-white", weight: 0.75 },
  { from: "i.maraschino", to: "i.lime-juice", weight: 0.75 },
  { from: "i.chartreuse-green", to: "i.gin-london-dry", weight: 0.9, rationale: "Last Word." },
  { from: "i.chartreuse-green", to: "i.maraschino", weight: 0.95, rationale: "Last Word." },
  { from: "i.chartreuse-green", to: "i.lime-juice", weight: 0.9, rationale: "Last Word." },
  { from: "i.chartreuse-yellow", to: "i.bourbon", weight: 0.8 },
  { from: "i.benedictine", to: "i.cognac", weight: 0.85 },
  { from: "i.benedictine", to: "i.bourbon", weight: 0.8 },
  { from: "i.creme-de-violette", to: "i.gin-london-dry", weight: 0.85, rationale: "Aviation." },
  { from: "i.elderflower-liqueur", to: "i.gin-contemporary", weight: 0.9 },
  { from: "i.coffee-liqueur", to: "i.vodka", weight: 0.95, rationale: "Espresso Martini." },
  { from: "i.coffee-liqueur", to: "i.rum-aged", weight: 0.8 },
  { from: "i.coffee-liqueur", to: "i.bourbon", weight: 0.75 },

  // ---- sherry & fortified ----
  { from: "i.sherry-fino", to: "i.gin-london-dry", weight: 0.85 },
  { from: "i.sherry-fino", to: "i.tequila-blanco", weight: 0.75 },
  { from: "i.sherry-amontillado", to: "i.bourbon", weight: 0.8 },
  { from: "i.sherry-px", to: "i.scotch-islay", weight: 0.85, rationale: "Smoke + dried fruit." },
  { from: "i.sherry-px", to: "i.bourbon", weight: 0.75 },
  { from: "i.port-tawny", to: "i.cognac", weight: 0.85 },

  // ---- citrus & sugar logic ----
  { from: "i.lemon-juice", to: "i.simple-syrup", weight: 0.95, rationale: "Sour spec backbone." },
  { from: "i.lime-juice", to: "i.simple-syrup", weight: 0.95, rationale: "Daiquiri spec." },
  { from: "i.lime-juice", to: "i.demerara-syrup", weight: 0.85 },
  { from: "i.lemon-juice", to: "i.honey-syrup", weight: 0.9, rationale: "Bee's Knees." },
  { from: "i.grapefruit-juice", to: "i.honey-syrup", weight: 0.85 },
  { from: "i.lime-juice", to: "i.orgeat", weight: 0.85 },

  // ---- herbal / aromatic ----
  { from: "i.mint-leaf", to: "i.rum-white", weight: 0.95, rationale: "Mojito." },
  { from: "i.mint-leaf", to: "i.bourbon", weight: 0.95, rationale: "Mint Julep." },
  { from: "i.mint-leaf", to: "i.lime-juice", weight: 0.85 },
  { from: "i.basil-leaf", to: "i.gin-london-dry", weight: 0.85 },
  { from: "i.basil-leaf", to: "i.tequila-blanco", weight: 0.75 },
  { from: "i.thyme-sprig", to: "i.gin-contemporary", weight: 0.8 },
  { from: "i.rosemary-sprig", to: "i.gin-london-dry", weight: 0.8 },
  { from: "i.ginger-root", to: "i.bourbon", weight: 0.8, rationale: "Penicillin." },
  { from: "i.ginger-root", to: "i.scotch-blended", weight: 0.85, rationale: "Penicillin base." },
  { from: "i.ginger-beer", to: "i.rum-white", weight: 0.9, rationale: "Dark & Stormy variant." },
  { from: "i.ginger-beer", to: "i.vodka", weight: 0.9, rationale: "Moscow Mule." },
  { from: "i.ginger-beer", to: "i.bourbon", weight: 0.8, rationale: "Kentucky Mule." },

  // ---- canonical bridges (cross-category) ----
  { from: "i.scotch-islay", to: "i.honey-syrup", weight: 0.9, rationale: "Penicillin float." },
  { from: "i.scotch-islay", to: "i.lemon-juice", weight: 0.75 },
  { from: "i.calvados", to: "i.cinnamon-stick", weight: 0.8 },
  { from: "i.cognac", to: "i.bitters-aromatic", weight: 0.8 },
  { from: "i.tequila-reposado", to: "i.lime-juice", weight: 0.85 },
  { from: "i.tequila-reposado", to: "i.agave-syrup", weight: 0.9 },
  { from: "i.mezcal-espadin", to: "i.agave-syrup", weight: 0.85 },

  // ---- bubbles ----
  { from: "i.champagne", to: "i.cognac", weight: 0.9, rationale: "French 75 variant / Champagne Cocktail." },
  { from: "i.champagne", to: "i.gin-london-dry", weight: 0.9, rationale: "French 75." },
  { from: "i.prosecco", to: "i.elderflower-liqueur", weight: 0.85 },
]

/**
 * @topshelf/flavor-graph
 *
 * The structured product knowledge that backs every menu generation.
 * Loaded into both the web app (for filtering and display) and the Claude
 * prompt (as a cacheable context block).
 */

export * from "./types"
export { data, ingredients, flavors, techniques, glasses, edges } from "./data/index"
export {
  ingredientById,
  ingredientsByCategory,
  pairWeight,
  neighborsOf,
  describeForPrompt,
} from "./graph"

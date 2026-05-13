import { z } from "zod"

/**
 * Schema for a generated cocktail menu. The route enforces this via
 * `client.messages.parse()` with `zodOutputFormat` — the response is validated
 * structurally before it ever reaches the UI.
 */

const RecipeStep = z.object({
  instruction: z.string().describe("One short imperative sentence."),
})

const Ingredient = z.object({
  ingredientId: z
    .string()
    .describe(
      "Stable ID from the supplied flavor graph (e.g. 'i.rye', 'i.lime-juice'). Use the canonical id, not free text.",
    ),
  measurement: z.string().describe("e.g. '2 oz', '0.75 oz', '2 dashes', '1 bar spoon'"),
  prep: z
    .string()
    .nullable()
    .describe("Optional prep note: 'expressed', 'rinse only', 'cracked', etc."),
})

export const CocktailSchema = z.object({
  name: z.string().describe("The drink's name. Original, evocative, never on the nose."),
  tagline: z
    .string()
    .describe("One short, lyrical line that captures its mood. Under 80 characters."),
  story: z
    .string()
    .describe(
      "Two or three sentences. Where this drink sits in the flavor space, what it's quietly doing.",
    ),
  glass: z.string().describe("e.g. 'Coupe', 'Nick & Nora', 'Rocks', 'Highball'"),
  ice: z.string().describe("e.g. 'Single large cube', 'Crushed', 'None — up'"),
  garnish: z.string().describe("Concise garnish line."),
  technique: z
    .enum(["shaken", "stirred", "built", "thrown", "swizzled", "muddled", "smoked", "washed"])
    .describe("Primary preparation."),
  ingredients: z.array(Ingredient).min(2).max(8),
  steps: z.array(RecipeStep).min(2).max(6),
  flavorAxis: z
    .array(z.string())
    .describe(
      "2-4 dominant flavor axes from {sweet, bitter, sour, smoke, spice, earth, fruit, floral, herbal, wood}.",
    ),
})

export const MenuSchema = z.object({
  title: z
    .string()
    .describe(
      "An evocative name for the menu — usually capturing the night's mood or the season.",
    ),
  prologue: z
    .string()
    .describe(
      "A short opening paragraph in the voice of a sommelier-meets-craftsman bartender. Two or three sentences. Slightly mysterious. Never jokey.",
    ),
  cocktails: z.array(CocktailSchema).min(3).max(7),
})

export type Cocktail = z.infer<typeof CocktailSchema>
export type Menu = z.infer<typeof MenuSchema>

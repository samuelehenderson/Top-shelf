import type { Menu } from "./menu-schema"

/**
 * Deterministic demo menus used when ANTHROPIC_API_KEY is unset or the live
 * call fails. Each shelf preset gets its own pre-composed menu so the UI is
 * always populated and the brand voice is always on-key.
 *
 * Keyed by the shelf preset id from /lib/shelf-presets.ts.
 */

export const FALLBACK_MENUS: Record<string, Menu> = {
  "starter-classic": {
    title: "Five Classics, Done Quietly",
    prologue:
      "An evening that wants the canon — the drinks that earned the canon. Each is the spec, untouched. The trick is restraint.",
    cocktails: [
      {
        name: "The Statement",
        tagline: "A Manhattan, no embellishment, no apology.",
        story:
          "Rye, sweet vermouth, two dashes of aromatic bitters. Stirred 30 turns. The benchmark every bar is measured against, including yours.",
        glass: "Nick & Nora",
        ice: "None — up",
        garnish: "Brandied cherry, no twist.",
        technique: "stirred",
        flavorAxis: ["wood", "bitter", "spice"],
        ingredients: [
          { ingredientId: "i.rye", measurement: "2 oz", prep: null },
          { ingredientId: "i.vermouth-sweet", measurement: "1 oz", prep: null },
          { ingredientId: "i.bitters-aromatic", measurement: "2 dashes", prep: null },
        ],
        steps: [
          { instruction: "Combine all over ice in a mixing glass." },
          { instruction: "Stir 30 seconds, until the glass frosts." },
          { instruction: "Strain into a chilled Nick & Nora." },
          { instruction: "Drop a brandied cherry into the well." },
        ],
      },
      {
        name: "Quiet Hour",
        tagline: "Old Fashioned. The original spec, the original intent.",
        story:
          "Sugar bullied just barely into solution, two dashes, two ounces of bourbon, a large cube. The first cocktail. Still the best.",
        glass: "Rocks",
        ice: "Single large cube",
        garnish: "Wide orange peel, expressed and dropped.",
        technique: "built",
        flavorAxis: ["sweet", "bitter", "wood"],
        ingredients: [
          { ingredientId: "i.bourbon", measurement: "2 oz", prep: null },
          { ingredientId: "i.demerara-syrup", measurement: "0.25 oz", prep: null },
          { ingredientId: "i.bitters-aromatic", measurement: "2 dashes", prep: null },
        ],
        steps: [
          { instruction: "Combine syrup and bitters in a rocks glass." },
          { instruction: "Add bourbon and a single large cube." },
          { instruction: "Stir for 30 seconds." },
          { instruction: "Express an orange peel over the surface, then drop it in." },
        ],
      },
      {
        name: "The Conversation",
        tagline: "Negroni. Equal parts, no debate.",
        story:
          "Gin, Campari, sweet vermouth — the most stable triangle in mixology. Built on a large cube, stirred briefly. It opens up as it dilutes.",
        glass: "Rocks",
        ice: "Single large cube",
        garnish: "Half-moon of orange.",
        technique: "stirred",
        flavorAxis: ["bitter", "herbal", "wood"],
        ingredients: [
          { ingredientId: "i.gin-london-dry", measurement: "1 oz", prep: null },
          { ingredientId: "i.campari", measurement: "1 oz", prep: null },
          { ingredientId: "i.vermouth-sweet", measurement: "1 oz", prep: null },
        ],
        steps: [
          { instruction: "Combine all in a rocks glass over a single large cube." },
          { instruction: "Stir 10 seconds." },
          { instruction: "Garnish with a half-moon of orange." },
        ],
      },
      {
        name: "Direct Address",
        tagline: "Daiquiri. The three-ingredient examination.",
        story:
          "No bartender's true skill is hidden here. Two parts rum, three-quarters lime, three-quarters sugar — shaken hard, served up. Every flaw exposed.",
        glass: "Coupe",
        ice: "None — up",
        garnish: "Lime wheel.",
        technique: "shaken",
        flavorAxis: ["sour", "sweet", "fruit"],
        ingredients: [
          { ingredientId: "i.rum-white", measurement: "2 oz", prep: null },
          { ingredientId: "i.lime-juice", measurement: "0.75 oz", prep: "fresh" },
          { ingredientId: "i.simple-syrup", measurement: "0.75 oz", prep: null },
        ],
        steps: [
          { instruction: "Combine in a shaker." },
          { instruction: "Add ice. Shake hard, 12 seconds." },
          { instruction: "Double strain into a chilled coupe." },
          { instruction: "Float a lime wheel on the surface." },
        ],
      },
      {
        name: "The Vesper, Reconsidered",
        tagline: "Martini. Cold as theory.",
        story:
          "Gin and dry vermouth, stirred until the glass cannot hold any more cold. Lemon twist, no olive — the citrus oils carry the botanicals.",
        glass: "Nick & Nora",
        ice: "None — up",
        garnish: "Wide lemon peel, expressed and dropped.",
        technique: "stirred",
        flavorAxis: ["herbal", "bitter", "floral"],
        ingredients: [
          { ingredientId: "i.gin-london-dry", measurement: "2.5 oz", prep: null },
          { ingredientId: "i.vermouth-dry", measurement: "0.5 oz", prep: null },
          { ingredientId: "i.bitters-orange", measurement: "1 dash", prep: null },
        ],
        steps: [
          { instruction: "Stir all over ice in a chilled mixing glass." },
          { instruction: "Stir 45 seconds. The glass must frost." },
          { instruction: "Strain into a chilled Nick & Nora." },
          { instruction: "Express a wide lemon peel and drop it in." },
        ],
      },
    ],
  },

  "smoke-and-citrus": {
    title: "Smoke, and the Things It Touches",
    prologue:
      "Tonight, mezcal pulls the room toward a low flame. We give it the things it loves — bitter green, citrus with a serious face, salt at the rim.",
    cocktails: [
      {
        name: "Lampblack",
        tagline: "Mezcal and Cynar, dialing each other up.",
        story:
          "Espadín meets the artichoke amaro it was born to meet. A whisper of grapefruit cuts the savoriness; lime keeps it honest. Stirred, not shaken — let the smoke breathe.",
        glass: "Rocks",
        ice: "Single large cube",
        garnish: "Charred orange peel.",
        technique: "stirred",
        flavorAxis: ["smoke", "bitter", "earth"],
        ingredients: [
          { ingredientId: "i.mezcal-espadin", measurement: "1.5 oz", prep: null },
          { ingredientId: "i.cynar", measurement: "1 oz", prep: null },
          { ingredientId: "i.grapefruit-juice", measurement: "0.5 oz", prep: "fresh" },
          { ingredientId: "i.lime-juice", measurement: "0.25 oz", prep: "fresh" },
          { ingredientId: "i.agave-syrup", measurement: "0.25 oz", prep: null },
        ],
        steps: [
          { instruction: "Combine all in a mixing glass." },
          { instruction: "Stir over ice for 20 seconds." },
          { instruction: "Strain over a single large cube in a rocks glass." },
          { instruction: "Char an orange peel, express the oils, and drop it in." },
        ],
      },
      {
        name: "Sunday Confession",
        tagline: "A smoked Paloma that means what it says.",
        story:
          "Sea salt at the rim. Mezcal cut by grapefruit and lime, lengthened with soda. A summer drink that won't apologize for its smoke.",
        glass: "Highball",
        ice: "Long ice spear",
        garnish: "Salt rim, grapefruit half-moon.",
        technique: "built",
        flavorAxis: ["smoke", "sour", "salty"],
        ingredients: [
          { ingredientId: "i.mezcal-espadin", measurement: "2 oz", prep: null },
          { ingredientId: "i.grapefruit-juice", measurement: "2 oz", prep: "fresh" },
          { ingredientId: "i.lime-juice", measurement: "0.5 oz", prep: "fresh" },
          { ingredientId: "i.agave-syrup", measurement: "0.25 oz", prep: null },
          { ingredientId: "i.soda-water", measurement: "top", prep: null },
        ],
        steps: [
          { instruction: "Rim a highball with sea salt." },
          { instruction: "Build all but the soda over ice." },
          { instruction: "Top with soda, stir once." },
          { instruction: "Garnish with a grapefruit half-moon." },
        ],
      },
      {
        name: "The Long Goodbye",
        tagline: "Islay scotch and honey, with lemon to pay the bill.",
        story:
          "Penicillin-adjacent. Blended scotch stirred down with ginger and honey, with a half-ounce of Islay floated on top. The smoke meets you on the nose, then steps aside.",
        glass: "Rocks",
        ice: "Single large cube",
        garnish: "Candied ginger.",
        technique: "shaken",
        flavorAxis: ["smoke", "spice", "sweet"],
        ingredients: [
          { ingredientId: "i.scotch-blended", measurement: "2 oz", prep: null },
          { ingredientId: "i.honey-syrup", measurement: "0.75 oz", prep: null },
          { ingredientId: "i.lemon-juice", measurement: "0.75 oz", prep: "fresh" },
          { ingredientId: "i.ginger-root", measurement: "3 thin slices", prep: "muddled" },
          { ingredientId: "i.scotch-islay", measurement: "0.25 oz", prep: "float" },
        ],
        steps: [
          { instruction: "Muddle ginger in the shaker." },
          { instruction: "Add blended scotch, honey, lemon, and ice. Shake hard." },
          { instruction: "Double strain over a single large cube." },
          { instruction: "Float the Islay scotch across the back of a spoon." },
          { instruction: "Garnish with candied ginger." },
        ],
      },
      {
        name: "Vesper Smoke",
        tagline: "Smoked Old Fashioned. Restraint is the point.",
        story:
          "Bourbon, demerara, mole bitters. The glass is rinsed with mezcal before the drink is built — a single layer of smoke that lingers on the second sip but never on the first.",
        glass: "Rocks",
        ice: "Single large cube",
        garnish: "Wide orange peel.",
        technique: "stirred",
        flavorAxis: ["smoke", "sweet", "spice"],
        ingredients: [
          { ingredientId: "i.mezcal-espadin", measurement: "0.25 oz", prep: "rinse only" },
          { ingredientId: "i.bourbon", measurement: "2 oz", prep: null },
          { ingredientId: "i.demerara-syrup", measurement: "0.25 oz", prep: null },
          { ingredientId: "i.bitters-mole", measurement: "2 dashes", prep: null },
        ],
        steps: [
          { instruction: "Rinse the rocks glass with mezcal; discard the excess." },
          { instruction: "Build bourbon, demerara, and bitters in the glass." },
          { instruction: "Add a single large cube and stir for 30 seconds." },
          { instruction: "Express an orange peel over the surface, then drop it in." },
        ],
      },
    ],
  },

  "garden-evening": {
    title: "From the Garden, Late",
    prologue:
      "Gin doing what gin does best — drawing herbs and flowers up out of themselves. We keep the touch light tonight. The drinks should taste of the hour.",
    cocktails: [
      {
        name: "The Quiet Year",
        tagline: "Bee's Knees with a thyme sprig held in confidence.",
        story:
          "Gin, lemon, honey — the trio that built the Prohibition canon. Today we add a single sprig of thyme to the shake, which steeps but does not appear.",
        glass: "Coupe",
        ice: "None — up",
        garnish: "Lemon peel coin.",
        technique: "shaken",
        flavorAxis: ["sweet", "sour", "herbal"],
        ingredients: [
          { ingredientId: "i.gin-london-dry", measurement: "2 oz", prep: null },
          { ingredientId: "i.lemon-juice", measurement: "0.75 oz", prep: "fresh" },
          { ingredientId: "i.honey-syrup", measurement: "0.75 oz", prep: null },
          { ingredientId: "i.thyme-sprig", measurement: "1 sprig", prep: "in the shake" },
        ],
        steps: [
          { instruction: "Combine all in a shaker, thyme included." },
          { instruction: "Add ice. Shake hard, 10 seconds." },
          { instruction: "Double strain into a chilled coupe." },
          { instruction: "Express a lemon coin over the surface, then drop it in." },
        ],
      },
      {
        name: "Garden Door",
        tagline: "Basil, gin, lemon. Soft as evening light.",
        story:
          "A summer drink shifted to the late hour. Basil muddled lightly — never beaten. Just enough simple to round the lemon. Lengthened with soda for sitting.",
        glass: "Highball",
        ice: "Cubed",
        garnish: "Basil leaf clap.",
        technique: "shaken",
        flavorAxis: ["herbal", "sour", "floral"],
        ingredients: [
          { ingredientId: "i.gin-contemporary", measurement: "1.75 oz", prep: null },
          { ingredientId: "i.lemon-juice", measurement: "0.75 oz", prep: "fresh" },
          { ingredientId: "i.simple-syrup", measurement: "0.5 oz", prep: null },
          { ingredientId: "i.basil-leaf", measurement: "5 leaves", prep: "gently muddled" },
          { ingredientId: "i.soda-water", measurement: "1 oz", prep: "top" },
        ],
        steps: [
          { instruction: "Gently muddle basil in the shaker." },
          { instruction: "Add gin, lemon, syrup, and ice. Shake briefly, 6 seconds." },
          { instruction: "Strain into a highball over cubed ice." },
          { instruction: "Top with soda, stir once." },
          { instruction: "Clap a fresh basil leaf over the surface and lay it on top." },
        ],
      },
      {
        name: "Elderflower Court",
        tagline: "St-Germain finds itself a partner.",
        story:
          "Contemporary gin, elderflower, lime, and a dash of orange bitters. Stirred until cold, served up. The kind of drink that makes the room go quiet at the first sip.",
        glass: "Coupe",
        ice: "None — up",
        garnish: "Cucumber slice.",
        technique: "stirred",
        flavorAxis: ["floral", "fruit", "herbal"],
        ingredients: [
          { ingredientId: "i.gin-contemporary", measurement: "1.75 oz", prep: null },
          { ingredientId: "i.elderflower-liqueur", measurement: "0.75 oz", prep: null },
          { ingredientId: "i.lime-juice", measurement: "0.5 oz", prep: "fresh" },
          { ingredientId: "i.bitters-orange", measurement: "1 dash", prep: null },
        ],
        steps: [
          { instruction: "Combine all in a mixing glass over ice." },
          { instruction: "Stir 25 seconds." },
          { instruction: "Strain into a chilled coupe." },
          { instruction: "Lay a thin slice of cucumber on the surface." },
        ],
      },
      {
        name: "The Lull",
        tagline: "Gin and tonic, but slower.",
        story:
          "London dry, the best tonic you can find, a thick lemon coin, and a thyme sprig stood up in the glass. Built tall. Sip without ceremony.",
        glass: "Highball",
        ice: "Cubed, full pour",
        garnish: "Thyme sprig, lemon coin.",
        technique: "built",
        flavorAxis: ["bitter", "herbal", "floral"],
        ingredients: [
          { ingredientId: "i.gin-london-dry", measurement: "2 oz", prep: null },
          { ingredientId: "i.tonic-water", measurement: "4 oz", prep: "cold" },
          { ingredientId: "i.lemon-juice", measurement: "expressed peel only", prep: null },
          { ingredientId: "i.thyme-sprig", measurement: "1 sprig", prep: null },
        ],
        steps: [
          { instruction: "Fill a highball completely with cubed ice." },
          { instruction: "Add gin." },
          { instruction: "Top with cold tonic, poured gently down the side." },
          { instruction: "Express a lemon coin and drop it in." },
          { instruction: "Slide a thyme sprig down the side of the glass." },
        ],
      },
    ],
  },
}

export const FALLBACK_DEFAULT = FALLBACK_MENUS["starter-classic"]

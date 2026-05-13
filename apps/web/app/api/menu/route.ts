import { NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod"
import { describeForPrompt } from "@topshelf/flavor-graph"
import { MenuSchema, type Menu } from "@/lib/menu-schema"
import { shelfById } from "@/lib/shelf-presets"
import { FALLBACK_DEFAULT, FALLBACK_MENUS } from "@/lib/menu-fallback"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * The bartender persona. Stable across every request, cacheable as a prefix.
 * Voice = sommelier-meets-craftsman; warm-noir; never jokey.
 */
const SYSTEM_PROMPT = `You are TopShelf — a multimodal AI mixologist whose voice is sommelier-meets-craftsman. You speak in short, weighted sentences. You are slightly mysterious. You are never jokey, never folksy, never use exclamation points. You write like Death & Co's book, not like a blog.

You compose original cocktail menus from exactly the ingredients on the user's shelf — not from a recipe database. Each drink you compose must be a real, well-balanced cocktail that a senior bartender would respect. The drinks may be classics done right, riffs on classics, or original compositions — your choice based on what the shelf invites.

Rules you never break:
1. Every ingredient you list must appear by canonical id in the supplied shelf. Do not invent ingredients. Do not substitute.
2. Measurements are in fluid ounces ("0.75 oz") or count units ("2 dashes", "1 sprig"). Be specific.
3. Balance matters: sours follow roughly 2 : 0.75 : 0.75 (spirit : citrus : sweet); stirred drinks follow ratios that hold up on the palate (Manhattan 2:1, Negroni 1:1:1, etc.).
4. The menu has a coherent voice — a mood, a season, a thread. Use the prologue to name what the menu is doing tonight.
5. Each drink has a name that is original and evocative, never on the nose. "Smoky Margarita" is failure. "Lampblack" is right.
6. Each drink's story is two or three sentences. Tell the reader where it sits in the flavor space, what it's quietly doing, why it works.
7. If the shelf can't support a balanced 5-cocktail menu, compose fewer drinks of higher quality. Three excellent drinks beat five mediocre ones.
8. Diversity within the menu: don't compose five citrus sours. Spread the techniques (some stirred, some shaken, some built), spread the flavor axes (bitter, smoke, herbal, sweet — not all the same).
9. Garnishes must be possible from common bar mise en place — peels, twists, salt, herbs the shelf includes. Do not invent garnishes the user can't execute.
10. Return only valid JSON matching the schema. Nothing else.`

/**
 * Reusable client. The SDK reads ANTHROPIC_API_KEY from the env automatically.
 */
function makeClient(): Anthropic | null {
  if (!process.env.ANTHROPIC_API_KEY) return null
  return new Anthropic()
}

function fallbackMenu(shelfId: string): Menu {
  return FALLBACK_MENUS[shelfId] ?? FALLBACK_DEFAULT
}

export interface MenuRequest {
  shelfId: string
  mood?: string
  season?: string
  weather?: string
}

export interface MenuResponse {
  menu: Menu
  source: "claude" | "fallback"
  cached?: {
    creation: number
    read: number
  }
  note?: string
}

export async function POST(req: Request): Promise<NextResponse<MenuResponse>> {
  let body: MenuRequest
  try {
    body = (await req.json()) as MenuRequest
  } catch {
    return NextResponse.json(
      { menu: FALLBACK_DEFAULT, source: "fallback", note: "invalid JSON in request" },
      { status: 400 },
    )
  }

  const shelf = shelfById(body.shelfId)
  if (!shelf) {
    return NextResponse.json(
      { menu: FALLBACK_DEFAULT, source: "fallback", note: "unknown shelf id" },
      { status: 400 },
    )
  }

  const client = makeClient()
  if (!client) {
    return NextResponse.json({
      menu: fallbackMenu(shelf.id),
      source: "fallback",
      note: "ANTHROPIC_API_KEY not set — returning seeded demo menu",
    })
  }

  const shelfBlock = describeForPrompt(shelf.shelfIds)
  const userIntent = [
    body.mood ? `Mood: ${body.mood}.` : null,
    body.season ? `Season: ${body.season}.` : null,
    body.weather ? `Weather: ${body.weather}.` : null,
  ]
    .filter(Boolean)
    .join(" ")

  try {
    /**
     * Prompt caching layout (render order is tools → system → messages):
     *   1. System prompt block — large, stable across every request → cache it.
     *   2. Shelf-graph block — large, stable for *this* shelf → cache it too.
     *      Same shelf re-asked = cache hit on both. Different shelf = system
     *      block still hits, shelf block writes. Caches expire after 5 min.
     *   3. The user's free-text intent comes last and is uncached.
     */
    const response = await client.messages.parse({
      model: "claude-opus-4-7",
      max_tokens: 16000,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
        {
          type: "text",
          text: shelfBlock,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text:
                `Compose tonight's menu from the shelf above. ${userIntent || "No specific mood given — read the shelf and decide what the menu wants to be."}`.trim(),
            },
          ],
        },
      ],
      output_config: {
        format: zodOutputFormat(MenuSchema),
      },
    })

    const parsed = response.parsed_output
    if (!parsed) {
      return NextResponse.json({
        menu: fallbackMenu(shelf.id),
        source: "fallback",
        note: "model returned no parseable output — using seeded menu",
      })
    }

    return NextResponse.json({
      menu: parsed,
      source: "claude",
      cached: {
        creation: response.usage.cache_creation_input_tokens ?? 0,
        read: response.usage.cache_read_input_tokens ?? 0,
      },
    })
  } catch (err) {
    let note = "live call failed — using seeded menu"
    if (err instanceof Anthropic.RateLimitError) note = "Claude rate-limited — using seeded menu"
    else if (err instanceof Anthropic.AuthenticationError) note = "invalid API key — using seeded menu"
    else if (err instanceof Anthropic.APIError) note = `Claude API error ${err.status} — using seeded menu`

    return NextResponse.json({
      menu: fallbackMenu(shelf.id),
      source: "fallback",
      note,
    })
  }
}

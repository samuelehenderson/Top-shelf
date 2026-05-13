# TopShelf

> *The sentient bar.*

TopShelf is a multimodal AI mixologist. Point your phone at your home shelf — it sees every bottle. It then composes original cocktails *tonight* from exactly what you own, narrated by a voice-first bartender persona that learns the shape of your taste over time. When you start making the drink, the camera watches the pour and dials you in.

It is also, quietly, a menu-engineering platform for working bars.

---

## The thesis

The best bars in the world are not built on recipes. They are built on a *palate* — a sense for what wants to live next to what, which corner of the flavor space hasn't been visited tonight, what the season demands. That palate has historically been locked inside a handful of bartenders.

A frontier multimodal model + a structured flavor graph + a real-time vision loop can hold that palate, externalize it, and hand it to anyone with a shelf and a shaker. That is what TopShelf is.

---

## What it does

**Vision Inventory.** Pan your phone across the bottles you own. Multi-bottle detection + a vision-language model + a meniscus-tracking WebGPU shader produce a structured inventory: brand, expression, category, opened/sealed, approximate fill level.

**Tonight's Menu.** Every evening — geo-, weather-, season- and taste-graph-aware — TopShelf composes a printable 5–7 cocktail menu using only ingredients you actually have. Each drink is original. Each has a name, a one-line story, a recipe, and an AI-generated illustration.

**The Bartender.** Voice-first agent. Greets you by name. Knows your shelf. Asks what you're in the mood for. Listens. Suggests. Lets you push back. Adapts.

**Live Coaching.** Camera tracks your pour in real time. Corrects gently. Confirms technique. Times dilution.

**The Flavor Graph.** A weighted graph of ingredients ↔ flavors ↔ techniques. Every reaction you give — a thumbs, a re-order, "too sweet" — propagates as edge weights tuned for you. The system gets weirder and more *you* over time.

**Hosted Mode.** Guests scan a QR. They tell the bartender what they want. It suggests options from your shelf and tells *you* what to make.

**Spatial Mode** *(v2).* Vision Pro / iPhone LiDAR. Holographic menu cards float next to bottles. A fill-line ring on the glass. A ghost-bartender demonstrating technique.

**Bar Program** *(v2, B2B).* Working bars upload their backbar. TopShelf designs entire seasonal programs, costs them out, generates staff training cards, simulates margins. Real ARR.

---

## What's in this repo

```
Top-shelf/
├── apps/
│   ├── web/             Next.js 15 web app — landing + the menu demo
│   ├── api/             FastAPI backend — REST, auth, persistence
│   └── vision/          Python workers — bottle detection, label OCR, pour estimation
├── packages/
│   ├── flavor-graph/    Shared ingredient graph + reasoning helpers
│   ├── design/          Design tokens, fonts, palette, motion
│   └── shared/          OpenAPI-generated TS client + zod schemas
├── infra/               docker-compose for local Postgres + pgvector + Redis + minio
└── .github/workflows/   CI
```

---

## Quick start

```bash
# install (uses pnpm workspaces)
pnpm install

# bring up local infra
docker compose -f infra/docker-compose.yml up -d

# start the web app — landing page + the /menu demo
pnpm --filter web dev

# start the api
cd apps/api && uv sync && uv run uvicorn app.main:app --reload
```

Open <http://localhost:3000>. Visit `/menu` to feed in a sample shelf and watch the generator compose a menu.

If `ANTHROPIC_API_KEY` is set in `.env.local`, the menu generator calls **Claude Opus 4.7** with prompt caching on the flavor graph. Without a key, it returns a deterministic demo menu — so the UI works out of the box.

---

## Stack

| Layer | Choice |
|---|---|
| Web | Next.js 15 (App Router, RSC), TypeScript strict, Tailwind v4, shadcn/ui, Framer Motion |
| Brain | Claude Opus 4.7 via `@anthropic-ai/sdk`, prompt caching, tool-use for structured recipe output |
| Voice | OpenAI Realtime API (low-latency duplex) — wrapped behind an interface, swap-ready |
| Vision (server) | YOLOv10 for bottle detection, Claude vision for label OCR |
| Vision (client) | WebGPU compute shader for pour meniscus tracking; MediaPipe fallback |
| Image gen | Flux Schnell via Replicate for cocktail card illustrations |
| API | FastAPI, Pydantic v2, SQLAlchemy 2.0, Alembic |
| DB | Postgres 16 + pgvector (taste embeddings) + Apache AGE (flavor graph) |
| Auth / billing | Clerk + Stripe |
| Hosting | Vercel (web) · Fly.io (api+vision) · Neon (Postgres) · Upstash (Redis) · Cloudflare R2 |

---

## Design

Warm-noir. Onyx, carbon, bitters amber, cream, mercury. Fraunces for display, Geist for everything else. Sommelier-meets-craftsman copy — sentences with weight, slightly mysterious, never jokey.

Tokens live in `packages/design`. The web app pulls them via CSS variables.

---

## Status

Pre-alpha. This repo is the foundation: monorepo scaffold, design system, landing page, working menu-generator demo, flavor-graph package with ~300 ingredients, FastAPI skeleton, and local infra. The vision pipeline, voice bartender, and live coaching land in the next milestones.

---

## License

Proprietary, all rights reserved. Contact for inquiries.

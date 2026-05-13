# CLAUDE.md — agent guide for TopShelf

This file is the agent-facing brief. Read it before writing code.

## What this is

TopShelf is a multimodal AI mixologist. See `README.md` for the product pitch. The product surfaces today are: a Next.js web app (`apps/web`), a FastAPI backend (`apps/api`), and Python vision workers (`apps/vision`). Shared code lives in `packages/`.

## Monorepo layout

```
apps/web/              Next.js 15 — landing + the menu generator demo
apps/api/              FastAPI — REST, auth via Clerk JWKS, persistence
apps/vision/           Python workers — bottle detection, label OCR, pour estimation
packages/flavor-graph/ TS package: ingredient graph + reasoning helpers
packages/design/       Design tokens consumed by the web app
packages/shared/       OpenAPI-generated TS client + zod schemas (placeholder)
infra/                 docker-compose + Alembic migrations
```

Workspace tooling: **pnpm** workspaces + **Turborepo**. Python via **uv** in each Python app.

## Conventions

- TypeScript strict everywhere. No `any` without a comment justifying it.
- React Server Components by default. Client components only when interactive — annotate with `"use client"` on the first line.
- Tailwind v4 with the design tokens from `packages/design`. Avoid arbitrary color literals in JSX; use the CSS variables (`--bitters`, `--cream`, etc.).
- Server actions or route handlers for I/O. No client-side `fetch` to third-party APIs.
- Anthropic SDK calls live server-side only. Always use prompt caching for the system prompt and the flavor-graph context. Default model: `claude-opus-4-7`.
- Errors at system boundaries are surfaced with structured logs (Axiom). Internal errors throw.
- Python: SQLAlchemy 2.0 typed style, Pydantic v2, ruff + mypy strict.

## Voice and brand

Warm-noir. Sommelier-meets-craftsman. Copy is short, weighted, slightly mysterious. Never jokey. No exclamation points unless quoting a user.

Palette and type tokens are the source of truth in `packages/design/tokens.css`. The brand colors:

- onyx `#0A0908`
- carbon `#161412`
- bitters amber `#E2A065`
- cream `#F5EAD7`
- mercury `#C9C5BD`

Type: **Fraunces** for display, **Geist Sans** for UI, **Geist Mono** for code.

## The flavor graph

`packages/flavor-graph` holds the structured product knowledge: ingredients, categories, flavors, techniques, edges. It is the spine of every menu generation. When extending it:

- Edges are weighted floats `[0, 1]`. Default to `0.5` for a plausible pairing.
- Never delete an ingredient — deprecate via `deprecated: true`.
- Run `pnpm --filter @topshelf/flavor-graph build` after edits.

## Generation contract

The menu-generator route in `apps/web/app/api/menu/route.ts` returns a typed `MenuResponse` shape. The model is constrained via tool use; never trust free-form text. If the model fails the schema, the route returns the deterministic fallback menu so the UI never breaks. Never disable the fallback.

## Anthropic SDK usage

Always:

- Set `cache_control: { type: "ephemeral" }` on the system block and the flavor-graph block.
- Stream when responding to a user; non-streaming for internal/batch jobs.
- Use the SDK's built-in retries; do not wrap with custom retry logic.

## Local dev

```bash
pnpm install
docker compose -f infra/docker-compose.yml up -d
pnpm --filter web dev
```

`.env.example` documents every variable. Copy to `.env.local`. The app works without any keys set — the menu generator falls back to seeded demo data.

## What not to do

- Do not add `console.log` in committed code. Use the logger.
- Do not hand-roll auth; Clerk handles it.
- Do not add a recipe database. The product is generative; recipes come from the model + the graph.
- Do not add jQuery, Redux, or moment.js. We have Next.js, Zustand (if needed), and Temporal/date-fns.
- Do not add files under `docs/` unless asked. Product copy lives in the app; technical notes live in `README.md` or `CLAUDE.md`.

/**
 * TopShelf design tokens — TS surface.
 *
 * CSS variables are the source of truth; this is the typed mirror for places
 * (Tailwind config, charts, animations) that can't read CSS variables directly.
 */

export const palette = {
  onyx: "#0a0908",
  carbon: "#161412",
  carbonElev: "#1f1c19",
  carbonEdge: "#2a2622",
  bitters: "#e2a065",
  bittersDeep: "#b85c2c",
  absinthe: "#88a06b",
  vermouth: "#b14e3f",
  citrine: "#d9b95a",
  cream: "#f5ead7",
  parchment: "#ece0c8",
  mercury: "#c9c5bd",
  ash: "#8a857c",
  smoke: "#524d46",
} as const

export type PaletteToken = keyof typeof palette

export const type = {
  display: '"Fraunces", ui-serif, Georgia, "Times New Roman", serif',
  sans: '"Geist Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  mono: '"Geist Mono", ui-monospace, "SF Mono", Consolas, monospace',
} as const

export const motion = {
  easeOutSoft: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOutSoft: "cubic-bezier(0.65, 0, 0.35, 1)",
} as const

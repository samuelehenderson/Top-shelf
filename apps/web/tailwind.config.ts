import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "var(--onyx)",
        carbon: {
          DEFAULT: "var(--carbon)",
          elev: "var(--carbon-elev)",
          edge: "var(--carbon-edge)",
        },
        bitters: {
          DEFAULT: "var(--bitters)",
          deep: "var(--bitters-deep)",
        },
        absinthe: "var(--absinthe)",
        vermouth: "var(--vermouth)",
        citrine: "var(--citrine)",
        cream: "var(--cream)",
        parchment: "var(--parchment)",
        mercury: "var(--mercury)",
        ash: "var(--ash)",
        smoke: "var(--smoke)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        card: "var(--shadow-card)",
      },
      transitionTimingFunction: {
        "out-soft": "var(--ease-out-soft)",
        "in-out-soft": "var(--ease-in-out-soft)",
      },
    },
  },
  plugins: [],
}

export default config

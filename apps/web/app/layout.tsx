import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TopShelf — The Sentient Bar",
  description:
    "A multimodal AI mixologist. TopShelf reads your shelf, composes original cocktails from what you own, and coaches you while you make them.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "TopShelf — The Sentient Bar",
    description: "AI mixologist for your home bar. Original cocktails composed from your shelf.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

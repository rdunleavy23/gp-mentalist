import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"

// Inter: Best-in-class for body text (used by Stripe, Vercel, Linear)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

// Merriweather: Elegant serif for headings (better readability than Playfair)
const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Grant Price",
  description: "Corporate event mentalist and mind reader.",
  // Removed keywords to prevent indexing
  // Removed authors to reduce discoverability
  // Minimized Open Graph to prevent social media scraping
  openGraph: {
    type: "website",
    // No URL, siteName, or detailed description to prevent discovery
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={`${inter.className} font-sans`}>{children}</body>
    </html>
  )
}

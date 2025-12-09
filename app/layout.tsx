import type { Metadata } from "next"
import { Libre_Baskerville, Rubik } from "next/font/google"
import "./globals.css"

// Rubik: Warm, approachable body font (weights 300-700)
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700"],
})

// Libre Baskerville: Classic serif for headings (weights 400, 700)
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
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
    <html lang="en" className={`${rubik.variable} ${libreBaskerville.variable}`}>
      <body className={`${rubik.className} font-sans`}>{children}</body>
    </html>
  )
}

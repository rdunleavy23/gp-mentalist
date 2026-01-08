import type { Metadata } from "next"
import { Rubik, Inter } from "next/font/google"
import "./globals.css"

// Rubik: Friendly, rounded headings (weights 600-800)
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
  weight: ["600", "700", "800"],
})

// Inter: Clean, professional body text (weights 300-600)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${rubik.variable} ${inter.variable}`}>
      <body className={`${inter.className} font-sans`}>{children}</body>
    </html>
  )
}

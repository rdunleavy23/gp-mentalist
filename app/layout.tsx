import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Grant Price - Corporate Event Magician & Mentalist",
  description:
    "Award-winning mentalist who has amazed 70,000+ people and Fortune 500 companies with mind-blowing performances. Book Grant for your next corporate event, conference, or special occasion.",
  keywords: [
    "corporate magician",
    "corporate event entertainment",
    "mentalist",
    "corporate events",
    "team building entertainment",
    "conference entertainment",
    "Dallas magician",
    "Fort Worth magician",
  ],
  authors: [{ name: "Grant Price" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Grant Price - Corporate Event Magician & Mentalist",
    description:
      "Award-winning mentalist who has amazed 70,000+ people and Fortune 500 companies",
    siteName: "Grant Price Entertainment",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

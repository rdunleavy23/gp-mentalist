"use client"

import Script from "next/script"
import { useEffect, useRef } from "react"
import { GA_MEASUREMENT_ID, event } from "@/lib/gtag"

const SCROLL_MILESTONES = [25, 50, 75, 90]

const TRACKED_SECTIONS = [
  "hero",
  "services",
  "reactions",
  "testimonials",
  "stats",
  "about",
  "residency",
  "faq",
  "how-it-works",
  "contact",
]

function useScrollDepth() {
  const firedRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const percent = Math.round((window.scrollY / scrollHeight) * 100)

      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !firedRef.current.has(milestone)) {
          firedRef.current.add(milestone)
          event("scroll_milestone", { percent: milestone })
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}

function useSectionVisibility() {
  const seenRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting && !seenRef.current.has(id)) {
            seenRef.current.add(id)
            event("section_view", { section_name: id })
          }
        }
      },
      { threshold: 0.3 }
    )

    for (const id of TRACKED_SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])
}

export function GoogleAnalytics() {
  useScrollDepth()
  useSectionVisibility()

  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}'${
              process.env.NODE_ENV === "development" ? ", { debug_mode: true }" : ""
            });
          `,
        }}
      />
    </>
  )
}

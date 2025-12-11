"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 600px)
      const shouldShow = window.scrollY > 600 && !isDismissed
      setIsVisible(shouldShow)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    setIsDismissed(true)
    setIsVisible(false)
  }
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-2xl md:hidden",
        "animate-in slide-in-from-bottom duration-300"
      )}
        >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <Button
              onClick={scrollToContact}
              size="lg"
          className="flex-1 min-h-[48px] text-base font-semibold"
            >
              Get Your Instant Quote
            </Button>
            <button
          onClick={() => {
            setIsDismissed(true)
            setIsVisible(false)
          }}
          className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
    </div>
  )
}

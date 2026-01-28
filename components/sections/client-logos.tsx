"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Light auto-scroll that pauses on user interaction (mobile only)
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null
    let isPaused = false
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null

    const startAutoScroll = () => {
      if (intervalId) return // Already running
      
      intervalId = setInterval(() => {
        const container = scrollRef.current
        if (container && !isPaused) {
          const maxScroll = container.scrollWidth - container.clientWidth
          
          if (maxScroll > 0) {
            container.scrollLeft += 1 // 1px per frame
            
            // Reset to start when reaching the end
            if (container.scrollLeft >= maxScroll - 2) {
              container.scrollLeft = 0
            }
          }
        }
      }, 40) // Every 40ms = ~25px/second (light but visible)
    }

    const pauseScroll = () => {
      isPaused = true
      if (pauseTimeout) clearTimeout(pauseTimeout)
      pauseTimeout = setTimeout(() => {
        isPaused = false
      }, 2000) // Resume after 2 seconds
    }

    // Start after delay to ensure DOM is ready
    const startDelay = setTimeout(() => {
      const container = scrollRef.current
      if (container) {
        // Check if scrollable (has overflow)
        const hasOverflow = container.scrollWidth > container.clientWidth
        
        if (hasOverflow) {
          container.addEventListener('touchstart', pauseScroll, { passive: true })
          container.addEventListener('touchmove', pauseScroll, { passive: true })
          container.addEventListener('mousedown', pauseScroll, { passive: true })
          startAutoScroll()
        }
      }
    }, 800) // Reduced delay

    return () => {
      clearTimeout(startDelay)
      if (intervalId) clearInterval(intervalId)
      if (pauseTimeout) clearTimeout(pauseTimeout)
      const container = scrollRef.current
      if (container) {
        container.removeEventListener('touchstart', pauseScroll)
        container.removeEventListener('touchmove', pauseScroll)
        container.removeEventListener('mousedown', pauseScroll)
      }
    }
  }, [])
  // Order: Google first, then Cowboys, then mix for visual balance
  const clients = [
    // Row 1 (desktop): 6 logos
    { name: "Google", image: "/images/logos/google.svg" },
    { name: "Dallas Cowboys", image: "/images/logos/dallas-cowboys.svg" },
    { name: "Microsoft", image: "/images/logos/microsoft.svg" },
    { name: "US Air Force", image: "/images/logos/us-air-force.svg" },
    { name: "Ferrari", image: "/images/logos/ferrari.svg" },
    { name: "Texas Health Resources", image: "/images/logos/texas-health-resources.png" },
    // Row 2 (desktop): 5 logos centered
    { name: "Chick-fil-A", image: "/images/logos/chick-fil-a.svg" },
    { name: "Alcon", image: "/images/logos/alcon.svg" },
    { name: "Southwest Airlines", image: "/images/logos/southwest-airlines.svg" },
    { name: "Luke Bryan", image: "/images/logos/luke-bryan.svg" },
    { name: "Olipop", image: "/images/logos/olipop.png" },
  ]

  return (
    <section id="clients" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">
            Trusted by teams that expect the best
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            From Fortune 500 tech to beloved brands, corporate planners know Grant delivers.
          </p>
        </motion.div>

        {/* Mobile: Swipeable carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:hidden relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-6 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Swipeable scroll container with light auto-scroll */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {clients.map((client) => (
              <div 
                key={client.name}
                className="flex-shrink-0 snap-center flex items-center justify-center py-2"
                style={{ minWidth: '110px' }}
              >
                <img
                  src={client.image}
                  alt={`${client.name} logo`}
                  className="h-10 w-auto max-w-[100px] object-contain grayscale opacity-50"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/60">
            Swipe to see more →
          </p>
        </motion.div>

        {/* Desktop: Static Grid - Row 1: 6 logos, Row 2: 5 logos centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden lg:block max-w-5xl mx-auto"
        >
          {/* First row - 6 logos */}
          <div className="grid grid-cols-6 gap-8 mb-8">
            {clients.slice(0, 6).map((client) => (
              <div key={client.name} className="flex items-center justify-center p-4">
                <img
                  src={client.image}
                  alt={`${client.name} logo`}
                  className="h-16 w-auto max-w-[160px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Second row - 5 logos, centered */}
          <div className="grid grid-cols-5 gap-8 px-[8.333%]">
            {clients.slice(6).map((client) => (
              <div key={client.name} className="flex items-center justify-center p-4">
                <img
                  src={client.image}
                  alt={`${client.name} logo`}
                  className="h-16 w-auto max-w-[160px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

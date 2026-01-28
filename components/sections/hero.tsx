"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Light auto-scroll that pauses on user interaction (mobile only)
  useEffect(() => {
    let animationFrameId: number | null = null
    let isPaused = false
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null
    let lastTimestamp: DOMHighResTimeStamp | null = null

    const scrollSpeed = 1 // pixels per frame

    const animateScroll = (timestamp: DOMHighResTimeStamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp
      }

      const deltaTime = timestamp - lastTimestamp
      lastTimestamp = timestamp

      const container = scrollRef.current
      if (container && !isPaused) {
        const maxScroll = container.scrollWidth / 2 // Scroll only one set of duplicated logos
        
        if (maxScroll > 0) {
          container.scrollLeft += (scrollSpeed * deltaTime) / (1000 / 60) // Adjust speed based on frame rate
          
          // Reset to start when reaching the halfway point (seamless loop)
          if (container.scrollLeft >= maxScroll - 2) { // -2 to prevent flicker at exact maxScroll
            container.scrollLeft = 0
          }
        }
      }
      animationFrameId = requestAnimationFrame(animateScroll)
    }

    const pauseScroll = () => {
      isPaused = true
      if (pauseTimeout) clearTimeout(pauseTimeout)
      pauseTimeout = setTimeout(() => {
        isPaused = false
        lastTimestamp = null; // Reset timestamp to prevent large jump after pause
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
          animationFrameId = requestAnimationFrame(animateScroll)
        }
      }
    }, 1000) // Start after 1 second

    return () => {
      clearTimeout(startDelay)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (pauseTimeout) clearTimeout(pauseTimeout)
      const container = scrollRef.current
      if (container) {
        container.removeEventListener('touchstart', pauseScroll)
        container.removeEventListener('touchmove', pauseScroll)
        container.removeEventListener('mousedown', pauseScroll)
      }
    }
  }, [])

  // Helper to get custom spacing for logos based on their internal whitespace
  const getLogoSpacing = (name: string) => {
    const spacingMap: Record<string, string> = {
      "Chick-fil-A": "px-2",
      "Texas Health Resources": "px-2.5",
      "Southwest Airlines": "px-6",
      "Luke Bryan": "px-6",
      "Dallas Cowboys": "px-5",
      "Google": "px-4",
      "Microsoft": "px-4",
      "Ferrari": "px-4",
      "Olipop": "px-4",
      "Alcon": "px-4",
      "US Air Force": "px-4",
    }
    return spacingMap[name] || "px-4"
  }

  // Helper to get custom sizing for specific logos
  const getLogoSizeClass = (name: string, isMobile: boolean = false) => {
    const baseClass = isMobile 
      ? "h-10 w-auto max-w-[100px] object-contain opacity-100"
      : "h-16 w-auto max-w-[160px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    
    if (name === "Texas Health Resources") {
      return isMobile
        ? "h-14 w-auto max-w-[140px] object-contain opacity-100"
        : "h-24 w-auto max-w-[240px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    }
    if (name === "Chick-fil-A") {
      return isMobile
        ? "h-14 w-auto max-w-[140px] object-contain opacity-100"
        : "h-24 w-auto max-w-[240px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    }
    if (name === "Alcon") {
      return isMobile
        ? "h-8 w-auto max-w-[80px] object-contain opacity-100"
        : "h-14 w-auto max-w-[140px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    }
    
    return baseClass
  }

  // Order: Google first, then Cowboys, then mix for visual balance
  const clients = [
    { name: "Google", image: "/images/logos/google.svg" },
    { name: "Dallas Cowboys", image: "/images/logos/dallas-cowboys.svg" },
    { name: "Microsoft", image: "/images/logos/microsoft.svg" },
    { name: "US Air Force", image: "/images/logos/us-air-force.svg" },
    { name: "Ferrari", image: "/images/logos/ferrari.svg" },
    { name: "Texas Health Resources", image: "/images/logos/texas-health-resources.png" },
    { name: "Chick-fil-A", image: "/images/logos/chick-fil-a.svg" },
    { name: "Alcon", image: "/images/logos/alcon.svg" },
    { name: "Southwest Airlines", image: "/images/logos/southwest-airlines.svg" },
    { name: "Luke Bryan", image: "/images/logos/luke-bryan.svg" },
    { name: "Olipop", image: "/images/logos/olipop.png" },
  ]

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-white">
      {/* Set the tone early: warm, skilled, and easy to work with for corporate rooms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
              Interactive Mind-Reading for Upscale Events
            </h1>

            {/* Hero Image - Mobile: between h1 and paragraph, Desktop: hidden (shown on right) */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6 lg:hidden"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <Image
                  src="/images/photos/hero-stage.jpg"
                  alt="Grant Price performing mentalism at a corporate event with engaged audience"
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: 'center 35%' }}
                  sizes="100vw"
                  quality={90}
                  unoptimized={true}
                  onError={(e) => {
                    console.error('Image failed to load:', e)
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.parentElement?.querySelector('.photo-fallback')
                    if (fallback) (fallback as HTMLElement).style.display = 'flex'
                  }}
                />
                <div className="photo-fallback hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="text-center px-4">
                    <p className="text-white font-serif text-2xl font-bold mb-1">Grant Price</p>
                    <p className="text-white/85 text-sm">Corporate Event Mentalist</p>
                    <p className="text-white/80 text-sm mt-1">Warm, corporate-safe, and easy to work with.</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px]">
                <p className="text-3xl font-bold text-primary">70,000+</p>
                <p className="text-sm text-muted-foreground">People Entertained</p>
              </div>
            </motion.div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Grant Price delivers corporate-clean mentalism that gets executives leaning in, laughing together, and swapping &ldquo;how did he do that?&rdquo; stories for weeks.
            </p>

            {/* Client Logos */}
            <div className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-6 md:mb-8"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-foreground leading-tight max-w-2xl mx-auto">
                  Trusted by teams that expect the best
                </h2>
              </motion.div>

              {/* Mobile: Swipeable carousel with auto-scroll */}
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
                
                {/* Auto-scrolling container - duplicate logos for seamless loop */}
                <div className="overflow-hidden">
                  <div 
                    ref={scrollRef}
                    className="flex gap-3 overflow-x-auto pb-4 px-4 scrollbar-hide"
                    style={{ 
                      WebkitOverflowScrolling: 'touch',
                      scrollBehavior: 'auto'
                    }}
                  >
                    {/* First set */}
                    {clients.map((client, idx) => (
                      <div 
                        key={`first-${idx}`}
                        className={`flex-shrink-0 flex items-center justify-center py-2 ${getLogoSpacing(client.name)}`}
                      >
                        <img
                          src={client.image}
                          alt={`${client.name} logo`}
                          className={getLogoSizeClass(client.name, true)}
                        />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {clients.map((client, idx) => (
                      <div 
                        key={`second-${idx}`}
                        className={`flex-shrink-0 flex items-center justify-center py-2 ${getLogoSpacing(client.name)}`}
                      >
                        <img
                          src={client.image}
                          alt={`${client.name} logo`}
                          className={getLogoSizeClass(client.name, true)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-center text-xs text-muted-foreground/60 mt-2">
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
                        className={getLogoSizeClass(client.name, false)}
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
                        className={getLogoSizeClass(client.name, false)}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Hero Image/Video - Desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/images/photos/hero-stage.jpg"
                alt="Grant Price performing mentalism at a corporate event with engaged audience"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: 'center 35%' }}
                sizes="50vw"
                quality={90}
                unoptimized={true}
                onError={(e) => {
                  console.error('Image failed to load:', e)
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = target.parentElement?.querySelector('.photo-fallback')
                  if (fallback) (fallback as HTMLElement).style.display = 'flex'
                }}
              />
              <div className="photo-fallback hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="text-center px-4">
                  <p className="text-white font-serif text-2xl font-bold mb-1">Grant Price</p>
                  <p className="text-white/85 text-sm">Corporate Event Mentalist</p>
                  <p className="text-white/80 text-sm mt-1">Warm, corporate-safe, and easy to work with.</p>
                </div>
              </div>
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-[200px]">
              <p className="text-3xl md:text-4xl font-bold text-primary">70,000+</p>
              <p className="text-sm text-muted-foreground">People Entertained</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

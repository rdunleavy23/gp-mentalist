"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[#0A0E27]">
      {/* Set the tone early: warm, skilled, and easy to work with for corporate rooms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* H1 - Always first, left-aligned for F-scanning */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-left order-1 lg:order-1 lg:row-span-1 w-full lg:col-start-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
              Interactive Mind-Reading for Upscale Events
            </h1>
          </motion.div>

          {/* Hero Image - Second on mobile, spans right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-2 lg:row-span-3 w-full"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/images/photos/hero-stage.jpg"
                alt="Grant Price performing mentalism at a corporate event with engaged audience"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: 'center 35%' }}
                sizes="(max-width: 768px) 100vw, 50vw"
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

            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-lg shadow-xl p-3 md:p-5 hidden sm:block">
              <p className="text-2xl md:text-3xl font-bold text-primary">350+</p>
              <p className="text-xs md:text-sm text-muted-foreground">Corporate Events</p>
            </div>
            
            {/* Mobile stats row - shown only on mobile, left-aligned for F-scanning */}
            <div className="sm:hidden absolute -bottom-6 left-0 bg-white rounded-lg shadow-xl px-5 py-3 flex gap-5">
              <div className="text-left">
                <p className="text-xl font-bold text-primary">350+</p>
                <p className="text-xs text-muted-foreground">Events</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-left">
                <p className="text-xl font-bold text-primary">70k+</p>
                <p className="text-xs text-muted-foreground">Entertained</p>
              </div>
            </div>
          </motion.div>

          {/* Description, CTA, Logos - Third on mobile, left column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-left order-3 lg:order-1 lg:col-start-1 w-full mt-4 lg:mt-0"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
              Grant Price delivers corporate-clean mentalism that gets executives leaning in, laughing together, and swapping &ldquo;how did he do that?&rdquo; stories for weeks.
            </p>

            {/* Primary CTA - left-aligned for F-scanning */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base md:text-lg font-semibold px-8 py-6 md:min-h-[56px] min-h-[48px] shadow-md hover:shadow-lg transition-transform transition-shadow duration-200 hover:scale-[1.02] w-full sm:w-auto"
              >
                Book Grant
              </Button>
            </div>

            {/* Logo Bar - Top Premium Clients */}
            <div className="pt-6 border-t border-white/20">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-4 text-left">Trusted by teams at</p>
              <div className="grid grid-cols-5 items-center gap-3 md:gap-6">
                {[
                  { name: "Google", image: "/images/logos/google.png" },
                  { name: "Microsoft", image: "/images/logos/microsoft.png" },
                  { name: "Texas Health", image: "/images/logos/texas-health-resources.png" },
                  { name: "Dallas Cowboys", image: "/images/logos/dallas-cowboys.png" },
                  { name: "US Air Force", image: "/images/logos/us-air-force.svg" },
                ].map((client) => {
                  const needsSpecialHandling = client.name === "Dallas Cowboys"
                  return (
                    <div key={client.name} className="relative h-6 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Image
                        src={client.image}
                        alt={`${client.name} logo`}
                        width={100}
                        height={32}
                        className={`object-contain h-full w-auto max-w-full ${needsSpecialHandling ? '' : 'brightness-0 invert'}`}
                        style={{ 
                          backgroundColor: 'transparent',
                          mixBlendMode: needsSpecialHandling ? 'normal' : 'normal'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

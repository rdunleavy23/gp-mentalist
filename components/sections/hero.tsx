"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

// Copy notes:
// - Keeps a Paul Rudd-style warmth: friendly phrasing, light humor, and zero ego.
// - Lowers hype and builds trust: specific outcomes (team talks for weeks), named clients, and clear availability cue.
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-[#0A0E27]">
      {/* Set the tone early: warm, skilled, and easy to work with for corporate rooms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
              The Monday-morning mentalism people keep talking about
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-4 leading-relaxed max-w-2xl">
              Grant Price keeps executives laughing, leaning in, and swapping “how did he do that?” stories for weeks. 15 years, 500+ corporate events, zero diva habits—just a kind pro who fits right in with your team.
            </p>
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              Easy coordination, corporate-clean, and he reads the room so your culture shines.
            </p>

            {/* Trust Badges */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start justify-center lg:justify-start space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-white/90">
                  Chosen by <strong>Texas Health Resources</strong>, <strong>US Air Force</strong>, <strong>Google</strong>, <strong>Dallas Cowboys</strong>, and <strong>Microsoft</strong> for smart, clean corporate shows
                </p>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-3">
                <Zap className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-base md:text-lg font-semibold text-white">
                  Quick reply, easy coordination — two February dates open
                </p>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base md:text-lg font-semibold px-8 py-6 md:min-h-[56px] min-h-[48px] shadow-md md:hover:shadow-md md:hover:scale-[1.02] transition-transform transition-shadow duration-200 ease-out w-full sm:w-auto active:scale-[0.985]"
              >
                Check Grant&apos;s calendar
              </Button>
            </div>
            <p className="mt-3 text-sm text-white/80">
              Reply within 4 hours. No pressure—just availability and options.
            </p>
            
            {/* Secondary link (not a button) */}
            <div className="mt-4 text-center lg:text-left">
              <button
                onClick={() => scrollToSection("video")}
                className="text-secondary hover:text-secondary/80 underline text-base md:text-lg font-medium transition-colors"
              >
                See a 60-second highlight with real teams →
              </button>
            </div>
          </motion.div>

          {/* Right - Hero Image/Video */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/images/photos/hero-stage.jpg"
                alt="Grant Price on stage with a laughing participant during a corporate show"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                onError={(e) => {
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

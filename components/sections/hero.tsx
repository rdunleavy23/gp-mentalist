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
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-[#0A0E27]">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Your Team Will Still Be Talking About This on Monday
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Grant Price delivers corporate-clean mentalism that gets executives leaning in, laughing together, and swapping &ldquo;how did he do that?&rdquo; stories for weeks.
            </p>

            {/* Logo Bar - Top Premium Clients */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 mb-4">
                {[
                  { name: "Google", image: "/images/logos/google.png" },
                  { name: "Microsoft", image: "/images/logos/microsoft.png" },
                  { name: "Texas Health", image: "/images/logos/texas-health-resources.png" },
                  { name: "Dallas Cowboys", image: "/images/logos/dallas-cowboys.png" },
                  { name: "US Air Force", image: "/images/logos/us-air-force.svg" },
                ].map((client) => (
                  <div key={client.name} className="relative h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src={client.image}
                      alt={`${client.name} logo`}
                      width={120}
                      height={40}
                      className="object-contain h-full w-auto brightness-0 invert"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm md:text-base text-white/75 text-center lg:text-left">
                Trusted by 20+ companies including Southwest, Chick-fil-A, Ferrari, Luke Bryan, and Fortune 500 brands
              </p>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base md:text-lg font-semibold px-8 py-6 md:min-h-[56px] min-h-[48px] shadow-md hover:shadow-lg transition-transform transition-shadow duration-200 hover:scale-[1.02] w-full sm:w-auto"
              >
                Get Your Instant Quote
              </Button>
              <button
                onClick={() => scrollToSection("video")}
                className="text-secondary hover:text-secondary/80 underline text-base md:text-lg font-medium transition-colors"
              >
                Watch 60-second demo →
              </button>
            </div>
            <p className="mt-4 text-sm text-white/75 text-center lg:text-left">
              Reply within 4 hours • 500+ events • 15 years experience
            </p>
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
                src="/images/photos/grant-stage-performance.jpg"
                alt="Grant Price performing mentalism at a corporate event with engaged audience"
                fill
                priority
                className="object-cover"
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

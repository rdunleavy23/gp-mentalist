"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-24 pb-6 md:pt-32 md:pb-8 bg-white">
      {/* Set the tone early: warm, skilled, and easy to work with for corporate rooms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
              Interactive Mind-Reading for Your Next Event
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

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-left">
              Grant Price delivers corporate-clean mentalism that gets executives leaning in, laughing together, and swapping &ldquo;how did he do that?&rdquo; stories for weeks.
            </p>
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

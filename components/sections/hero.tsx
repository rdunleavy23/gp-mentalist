"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"
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
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Unforgettable Magic for Corporate Events
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Award-winning mentalist who has amazed 70,000+ people and Fortune 500
              companies with mind-blowing performances that make your event the one
              everyone remembers.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start justify-center lg:justify-start space-x-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground">
                  Performed for Southwest Airlines, Ferrari, Farmers Insurance
                </p>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-2">
                <Zap className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base font-semibold text-foreground">
                  Only 2 February spots remaining
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base md:text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                Book Grant for Your Event
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("video")}
                className="text-base md:text-lg font-semibold px-8 py-6"
              >
                See Him in Action →
              </Button>
            </div>
          </motion.div>

          {/* Right - Hero Image/Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                alt="Grant Price performing magic at a corporate event with engaged audience"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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

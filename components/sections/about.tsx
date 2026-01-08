"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left - Text (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Meet Grant Price
            </h2>
            
            {/* Mobile: Collapsible content */}
            <div className="lg:hidden">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Grant lives in the Dallas/Fort Worth area with his wife and 4 kids. He roasts coffee, builds stuff out of wood, and would love to add sleep to that list if anyone has tips.
                </p>

                {/* Expandable content */}
                <div
                  className={`space-y-4 overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p>
                    Grant fell into a vat of toxic waste when he was 4.
                  </p>

                  <p>
                    Okay, not really. His sister taught him a card trick, and he immediately became the most insufferable 4-year-old at the library. (He checked out every magic book. Twice. The librarians still remember him, and not fondly.)
                  </p>

                  <p>
                    People started saying &ldquo;you should do this for a living&rdquo; when he was 6. Which is either adorable or a sign that adults will say literally anything to a kid with a deck of cards. Either way, here he is&mdash;15+ years later&mdash;somehow making corporate audiences forget about their inbox for 45 minutes.
                  </p>

                  <p>
                    What makes Grant different? Honestly, he&apos;s just as confused as you are about how this works. Past clients call him &ldquo;quick-witted,&rdquo; &ldquo;interactive,&rdquo; and &ldquo;surprisingly hilarious&rdquo; (which he chooses to take as a compliment).
                  </p>

                  <p>
                    Grant&apos;s theory: the best corporate events happen when people remember they&apos;re allowed to feel wonder. In jobs where it&apos;s easy to become a little crusty, he brings mystery, laughter, and a reminder that spreadsheets aren&apos;t the only thing worth paying attention to.
                  </p>
                </div>
              </div>

              {/* Read More button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <span>{isExpanded ? "Read Less" : "Read More"}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Desktop: Full content always visible */}
            <div className="hidden lg:block space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Grant fell into a vat of toxic waste when he was 4.
              </p>

              <p>
                Okay, not really. His sister taught him a card trick, and he immediately became the most insufferable 4-year-old at the library. (He checked out every magic book. Twice. The librarians still remember him, and not fondly.)
              </p>

              <p>
                People started saying &ldquo;you should do this for a living&rdquo; when he was 6. Which is either adorable or a sign that adults will say literally anything to a kid with a deck of cards. Either way, here he is&mdash;15+ years later&mdash;somehow making corporate audiences forget about their inbox for 45 minutes.
              </p>

              <p>
                What makes Grant different? Honestly, he&apos;s just as confused as you are about how this works. Past clients call him &ldquo;quick-witted,&rdquo; &ldquo;interactive,&rdquo; and &ldquo;surprisingly hilarious&rdquo; (which he chooses to take as a compliment).
              </p>

              <p>
                Grant&apos;s theory: the best corporate events happen when people remember they&apos;re allowed to feel wonder. In jobs where it&apos;s easy to become a little crusty, he brings mystery, laughter, and a reminder that spreadsheets aren&apos;t the only thing worth paying attention to.
              </p>

              <p>
                Grant lives in the Dallas/Fort Worth area with his wife and 4 kids. He roasts coffee, builds stuff out of wood, and would love to add sleep to that list if anyone has tips.
              </p>
            </div>
          </motion.div>

          {/* Right - Image and Trust Signals (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            {/* Professional Photo */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6 bg-gray-100 transition-transform duration-300 ease-out md:hover:scale-[1.01] md:hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/photos/bio-headshot.avif"
                alt="Grant Price - Professional headshot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = target.parentElement?.querySelector('.photo-fallback')
                  if (fallback) (fallback as HTMLElement).style.display = 'flex'
                }}
              />
              <div className="photo-fallback hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-center px-4">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-serif text-4xl font-bold">GP</span>
                  </div>
                  <p className="text-foreground font-serif text-xl font-bold">Grant Price</p>
                  <p className="text-muted-foreground text-sm mt-1">Corporate Event Mentalist</p>
                </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

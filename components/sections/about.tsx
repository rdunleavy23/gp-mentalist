"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  function handleToggle() {
    if (isExpanded) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsExpanded((prev) => !prev)
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 max-w-sm mx-auto lg:max-w-none transition-transform duration-300 ease-out md:hover:scale-[1.01] md:hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/photos/bio-headshot.avif"
                alt="Grant Price - Professional headshot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 40vw"
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

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <div className="flex justify-center lg:justify-start mb-4">
              <div className="border border-primary/20 py-1 px-4 rounded-lg text-sm text-primary font-medium">
                Your Entertainer
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center lg:text-left">
              Meet Grant Price
            </h2>

            {/* Desktop: show everything */}
            <div className="hidden lg:block space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Grant fell into a vat of toxic waste when he was 4.
              </p>
              <p>
                Okay, not really. His sister taught him a card trick, and he immediately showed everyone.
              </p>
              <p>
                People started saying &ldquo;you should do this for a living&rdquo; when he was 6. A few years later, Grant did his first paid show for his friends and family. In college, his friends called him &ldquo;Abracadabra&rdquo; while he built his entertainment career. Now, over a decade later, he makes corporate audiences excited for their next company event.
              </p>
              <p>
                What makes Grant different? Grant cares about serving people most of all. His mission is to give you the premium event you dream of throwing instead of just another casual party. Past clients call him &ldquo;quick-witted,&rdquo; &ldquo;insanely talented&rdquo;, and &ldquo;tall hair&rdquo; (which he chooses to take as a compliment).
              </p>
              <p>
                Grant&apos;s theory: the best corporate events happen when people remember they&apos;re allowed to feel wonder. A good entertainer makes everyone feel engaged and makes no one feel embarrassed. In jobs where it&apos;s easy to get caught in the day to day, Grant brings mystery, laughter, and a reminder that spreadsheets aren&apos;t the only thing worth paying attention to.
              </p>
              <p>
                When he&apos;s not reading your mind, Grant lives in the Dallas/Fort Worth area with his beautiful wife and 4 amazing kids. He roasts coffee, woodworks, and takes care of his many pets.
              </p>
            </div>

            {/* Mobile/Tablet: show the hook, expand for the rest */}
            <div className="lg:hidden">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Grant fell into a vat of toxic waste when he was 4.
                </p>
                <p>
                  Okay, not really. His sister taught him a card trick, and he immediately showed everyone.
                </p>
                <p>
                  People started saying &ldquo;you should do this for a living&rdquo; when he was 6. A few years later, Grant did his first paid show for his friends and family. In college, his friends called him &ldquo;Abracadabra&rdquo; while he built his entertainment career. Now, over a decade later, he makes corporate audiences excited for their next company event.
                </p>
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="bio-expanded"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 text-muted-foreground leading-relaxed mt-4">
                      <p>
                        What makes Grant different? Grant cares about serving people most of all. His mission is to give you the premium event you dream of throwing instead of just another casual party. Past clients call him &ldquo;quick-witted,&rdquo; &ldquo;insanely talented&rdquo;, and &ldquo;tall hair&rdquo; (which he chooses to take as a compliment).
                      </p>
                      <p>
                        Grant&apos;s theory: the best corporate events happen when people remember they&apos;re allowed to feel wonder. A good entertainer makes everyone feel engaged and makes no one feel embarrassed. In jobs where it&apos;s easy to get caught in the day to day, Grant brings mystery, laughter, and a reminder that spreadsheets aren&apos;t the only thing worth paying attention to.
                      </p>
                      <p>
                        When he&apos;s not reading your mind, Grant lives in the Dallas/Fort Worth area with his beautiful wife and 4 amazing kids. He roasts coffee, woodworks, and takes care of his many pets.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={handleToggle}
                aria-expanded={isExpanded}
                className="mt-5 mx-auto flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <span>{isExpanded ? "Read Less" : "Read More"}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

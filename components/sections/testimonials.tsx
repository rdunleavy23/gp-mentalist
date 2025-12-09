"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns"
import { allReviews } from "@/lib/reviews"

export function Testimonials() {
  // Transform reviews to testimonial format
  const testimonials = allReviews.map((review) => ({
    text: review.quote,
    image: "",
    name: review.author,
    role: undefined,
  }))

  // Split into columns for desktop (3 columns)
  const firstColumn = testimonials.slice(0, 8)
  const secondColumn = testimonials.slice(8, 16)
  const thirdColumn = testimonials.slice(16, 24)

  // Mobile: single column with fewer items
  const mobileColumn = testimonials.slice(0, 6)

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative">
      {/* Let planners hear real voices so they feel safe choosing Grant */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12 md:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-primary/20 py-1 px-4 rounded-lg text-sm text-primary font-medium">
              Testimonials
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center">
            What clients are saying afterward
          </h2>
          <p className="text-center text-muted-foreground mb-6 max-w-[70ch]">
            Notes from planners, execs, and teams after the show
          </p>
        </motion.div>

        {/* Mobile: Single Column */}
        <div className="md:hidden flex justify-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={mobileColumn} duration={20} />
                    </div>

        {/* Desktop: Three Columns */}
        <div className="hidden md:flex justify-center gap-4 lg:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} duration={28} />
        </div>
      </div>
    </section>
  )
}

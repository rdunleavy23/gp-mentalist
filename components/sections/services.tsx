"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function Services() {
  const services = [
    {
      number: "1",
      title: "Event Success Call",
      description: "Quick chat about your event goals, audience vibe, and timeline. We'll map out what works best—no sales pitch, just clarity.",
    },
    {
      number: "2",
      title: "Strolling Magic",
      description: "Grant moves through your crowd with close-up miracles. Perfect for cocktail hours, networking breaks, or keeping energy high between sessions.",
    },
    {
      number: "3",
      title: "Stage Show",
      description: "A polished performance that brings the whole room together. Mind-reading, predictions, and moments your team will replay for weeks.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-primary/20 py-1 px-4 rounded-lg text-sm text-primary font-medium">
              Services
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What&apos;s Included
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[70ch] mx-auto">
            Every booking starts with a success call, then Grant tailors the experience to your event
          </p>
        </motion.div>

        {/* Desktop - Horizontal */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center shadow-md">
                        {service.number}
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        {service.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow between cards (not after last one) */}
                {index < services.length - 1 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    <ArrowRight className="h-6 w-6 text-secondary" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Mobile - Vertical Stack */}
        <div className="md:hidden space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-3 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center shadow-md">
                      {service.number}
                    </div>
                    <h3 className="text-xl font-bold text-foreground m-0">
                      {service.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

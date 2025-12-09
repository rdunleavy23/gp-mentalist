"use client"

import { motion } from "framer-motion"
import { Calendar, Sparkles, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function HowItWorks() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const steps = [
    {
      number: "1",
      title: "Tell us about your event",
      description: "Whether it&apos;s a 500-person conference, intimate executive retreat, or awards gala—share your date, audience size, and goals. We&apos;ll reply quickly with availability and what fits your format.",
      icon: Calendar,
    },
    {
      number: "2",
      title: "Get a custom plan",
      description: "High-energy opener for your conference? Small-group moments at the retreat? Mix-and-mingle during cocktail hour? We send a clear rundown tailored to your event type and pacing—nothing canned.",
      icon: Sparkles,
    },
    {
      number: "3",
      title: "Relax and watch it work",
      description: "From boardrooms to ballrooms, we coordinate quietly, keep it corporate-clean, and your team swaps friendly \"wait, how?\" reactions that carry into Monday. Groups from 20 to 2,000.",
      icon: Zap,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {/* Make the process feel easy, responsive, and tailored for planners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[70ch] mx-auto">
            From first call to applause—here&apos;s how we keep it smooth and low-stress
          </p>
        </motion.div>

        {/* Desktop - Horizontal */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 items-start">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>

                    {/* Number */}
                    <div className="text-5xl font-bold text-primary/20 mb-2">
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/3 -right-4 transform translate-x-1/2 hidden lg:block">
                    <svg
                      className="w-8 h-8 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Mobile - Vertical */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="w-14 h-14 flex-shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-7 w-7 text-secondary" />
                      </div>

                      <div className="flex-1">
                        {/* Number */}
                        <div className="text-3xl font-bold text-primary/20 mb-1">
                          {step.number}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Conversion CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-base md:text-lg font-semibold px-8 py-6"
          >
            Ready to start? Check your date
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Quick reply, no pressure—just availability and options
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
      description: "Share your date, audience size, and goals. We’ll reply quickly with availability and a simple format recommendation.",
    },
    {
      number: "2",
      title: "Get a custom plan",
      description: "Pick the moments you need—opener, breakout, or mingle sets. We’ll send a clear rundown tailored to your pacing.",
    },
    {
      number: "3",
      title: "Relax and watch it work",
      description: "We run the timing and cues so you can host. Your team hears the friendly “wait, how?” reactions from groups of 20 to 2,000.",
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
            From first call to applause—here's how we keep it smooth and low-stress
          </p>
        </motion.div>

        {/* Desktop - Horizontal */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {steps.map((step, index) => {
            return (
              <motion.div
                key={step.number}
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
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        {step.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-10 -right-3 lg:-right-4 transform translate-x-1/2 hidden md:block z-10">
                    <div className="bg-white rounded-full p-2 shadow-lg border-2 border-secondary/20">
                      <svg
                        className="w-5 h-5 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Mobile - Vertical */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center shadow-md">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-foreground flex-1">
                        {step.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
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

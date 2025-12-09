"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, PartyPopper } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Conferences & Company Meetings",
      description: "Set the tone with a tight, upbeat show that keeps people off email and leaning in.",
      features: [
        "High-energy opener or closer that resets the room",
        "Walkaround mind reading during receptions or breaks",
        "Stage show with tasteful audience participation",
        "Branded reveals that nod to your strategy",
      ],
    },
    {
      icon: Users,
      title: "Executive Retreats & Team Building",
      description: "Private, smart mentalism that gets leaders talking and teams connecting without feeling cheesy.",
      features: [
        "Small-group demonstrations that spark honest conversation",
        "Custom beats tied to your goals or values",
        "Comfortable pacing for board dinners and offsites",
        "White-glove coordination so you can simply enjoy",
      ],
    },
    {
      icon: PartyPopper,
      title: "Galas, Awards & Celebrations",
      description: "Keep guests engaged between courses, awards, and speeches with clean, corporate-safe fun.",
      features: [
        "Mix-and-mingle astonishment as guests arrive",
        "Interactive stage moments between segments",
        "Holiday parties, fundraisers, launches, and galas",
        "Hybrid or virtual-friendly options available",
      ],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      {/* Offer clear options that feel safe, flexible, and people-friendly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Three Ways to Elevate Your Event
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every performance is tailored to your event goals, audience, and company culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2 text-sm">
                          <span className="text-secondary mt-1">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

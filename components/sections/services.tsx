"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, PartyPopper } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Events & Conferences",
      description: "From intimate networking sessions to large-scale conferences, Grant delivers magic that breaks the ice and energizes your team.",
      features: [
        "Close-up magic during cocktail hour",
        "Stage show for full audience",
        "Custom tricks with company branding",
        "Virtual performances for remote teams",
      ],
    },
    {
      icon: Users,
      title: "Executive Retreats & Team Building",
      description: "Interactive mentalism that sparks conversation, builds connections, and delivers your leadership message in an unforgettable way.",
      features: [
        "Interactive mentalism demonstrations",
        "Mind-reading that sparks conversation",
        "Customized content for leadership messaging",
        "Intimate groups or large audiences",
      ],
    },
    {
      icon: PartyPopper,
      title: "Special Events & Galas",
      description: "Elevate award ceremonies, fundraisers, and celebrations with entertainment that keeps guests engaged and talking long after the event ends.",
      features: [
        "Award ceremonies and fundraisers",
        "Holiday parties and celebrations",
        "Trade shows and product launches",
        "Mix-and-mingle entertainment",
      ],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Performance Types
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every show is customized to your event goals and audience
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

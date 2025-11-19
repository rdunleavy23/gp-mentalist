"use client"

import { motion } from "framer-motion"
import { Users, Calendar, Building2, Award } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "70,000+",
      label: "People Entertained",
    },
    {
      icon: Calendar,
      value: "500+",
      label: "Corporate Events",
    },
    {
      icon: Building2,
      value: "50+",
      label: "Fortune 500 Companies",
    },
    {
      icon: Award,
      value: "15 Years",
      label: "Professional Experience",
    },
  ]

  return (
    <section className="py-16 md:py-20 gradient-primary-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Icon className="h-10 w-10 md:h-12 md:w-12 text-white mx-auto mb-3 opacity-90" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

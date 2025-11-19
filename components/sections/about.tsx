"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Clock, Users, CheckCircle2 } from "lucide-react"

export function About() {
  const trustSignals = [
    {
      icon: Shield,
      text: "$10M Liability Insurance",
    },
    {
      icon: CheckCircle2,
      text: "Professional Magic Association Member",
    },
    {
      icon: Clock,
      text: "100% On-Time Performance Record",
    },
    {
      icon: Users,
      text: "Customized for Your Audience",
    },
  ]

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
            className="lg:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Meet Grant Price
            </h2>
            <p className="text-xl text-primary font-semibold mb-6">
              Mentalist, Magician, Memory Maker
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Grant discovered his passion for magic at age 12 when his grandfather
                showed him a simple card trick. That moment sparked a lifelong obsession
                with the art of illusion and the psychology of the impossible. After
                performing his way through college and countless local events, he made
                the leap to professional entertainment after a standing ovation at a
                Fortune 500 tech conference changed everything.
              </p>

              <p>
                What sets Grant apart is his genuine love for corporate entertainment.
                "There's something magical about watching executives and professionals
                let their guard down," he explains. "When I perform at corporate events,
                I'm not just doing tricks—I'm creating shared moments of wonder that
                teams bond over long after the event ends."
              </p>

              <p>
                Currently performing his acclaimed residency at Live! by Loew's in
                Arlington, TX, Grant has perfected the art of reading the room and
                customizing every show to fit the audience's energy and the event's
                goals. With professional liability insurance, backup plans for every
                scenario, and 15 years of experience, he's the reliable choice for
                companies that won't settle for anything less than extraordinary.
              </p>

              <p className="text-foreground font-medium">
                Based in the Dallas/Fort Worth area, Grant serves clients nationwide and
                is ready to make your next event unforgettable.
              </p>
            </div>
          </motion.div>

          {/* Right - Image and Trust Signals (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Professional Photo */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Grant Price - Professional headshot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Trust Signals */}
            <div className="space-y-3">
              {trustSignals.map((signal, index) => {
                const Icon = signal.icon
                return (
                  <motion.div
                    key={signal.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {signal.text}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

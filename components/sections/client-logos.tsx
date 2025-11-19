"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ClientLogos() {
  // Client logos - using placeholder approach
  const clients = [
    { name: "Olipop", image: "/images/logo-placeholder.svg" },
    { name: "Southwest Airlines", image: "/images/logo-placeholder.svg" },
    { name: "Luke Bryan", image: "/images/logo-placeholder.svg" },
    { name: "Texas A&M University", image: "/images/logo-placeholder.svg" },
    { name: "Ferrari", image: "/images/logo-placeholder.svg" },
    { name: "Farmers Insurance", image: "/images/logo-placeholder.svg" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="clients" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Trusted by Leading Companies
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={item}
              className="w-full h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              {/* Text placeholder for logos */}
              <div className="text-center px-4">
                <p className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                  {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Scroll */}
        <div className="md:hidden overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-8 px-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center"
              >
                <p className="text-sm font-semibold text-gray-600 text-center">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

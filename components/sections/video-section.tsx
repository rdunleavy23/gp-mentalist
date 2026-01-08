"use client"

import { motion } from "framer-motion"

export function ReactionSection() {
  return (
    <section id="reactions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <blockquote className="space-y-3">
            <p className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
              "As much as I love watching Grant, watching the crowd's faces was my favorite part. Can't wait to use him again!"
            </p>
          </blockquote>
          <figcaption className="text-sm md:text-base text-muted-foreground mt-2">
            — Andrea Hug, Senior Event Planner, AVP, Baird
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}

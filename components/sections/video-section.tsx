"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function ReactionSection() {
  return (
    <section id="reactions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Watch Grant in Action
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-lg hover:bg-primary transition-colors cursor-pointer">
                <Play className="h-10 w-10 md:h-12 md:w-12 text-white ml-1" fill="white" />
              </div>
              <p className="mt-6 text-base md:text-lg text-gray-600">
                See real reactions from corporate events
              </p>
            </div>
            
            {/* Optional: Add actual video element when ready */}
            {/* 
            <video 
              className="w-full h-full object-cover"
              poster="/images/video-poster.jpg"
              controls
            >
              <source src="/videos/grant-performance.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}
          </div>

          {/* Quote below video */}
          <figure className="mt-8 text-center">
            <blockquote className="space-y-3">
              <p className="text-xl md:text-2xl font-serif font-bold text-foreground leading-snug">
                "As much as I love watching Grant, watching the crowd's faces was my favorite part. Can't wait to use him again!"
              </p>
            </blockquote>
            <figcaption className="text-sm md:text-base text-muted-foreground mt-3">
              — Andrea Hug, Senior Event Planner, AVP, Baird
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}

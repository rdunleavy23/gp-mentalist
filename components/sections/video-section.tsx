"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ReactionSection() {
  return (
    <section id="reactions" className="py-16 md:py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Watch Grant in Action
            </h2>
            <svg
              className="absolute -right-10 md:-right-14 top-0 w-8 h-16 md:w-10 md:h-20 text-primary"
              viewBox="0 0 40 72"
              fill="none"
            >
              <path d="M4 8C16 4 36 10 32 28C28 44 16 52 20 64" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M13 58C16 61 19 64 20 66C22 63 25 59 27 57" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          {/* Vimeo Video Embed */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/796784867?badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              title="Grant Price - Corporate Mentalist"
            />
          </div>

          {/* Quote below video */}
          <figure className="mt-10 text-center">
            <blockquote>
              <p className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">
                &ldquo;As much as I love watching Grant, watching the crowd&apos;s faces was my favorite part. Can&apos;t wait to use him again!&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-4">
              {/* Profile image */}
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src="/images/photos/andrea-hug.jpg"
                  alt="Andrea Hug"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Andrea Hug</p>
                <p className="text-white/70 text-sm">Senior Event Planner, AVP, Baird</p>
              </div>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}

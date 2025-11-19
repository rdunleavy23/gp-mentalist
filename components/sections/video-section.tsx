"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function VideoSection() {
  return (
    <section id="video" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Grant in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Watch how Grant transformed leading companies' events into unforgettable
            experiences that teams talk about for years
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900"
        >
          {/* Video embed placeholder - Replace with actual video */}
          <div className="relative w-full h-full group cursor-pointer">
            {/* Thumbnail */}
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=675&fit=crop"
              alt="Grant Price performing magic - video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <button
                aria-label="Play video"
                className="w-20 h-20 md:w-24 md:h-24 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-2xl"
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Alternative: Actual video embed (uncomment to use) */}
          {/* <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Grant Price Performance Highlight Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </motion.div>

        {/* Video caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            Featuring highlights from corporate events, stage shows, and audience reactions
          </p>
        </motion.div>
      </div>
    </section>
  )
}

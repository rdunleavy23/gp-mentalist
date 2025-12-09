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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            See Grant in Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how Grant transformed leading companies&apos; events into unforgettable experiences. See the reactions, feel the energy, and understand why teams talk about these performances for years.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900"
        >
          {/* Video embed - Replace YOUR_VIDEO_ID with actual YouTube/Vimeo video ID */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
            title="Grant Price Performance Highlight Reel - Corporate Event Mentalism"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          
          {/* Fallback thumbnail with play button (shown if video fails to load) */}
          <div className="absolute inset-0 w-full h-full group cursor-pointer hidden">
            <Image
              src="/images/photos/grant-stage-performance.jpg"
              alt="Grant Price performing mentalism - video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={85}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <button
                aria-label="Play video"
                className="w-20 h-20 md:w-24 md:h-24 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-2xl min-h-[80px] min-w-[80px]"
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

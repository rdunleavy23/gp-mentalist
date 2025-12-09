"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function VideoSection() {
  const photos = [
    {
      src: "/images/photos/grant-stage-performance.jpg",
      alt: "Grant Price performing at corporate conference with engaged audience",
      caption: "Conference keynote",
    },
    {
      src: "/images/photos/grant-executive-event.jpg",
      alt: "Grant Price at executive retreat with small group interaction",
      caption: "Executive retreat",
    },
    {
      src: "/images/photos/grant-gala-event.jpg",
      alt: "Grant Price performing at corporate gala with audience reactions",
      caption: "Awards gala",
    },
  ]

  return (
    <section id="video" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            See Grant in Action
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real moments from conferences, retreats, and galas—see the energy, reactions, and corporate-clean style that teams remember.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-gray-100 hover:shadow-2xl transition-shadow">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.parentElement?.querySelector('.photo-fallback')
                    if (fallback) (fallback as HTMLElement).style.display = 'flex'
                  }}
                />
                <div className="photo-fallback hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="text-center px-4">
                    <p className="text-foreground font-serif text-lg font-bold">{photo.caption}</p>
                    <p className="text-muted-foreground text-sm mt-1">Photo coming soon</p>
                  </div>
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium text-sm md:text-base">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

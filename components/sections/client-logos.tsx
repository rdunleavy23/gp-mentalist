"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ClientLogos() {
  // Premium clients - currently using available logos
  // TODO: Add remaining client logos (see /public/images/logos/MISSING_LOGOS.md)
  const clients = [
    { name: "Google", image: "/images/logos/google.png" },
    { name: "Microsoft", image: "/images/logos/microsoft.png" },
    { name: "Texas Health Resources", image: "/images/logos/texas-health-resources.png" },
    { name: "Dallas Cowboys", image: "/images/logos/dallas-cowboys.png" },
    { name: "US Air Force", image: "/images/logos/us-air-force.svg" },
    // These logos need to be added - will display as text fallback until added:
    { name: "Southwest Airlines", image: "/images/logos/southwest.png" },
    { name: "Alcon", image: "/images/logos/alcon.png" },
    { name: "Chick-fil-A", image: "/images/logos/chickfila.png" },
    { name: "Ferrari", image: "/images/logos/ferrari.png" },
    { name: "Artivion", image: "/images/logos/artivion.png" },
    { name: "Luke Bryan", image: "/images/logos/luke-bryan.png" },
    { name: "Triumph", image: "/images/logos/triumph.png" },
    { name: "Flexential", image: "/images/logos/flexential.png" },
    { name: "InfoIMAGE", image: "/images/logos/infoimage.png" },
    { name: "Idera", image: "/images/logos/idera.png" },
    { name: "BazaarVoice", image: "/images/logos/bazaarvoice.png" },
    { name: "Dynatron", image: "/images/logos/dynatron.png" },
    { name: "Olipop", image: "/images/logos/olipop.png" },
    { name: "Nutex Health", image: "/images/logos/nutex-health.png" },
    { name: "Ameriflex", image: "/images/logos/ameriflex.png" },
  ]

  return (
    <section id="clients" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">
            Trusted by teams that expect the best
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            From Fortune 500 tech to beloved brands, corporate planners know Grant delivers.
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {clients.map((client) => (
                <LogoItem key={`first-${client.name}`} client={client} />
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client) => (
                <LogoItem key={`second-${client.name}`} client={client} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoItem({ client }: { client: { name: string; image: string } }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex items-center justify-center flex-shrink-0">
      <div className="relative h-12 md:h-14 w-auto min-w-[100px] md:min-w-[120px] flex items-center justify-center">
        {!imageError ? (
          <Image
            src={client.image}
            alt={`${client.name} logo`}
            width={140}
            height={56}
            className="object-contain h-full w-auto opacity-50 hover:opacity-80 transition-opacity duration-300"
            onError={() => {
              setImageError(true)
            }}
          />
        ) : (
          <div className="text-center px-2">
            <p className="text-muted-foreground text-xs md:text-sm font-medium leading-tight whitespace-nowrap">
              {client.name}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ClientLogos() {
  // Premium client logos - best-in-class companies
  // All logos standardized to 200px width @ 2x resolution for crisp display
  // Display height: 64px (h-16) - consistent visual size across all logos
  const clients = [
    { 
      name: "Texas Health Resources", 
      image: "/images/logos/texas-health-resources.png",
      width: 400,
      height: 225,
    },
    { 
      name: "Google", 
      image: "/images/logos/google.png",
      width: 400,
      height: 225,
    },
    { 
      name: "Microsoft", 
      image: "/images/logos/microsoft.png",
      width: 400,
      height: 225,
    },
    { 
      name: "Dallas Cowboys", 
      image: "/images/logos/dallas-cowboys.png",
      width: 400,
      height: 266,
    },
    { 
      name: "US Air Force", 
      image: "/images/logos/us-air-force.svg",
      width: 200,
      height: 200,
    },
  ]

  return (
    <section id="clients" className="py-16 md:py-24 bg-white">
      {/* Build credibility with familiar logos while keeping the tone approachable */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-3"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
            Teams who trusted Grant with their people
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Texas Health, Google, Microsoft, the Dallas Cowboys, and the U.S. Air Force brought Grant in to get folks laughing together and trading “how did he do that?” stories.
          </p>
          <p className="text-sm text-muted-foreground">
            These are the teams who let me crash their agenda with something fun.
          </p>
        </motion.div>

        {/* Logo images with text fallback */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-12">
          {clients.map((client, index) => (
            <LogoItem key={client.name} client={client} index={index} />
            ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">
          Planners said yes, we kept it corporate-clean, and their teams left smiling.
        </p>
      </div>
    </section>
  )
}

function LogoItem({ client, index }: { client: { name: string; image: string; width: number; height: number }; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center group"
    >
      <div className="relative flex items-center justify-center h-12 md:h-16 w-auto min-w-[120px] md:min-w-[150px]">
        {!imageError ? (
          <div className="relative w-full h-full max-w-[150px] md:max-w-[180px]">
            <Image
              src={client.image}
              alt={`${client.name} logo`}
              width={client.width}
              height={client.height}
              className="object-contain w-auto h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              style={{ width: 'auto', height: '100%' }}
              onError={() => {
                console.error('Image load error:', client.image);
                setImageError(true);
              }}
            />
          </div>
        ) : (
          <div className="text-center">
            <p className="text-muted-foreground text-xs md:text-sm font-medium leading-tight group-hover:text-foreground transition-colors duration-300">
              {client.name.split(' ').map((word, i, arr) => (
                <span key={i}>
                  {word}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

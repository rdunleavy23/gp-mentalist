"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  const methodStacks = [
    "Pre-event intel calls plus a light LinkedIn snoop on your MVPs",
    "Behavioral reads, influence loops, and dual-reality scripting",
    "Live predictions that sneak your KPIs into the punchline",
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Meet Grant Price
            </h2>
            <p className="text-xl text-primary font-semibold mb-6">
              Mentalist, Mind Reader, Memory Maker
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Grant discovered his passion for mentalism at age 12 when his grandfather showed him a simple demonstration of mind reading. That moment sparked a lifelong dedication to the art of mentalism and the psychology of human connection.
              </p>

              <p>
                What sets Grant apart is his genuine love for corporate entertainment. &ldquo;There&apos;s something powerful about watching executives and professionals experience the impossible,&rdquo; he explains. &ldquo;When I perform at corporate events, I&apos;m not just doing demonstrations—I&apos;m creating shared moments of wonder and connection that teams bond over long after the event ends.&rdquo;
              </p>

              <p>
                Currently performing his acclaimed residency at Live! by Loew&apos;s in Arlington, TX, Grant has perfected the art of reading the room and customizing every show to fit the audience&apos;s energy. With professional liability insurance, backup plans for every scenario, and 15 years of experience, he&apos;s the reliable choice for companies that won&apos;t settle for anything less than extraordinary.
              </p>

              <p className="text-foreground font-medium">
                Based in the Dallas/Fort Worth area, Grant serves clients nationwide and is ready to make your next event unforgettable.
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
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6 bg-gray-100">
              <Image
                src="/images/photos/grant-headshot.jpg"
                alt="Grant Price - Professional headshot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = target.parentElement?.querySelector('.photo-fallback')
                  if (fallback) (fallback as HTMLElement).style.display = 'flex'
                }}
              />
              <div className="photo-fallback hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-center px-4">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-serif text-4xl font-bold">GP</span>
                  </div>
                  <p className="text-foreground font-serif text-xl font-bold">Grant Price</p>
                  <p className="text-muted-foreground text-sm mt-1">Corporate Event Mentalist</p>
                </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

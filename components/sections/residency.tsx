"use client"

import { motion } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Residency() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-2 border-secondary/20 overflow-hidden">
            {/* Mobile: stacked layout */}
            <div className="md:hidden">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/loews.jpeg"
                  alt="Live! by Loew's venue in Arlington, TX"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={85}
                />
              </div>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>Currently Performing</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Mental Magic at Live! by Loew&apos;s
                  </h3>
                  <p className="text-base text-muted-foreground mb-1">
                    An Evening of Mind-Reading &amp; Comedy
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    Catch Grant&apos;s signature residency show in person in Arlington, TX.
                  </p>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="font-semibold w-full"
                    asChild
                  >
                    <a
                      href="https://magiciangrantprice.com/mental-magic/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2"
                    >
                      <span>See live dates</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>

            {/* Desktop: side-by-side layout */}
            <div className="hidden md:flex">
              <div className="relative w-2/5 min-h-[280px]">
                <Image
                  src="/images/loews.jpeg"
                  alt="Live! by Loew's venue in Arlington, TX"
                  fill
                  className="object-cover"
                  sizes="40vw"
                  quality={85}
                />
              </div>
              <CardContent className="flex-1 p-8 lg:p-10 flex items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>Currently Performing</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">
                    Mental Magic at Live! by Loew&apos;s
                  </h3>
                  <p className="text-lg text-muted-foreground mb-1">
                    An Evening of Mind-Reading &amp; Comedy
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Catch Grant&apos;s signature residency show in person in Arlington, TX.
                  </p>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="font-semibold"
                    asChild
                  >
                    <a
                      href="https://magiciangrantprice.com/mental-magic/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2"
                    >
                      <span>See live dates</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

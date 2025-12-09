"use client"

import { motion } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Residency() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-2 border-secondary/20">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-6 md:gap-8">
                <div className="text-center md:text-left flex-1 space-y-3">
                  <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <MapPin className="h-4 w-4" />
                    <span>Currently Performing</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                    Live! by Loew&apos;s
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Arlington, TX
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Catch Grant&apos;s signature show in person at his residency. See why teams come back with friends.
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="font-semibold"
                      asChild
                    >
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2"
                      >
                        <span>See live dates</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="w-full">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/photos/loews-exterior.jpg"
                      alt="Live! by Loew's hotel in Arlington, Texas at dusk"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

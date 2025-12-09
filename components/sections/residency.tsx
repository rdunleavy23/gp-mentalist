"use client"

import { motion } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Residency() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-2 border-secondary/20">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left flex-1">
                  <div className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>Currently Performing</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                    Live! by Loew&apos;s
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Arlington, TX
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Experience Grant&apos;s signature show in person at his acclaimed residency performance venue. See why audiences return again and again.
                  </p>
                </div>

                <div className="flex-shrink-0">
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
                      <span>See Live Shows</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

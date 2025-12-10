"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ReactionSection() {
  const reactions = [
    { src: "/images/reactions/reaction-1.jpg", alt: "Guest reacts with surprise during Grant's corporate performance." },
    { src: "/images/reactions/reaction-2.jpg", alt: "Audience laughing together during Grant's set at a corporate event." },
    { src: "/images/reactions/reaction-3.jpg", alt: "Executive smiling and leaning in while Grant performs close-up." },
    { src: "/images/reactions/reaction-4.jpg", alt: "Group reacting with surprise and smiles during a lobby performance." },
    { src: "/images/reactions/reaction-5.jpg", alt: "Guests laughing together during Grant’s set at a corporate reception." },
    { src: "/images/reactions/reaction-6.jpg", alt: "Group smiling and chatting as Grant performs close-up for the table." },
    { src: "/images/reactions/reaction-7.jpg", alt: "Guests grinning and leaning in during Grant's close-up performance." },
  ]

  const visibleReactions = reactions.slice(0, 6)

  return (
    <section id="reactions" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-8 md:mb-10"
        >
          <blockquote className="space-y-3">
            <p className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
              “As much as I love watching Grant, watching the{" "}
              <span className="underline underline-offset-4 decoration-2 decoration-primary italic">
                crowd’s faces
              </span>{" "}
              was my favorite part. Can’t wait to use him again!”
            </p>
          </blockquote>
          <figcaption className="text-sm md:text-base text-muted-foreground mt-2">
            — Andrea Hug, Senior Event Planner, AVP, Baird
          </figcaption>
        </motion.figure>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {visibleReactions.map((reaction, index) => (
            <motion.div
              key={reaction.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-gray-100 shadow-sm aspect-[3/4] md:aspect-[4/3] transition-transform duration-300 ease-out md:hover:scale-[1.02] md:hover:shadow-md md:hover:brightness-105"
            >
              <Image
                src={reaction.src}
                alt={reaction.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm md:text-base text-muted-foreground mt-4 md:mt-5">
          A few favorite faces from recent corporate events.
        </p>
      </div>
    </section>
  )
}

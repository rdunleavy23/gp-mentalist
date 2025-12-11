"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ReactionSection() {
  const reactions = [
    {
      src: "/images/reactions/reaction-1.jpg",
      alt: "Guest reacts with surprise during Grant's corporate performance.",
    },
    {
      src: "/images/reactions/reaction-2.jpg",
      alt: "Audience laughing together during Grant's set at a corporate event.",
    },
    {
      src: "/images/reactions/reaction-3.jpg",
      alt: "Executive smiling and leaning in while Grant performs close-up.",
    },
    {
      src: "/images/reactions/reaction-4.jpg",
      alt: "Group reacting with surprise and smiles during a lobby performance.",
    },
    {
      src: "/images/reactions/reaction-5.jpg",
      alt: "Guests laughing together during Grant’s set at a corporate reception.",
    },
    {
      src: "/images/reactions/reaction-6.jpg",
      alt: "Group smiling and chatting as Grant performs close-up for the table.",
    },
    {
      src: "/images/reactions/reaction-7.jpg",
      alt: "Guests grinning and leaning in during Grant's close-up performance.",
    },
  ]

  return (
    <section id="reactions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-12 md:mb-14"
        >
          <blockquote className="space-y-3">
            <p className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
              “As much as I love watching Grant, watching the crowd’s faces was my favorite part. Can’t wait to use him again!”
            </p>
          </blockquote>
          <figcaption className="text-sm md:text-base text-muted-foreground mt-2">
            — Andrea Hug, Senior Event Planner, AVP, Baird
          </figcaption>
        </motion.figure>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:auto-rows-[180px] lg:auto-rows-[220px] md:gap-4 lg:gap-5">
          {reactions.map((reaction, index) => {
            const layouts = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5 md:row-span-1",
              "md:col-span-5 md:row-span-2",
              "md:col-span-7 md:row-span-1",
              "md:col-span-6 md:row-span-1",
              "md:col-span-6 md:row-span-1",
              "md:col-span-12 md:row-span-1",
            ]
            const layout = layouts[index] ?? "md:col-span-6 md:row-span-1"

            return (
              <motion.div
                key={reaction.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm aspect-[4/3] md:aspect-auto h-full ${layout}`}
              >
                <Image
                  src={reaction.src}
                  alt={reaction.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-sm md:text-base text-muted-foreground mt-6 md:mt-8">
          A few favorite faces from recent corporate events.
        </p>
      </div>
    </section>
  )
}

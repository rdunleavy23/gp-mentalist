"use client"

import React from "react"
import { motion } from "motion/react"

interface Testimonial {
  text: string
  image: string
  name: string
  role?: string
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 md:p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-white"
                  key={`${index}-${i}`}
                >
                  {/* Star Rating */}
                  <div className="flex space-x-0.5 mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm md:text-base text-foreground leading-relaxed">
                    &ldquo;{text}&rdquo;
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">
                        {name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-foreground text-sm md:text-base">
                        {name}
                      </div>
                      {role && (
                        <div className="leading-5 opacity-60 tracking-tight text-xs md:text-sm text-muted-foreground">
                          {role}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}


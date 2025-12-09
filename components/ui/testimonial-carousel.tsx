"use client"

import * as React from "react"

import { motion, PanInfo } from "framer-motion"

import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const goToPrev = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-72 w-full flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative w-full max-w-sm h-64">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing",
                  "bg-white shadow-xl",
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-2 flex justify-between px-4 z-10">
                    <button
                      onClick={goToPrev}
                      className="text-2xl select-none cursor-pointer text-gray-300 hover:text-primary transition-colors"
                      aria-label="Previous testimonial"
                    >
                      &larr;
                    </button>
                    <button
                      onClick={goToNext}
                      className="text-2xl select-none cursor-pointer text-gray-300 hover:text-primary transition-colors"
                      aria-label="Next testimonial"
                    >
                      &rarr;
                    </button>
                  </div>
                )}
                <div className="p-6 flex flex-col items-center gap-4 h-full justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center">
                    {testimonial.name}
                  </h3>
                  <div className="flex space-x-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground leading-relaxed px-2">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {showDots && (
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-gray-300",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)

TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }


"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      quote: "You crushed it. You were honest, humble, and entertaining... Everyone just loved it and had a blast!",
      author: "Josh Paine",
      title: "CEO",
      company: "World Ventures",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
    },
    {
      quote: "People were blown away... a truly unique experience that we all shared in and will remember for years. It was the perfect way to start our week!",
      author: "James Maclean",
      title: "President & CEO",
      company: "Geoforce",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
    },
    {
      quote: "Grant's performance increased engagement at our annual meeting. It was the best event we've had in 10 years, and we've already booked him again!",
      author: "Sarah Mitchell",
      title: "VP of Human Resources",
      company: "Fortune 500 Technology Company",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
    },
    {
      quote: "The perfect blend of professionalism and entertainment. Our clients were amazed, and it set the perfect tone for our product launch event.",
      author: "Michael Chen",
      title: "Event Director",
      company: "National Healthcare Provider",
      image: "https://i.pravatar.cc/150?img=14",
      rating: 5,
    },
  ]

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1 mb-3">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Clients Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by executives and event planners across the country
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full hover:shadow-xl transition-shadow ${
                  index % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <CardContent className="pt-6">
                  <StarRating rating={testimonial.rating} />

                  <blockquote className="text-foreground mb-6 text-base md:text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

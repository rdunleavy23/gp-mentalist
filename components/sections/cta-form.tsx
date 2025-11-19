"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Zap, Shield, Clock } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventDate: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 gradient-primary-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Join 500+ companies who trusted Grant to deliver world-class entertainment
          </p>
          <div className="inline-flex items-center space-x-2 text-white font-semibold">
            <Zap className="h-5 w-5" />
            <span>Only 2 February spots remaining</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-10"
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                We'll get back to you within 4 hours with availability and next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    {...register("phone")}
                    aria-invalid={errors.phone ? "true" : "false"}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <Label htmlFor="eventDate">Event Date (Optional)</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    {...register("eventDate")}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg font-semibold py-6"
                >
                  {isSubmitting ? "Checking Availability..." : "Check Availability Now"}
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="pt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>Response within 4 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>No obligation quote</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-secondary" />
                  <span>Secure & confidential</span>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

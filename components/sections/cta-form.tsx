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
import ReCAPTCHA from "react-google-recaptcha"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  companyWebsite: z
    .string()
    .url("Please enter a valid company website")
    .min(1, "Company website is required"),
  eventDate: z.string().optional(),
  recaptchaToken: z.string().min(1, "Please complete the captcha"),
})

type FormData = z.infer<typeof formSchema>

export function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recaptchaToken: "",
    },
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
    <section id="contact" className="py-16 md:py-24 bg-white">
      {/* Invite a low-pressure next step with fast replies and empathy */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.08 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Want a Monday full of “wait… how did he do that?”
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Join 500+ teams who trust Grant for clean, corporate-friendly fun. Share a date, get a no-pressure quote, and hear back quickly.
          </p>
          <div className="inline-flex items-center space-x-2 text-secondary-foreground font-semibold">
            <Zap className="h-5 w-5" />
            <span>Two February dates open—want one?</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.16 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
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
                We&apos;ll get back to you quickly with availability and next steps.
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

                {/* Company Website */}
                <div className="space-y-2">
                  <Label htmlFor="companyWebsite">
                    Company website <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="companyWebsite"
                    type="url"
                    placeholder="https://yourcompany.com"
                    {...register("companyWebsite")}
                    aria-invalid={errors.companyWebsite ? "true" : "false"}
                    className={errors.companyWebsite ? "border-red-500" : ""}
                  />
                  {errors.companyWebsite && (
                    <p className="text-sm text-red-500" role="alert">
                      {errors.companyWebsite.message}
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

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={(token) => {
                    const value = token ?? ""
                    setRecaptchaToken(value)
                    setValue("recaptchaToken", value, { shouldValidate: true })
                  }}
                  onExpired={() => {
                    setRecaptchaToken("")
                    setValue("recaptchaToken", "", { shouldValidate: true })
                  }}
                />
              </div>
              {errors.recaptchaToken && (
                <p className="text-center text-sm text-red-500" role="alert">
                  {errors.recaptchaToken.message}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !recaptchaToken}
                  className="w-full text-lg font-semibold py-6"
                >
                  {isSubmitting ? "Checking calendar..." : "Check a date"}
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="pt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>Quick replies, same business day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>No-pressure quote—just options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-secondary" />
                  <span>Secure details, kept private</span>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

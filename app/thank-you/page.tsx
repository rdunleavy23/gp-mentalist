"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Sparkles } from "lucide-react"
import { adsConversion } from "@/lib/gtag"

export default function ThankYouPage() {
  const firedRef = useRef(false)

  useEffect(() => {
    if (firedRef.current) return
    firedRef.current = true

    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return
    }

    const params = new URLSearchParams(window.location.search)
    const email = params.get("email")
    const phone = params.get("phone")
    const name = params.get("name")

    if (email || phone || name) {
      const trimmedName = (name ?? "").trim()
      const [firstName, ...rest] = trimmedName.split(" ")
      const lastName = rest.join(" ")

      window.gtag("set", "user_data", {
        ...(email && { email: email.trim().toLowerCase() }),
        ...(phone && { phone_number: phone }),
        ...(trimmedName && {
          address: {
            first_name: firstName,
            last_name: lastName,
          },
        }),
      })
    }

    const transactionId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`

    adsConversion("AW-988155850/mP5lCOPEq60ZEMqfmNcD", {
      transaction_id: transactionId,
    })

    window.gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: "honeybook_form_submission",
    })
  }, [])

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary/15 mb-6"
          >
            <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-secondary" strokeWidth={2.5} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-4"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Thanks! Your message is in.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-2"
          >
            Our team will review your event details and reply within one business day.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8"
          >
            In the meantime, check your inbox for a confirmation. If you don&apos;t see it, peek at the
            spam folder just in case.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[48px]"
            >
              Back to home
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-gradient-to-r from-secondary/5 to-primary/5 p-8 md:p-12"
          >
            <Sparkles className="absolute top-6 right-6 w-10 h-10 text-accent/60" aria-hidden="true" />
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden shadow-lg bg-muted">
                <Image
                  src="/images/photos/bio-headshot.avif"
                  alt="Grant Price"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                  unoptimized
                />
              </div>
              <div className="text-center md:text-left">
                <p className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                  A quick note from Grant
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  &ldquo;Thanks for reaching out. Talk soon.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

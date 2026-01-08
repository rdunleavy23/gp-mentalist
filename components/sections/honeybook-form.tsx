"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

interface HoneybookFormProps {
  formUrl: string
}

export function HoneybookForm({ formUrl }: HoneybookFormProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      {/* Invite a low-pressure next step with fast replies and empathy */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Want a Monday full of &ldquo;wait… how did he do that?&rdquo;
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Join 500+ teams who trust Grant for clean, corporate-friendly fun. Share a date, get a no-pressure quote, and hear back quickly.
          </p>
          <div className="inline-flex items-center space-x-2 text-secondary-foreground font-semibold">
            <Zap className="h-5 w-5" />
            <span>Limited availability this quarter—check availability</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <iframe
            src={formUrl}
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-lg w-full min-h-[600px] md:min-h-[600px]"
            title="Contact Form - Check Availability"
            loading="lazy"
            allow="clipboard-write"
          />
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "So… mentalism isn’t just fancy magic tricks?",
      answer:
        "Magic hides things. Mentalism exposes them. I lean on psychology, pattern reads, and a little playful misdirection to predict choices and connect it to your message. It’s corporate-safe, clean, and built for smart rooms—no doves, just eyebrow raises.",
    },
    {
      question: "Can you bake our strategy or theme into the mind games?",
      answer:
        "Absolutely. Share your KPIs, themes, or that inside joke from the last town hall, and I’ll weave them into predictions and callbacks so it sounds like your company. You’ll see the plan ahead of time—no surprises, no cringe.",
    },
    {
      question: "What types of events do you perform at?",
      answer:
        "I focus on corporate events: conferences, executive retreats, holiday parties, trade shows, award ceremonies, team building, and virtual shows. Groups from 20 to 2,000—I'll size the material to the room. Always clean, always corporate-safe.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "If you can, book 3–6 months out (peak seasons: Nov–Dec, Mar–May). I’ll confirm quickly and do my best on short notice. If a date is tight, I’ll give you options and clear expectations—no pressure.",
    },
    {
      question: "Do you customize performances for our company?",
      answer:
        "Yes. Every show is tailored to your audience, goals, and culture. I’ll incorporate your language, products, or inside jokes, and share the beats in advance. Nothing canned—everything paced to your room.",
    },
    {
      question: "What's included in your fee?",
      answer:
        "Performance, all props/gear, travel within 100 miles of DFW, and a pre-event call to tailor the show. Everything is on contract, and I bring backups so you're covered. Outside DFW, travel is at cost.",
    },
    {
      question: "Can you perform virtually?",
      answer:
        "Yes—Zoom, Teams, and hybrid events. The virtual show is built for screen: interactive mind reading, participation, and custom beats for your team. Same corporate-safe approach, paced for remote attention spans.",
    },
    {
      question: "What if something goes wrong?",
      answer:
        "In 15 years, I've never missed a show. I arrive early, work on contract, and travel with backups (sound, mics, redundancies). If something hiccups, I have contingencies and keep you in the loop—no surprises.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about booking Grant for your event
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

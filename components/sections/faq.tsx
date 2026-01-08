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
      question: "Is your material appropriate for executive and corporate audiences?",
      answer: (
        <div className="space-y-2">
          <p>
            Absolutely. My show is designed for executives, professionals, and mixed company crowds. No embarrassing moments, no edgy humor, no awkward volunteer bits. Just clean, smart mentalism that gets people leaning in and laughing together without ever putting anyone on the spot.
          </p>
          <p>My rule of thumb: if it wouldn&apos;t fly in your office, it won&apos;t be in my show.</p>
        </div>
      ),
    },
    {
      question: "What happens if the event's schedule changes?",
      answer: (
        <div className="space-y-3">
          <p>
            Corporate events have moving parts — I get it. If timing shifts, the AV team needs a minute, or your agenda takes a surprise turn, I roll with it.
          </p>
          <div>
            <p>I always build in:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>buffer time</li>
              <li>backup cues</li>
              <li>multiple ways to shorten or stretch segments</li>
              <li>a &ldquo;keep-everyone-calm&rdquo; attitude</li>
            </ul>
          </div>
          <p>I&apos;m there to make your life easier for the <em>entire</em> event.</p>
        </div>
      ),
    },
    {
      question: "Can you customize the performance to our company, theme, or culture?",
      answer: (
        <div className="space-y-3">
          <p>
            Definitely. I love weaving your message, values, or event theme into what I do. The show stays smart and clean, but the details get tailored for your group so it feels like it was built for your room.
          </p>
          <div>
            <p>Think:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>custom reveals</li>
              <li>personalized moments</li>
              <li>subtle tie-ins to your strategy or goals</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      question: "How far in advance should we book?",
      answer: (
        <div className="space-y-2">
          <p>
            Most companies book 2–4 months ahead, but I always do my best to accommodate tight timelines. If you have a date in mind, reach out — even if it’s close.
          </p>
          <p>My calendar moves fast, but there’s always a chance I have a window that lines up perfectly with your event.</p>
        </div>
      ),
    },
    {
      question: "What’s included in your fee?",
      answer: (
        <div className="space-y-2">
          <p>Everything you need for a smooth, successful show:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>performance time</li>
            <li>all props and materials</li>
            <li>travel (if we include it in the quote)</li>
            <li>coordination with your team + AV</li>
            <li>custom elements tailored to your audience</li>
          </ul>
          <p>No surprise add-ons. No “premium upgrades.” Just a clean, straightforward fee for a polished corporate experience.</p>
        </div>
      ),
    },
    {
      question: "How do you work with AV teams?",
      answer: (
        <div className="space-y-2">
          <p>
            I love AV teams. Truly. They’re the heroes of every event. I send specs ahead of time, arrive early, check cues with your crew, and make adjustments on the fly so everything runs smoothly. I speak “AV,” which makes life easier for everyone.
          </p>
          <p>Happy AV team = happy planner = great show.</p>
        </div>
      ),
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

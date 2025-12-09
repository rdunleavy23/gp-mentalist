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
        "Magic hides things. Mentalism exposes them. I use psychology, pattern recognition, influence theory, and a little light mischief to predict choices, decode tells, and tie everything back to the message you’re trying to land. No doves. Lots of eyebrow raises.",
    },
    {
      question: "Can you bake our strategy or theme into the mind games?",
      answer:
        "Absolutely. Give me your KPIs, slogans, or the inside joke from your CEO’s last town hall and I’ll craft predictions, reveals, and callbacks around it. The reveal hits harder when it *sounds* like your company.",
    },
    {
      question: "What types of events do you perform at?",
      answer:
        "I specialize in corporate events of all kinds including conferences, executive retreats, holiday parties, trade shows, award ceremonies, team building events, and virtual events. Whether you have 20 people or 2,000, I can create a customized performance that fits your event perfectly. I also perform at fundraisers, galas, and special corporate celebrations.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "For best availability, I recommend booking 3-6 months in advance, especially for events during peak seasons (November-December and March-May). However, I understand that sometimes events come together quickly, and I do my best to accommodate last-minute bookings depending on my schedule. Currently, I only have 2 February spots remaining.",
    },
    {
      question: "Do you customize performances for our company?",
      answer:
        "Absolutely! Every show is tailored to your specific audience, event goals, and company culture. I can incorporate your company messaging, product names, industry terminology, or even inside jokes that resonate with your team. Before every event, we'll have a consultation to ensure the performance aligns perfectly with your objectives.",
    },
    {
      question: "What's included in your fee?",
      answer:
        "My fee includes the full performance, all equipment and props needed, travel within a 100-mile radius of Dallas/Fort Worth, a pre-event consultation to customize the show, professional liability insurance ($10M coverage), and backup planning for any scenario. For events outside the DFW area, travel expenses are billed separately at cost.",
    },
    {
      question: "Can you perform virtually?",
      answer:
        "Yes! I offer high-energy virtual shows specifically designed for Zoom, Microsoft Teams, and other video platforms. Virtual performances include interactive mentalism that works on screen, mind reading demonstrations, audience participation elements, and the same level of customization as in-person events. It&apos;s a great solution for remote teams or hybrid events.",
    },
    {
      question: "What if something goes wrong?",
      answer:
        "In 15 years of professional performing, I've never missed a show. I'm fully insured with $10M in professional liability coverage, I always bring backup equipment, and I have contingency plans for every possible scenario. I arrive early to every event, maintain constant communication with your event team, and pride myself on my 100% on-time performance record. Your event is in reliable hands.",
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

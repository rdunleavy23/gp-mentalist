"use client"

import { useState, useEffect, useRef } from "react"
import Script from "next/script"
import { motion } from "framer-motion"
import { Zap, Shield, Clock, Check } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// Honeybook placement ID
const HONEYBOOK_PID = "6482483948520f1939f63594"

// Custom event name for triggering accordion open
const OPEN_CONTACT_ACCORDION_EVENT = "openContactAccordion"

export function CTAForm() {
  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    undefined
  )
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Listen for custom event to open accordion
  useEffect(() => {
    const handleOpenAccordion = () => {
      console.log("Opening accordion via custom event")
      setAccordionValue("honeybook-form")
    }

    window.addEventListener(OPEN_CONTACT_ACCORDION_EVENT, handleOpenAccordion)

    return () => {
      window.removeEventListener(
        OPEN_CONTACT_ACCORDION_EVENT,
        handleOpenAccordion
      )
    }
  }, [])

  // Check hash on mount and hash changes
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#contact") {
        console.log("Opening accordion via hash")
        setAccordionValue("honeybook-form")
      }
    }

    // Check on mount with delay to ensure DOM is ready
    setTimeout(checkHash, 100)

    // Listen for hash changes
    window.addEventListener("hashchange", checkHash)

    return () => {
      window.removeEventListener("hashchange", checkHash)
    }
  }, [])

  // Intersection Observer: Auto-open when scrolled into view with hash
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            // Check if hash is set (indicating CTA click or direct navigation)
            if (window.location.hash === "#contact") {
              console.log("Opening accordion via intersection observer")
              setAccordionValue("honeybook-form")
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = sectionRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <>
      {/* Honeybook script - load once globally */}
      <Script
        id="honeybook-widget-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,b,s,n,i,p,e,t) {
              h._HB_ = h._HB_ || {};h._HB_.pid = i;
              t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
              e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
            })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","${HONEYBOOK_PID}");
          `,
        }}
        onLoad={() => {
          console.log("Honeybook script loaded")
          setIsScriptLoaded(true)
        }}
        onError={() => {
          console.error("Honeybook script failed to load")
        }}
      />
      
      <section
        id="contact"
        ref={sectionRef}
        className="py-16 md:py-24 bg-white"
      >
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
            Want a Monday full of "wait… how did he do that?"
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Join 500+ teams who trust Grant for clean, corporate-friendly fun.
            Share a date, get a no-pressure quote, and hear back quickly.
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
          <Accordion
            type="single"
            collapsible
            value={accordionValue}
            onValueChange={setAccordionValue}
            className="w-full"
          >
            <AccordionItem value="honeybook-form" className="border-none">
              <AccordionTrigger
                className={cn(
                  "flex flex-1 items-center justify-between",
                  "w-full text-lg font-semibold px-6 py-6 rounded-md",
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                  "hover:no-underline transition-colors",
                  "min-h-[56px] md:min-h-[56px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "[&[data-state=open]>svg]:rotate-180"
                )}
              >
                Check Availability
              </AccordionTrigger>
              <AccordionContent 
                className="pt-6" 
                forceMount
                style={{
                  display: accordionValue === "honeybook-form" ? "block" : "none"
                }}
              >
                <div className="w-full min-h-[600px]">
                  {/* Honeybook form container */}
                  <div
                    className={`hb-p-${HONEYBOOK_PID}-3`}
                    id={`hb-form-${HONEYBOOK_PID}`}
                  />
                  
                  {/* Tracking pixel */}
                  <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src={`https://www.honeybook.com/p.png?pid=${HONEYBOOK_PID}`}
                    alt=""
                  />
                </div>

                {/* Trust Signals */}
                <div className="pt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
    </>
  )
}

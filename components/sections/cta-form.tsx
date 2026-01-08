"use client"

import { useState, useEffect, useRef } from "react"
import Script from "next/script"
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
  const sectionRef = useRef<HTMLDivElement>(null)

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
      
      <div id="contact" ref={sectionRef}>
          <Accordion
            type="single"
            collapsible
            value={accordionValue}
            onValueChange={setAccordionValue}
            className="w-full"
          >
            <AccordionItem value="honeybook-form" className="border-none">
              <div className="max-w-md mx-auto">
                <AccordionTrigger
                  className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md",
                    "w-full h-12 px-8 text-base min-h-[48px] md:h-14 md:px-10 md:text-lg md:min-h-[56px]",
                    "font-bold ring-offset-background transition-colors",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "hover:no-underline",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "[&[data-state=open]>svg]:rotate-180"
                  )}
                >
                  Book Grant
                </AccordionTrigger>
              </div>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
    </>
  )
}

import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { ClientLogos } from "@/components/sections/client-logos"
import { HowItWorks } from "@/components/sections/how-it-works"
import { VideoSection } from "@/components/sections/video-section"
import { Services } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { Residency } from "@/components/sections/residency"
import { FAQ } from "@/components/sections/faq"
import { CTAForm } from "@/components/sections/cta-form"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ClientLogos />
      <HowItWorks />
      <VideoSection />
      <Services />
      <Testimonials />
      <Stats />
      <About />
      <Residency />
      <FAQ />
      <CTAForm />
      <StickyMobileCTA />
    </main>
  )
}

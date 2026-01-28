import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { HowItWorks } from "@/components/sections/how-it-works"
import { ReactionSection } from "@/components/sections/video-section"
import { Testimonials } from "@/components/sections/testimonials"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { Residency } from "@/components/sections/residency"
import { FAQ } from "@/components/sections/faq"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <ReactionSection />
      <Testimonials />
      <Stats />
      <About />
      <Residency />
      <FAQ />
      <HowItWorks />
      <StickyMobileCTA />
    </main>
  )
}

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
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-secondary/20 rounded-xl bg-gradient-to-r from-secondary/5 to-primary/5 px-6 py-5 md:px-10 md:py-6 text-center">
            <p className="text-lg md:text-xl text-foreground font-serif font-semibold">
              Your best event this year… or you don't pay.
            </p>
          </div>
        </div>
      </section>
      <About />
      <Residency />
      <FAQ />
      <HowItWorks />
      <StickyMobileCTA />
    </main>
  )
}

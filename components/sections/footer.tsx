import { Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0E27] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Grant Price. All rights reserved.
            </p>
            <p className="text-sm mt-1 text-white/70">
              Based in Arlington/Dallas, TX
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="#"
                className="text-sm hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27] rounded px-2 py-1"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27] rounded px-2 py-1"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27] rounded px-2 py-1"
              >
                Press Kit
              </a>
            </div>
            <div className="mt-4 text-sm text-white/70">
              <p>Email: grant@grantprice.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>

          {/* Right - Social Media */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27]"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27]"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const GOOGLE_ADS_ID = "AW-988155850"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export function event(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return
  window.gtag("event", name, params)
}

export function sectionView(sectionName: string) {
  event("section_view", { section_name: sectionName })
}

export function adsConversion(
  sendTo: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", "conversion", { send_to: sendTo, ...params })
}

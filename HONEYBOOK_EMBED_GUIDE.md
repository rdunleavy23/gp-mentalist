# Honeybook Form Embedding Guide

## Overview
This guide explains how to embed a Honeybook form on your Next.js site. Honeybook provides embed codes that can be integrated into your React components.

## Step 1: Get Your Honeybook Embed Code

1. **Log in to your Honeybook account**
2. Navigate to **Lead Capture** → **Lead Forms**
3. Select the form you want to embed (or create a new one)
4. Click **Share** → **Code** tab
5. Click **Copy code** to copy the embed code

The embed code will typically look like one of these formats:

### Option A: Script Tag (JavaScript)
```html
<script src="https://www.honeybook.com/widgets/lead_form/XXXXX.js" type="text/javascript"></script>
```

### Option B: Iframe
```html
<iframe src="https://www.honeybook.com/widgets/lead_form/XXXXX" width="100%" height="600" frameborder="0"></iframe>
```

### Option C: Div with Script
```html
<div id="honeybook-form-XXXXX"></div>
<script src="https://www.honeybook.com/widgets/lead_form/XXXXX.js" type="text/javascript"></script>
```

## Step 2: Implementation Options for Next.js

### Option 1: Using Next.js Script Component (Recommended)

For script-based embeds, use Next.js's `Script` component for optimal loading:

```tsx
// components/sections/honeybook-form.tsx
"use client"

import Script from 'next/script'
import { useEffect, useRef } from 'react'

export function HoneybookForm() {
  const formRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Replace XXXXX with your actual form ID */}
        <div id="honeybook-form-XXXXX" ref={formRef}></div>
        <Script
          src="https://www.honeybook.com/widgets/lead_form/XXXXX.js"
          strategy="afterInteractive"
          onLoad={() => {
            // Form should be loaded by Honeybook's script
            console.log('Honeybook form loaded')
          }}
        />
      </div>
    </section>
  )
}
```

### Option 2: Using Iframe (Simpler)

If Honeybook provides an iframe embed code:

```tsx
// components/sections/honeybook-form.tsx
"use client"

export function HoneybookForm() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <iframe
          src="https://www.honeybook.com/widgets/lead_form/XXXXX"
          width="100%"
          height="600"
          frameBorder="0"
          className="rounded-lg"
          title="Contact Form"
          loading="lazy"
        />
      </div>
    </section>
  )
}
```

### Option 3: Using dangerouslySetInnerHTML (If needed)

If Honeybook provides raw HTML that needs to be injected:

```tsx
// components/sections/honeybook-form.tsx
"use client"

import { useEffect } from 'react'
import Script from 'next/script'

export function HoneybookForm() {
  useEffect(() => {
    // If Honeybook script needs to run after component mounts
    // The script will handle initialization
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <div id="honeybook-form-XXXXX"></div>
            `
          }}
        />
        <Script
          src="https://www.honeybook.com/widgets/lead_form/XXXXX.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  )
}
```

## Step 3: Replace Your Current Form

You have two options:

### Option A: Replace the existing CTAForm component
Replace the content in `components/sections/cta-form.tsx` with the Honeybook embed.

### Option B: Create a new component and conditionally render
Keep both forms and switch between them:

```tsx
// app/page.tsx
import { CTAForm } from "@/components/sections/cta-form"
import { HoneybookForm } from "@/components/sections/honeybook-form"

export default function Home() {
  const useHoneybook = process.env.NEXT_PUBLIC_USE_HONEYBOOK === 'true'
  
  return (
    <main>
      {/* ... other sections ... */}
      {useHoneybook ? <HoneybookForm /> : <CTAForm />}
    </main>
  )
}
```

## Important Considerations

### 1. Middleware Configuration
Your `middleware.ts` sets `X-Frame-Options: DENY`, but this only prevents YOUR site from being embedded elsewhere. It does NOT prevent you from embedding external iframes (like Honeybook) on your site. **No changes needed.**

### 2. Content Security Policy (CSP)
If you have CSP headers configured, you may need to allow:
- `https://www.honeybook.com` for scripts and iframes
- Check your hosting platform (Vercel, etc.) for CSP settings

### 3. Styling
- Honeybook forms may have their own styling
- You can wrap the form in a container with your site's styling
- Use Tailwind classes for spacing and layout around the form

### 4. Responsive Design
- If using iframe, set `width="100%"` and adjust `height` for mobile
- Consider using CSS to make iframe responsive:
  ```css
  .honeybook-iframe {
    width: 100%;
    height: 600px;
  }
  
  @media (max-width: 768px) {
    .honeybook-iframe {
      height: 800px;
    }
  }
  ```

### 5. Loading Strategy
- Use `strategy="afterInteractive"` for Script component (loads after page becomes interactive)
- Use `loading="lazy"` for iframes (loads when in viewport)

## Testing Checklist

- [ ] Form loads correctly on desktop
- [ ] Form loads correctly on mobile
- [ ] Form submission works
- [ ] Form styling matches your site (or is acceptable)
- [ ] No console errors
- [ ] Form is accessible (keyboard navigation, screen readers)
- [ ] Form appears in the correct location on the page

## Next Steps

1. Get your Honeybook embed code from your Honeybook account
2. Choose an implementation option (Script component or iframe)
3. Create or update the form component
4. Test the form on your development environment
5. Deploy and test on production

## Resources

- [Honeybook Help: Embed Lead Forms](https://help.honeybook.com/en/articles/9590396-how-to-embed-a-lead-form-on-your-business-s-site)
- [Next.js Script Component Docs](https://nextjs.org/docs/app/api-reference/components/script)
- [Next.js Image and Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing)

## Notes

- The current `CTAForm` component uses React Hook Form and Zod validation
- If you switch to Honeybook, you'll lose client-side validation (Honeybook handles it)
- Honeybook will handle form submissions and lead management
- You may want to keep the CTAForm as a fallback or for A/B testing


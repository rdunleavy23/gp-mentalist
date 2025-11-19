# Grant Price - Corporate Event Magician Landing Page

A high-converting, performance-optimized landing page for Grant Price, a corporate event magician and mentalist. Built with Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- **Mobile-First Design**: Fully responsive from 375px to 1920px+
- **Performance Optimized**: Target LCP under 2.5s, optimized images with WebP/AVIF
- **Conversion-Optimized**: Based on evidence-based CRO principles
  - Single clear CTA throughout
  - Limited form fields (4 max)
  - Social proof and trust signals
  - 5th-7th grade reading level copy
- **Accessible**: WCAG AA compliant, keyboard navigation, screen reader friendly
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion with reduced motion support
- **Form Validation**: React Hook Form + Zod validation

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts via next/font)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gp-mentalist
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
gp-mentalist/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with brand colors
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   └── sections/           # Page sections
│       ├── navigation.tsx
│       ├── hero.tsx
│       ├── client-logos.tsx
│       ├── how-it-works.tsx
│       ├── video-section.tsx
│       ├── services.tsx
│       ├── testimonials.tsx
│       ├── stats.tsx
│       ├── about.tsx
│       ├── residency.tsx
│       ├── faq.tsx
│       ├── cta-form.tsx
│       └── footer.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Image assets
```

## Landing Page Sections

1. **Navigation**: Sticky header with smooth scroll navigation
2. **Hero**: Above-the-fold CTA with value proposition
3. **Client Logos**: Social proof from trusted companies
4. **How It Works**: 3-step process for booking
5. **Video Section**: Performance highlight reel
6. **Services**: Three main performance types
7. **Testimonials**: Client reviews with 5-star ratings
8. **Stats Bar**: Key metrics (70,000+ people, 500+ events)
9. **About**: Grant's story and trust signals
10. **Residency**: Live! by Loew's residency callout
11. **FAQ**: Common questions with accordion UI
12. **CTA Form**: Contact form with validation
13. **Footer**: Contact info and social links

## Customization

### Brand Colors

Brand colors are defined in `app/globals.css`:
- Primary: `#960070` (Magenta/Purple) - `hsl(320 100% 29.4%)`
- Secondary: `#2AC4A9` (Teal/Turquoise) - `hsl(172 65% 46.7%)`

To change colors, update the CSS variables in the `:root` selector.

### Content Updates

All content is contained within the section components in `components/sections/`. Edit these files to update:
- Copy and messaging
- Images (update `src` attributes in `Image` components)
- Client logos
- Testimonials
- Services
- FAQ items

### Images

Replace placeholder images with actual photos:
1. Add images to `public/images/`
2. Update `src` attributes in components
3. Ensure images are optimized (WebP/AVIF format)
4. Use appropriate sizes for responsive display

### Form Submission

The contact form (`components/sections/cta-form.tsx`) currently logs to console. To integrate with your backend:

1. Update the `onSubmit` function:
```typescript
const onSubmit = async (data: FormData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  // Handle response
}
```

2. Create an API route at `app/api/contact/route.ts`

## Performance Optimization

- **Image Optimization**: All images use Next.js `Image` component with automatic optimization
- **Font Loading**: Inter font loaded via `next/font` with `display: swap`
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **Lazy Loading**: Images below the fold are lazy loaded
- **Animations**: Framer Motion animations use `transform` and `opacity` only (GPU accelerated)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus-visible states
- Color contrast WCAG AA compliant
- Screen reader friendly
- Reduced motion support

## Building for Production

```bash
npm run build
npm run start
```

This will create an optimized production build in `.next/`.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- etc.

## Performance Checklist

- [ ] Replace placeholder images with optimized WebP/AVIF images
- [ ] Add actual video content to video section
- [ ] Test on real devices (iOS and Android)
- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Test with slow 3G connection
- [ ] Verify all links and CTAs work
- [ ] Test form validation and submission
- [ ] Check cross-browser compatibility
- [ ] Verify accessibility with screen readers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved © 2025 Grant Price

## Support

For questions or issues, please contact the development team.

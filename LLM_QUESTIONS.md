# Questions an LLM Would Still Have

After reviewing the UI/UX specification, an LLM would likely have these questions:

## Image Assets & Media

1. **What are the exact image file paths and filenames?**
   - Hero image: `/images/photos/hero-stage.jpg` (but what if it doesn't exist?)
   - Headshot: `/images/photos/bio-headshot.avif` (AVIF format - what's the fallback?)
   - Reaction photos: `/images/reactions/reaction-1.jpg` through `reaction-7.jpg`
   - What happens if images are missing? (Fallback designs are described but not fully detailed)

2. **What are the exact image dimensions and aspect ratios?**
   - Hero: 16:10 aspect ratio, but what are the actual pixel dimensions?
   - Headshot: 3:4 aspect ratio mentioned in README, but what are the actual dimensions?
   - Reaction photos: Various grid layouts, but what are the source image dimensions?
   - Logo dimensions: Some specs in README, but not all logos have specs

3. **What do the images actually look like?**
   - Visual descriptions of hero image content
   - What's in the reaction photos?
   - What does Grant look like in the headshot?

4. **Image optimization details:**
   - Quality settings: Hero uses `quality={90}`, others use default
   - Some images use `unoptimized={true}` - why and when?
   - What are the `sizes` attribute values for each image?

## Animation & Interaction Details

5. **Mobile menu animation specifics:**
   - What's the exact transition? (Currently just says "smooth slide-in")
   - Duration? Easing function?
   - Does it slide down from top or fade in?
   - What's the z-index stacking order?

6. **Sticky mobile CTA animation:**
   - Uses `animate-in slide-in-from-bottom duration-300` - what library provides this?
   - Exact animation curve?
   - Does it bounce, ease, or linear?

7. **Scroll-triggered animations:**
   - Exact viewport thresholds for `whileInView`?
   - What's the `once: true` behavior - does it reset on scroll back up?
   - Intersection observer root margin settings?

8. **Hover state transitions:**
   - Exact duration for card hover effects?
   - Button hover scale timing?
   - Logo opacity transition duration?

9. **Marquee animation:**
   - Exact pixel distance for the `x: [0, -1920]` animation?
   - How is the seamless loop calculated?
   - What happens if content width changes?

## Form Behavior & Validation

10. **Form submission flow:**
    - Currently just logs to console - what's the actual backend endpoint?
    - What happens on network error?
    - Is there a loading spinner or just button text change?
    - What's the exact success state duration? (5 seconds mentioned)

11. **Form validation timing:**
    - Real-time validation or on submit?
    - When do error messages appear?
    - Are there any custom validation rules beyond Zod schema?

12. **Form field behavior:**
    - Auto-focus on first field?
    - Tab order?
    - Date picker styling and behavior?
    - Phone number formatting?

## Responsive Breakpoints

13. **Exact breakpoint values:**
    - `md:` is 768px, `lg:` is 1024px, `xl:` is 1280px - are these Tailwind defaults?
    - Any custom breakpoints?
    - What about `2xl:` breakpoint mentioned in container config (1400px)?

14. **Breakpoint-specific behaviors:**
    - When exactly does navigation switch from hamburger to horizontal?
    - At what width does the hero switch from single to two columns?
    - Grid column changes at each breakpoint?

## Component States

15. **Button states:**
    - What does disabled state look like visually? (50% opacity mentioned)
    - Active/pressed state?
    - Loading state visual design?

16. **Input field states:**
    - Focus ring exact appearance?
    - Error state border color (red-500 - what's the exact hex?)
    - Placeholder text styling?

17. **Accordion behavior:**
    - Can multiple items be open? (Spec says "single item open")
    - Animation duration? (0.2s mentioned in config)
    - What happens when clicking an open item?

18. **Card hover states:**
    - Exact shadow values for `shadow-sm` vs `shadow-xl`?
    - Scale transform origin point?
    - Does hover work on mobile/touch devices?

## Typography Details

19. **Font weight usage:**
    - Which weights are used where? (300, 400, 500, 600, 700 available)
    - Button text weight: `font-semibold` (600?)
    - Heading weights: Are all headings 700 or some 400?

20. **Text color variations:**
    - `text-white/90` - exact opacity values?
    - `text-muted-foreground` - exact color value?
    - When to use which text color variant?

21. **Letter spacing:**
    - Exact values for different heading levels?
    - Body text letter spacing?

## Spacing & Layout

22. **Gap values:**
    - `gap-6 lg:gap-12` - what are the exact pixel values?
    - `gap-8 md:gap-12` - exact values?
    - When to use which gap size?

23. **Padding variations:**
    - Card padding: `p-6` - is this consistent?
    - Form padding: `p-8 md:p-12` - exact values?
    - Section padding variations?

24. **Max-width usage:**
    - When to use `max-w-7xl` vs `max-w-5xl` vs `max-w-4xl`?
    - Are these centered automatically?

25. **Grid layouts:**
    - Exact column spans for reaction photo grid?
    - How are the varied sizes calculated?
    - Auto-rows height: `md:auto-rows-[180px] lg:auto-rows-[220px]` - why these values?

## Color & Styling

26. **Color opacity values:**
    - `bg-primary/10` - what does this mean exactly? (10% opacity?)
    - `from-primary/20 to-secondary/20` - exact gradient stops?
    - When to use opacity vs solid colors?

27. **Shadow values:**
    - Exact shadow definitions for `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`?
    - Are these Tailwind defaults or custom?

28. **Border styles:**
    - Border width: `border-2` - is this consistent?
    - Border color variations?
    - When to use borders vs shadows?

29. **Gradient specifications:**
    - `bg-gradient-to-b from-white to-gray-50/50` - exact color stops?
    - `bg-gradient-to-r from-secondary/10 to-primary/10` - exact values?
    - `bg-gradient-to-br from-primary/20 to-secondary/20` - angle and stops?

## Interactive Elements

30. **Scroll behavior:**
    - Smooth scroll offset? (Does it account for fixed nav?)
    - Scroll position when clicking nav links?
    - Does mobile menu close on outside click?

31. **Focus management:**
    - Tab order through the page?
    - Focus trap in mobile menu?
    - Skip links for accessibility?

32. **Touch interactions:**
    - Tap highlight color?
    - Long-press behavior?
    - Swipe gestures?

## Content & Data

33. **Dynamic content:**
    - Is the current year in footer dynamic? (Yes, `new Date().getFullYear()`)
    - Are testimonials shuffled or in fixed order?
    - Client logos order - fixed or randomized?

34. **Missing content handling:**
    - What if a logo image fails to load? (Text fallback described)
    - What if testimonials array is empty?
    - What if form submission fails?

35. **External links:**
    - Social media URLs - are they placeholder `#` or actual links?
    - Residency "See live dates" link - where does it go?
    - Footer links (Privacy, Terms, Press Kit) - actual URLs?

## Performance & Optimization

36. **Image loading strategy:**
    - Which images use `priority`? (Hero mentioned)
    - Lazy loading threshold?
    - Image preloading strategy?

37. **Font loading:**
    - Font display strategy: `swap` mentioned
    - Preload critical fonts?
    - Fallback fonts?

38. **Animation performance:**
    - Will-change properties?
    - GPU acceleration details?
    - Reduced motion support?

## Accessibility

39. **ARIA attributes:**
    - Complete ARIA label list?
    - Live regions for dynamic content?
    - Landmark roles?

40. **Keyboard navigation:**
    - Escape key closes mobile menu?
    - Arrow keys in accordion?
    - Enter vs Space for buttons?

41. **Screen reader support:**
    - Hidden text for icons?
    - Alt text for decorative images?
    - Skip to content link?

## Edge Cases & Error States

42. **Error handling:**
    - Network error in form submission?
    - Image load failures?
    - JavaScript disabled?

43. **Empty states:**
    - What if no testimonials?
    - What if no client logos?
    - What if stats are zero?

44. **Browser compatibility:**
    - Which browsers are supported?
    - Polyfills needed?
    - Fallbacks for modern features?

## Technical Implementation

45. **Dependencies:**
    - Exact versions of Framer Motion?
    - React Hook Form version?
    - Zod version?
    - Other critical dependencies?

46. **Build configuration:**
    - Next.js config details?
    - Environment variables needed?
    - API routes structure?

47. **State management:**
    - Is there global state?
    - Context providers?
    - Local storage usage?

## Visual Design Details

48. **Icon usage:**
    - Which icons from Lucide are used where?
    - Icon sizes for different contexts?
    - Icon colors and styling?

49. **Badge designs:**
    - Exact padding and border radius?
    - Font sizes?
    - Color combinations?

50. **Floating badge (hero):**
    - Exact positioning offsets (`-bottom-4 -right-4`)?
    - Z-index relative to image?
    - Responsive positioning?

## Content Strategy

51. **SEO considerations:**
    - Meta descriptions?
    - Open Graph images?
    - Structured data?

52. **Analytics:**
    - Tracking implementation?
    - Event tracking?
    - Conversion goals?

## Missing from Specification

53. **Services section:**
    - Services component exists (`components/sections/services.tsx`) but is NOT rendered in the page
    - Should it be included? If so, where in the page flow?

54. **Footer:**
    - Footer component exists (`components/sections/footer.tsx`) but is NOT rendered in the page
    - Should it be included? If so, where in the page flow?

55. **Section IDs:**
    - Which sections have IDs for anchor linking?
    - What are the exact ID values?

56. **Z-index layers:**
    - What's the z-index stacking order?
    - Navigation: z-50
    - Sticky CTA: z-50
    - What about other elements?

---

## Recommendations for Specification Updates

To make the specification more complete, consider adding:

1. **Image Asset Catalog** - List all images with paths, dimensions, and descriptions
2. **Animation Timing Chart** - All durations, delays, and easing functions
3. **State Machine Diagrams** - Form states, menu states, etc.
4. **Breakpoint Reference Table** - All breakpoints with exact pixel values
5. **Component API Documentation** - Props, states, and behaviors
6. **Error State Designs** - Visual mockups or descriptions
7. **Accessibility Checklist** - Complete ARIA and keyboard navigation details
8. **Performance Budget** - Target metrics and optimization strategies
9. **Browser Support Matrix** - Supported browsers and fallbacks
10. **Content Management** - How to update content, what's dynamic vs static


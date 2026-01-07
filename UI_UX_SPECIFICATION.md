# UI/UX Specification: Grant Price Corporate Mentalist Website

## Overview
A single-page corporate event booking website for Grant Price, a professional mentalist. The site emphasizes trust, professionalism, and approachability for corporate event planners. The design balances warmth with corporate credibility.

---

## Design System

### Color Palette

**Primary Colors:**
- **Primary (Magenta/Hot Pink)**: `hsl(322, 80%, 44%)` - #C71585
  - Used for: Primary buttons, CTAs, focus rings, accents
  - Foreground: White (`hsl(0, 0%, 100%)`)

- **Secondary (Teal/Turquoise)**: `hsl(170, 73%, 44%)` - #1FBFA5
  - Used for: Secondary buttons, badges, icons, trust signals
  - Foreground: Dark navy (`hsl(230, 64%, 11%)`)

- **Accent (Gold)**: `hsl(45, 63%, 53%)` - #D4AF37
  - Used for: Special highlights, decorative elements
  - Foreground: Dark navy (`hsl(230, 64%, 11%)`)

**Neutral Colors:**
- **Background**: White (`hsl(0, 0%, 100%)`)
- **Foreground (Text)**: Dark navy/black (`hsl(230, 64%, 11%)`)
- **Muted Background**: Light navy-tinted gray (`hsl(230, 24%, 96%)`)
- **Muted Foreground**: Medium gray (`hsl(230, 18%, 45%)`)
- **Border**: Light gray (`hsl(230, 20%, 88%)`)

**Dark Sections:**
- **Dark Background**: `#0A0E27` (very dark navy)
- **Text on Dark**: White with varying opacity (90-100%)

**Section Backgrounds:**
- White sections: `bg-white`
- Light gray sections: `bg-gray-50`
- Dark sections: `bg-[#0A0E27]`
- Gradient sections: `bg-gradient-to-b from-white to-gray-50/50`

### Typography

**Font Families:**
- **Headings**: Libre Baskerville (serif) - weights 400, 700
  - Classic, trustworthy, professional
  - Letter spacing: `-0.02em` (h1), `-0.01em` (h2, h3)
  - Line height: `1.1` (h1), `1.2` (h2, h3)

- **Body Text**: Rubik (sans-serif) - weights 300, 400, 500, 600, 700
  - Warm, approachable, modern
  - Letter spacing: `-0.01em`
  - Line height: `1.7` (optimal readability)
  - Font size: Minimum 16px on mobile

**Type Scale:**
- **H1**: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl` (Hero)
- **H2**: `text-3xl md:text-4xl lg:text-5xl` (Section headings)
- **H3**: `text-xl md:text-2xl` (Card titles)
- **Body Large**: `text-lg md:text-xl`
- **Body**: `text-base` (16px minimum)
- **Small**: `text-sm`

**Typography Rules:**
- All body text minimum 16px on mobile
- Line height 1.7 for optimal readability
- Tight letter spacing for headings (-0.01em to -0.02em)
- Relaxed line height for body text

### Spacing System

**Base Unit**: 8px (0.5rem)

**Section Padding:**
- Mobile: `py-16` (64px)
- Tablet: `py-24` (96px)
- Desktop: `py-32` (128px)

**Container Padding:**
- Mobile: `px-4` (16px)
- Tablet: `px-6` (24px)
- Desktop: `px-8` (32px)

**Max Widths:**
- Container: `max-w-7xl` (1280px) - most sections
- Narrow content: `max-w-5xl` (1024px) - forms
- Text content: `max-w-4xl` (896px) - FAQ, about
- Text blocks: `max-w-2xl` (672px) - paragraphs

**Gap Spacing:**
- Cards: `gap-6 lg:gap-12` (24px to 48px)
- Grid items: `gap-8 md:gap-12` (32px to 48px)
- Form fields: `gap-6` (24px)

### Border Radius

- **Default**: `0.5rem` (8px) - `--radius`
- **Large**: `rounded-2xl` (16px) - images, cards
- **Small**: `rounded-lg` (8px) - buttons, badges
- **Full**: `rounded-full` - circular elements

### Shadows

- **Card**: `shadow-sm` (subtle)
- **Card Hover**: `shadow-xl` (elevated)
- **Button**: `shadow-md hover:shadow-lg`
- **Navigation**: `shadow-md` (when scrolled)
- **Sticky CTA**: `shadow-2xl` (prominent)

---

## Layout Structure

### Page Flow (Top to Bottom)

1. **Navigation** (Fixed, top)
2. **Hero Section** (Dark background)
3. **Client Logos** (Gradient background, infinite marquee)
4. **How It Works** (Light gray background, 3-step process)
5. **Reaction Section** (White background, photo grid)
6. **Testimonials** (White background, scrolling columns)
7. **Stats** (Dark background, 4-column grid)
8. **About** (Light gray background, 2-column layout)
9. **Residency** (White background, highlighted card)
10. **FAQ** (Light gray background, accordion)
11. **CTA Form** (White background, centered form)
12. **Sticky Mobile CTA** (Fixed bottom, mobile only)

### Navigation

**Desktop:**
- Fixed position, white background
- Height: `h-16` (64px)
- Logo: "Grant Price" text, primary color, bold
- Right side: "Check Availability" button (primary)
- Shadow appears on scroll

**Mobile:**
- Hamburger menu icon
- Full-width dropdown menu
- CTA button in menu
- Smooth slide-in animation

**Behavior:**
- Smooth scroll to sections
- Shadow on scroll (after 10px)
- Transparent to white background transition

### Hero Section

**Layout:**
- Dark background (`#0A0E27`)
- Two-column grid on desktop (50/50 split)
- Single column on mobile
- Padding: `pt-24 pb-12 md:pt-32 md:pb-20`

**Left Column (Content):**
- Centered on mobile, left-aligned on desktop
- Large serif heading (white text)
- Subheading paragraph (white, 90% opacity)
- Client logo bar (5 logos, white/inverted)
- Primary CTA button

**Right Column (Image):**
- Hero stage image
- Aspect ratio: 16:10
- Rounded corners (`rounded-2xl`)
- Shadow: `shadow-2xl`
- Floating badge overlay: "70,000+ People Entertained"
  - White background
  - Positioned bottom-right
  - Primary color number

**Animations:**
- Fade in from bottom (0.5s)
- Image scale on hover (1.02)
- Smooth easing: `[0.22, 1, 0.36, 1]`

### Client Logos Section

**Layout:**
- Gradient background (white to light gray)
- Centered heading and description
- Infinite horizontal marquee

**Marquee:**
- Continuous horizontal scroll
- Duration: 40 seconds per loop
- Fade gradients on left/right edges
- Logo opacity: 50% default, 80% on hover
- Height: `h-12 md:h-14` (48px to 56px)

**Logos:**
- White/inverted for most logos
- Special handling for logos with backgrounds (Dallas Cowboys)
- Text fallback if image fails to load

### How It Works Section

**Layout:**
- Light gray background
- Centered heading
- 3-step process

**Desktop:**
- Horizontal 3-column grid
- Numbered circular badges (primary color)
- Arrow icons between steps
- Cards with hover shadow

**Mobile:**
- Vertical stack
- Larger numbered badges
- No arrows

**Steps:**
- Number badge (circular, primary background, white text)
- Title (bold, serif)
- Description (muted text)
- CTA button at bottom

### Reaction Section

**Layout:**
- White background
- Quote blockquote at top
- Photo grid below

**Grid:**
- 2 columns on mobile
- 12-column grid on desktop
- Varied sizes (masonry-style):
  - Large: 7 columns × 2 rows
  - Medium: 5 columns × 1-2 rows
  - Small: 6 columns × 1 row
  - Full width: 12 columns × 1 row
- Rounded corners: `rounded-2xl`
- Aspect ratios vary by layout

**Images:**
- Object cover
- Staggered fade-in animation
- Delay: 0.05s per image

### Testimonials Section

**Layout:**
- White background
- Centered heading with badge
- Scrolling columns

**Desktop:**
- 3 columns side-by-side
- Continuous vertical scroll
- Different scroll speeds (25s, 30s, 28s)
- Fade gradients top/bottom

**Mobile:**
- Single column
- 6 testimonials
- 20s scroll duration

**Testimonial Cards:**
- White background
- Quote text
- Author name
- Subtle shadow

### Stats Section

**Layout:**
- Dark background (`#0A0E27`)
- 2 columns on mobile, 4 on desktop
- Centered icons and numbers

**Stat Items:**
- Icon (white, 90% opacity)
- Large number (white, bold)
- Label (white, 90% opacity)
- Staggered fade-in (0.1s delay per item)

**Icons:**
- Lucide icons (Users, Calendar, Building2, Award)
- Size: `h-10 w-10 md:h-12 md:w-12`

### About Section

**Layout:**
- Light gray background
- 2-column grid (60/40 split on desktop)
- Single column on mobile

**Left Column (Text):**
- Heading: "Meet Grant Price"
- Multiple paragraphs
- Muted foreground color
- Relaxed line height

**Right Column (Image):**
- Professional headshot
- Aspect ratio: 3:4 (portrait)
- Rounded corners: `rounded-2xl`
- Shadow: `shadow-2xl`
- Hover scale: `1.01`
- Fallback: Initials "GP" in circle

### Residency Section

**Layout:**
- White background
- Centered card
- Gradient background card

**Card:**
- Gradient: `from-secondary/10 to-primary/10`
- Border: `border-2 border-secondary/20`
- Badge: "Currently Performing" (secondary color)
- Heading: Venue name
- Location: City, state
- Description text
- CTA button (secondary variant)

### FAQ Section

**Layout:**
- Light gray background
- Centered heading
- Accordion component

**Accordion:**
- Single item open at a time
- Question: Bold, left-aligned
- Answer: Muted text, relaxed line height
- Smooth expand/collapse animation
- Border between items

### CTA Form Section

**Layout:**
- White background
- Centered content
- Max width: `max-w-5xl`

**Form:**
- White card with shadow: `shadow-2xl`
- Rounded: `rounded-2xl`
- Padding: `p-8 md:p-12`
- 2-column grid on desktop (name/email, phone/date)
- Single column on mobile

**Fields:**
- Labels with required asterisk (red)
- Inputs: `border-2`, rounded
- Error states: Red border, error message below
- Submit button: Full width, large size

**Success State:**
- Green checkmark icon
- Thank you message
- Auto-reset after 5 seconds

**Trust Signals:**
- Icons with text (Clock, Check, Shield)
- Centered below form
- Muted text color

### Sticky Mobile CTA

**Behavior:**
- Fixed bottom, mobile only
- Appears after scrolling past hero (600px)
- Dismissible with X button
- Smooth slide-in animation

**Design:**
- White background
- Border top
- Shadow: `shadow-2xl`
- Full-width button
- Close button (X icon)

---

## Component Patterns

### Buttons

**Variants:**
- **Default (Primary)**: Magenta background, white text
- **Secondary**: Teal background, dark navy text
- **Outline**: Border, transparent background
- **Ghost**: No background, hover accent
- **Link**: Underlined text

**Sizes:**
- **Default**: `h-11` (44px minimum for touch)
- **Small**: `h-11` (44px minimum)
- **Large**: `h-12 md:h-14` (48px to 56px)
- **Icon**: `h-11 w-11` (44px square)

**States:**
- Hover: Slight scale (`scale-[1.02]`)
- Shadow: `shadow-md hover:shadow-lg`
- Disabled: 50% opacity, no pointer events
- Focus: Ring outline (primary color)

**Text:**
- Font weight: `font-semibold`
- Size: `text-base md:text-lg` (large buttons)

### Cards

**Base Style:**
- White background
- Border: `border` (light gray)
- Rounded: `rounded-lg`
- Shadow: `shadow-sm`
- Padding: `p-6`

**Hover State:**
- Shadow: `shadow-xl`
- Scale: `scale-1.02` (optional)

**Card Components:**
- **CardHeader**: `p-6`, flex column, `space-y-1.5`
- **CardTitle**: `text-2xl font-semibold`
- **CardDescription**: `text-sm text-muted-foreground`
- **CardContent**: `p-6 pt-0`

### Input Fields

**Base Style:**
- Border: `border-2`
- Rounded: `rounded-md`
- Padding: `px-3 py-2`
- Focus: Ring outline (primary color)
- Minimum height: 44px (touch target)

**States:**
- Default: Light gray border
- Focus: Primary color ring
- Error: Red border (`border-red-500`)
- Disabled: Muted background

**Labels:**
- Above input
- Required asterisk: Red (`text-red-500`)
- Font: Medium weight

### Accordion

**Trigger:**
- Bold text
- Left-aligned
- Chevron icon (rotates on open)
- Padding: `p-4`

**Content:**
- Muted text color
- Relaxed line height
- Padding: `p-4 pt-0`
- Smooth height transition

### Badges

**Style:**
- Rounded: `rounded-full` or `rounded-lg`
- Padding: `px-4 py-2`
- Font: `text-sm font-semibold`
- Examples:
  - "Testimonials" badge: Border, primary color text
  - "Currently Performing": Secondary background, white text

---

## Animations & Interactions

### Scroll Animations

**Fade In:**
- Initial: `opacity: 0, y: 20`
- Animate: `opacity: 1, y: 0`
- Duration: 0.5-0.8s
- Easing: `[0.22, 1, 0.36, 1]` or `[0.25, 1, 0.5, 1]`
- Trigger: `whileInView` (once)

**Stagger:**
- Delay: `index * 0.05-0.12s`
- Used for: Grid items, lists

### Hover Effects

**Cards:**
- Scale: `scale-1.02`
- Shadow: `shadow-sm` → `shadow-xl`
- Transition: `transition-shadow duration-200`

**Buttons:**
- Scale: `scale-[1.02]`
- Shadow: `shadow-md` → `shadow-lg`
- Background: 90% opacity on hover

**Images:**
- Scale: `scale-[1.01]` (subtle)
- Shadow: Enhanced on hover

### Smooth Scrolling

- All anchor links: `scroll-behavior: smooth`
- Scroll offset: None (scrolls to element top)
- Mobile menu closes on scroll

### Loading States

**Form Submission:**
- Button text: "Checking calendar..."
- Disabled state
- Loading spinner (if implemented)

**Image Loading:**
- Fallback display if error
- Placeholder gradient background
- Error handling with console log

---

## Responsive Design

### Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)
- **Large Desktop**: `xl:` (≥ 1280px)

### Mobile-First Approach

- Base styles for mobile
- Progressive enhancement for larger screens
- Touch targets: Minimum 44px × 44px
- Font size: Minimum 16px

### Grid Patterns

**1 Column → 2 Columns → 3 Columns:**
- Services: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

**1 Column → 3 Columns:**
- How It Works: `md:grid-cols-3`

**2 Columns → 4 Columns:**
- Stats: `grid-cols-2 md:grid-cols-4`

**2 Columns → 12 Columns:**
- Reaction photos: `grid-cols-2 md:grid-cols-12`

### Typography Scaling

- Headings: Scale up on larger screens
- Body: Consistent 16px base, larger on desktop
- Buttons: Larger text on desktop

### Navigation

- Desktop: Horizontal menu
- Mobile: Hamburger menu, full-width dropdown

### Image Handling

- Responsive images with `sizes` attribute
- Aspect ratios maintained
- Object-fit: `cover` for hero/reaction images
- Object-fit: `contain` for logos

---

## Accessibility

### Focus States

- Visible focus rings: `ring-2 ring-ring ring-offset-2`
- Primary color ring
- Applied to: Buttons, links, form inputs

### ARIA Labels

- Navigation menu: `aria-expanded`, `aria-label`
- Social links: `aria-label` with platform name
- Form fields: `aria-invalid` for errors

### Keyboard Navigation

- All interactive elements keyboard accessible
- Tab order: Logical flow
- Enter/Space: Activates buttons

### Color Contrast

- Text on white: Dark navy (high contrast)
- Text on dark: White (high contrast)
- Primary buttons: White on magenta (WCAG AA+)
- Secondary buttons: Dark navy on teal (WCAG AA+)

### Touch Targets

- Minimum 44px × 44px for all interactive elements
- Adequate spacing between touch targets
- Mobile menu: Full-width buttons

---

## Visual Hierarchy

### Heading Hierarchy

1. **H1**: Hero heading (largest, serif, white on dark)
2. **H2**: Section headings (large, serif, centered)
3. **H3**: Card titles, subsections (medium, serif)

### Content Hierarchy

1. **Primary CTA**: Large, primary color, prominent
2. **Section Headings**: Large, serif, centered
3. **Body Text**: Readable, muted color for descriptions
4. **Supporting Elements**: Smaller, muted color

### Color Hierarchy

- **Primary Actions**: Magenta (primary)
- **Secondary Actions**: Teal (secondary)
- **Information**: Muted gray
- **Emphasis**: Primary or secondary color

### Spacing Hierarchy

- Large gaps: Between major sections
- Medium gaps: Between cards/items
- Small gaps: Within components

---

## Content Strategy

### Tone of Voice

- **Warm & Approachable**: Friendly, conversational
- **Professional**: Corporate-safe, trustworthy
- **Confident**: Skilled, experienced
- **Humble**: Self-aware humor, relatable

### Key Messages

1. **Corporate-Safe**: Clean, appropriate for executives
2. **Easy to Work With**: Responsive, flexible, low-stress
3. **Proven Track Record**: 70,000+ people, 500+ events
4. **Customizable**: Tailored to company culture
5. **Quick Response**: Same-day replies, no pressure

### Trust Signals

- Client logos (Fortune 500 companies)
- Testimonials (real quotes from planners)
- Stats (numbers, years of experience)
- Professional headshot
- Insurance and backup equipment mentioned
- Quick response promise

---

## Performance Considerations

### Image Optimization

- Next.js Image component
- AVIF format for photos (where available)
- Responsive `sizes` attribute
- Lazy loading (except hero)
- Quality: 90 for hero, default for others

### Animation Performance

- Framer Motion with `viewport={{ once: true }}`
- CSS transforms (GPU accelerated)
- Reduced motion support (if implemented)

### Font Loading

- `display: swap` for web fonts
- Variable fonts for efficiency
- Preload critical fonts (if needed)

---

## Technical Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **UI Components**: Radix UI (Accordion, Slot)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Rubik, Libre Baskerville)

---

## Complete Copy/Content

### Navigation

**Logo/Brand Name:**
- "Grant Price"

**CTA Button:**
- "Check Availability"

**Menu Items:**
- Currently empty (no navigation links)

---

### Hero Section

**Main Headline (H1):**
- "Your Team Will Still Be Talking About This on Monday"

**Subheadline/Description:**
- "Grant Price delivers corporate-clean mentalism that gets executives leaning in, laughing together, and swapping "how did he do that?" stories for weeks."

**Floating Badge:**
- Number: "70,000+"
- Label: "People Entertained"

**CTA Button:**
- "Check Availability"

**Client Logos (displayed in hero):**
- Google
- Microsoft
- Texas Health
- Dallas Cowboys
- US Air Force

---

### Client Logos Section

**Heading (H2):**
- "Trusted by teams that expect the best"

**Description:**
- "From Fortune 500 tech to beloved brands, corporate planners know Grant delivers."

**Client Names (in marquee):**
1. Google
2. Microsoft
3. Texas Health Resources
4. Dallas Cowboys
5. US Air Force
6. Southwest Airlines
7. Alcon
8. Chick-fil-A
9. Ferrari
10. Artivion
11. Luke Bryan
12. Triumph
13. Flexential
14. InfoIMAGE
15. Idera
16. BazaarVoice
17. Dynatron
18. Olipop
19. Nutex Health
20. Ameriflex

---

### How It Works Section

**Heading (H2):**
- "How It Works"

**Description:**
- "From first call to applause—here's how we keep it smooth and low-stress"

**Step 1:**
- Number: "1"
- Title: "Tell us about your event"
- Description: "Share your date, audience size, and goals. We'll reply quickly with availability and a simple format recommendation."

**Step 2:**
- Number: "2"
- Title: "Get a custom plan"
- Description: "Pick the moments you need—opener, breakout, or mingle sets. We'll send a clear rundown tailored to your pacing."

**Step 3:**
- Number: "3"
- Title: "Relax and watch it work"
- Description: "We run the timing and cues so you can host. Your team hears the friendly "wait, how?" reactions from groups of 20 to 2,000."

**CTA Button:**
- "Check Availability"

**CTA Subtext:**
- "Quick reply, no pressure—just availability and options"

---

### Services Section

**Heading (H2):**
- "Three Ways to Elevate Your Event"

**Description:**
- "Every performance is tailored to your event goals, audience, and company culture"

**Service 1: Conferences & Company Meetings**
- Icon: Briefcase
- Title: "Conferences & Company Meetings"
- Description: "Conference room's buzzing, coffee in hand, and the opener keeps laptops shut and heads up."
- Features:
  - "High-energy opener/closer that resets the room"
  - "Walkaround between sessions to spark hallway chatter"
  - "Stage beats with tasteful, corporate-safe participation"
  - "He reads the agenda so you don't have to worry"

**Service 2: Executive Retreats & Team Building**
- Icon: Users
- Title: "Executive Retreats & Team Building"
- Description: "Think boardroom or lodge: small, smart moments that get leaders talking without the cheese."
- Features:
  - "Small-group reveals that spark honest conversation"
  - "Custom beats tied to your goals or values"
  - "Pacing matched to dinners and offsites"
  - "White-glove coordination; you enjoy, he cues"

**Service 3: Galas, Awards & Celebrations**
- Icon: PartyPopper
- Title: "Galas, Awards & Celebrations"
- Description: "Ballroom buzz: between courses and awards, guests stay engaged and keep chatting."
- Features:
  - "Mix-and-mingle astonishment as guests arrive"
  - "Quick stage moments between segments, no drag"
  - "Holiday parties, fundraisers, launches, and galas"
  - "Teams leave with Monday "how did he…?" stories"

---

### Reaction Section

**Quote:**
- "As much as I love watching Grant, watching the crowd's faces was my favorite part. Can't wait to use him again!"

**Attribution:**
- "— Andrea Hug, Senior Event Planner, AVP, Baird"

**Caption (below photo grid):**
- "A few favorite faces from recent corporate events."

**Image Alt Text:**
1. "Guest reacts with surprise during Grant's corporate performance."
2. "Audience laughing together during Grant's set at a corporate event."
3. "Executive smiling and leaning in while Grant performs close-up."
4. "Group reacting with surprise and smiles during a lobby performance."
5. "Guests laughing together during Grant's set at a corporate reception."
6. "Group smiling and chatting as Grant performs close-up for the table."
7. "Guests grinning and leaning in during Grant's close-up performance."

---

### Testimonials Section

**Badge:**
- "Testimonials"

**Heading (H2):**
- "What clients are saying afterward"

**Description:**
- "Notes from planners, execs, and teams after the show"

**CTA Button:**
- "Check Availability"

**All Testimonials (24 total):**

1. "It wasn't just the best show our company has ever hosted, but the most astonishing magic experience I've witnessed. The next day, and for days after, it was all anyone could talk about." — Justin S.

2. "You crushed it. You were honest, humble, and entertaining... Everyone just loved it and had a blast!" — Josh P.

3. "People were blown away... a truly unique experience that we all shared in and will remember for years. It was the perfect way to start our week!" — James M.

4. "My clients raved about his performance and several wanted his contact information so they could have him for their own business corporate events. Grant was not only entertaining but also a class act." — Johnny Y.

5. "Everyone's minds were blown. He is funny, entertaining, and does some pretty incredible tricks. Everyone is still talking about the crazy tricks he did. 10 out of 10!" — Malissa M.

6. "Grant entertained small groups before his show and stayed to mingle afterward. He is incredibly talented and personable. The recurring praise we heard was 'he hit it out of the ballpark!'" — Gina J.

7. "As much as I love watching Grant, watching the crowds' faces was by far my favorite. The shock, awe, and happiness truly made the event unique and memorable." — Andrea H.

8. "Grant made it easy to problem solve with us. His professionalism, skills, communication, sense of humor, and kindness created a memorable and successful hybrid event for our global audience." — Nadia T.

9. "We had Grant kick off our annual company conference. We could not have had a better experience from contracting through the performance itself. He tailored everything to our theme." — Kevin B.

10. "We had Grant entertain for our company year-end celebration, and he was a 10 out of 10! From scheduling to the actual event, his whole bit is world class." — Ryan A.

11. "Our audience was on the edge of their seat the entire time and left feeling amazed. It was a perfect way for us to celebrate accomplishments for work completed!" — Brandi J.

12. "Grant is warm, charismatic, and professional. His show was extraordinary and participants of my conference gave him glowing reviews. He does exactly as he promises." — James M.

13. "Grant kept us all completely engaged 100% of the time. He is a consummate professional and very personable. It was a stellar show, and I would definitely recommend this to anyone!" — Elizabeth F.

14. "Grant is fantastic! His magic is just as good (or better) as what you see on America's Got Talent. Loved it!" — Alex M.

15. "His show BLEW OUR MINDS, plus we laughed a TON. You will elevate any event by hiring him to perform for you!" — Valerie M.

16. "Remarkable magician and mentalist with a great engaging show that was fun and clean. He performed for our family over Zoom, was tremendously fun and capable of dealing with large groups." — Alex H.

17. "Incredible performance. Highly recommend! Great for corporate events, church groups, or anyone who wants to have their mind blown in the best way!" — Nelson S.

18. "Grant does an excellent job getting the entire audience involved and entertained. It is a great mix of humor, magic, and mentalism. He should really charge more!" — Dan P.

19. "Grant has amazing showmanship. He kept the show lively and ensured everyone had fun. I will be taking my wife for another one. He is great with interacting with the audience." — Justin M.

20. "My family loved the show Grant put on for us. He was funny, interactive, and talented. Kept us guessing about how he did the tricks until days after. Highly recommend!" — Kyle M.

21. "This show was so incredible... even virtually my mind was BLOWN. Grant delivers amazing entertainment regardless of format!" — Maya F.

22. "I was quite skeptical about a digital magic show, but Grant is amazingly talented and engaging! What a great time even over Zoom!" — Drew K.

---

### Stats Section

**Stat 1:**
- Icon: Users
- Value: "70,000+"
- Label: "People Entertained"

**Stat 2:**
- Icon: Calendar
- Value: "500+"
- Label: "Corporate Events"

**Stat 3:**
- Icon: Building2
- Value: "50+"
- Label: "Fortune 500 Companies"

**Stat 4:**
- Icon: Award
- Value: "15 Years"
- Label: "Professional Experience"

---

### About Section

**Heading (H2):**
- "Meet Grant Price"

**Content (paragraphs):**

1. "Grant fell into a vat of toxic waste when he was 4."

2. "Okay, not really. His sister taught him a card trick, and he immediately became the most insufferable 4-year-old at the library. (He checked out every magic book. Twice. The librarians still remember him, and not fondly.)"

3. "People started saying "you should do this for a living" when he was 6. Which is either adorable or a sign that adults will say literally anything to a kid with a deck of cards. Either way, here he is—15+ years later—somehow making corporate audiences forget about their inbox for 45 minutes."

4. "What makes Grant different? Honestly, he's just as confused as you are about how this works. Past clients call him "quick-witted," "interactive," and "surprisingly hilarious" (which he chooses to take as a compliment)."

5. "Grant's theory: the best corporate events happen when people remember they're allowed to feel wonder. In jobs where it's easy to become a little crusty, he brings mystery, laughter, and a reminder that spreadsheets aren't the only thing worth paying attention to."

6. "When he's not reading minds (or pretending to), Grant lives in the Dallas/Fort Worth area with his wife and 4 kids. He roasts coffee, builds stuff out of wood, and would love to add sleep to that list if anyone has tips."

**Image Alt Text:**
- "Grant Price - Professional headshot"

**Fallback Text (if image fails):**
- Initials: "GP"
- Name: "Grant Price"
- Title: "Corporate Event Mentalist"

---

### Residency Section

**Badge:**
- "Currently Performing" (with MapPin icon)

**Heading (H3):**
- "Live! by Loew's"

**Location:**
- "Arlington, TX"

**Description:**
- "Catch Grant's signature show in person at his residency. See why teams come back with friends."

**CTA Button:**
- "See live dates" (with ExternalLink icon)

---

### FAQ Section

**Heading (H2):**
- "Frequently Asked Questions"

**Description:**
- "Everything you need to know about booking Grant for your event"

**FAQ Items:**

**1. Is your material appropriate for executive and corporate audiences?**
- Answer: "Absolutely. My show is designed for executives, professionals, and mixed company crowds. No embarrassing moments, no edgy humor, no awkward volunteer bits. Just clean, smart mentalism that gets people leaning in and laughing together without ever putting anyone on the spot. My rule of thumb: if it wouldn't fly in your boardroom, it won't be in my show."

**2. What happens if something goes wrong or plans change?**
- Answer: "Corporate events have moving parts — I get it. If timing shifts, AV needs a minute, or your agenda takes a surprise turn, I roll with it. I always build in: buffer time, backup cues, multiple ways to shorten or stretch segments, a "keep-everyone-calm" attitude. My job is to make your job easier, not add stress."

**3. Do you carry liability insurance and backup equipment?**
- Answer: "Yes on both. I carry full professional liability insurance and travel with backup gear for anything that could reasonably (or unreasonably) go sideways. It's the unglamorous part of performing — but it's also the part that lets you relax."

**4. Can you customize the performance to our company, theme, or culture?**
- Answer: "Definitely. I love weaving your message, values, or event theme into what I do. The show stays smart and clean, but the details get tailored for your group so it feels like it was built for your room. Think: custom reveals, personalized moments, subtle tie-ins to your strategy or goals."

**5. What types of corporate events do you perform at?**
- Answer: "Most of my work falls into these categories: conferences & company meetings, team offsites & leadership retreats, awards nights & galas, client appreciation events, holiday parties, executive dinners (small-group mind-reading is a crowd favorite). If your event involves adults who enjoy smiling and having their minds gently scrambled, I'm your guy."

**6. How far in advance should we book?**
- Answer: "Most companies book 2–4 months ahead, but I always do my best to accommodate tight timelines. If you have a date in mind, reach out — even if it's close. My calendar moves fast, but there's always a chance I have a window that lines up perfectly with your event."

**7. What's included in your fee?**
- Answer: "Everything you need for a smooth, successful show: performance time, all props and materials, travel (if we include it in the quote), coordination with your team + AV, custom elements tailored to your audience. No surprise add-ons. No "premium upgrades." Just a clean, straightforward fee for a polished corporate experience."

**8. How do you work with AV teams?**
- Answer: "I love AV teams. Truly. They're the heroes of every event. I send specs ahead of time, arrive early, check cues with your crew, and make adjustments on the fly so everything runs smoothly. I speak "AV," which makes life easier for everyone. Happy AV team = happy planner = great show."

---

### CTA Form Section

**Heading (H2):**
- "Want a Monday full of "wait… how did he do that?""

**Description:**
- "Join 500+ teams who trust Grant for clean, corporate-friendly fun. Share a date, get a no-pressure quote, and hear back quickly."

**Urgency Message (with Zap icon):**
- "Limited availability this quarter—check availability"

**Form Fields:**

**Name:**
- Label: "Name *" (required)
- Placeholder: "Your full name"
- Error: "Name must be at least 2 characters"

**Email:**
- Label: "Email *" (required)
- Placeholder: "your.email@company.com"
- Error: "Please enter a valid email address"

**Phone:**
- Label: "Phone *" (required)
- Placeholder: "(555) 123-4567"
- Error: "Please enter a valid phone number"

**Event Date:**
- Label: "Event Date (Optional)"
- Type: Date picker

**Submit Button:**
- Default: "Check Availability"
- Loading: "Checking calendar..."

**Success Message:**
- Heading: "Thank You!"
- Message: "We'll get back to you quickly with availability and next steps."

**Trust Signals (below form):**
1. Clock icon: "Quick replies, same business day"
2. Check icon: "No-pressure quote—just options"
3. Shield icon: "Secure details, kept private"

---

### Sticky Mobile CTA

**Button Text:**
- "Check Availability"

**Close Button:**
- X icon (dismissible)

---

### Footer

**Copyright:**
- "© {currentYear} Grant Price. All rights reserved."

**Location:**
- "Based in Arlington/Dallas, TX"

**Links:**
- "Privacy Policy"
- "Terms"
- "Press Kit"

**Contact Info:**
- Email: "grant@grantprice.com"
- Phone: "(555) 123-4567"

**Social Media Links:**
- LinkedIn
- Instagram
- YouTube

---

## Section-Specific Details

### Hero Section
- Dark background creates strong contrast
- Floating badge adds credibility
- Client logos establish trust immediately
- Large, bold headline with emotional hook

### Client Logos
- Infinite marquee creates sense of volume
- Fade edges prevent harsh cutoffs
- Opacity changes on hover for interactivity

### How It Works
- Numbered steps create clear process
- Arrows (desktop) show progression
- Cards make steps scannable

### Reaction Section
- Quote establishes social proof
- Photo grid shows real reactions
- Varied sizes create visual interest

### Testimonials
- Scrolling columns create sense of volume
- Different speeds prevent synchronization
- Fade gradients hide start/end points

### Stats
- Dark background makes numbers pop
- Icons provide visual context
- Large numbers are easily scannable

### About
- Personal story builds connection
- Professional photo adds credibility
- Long-form content for SEO and trust

### FAQ
- Accordion keeps page compact
- Answers common objections
- Professional, helpful tone

### CTA Form
- Centered, prominent placement
- Trust signals reduce friction
- Success state provides feedback

### Sticky Mobile CTA
- Appears after engagement (scroll past hero)
- Dismissible to respect user choice
- Full-width for easy tapping

---

## Design Principles

1. **Trust First**: Every element builds credibility
2. **Mobile-First**: Optimized for mobile experience
3. **Accessibility**: WCAG AA compliant
4. **Performance**: Fast loading, smooth animations
5. **Clarity**: Clear hierarchy, scannable content
6. **Warmth**: Approachable despite corporate focus
7. **Professionalism**: Clean, polished, reliable

---

## Detailed Technical Specifications

### Image Assets & Media

**Image File Paths:**
- Hero: `/images/photos/hero-stage.jpg` (fallback: gradient with text overlay)
- Headshot: `/images/photos/bio-headshot.avif` (fallback: "GP" initials in circle)
- Reaction photos: `/images/reactions/reaction-1.jpg` through `reaction-7.jpg`
- Logos: `/images/logos/{client-name}.png` or `.svg`

**Image Dimensions & Aspect Ratios:**
- Hero: 16:10 aspect ratio, `objectPosition: 'center 35%'`, `sizes="(max-width: 768px) 100vw, 50vw"`
- Headshot: 3:4 aspect ratio, `sizes="(max-width: 1024px) 100vw, 40vw"`
- Reaction photos: Varied grid layouts, `sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"`
- Logos: Height `h-12 md:h-14` (48px-56px), width auto, min-width `100px md:120px`

**Image Optimization:**
- Hero: `quality={90}`, `priority`, `unoptimized={true}` (for development)
- Headshot: `quality={90}`, default loading
- Reaction photos: Default quality, lazy loaded
- All use Next.js Image component with automatic WebP/AVIF conversion

**Image Fallbacks:**
- Hero: Gradient background (`from-primary/20 to-secondary/20`) with centered text
- Headshot: Circular badge with "GP" initials, name, and title
- Logos: Text fallback with company name in muted color

### Animation & Interaction Details

**Mobile Menu:**
- No explicit animation library - conditional render with `border-t` separator
- Opens/closes instantly on state change
- Z-index: `z-50` (same as sticky CTA)
- Closes on navigation click or outside interaction

**Sticky Mobile CTA:**
- Uses Tailwind `animate-in slide-in-from-bottom duration-300` (from tailwindcss-animate)
- Animation: 300ms duration, ease-out curve
- Z-index: `z-50`

**Scroll Animations:**
- Framer Motion `whileInView` with `viewport={{ once: true }}` (animates once, doesn't reset)
- Default threshold: 0 (triggers when element enters viewport)
- No custom root margin
- Duration: 0.5-0.8s, easing: `[0.22, 1, 0.36, 1]` or `[0.25, 1, 0.5, 1]`

**Hover Transitions:**
- Cards: `transition-shadow duration-200` (200ms)
- Buttons: Default transition (no explicit duration)
- Logos: `transition-opacity duration-300` (300ms)
- Images: `transition-transform duration-300 ease-out` (300ms)

**Marquee Animation:**
- Framer Motion: `x: [0, -1920]` (1920px translation)
- Duration: 40s per loop, linear easing, infinite repeat
- Seamless loop: Duplicate content set renders twice
- Content width: Calculated from flex items, animation distance matches content width

### Form Behavior & Validation

**Form Submission:**
- Currently: Logs to console, simulates 1s delay
- No backend endpoint configured (placeholder for `/api/contact`)
- No network error handling (needs implementation)
- Loading state: Button text changes to "Checking calendar...", button disabled
- Success state: Shows for 5 seconds, then auto-resets

**Form Validation:**
- React Hook Form with Zod resolver
- Validation triggers: On submit (not real-time)
- Error messages appear below fields after submit attempt
- Custom rules: Name min 2 chars, email format, phone min 10 chars

**Form Field Behavior:**
- No auto-focus on first field
- Tab order: Name → Email → Phone → Event Date → Submit
- Date picker: Native HTML5 date input, default browser styling
- Phone: No formatting, plain text input

### Responsive Breakpoints

**Breakpoint Values (Tailwind defaults):**
- Mobile: < 768px (default)
- Tablet: `md:` ≥ 768px
- Desktop: `lg:` ≥ 1024px
- Large Desktop: `xl:` ≥ 1280px
- Extra Large: `2xl:` ≥ 1400px (container max-width only)

**Breakpoint Behaviors:**
- Navigation: Hamburger at < 768px, horizontal menu at ≥ 768px
- Hero: Single column < 1024px, two columns ≥ 1024px (`lg:grid-cols-2`)
- Grid columns: See "Grid Patterns" section for specific breakpoints

### Component States

**Button States:**
- Disabled: `opacity-50`, `pointer-events-none` (50% opacity, no interaction)
- No active/pressed state styling
- Loading: Text change only, no spinner

**Input Field States:**
- Focus ring: `ring-2 ring-ring ring-offset-2` (2px ring, primary color, 2px offset)
- Error border: `border-red-500` (Tailwind default: `#ef4444`)
- Placeholder: `text-muted-foreground` (medium gray)

**Accordion Behavior:**
- Type: `single` with `collapsible` (only one item open, can close open item)
- Animation: 0.2s ease-out (from Tailwind config)
- Clicking open item: Closes it (collapsible behavior)

**Card Hover States:**
- Shadow: `shadow-sm` → `shadow-xl` (Tailwind defaults)
- Scale: `scale-1.02`, transform origin: center (default)
- Hover works on mobile (touch devices trigger hover on tap)

### Typography Details

**Font Weight Usage:**
- Headings: `font-bold` (700) for H1, H2, H3
- Buttons: `font-semibold` (600)
- Body: `font-normal` (400) default
- Labels: `font-medium` (500)

**Text Color Values:**
- `text-white/90`: 90% opacity white (`rgba(255, 255, 255, 0.9)`)
- `text-muted-foreground`: `hsl(230, 18%, 45%)` (medium gray)
- Usage: White/90 for subheadings on dark, muted-foreground for descriptions

**Letter Spacing:**
- H1: `-0.02em`
- H2, H3: `-0.01em`
- Body: `-0.01em` (Rubik)

### Spacing & Layout

**Gap Values:**
- `gap-6`: 24px (1.5rem)
- `gap-8`: 32px (2rem)
- `gap-12`: 48px (3rem)
- Usage: `gap-6` for cards, `gap-8 md:gap-12` for grids, `gap-6` for forms

**Padding Values:**
- Cards: `p-6` (24px) consistent
- Form: `p-8 md:p-12` (32px mobile, 48px desktop)
- Sections: `py-16 md:py-24 lg:py-32` (64px/96px/128px)

**Max-Width Usage:**
- `max-w-7xl` (1280px): Most sections (default container)
- `max-w-5xl` (1024px): Forms, centered content
- `max-w-4xl` (896px): FAQ, about text content
- `max-w-2xl` (672px): Paragraph blocks
- All centered with `mx-auto`

**Reaction Photo Grid:**
- Column spans: `md:col-span-7 md:row-span-2`, `md:col-span-5 md:row-span-1`, etc.
- Auto-rows: `md:auto-rows-[180px] lg:auto-rows-[220px]` (fixed heights for grid)
- Varied sizes create masonry-style layout

### Color & Styling

**Color Opacity:**
- `/10` = 10% opacity, `/20` = 20% opacity (Tailwind opacity syntax)
- Usage: Backgrounds with subtle color tint
- Solid colors: Default (100% opacity)

**Shadow Values (Tailwind defaults):**
- `shadow-sm`: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- `shadow-md`: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- `shadow-lg`: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
- `shadow-xl`: `0 20px 25px -5px rgb(0 0 0 / 0.1)`
- `shadow-2xl`: `0 25px 50px -12px rgb(0 0 0 / 0.25)`

**Border Styles:**
- Width: `border-2` (2px) consistent for inputs, `border` (1px) for cards
- Colors: `border-input` (light gray), `border-red-500` (errors)
- Usage: Borders for cards/inputs, shadows for elevation

**Gradient Specifications:**
- `bg-gradient-to-b from-white to-gray-50/50`: Vertical, white to 50% gray
- `bg-gradient-to-r from-secondary/10 to-primary/10`: Horizontal, 10% teal to 10% magenta
- `bg-gradient-to-br from-primary/20 to-secondary/20`: Diagonal (135deg), 20% magenta to 20% teal

### Interactive Elements

**Scroll Behavior:**
- Smooth scroll: `scrollIntoView({ behavior: "smooth" })`
- No offset (scrolls to element top, doesn't account for fixed nav)
- Mobile menu closes on navigation click

**Focus Management:**
- Tab order: Natural DOM order (top to bottom)
- No focus trap in mobile menu
- No skip links implemented

**Touch Interactions:**
- Tap highlight: Browser default (can be disabled with `-webkit-tap-highlight-color`)
- No long-press or swipe gestures

### Content & Data

**Dynamic Content:**
- Footer year: `new Date().getFullYear()` (dynamic)
- Testimonials: Fixed order from `lib/reviews.ts` (not shuffled)
- Client logos: Fixed order in component (not randomized)

**Missing Content Handling:**
- Logo image fails: Text fallback with company name
- Empty testimonials: Component would render empty (no guard)
- Form submission fails: No error handling (needs implementation)

**External Links:**
- Social media: Placeholder `#` (not configured)
- Residency link: Placeholder `#` (not configured)
- Footer links: Placeholder `#` (not configured)

### Performance & Optimization

**Image Loading:**
- Priority: Hero image only (`priority` prop)
- Lazy loading: Default for all non-priority images
- Preloading: None configured

**Font Loading:**
- Display: `swap` (prevents FOIT)
- Preload: None configured
- Fallbacks: `system-ui, sans-serif` (Rubik), `Georgia, serif` (Libre Baskerville)

**Animation Performance:**
- GPU acceleration: Transform and opacity only (Framer Motion default)
- Will-change: Not explicitly set (browser handles)
- Reduced motion: Not implemented

### Accessibility

**ARIA Attributes:**
- Navigation menu: `aria-expanded`, `aria-label="Open/Close menu"`
- Social links: `aria-label` with platform name
- Form fields: `aria-invalid` for errors, `role="alert"` for error messages
- No live regions or landmark roles beyond semantic HTML

**Keyboard Navigation:**
- Escape key: Not implemented for mobile menu
- Accordion: Arrow keys supported (Radix UI default)
- Buttons: Enter and Space both activate

**Screen Reader Support:**
- Icons: `aria-label` on interactive icons
- Decorative images: Alt text provided
- Skip link: Not implemented

### Edge Cases & Error States

**Error Handling:**
- Form network error: Not implemented (needs try/catch)
- Image load failures: `onError` handler hides image, shows fallback
- JavaScript disabled: Forms would submit via native HTML (no validation)

**Empty States:**
- No testimonials: Would render empty section (no guard)
- No client logos: Would render empty marquee (no guard)
- Zero stats: Would display "0" (no special handling)

**Browser Compatibility:**
- Modern browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- No polyfills needed (Next.js handles)
- Fallbacks: CSS Grid with flexbox fallback, modern features degrade gracefully

### Technical Implementation

**Dependencies:**
- Framer Motion: `^11.0.0`
- React Hook Form: `^7.51.0`
- Zod: `^3.22.0`
- Next.js: `^14.2.0`
- React: `^18.3.0`
- Tailwind CSS: `^3.4.0`

**Build Configuration:**
- Next.js: App Router, Image optimization enabled
- Environment variables: None required
- API routes: Not implemented (form submission placeholder)

**State Management:**
- Local component state only (useState)
- No global state or context providers
- No local storage usage

### Visual Design Details

**Icon Usage (Lucide React):**
- Navigation: Menu, X (`h-6 w-6`)
- Services: Briefcase, Users, PartyPopper (`h-7 w-7`)
- Stats: Users, Calendar, Building2, Award (`h-10 w-10 md:h-12 md:w-12`)
- Form: Check, Zap, Shield, Clock (`h-4 w-4` or `h-5 w-5`)
- Residency: MapPin, ExternalLink (`h-4 w-4`)
- Footer: Linkedin, Instagram, Youtube (`h-5 w-5`)
- Accordion: ChevronDown (`h-4 w-4`)
- Icon colors: Context-dependent (primary, secondary, muted-foreground, white)

**Badge Designs:**
- Padding: `px-4 py-2` (16px horizontal, 8px vertical)
- Border radius: `rounded-full` or `rounded-lg` (8px)
- Font: `text-sm font-semibold`
- Colors: Border + text (testimonials), background + white text (residency)

**Floating Badge (Hero):**
- Position: `absolute -bottom-4 -right-4` (16px from bottom-right)
- Z-index: Above image (no explicit z-index, natural stacking)
- Responsive: `p-4 md:p-6`, `text-3xl md:text-4xl`
- Max width: `max-w-[200px]`

### Content Strategy

**SEO:**
- Meta description: "Corporate event mentalist and mind reader."
- Open Graph: Minimal (type only, no detailed data)
- Robots: `index: false, follow: false` (site not indexed)
- Structured data: Not implemented

**Analytics:**
- Not implemented
- No tracking, events, or conversion goals configured

### Missing Components

**Services Section:**
- Component exists but NOT rendered in page
- Not included in current page flow
- Would go between Client Logos and How It Works if added

**Footer:**
- Component exists but NOT rendered in page
- Not included in current page flow
- Would go after CTA Form if added

**Section IDs:**
- `id="contact"`: CTA Form section
- `id="testimonials"`: Testimonials section
- `id="reactions"`: Reaction Section
- `id="clients"`: Client Logos section
- `id="services"`: Services section (if added)

**Z-Index Stacking:**
- Navigation: `z-50`
- Sticky Mobile CTA: `z-50`
- Client logos gradient overlays: `z-10`
- All other elements: Default (0)

---

## Notes for Implementation

- All colors use HSL format in CSS variables
- Spacing uses 8px base unit (Tailwind defaults)
- Animations use Framer Motion with viewport triggers
- Forms use React Hook Form with Zod validation
- Images use Next.js Image component for optimization
- All interactive elements have focus states
- Mobile menu closes on navigation
- Smooth scrolling for all anchor links
- Error states for form validation
- Loading states for async operations


# Logo Standardization Guide

## Overview

All 12 client logos must be standardized together to ensure perfect visual consistency. This guide provides step-by-step instructions for standardizing logos using best-in-class protocols.

## Required Logos (12 total)

1. Google
2. Microsoft
3. Texas Health Resources
4. Dallas Cowboys
5. US Air Force
6. Southwest Airlines
7. Alcon
8. Chick-fil-A
9. Ferrari
10. Luke Bryan
11. Triumph
12. Olipop

## Critical Requirements

- **ALL 12 logos must be standardized together** - including the 5 existing ones
- Visual weight normalization is critical (not just physical size)
- Different aspect ratios must be handled properly
- All logos must appear balanced when displayed side-by-side

## Step-by-Step Standardization Process

### Phase 1: Preparation

1. **Gather all logo files:**
   - Existing: `google.png`, `microsoft.png`, `texas-health-resources.png`, `dallas-cowboys.png`, `us-air-force.svg`
   - Missing: Southwest Airlines, Alcon, Chick-fil-A, Ferrari, Luke Bryan, Triumph, Olipop
   - Source official brand assets from company media kits when possible

2. **Document current state:**
   - Note aspect ratios of existing logos
   - Identify visual weight issues (which logos appear too heavy/light)

### Phase 2: Import into Design Tool

3. **Open design tool (Figma/Illustrator/Sketch)**

4. **Create standardized containers for each logo:**
   - **Wide logos (aspect ratio > 2:1):** 400px × (400/ratio)px, max 200px height
   - **Square logos (0.8:1 to 1.2:1):** 200px × 200px container, centered in 400px width
   - **Tall logos (aspect ratio < 0.8:1):** (200×ratio)px × 200px, centered in 400px width
   
   **Examples:**
   - Microsoft (4:1): 400px × 100px container
   - US Air Force (1:1): 200px × 200px container (centered)
   - Google (3:1): 400px × 133px container

5. **Apply consistent padding:**
   - Minimum 20px on all sides (or 5% of container dimension, whichever is larger)
   - Ensure all logos have similar "breathing room"

### Phase 3: Visual Weight Normalization (CRITICAL)

6. **Place all 12 logos in a 4×3 grid**

7. **Set initial scale:**
   - Each logo fills ~70-80% of its container

8. **Compare visual weight side-by-side:**
   - Look for logos that "jump out" (too heavy/bold)
   - Look for logos that "disappear" (too light/thin)
   - Consider: stroke weight, color saturation, negative space, shape complexity

9. **Adjust individual logos:**
   - Scale up thin/light logos: +5% to +15%
   - Scale down thick/bold logos: -5% to -15%
   - Adjust stroke weights if needed (vector only)
   - Fine-tune until all 12 appear balanced

10. **Iterate:**
    - Compare again in grid
    - Make micro-adjustments
    - Repeat until perfect match

### Phase 4: Optical Alignment

11. **Align all logos to same visual baseline:**
    - Place logos in horizontal row
    - They should appear to "sit" on same baseline
    - Use optical center, not geometric center

12. **Adjust vertical position:**
    - Logos with descenders (g, p, q) may need adjustment
    - Logos with ascenders (b, d, h) may need adjustment
    - Circular elements may need slight upward shift
    - Horizontal lines may need slight downward shift

### Phase 5: Export

13. **Export specifications:**
    - **Format:** SVG preferred, PNG fallback (800px width for 2x retina)
    - **Color profile:** sRGB
    - **Background:** Transparent
    - **File size:** <50KB per logo (optimize with SVGO or TinyPNG)

14. **File naming (kebab-case):**
    - `google.svg`
    - `microsoft.svg`
    - `texas-health-resources.svg`
    - `dallas-cowboys.svg`
    - `us-air-force.svg`
    - `southwest-airlines.svg`
    - `alcon.svg`
    - `chick-fil-a.svg`
    - `ferrari.svg`
    - `luke-bryan.svg`
    - `triumph.svg`
    - `olipop.svg`

15. **Save to:** `/public/images/logos/`

### Phase 6: Testing

16. **Browser testing:**
    - Display all 12 logos in marquee
    - Display side-by-side in grid
    - Verify visual consistency

17. **Final adjustments:**
    - If any logo still stands out, make micro-adjustments
    - Re-export and test again
    - Iterate until perfect

## Quality Checklist

### Pre-Export (for each logo):
- [ ] Logo is in standardized container (respecting aspect ratio)
- [ ] 20px minimum padding (or 5% of container dimension)
- [ ] Visual weight matches other 11 logos (side-by-side grid comparison)
- [ ] Optical alignment verified (sits on same baseline as others)
- [ ] Colors are accurate to brand guidelines (sRGB)
- [ ] Transparent background
- [ ] No artifacts or pixelation
- [ ] File size optimized (<50KB)

### Post-Export:
- [ ] All logos display at same height (56px desktop, 48px mobile)
- [ ] Visual weight appears balanced in marquee
- [ ] Colors render correctly (no color shifts)
- [ ] Crisp on retina displays (2x resolution)
- [ ] No layout shift when logos load
- [ ] Hover effects work consistently

### Final Verification:
- [ ] All 12 logos pass side-by-side grid comparison test
- [ ] Visual weight normalization complete (no logo stands out)
- [ ] All logos use standardized containers (respecting aspect ratios)
- [ ] Consistent padding and spacing across all logos
- [ ] Optical alignment verified (all sit on same visual baseline)
- [ ] Consistent file naming (kebab-case)
- [ ] SVG format preferred, PNG only when necessary
- [ ] All existing 5 logos re-standardized (not just new ones)

## Visual Weight Factors

When comparing logos, consider:
- **Stroke thickness** (thicker = heavier)
- **Color saturation** (more saturated = heavier)
- **Negative space** (less space = heavier)
- **Overall shape complexity** (simpler = lighter)

## Important Notes

- **CRITICAL:** All 12 logos (including existing 5) must be standardized together
- Visual weight ≠ physical size - a thick logo at 200px can appear heavier than a thin logo at 300px
- Different aspect ratios are handled with flexible containers, not fixed canvas
- Best-in-class logo galleries (Stripe, Vercel, etc.) use similar visual weight normalization techniques

## Resources

- **Official brand assets:**
  - Google: https://about.google/brand-resource-center/
  - Microsoft: https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks
  - Southwest: https://www.swamedia.com/
  - Ferrari: https://corporate.ferrari.com/en/media
  - Chick-fil-A: Contact PR team
  - Others: Check company websites for media/press kits

- **Tools:**
  - SVGO: https://github.com/svg/svgo (SVG optimization)
  - TinyPNG: https://tinypng.com/ (PNG optimization)
  - ImageOptim: https://imageoptim.com/ (Image optimization)

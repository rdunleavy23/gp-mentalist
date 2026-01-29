# Logo Search Prompt for LLM

Use this prompt with an LLM (Claude, GPT-4, etc.) to find and retrieve the actual brand logos.

---

## PROMPT START

You are a professional brand asset researcher. I need you to find and provide the actual, official logo files for the following companies. These logos will be used in a professional client showcase on a website.

**Required Companies (7 logos needed):**
1. Southwest Airlines
2. Alcon (eye care/medical company)
3. Chick-fil-A
4. Ferrari
5. Luke Bryan (country music artist)
6. Triumph (motorcycle brand)
7. Olipop (beverage company)

**File Requirements:**
- **Format**: SVG preferred (vector format), PNG acceptable if SVG not available
- **Quality**: High resolution, official brand assets only
- **Background**: Transparent (alpha channel)
- **Color**: Full color, sRGB color space
- **License**: Must be authorized for commercial use (client showcase is acceptable use case
- **Authenticity**: Official brand assets only - no fan-made or modified versions

**Search Strategy (execute in this order):**

1. **Primary Sources (check first - highest priority):**
   - Official company brand guidelines pages (search: "[Company] brand guidelines")
   - Company press/media kits (search: "[Company] press kit" or "[Company] media kit")
   - Investor relations pages with brand assets (search: "[Company] investor relations brand")
   - Official brand asset repositories:
     * Brandfolder (search: "brandfolder [company]")
     * Brand.com brand assets
     * Company-specific brand portals
   - Company design system documentation
   - Official company GitHub repositories (search: "github.com/[company]/brand" or "github.com/[company] logo")

2. **Secondary Sources (if primary unavailable):**
   - Simple Icons library: https://simpleicons.org/ (search each company name)
   - Wikimedia Commons: https://commons.wikimedia.org/ (search: "[Company] logo" - verify it's official)
   - GitHub repositories:
     * Search: "simple-icons" repository (has many brand logos)
     * Search: "[company] logo svg" in GitHub code search
     * Search: "brand logos svg" repositories
   - Public logo databases (verify they're official):
     * LogosPNG
     * LogoDatabase
     * WorldVectorLogo
   - Clearbit Logo API (if accessible)
   - Brandfetch (if accessible)

3. **Tertiary Sources (last resort - verify authenticity carefully):**
   - Dribbble/Behance (designer portfolios - verify it matches official brand)
   - Figma Community (search for brand logo files)
   - Design asset marketplaces (verify licensing)

3. **For Each Logo, Provide:**
   - Direct download link or raw SVG code
   - Source URL (where you found it)
   - Verification that it's official/authorized
   - File format and dimensions
   - Any usage restrictions noted

**Specific Company Search Paths (check these in order):**

1. **Southwest Airlines**:
   - Primary: https://www.swamedia.com/ → Brand Assets or Logo Downloads
   - Alternative: Search "Southwest Airlines brand assets" or "SWA logo download"
   - Simple Icons: Check simpleicons.org for "southwestairlines"

2. **Ferrari**:
   - Primary: https://corporate.ferrari.com/en/media → Logo Downloads
   - Alternative: Search "Ferrari brand guidelines" or "Ferrari logo svg"
   - Simple Icons: Check simpleicons.org for "ferrari"
   - Wikimedia: Search "Ferrari logo" on Wikimedia Commons

3. **Chick-fil-A**:
   - Primary: Check official website brand/PR section
   - Alternative: May require contacting PR team (chick-fil-a.com/contact)
   - Search: "Chick-fil-A brand assets" or "Chick-fil-A logo download"
   - Note: They're protective of brand assets - may need permission

4. **Alcon**:
   - Primary: Check alcon.com investor relations or corporate media pages
   - Alternative: Search "Alcon brand guidelines" or "Alcon logo svg"
   - Simple Icons: Check simpleicons.org for "alcon"
   - Note: Medical company - may have strict brand guidelines

5. **Luke Bryan**:
   - Primary: Check lukebryan.com official website
   - Alternative: Check record label (Capitol Nashville) brand assets
   - Search: "Luke Bryan official logo" or "Luke Bryan brand assets"
   - Note: Music artist - logo may be on official merchandise site

6. **Triumph**:
   - Primary: Check triumphmotorcycles.com brand guidelines
   - Alternative: Search "Triumph Motorcycles brand assets" or "Triumph logo svg"
   - Simple Icons: Check simpleicons.org for "triumph"
   - Wikimedia: Search "Triumph Motorcycles logo" on Wikimedia Commons

7. **Olipop**:
   - Primary: Check drinkolipop.com official website
   - Alternative: Search "Olipop brand assets" or "Olipop logo svg"
   - Contact: May need to contact brand team directly
   - Note: Smaller brand - may not have public brand assets page

**Output Format:**
For each logo found, provide:
```
Company: [Name]
Source: [Exact URL where found]
Format: [SVG/PNG]
Dimensions: [Width x Height if available]
Verification: [Official/Authorized/Needs verification]
Download: [Direct download link OR complete SVG code]
SVG Code: [If providing code, include full SVG with proper viewBox]
File Size: [If known]
License/Usage: [Any restrictions or requirements]
Notes: [Any important usage notes, color codes, or restrictions]
```

**If providing SVG code directly:**
- Include complete, valid SVG markup
- Ensure proper viewBox attribute
- Include all paths, text, and styling
- Preserve original colors and design
- Ensure transparent background
- Optimize but maintain quality

**Critical Requirements:**
- DO NOT provide modified, fan-made, or unofficial versions
- DO NOT provide logos with watermarks or overlays
- DO NOT provide low-resolution or pixelated versions
- DO provide the actual SVG code or direct download links
- DO verify the source is official/authorized before providing
- DO note any usage restrictions or requirements
- DO preserve original brand colors exactly
- DO ensure transparent backgrounds (no white/colored backgrounds)
- DO provide complete, valid SVG markup if giving code
- DO verify file is optimized but not overly compressed

**If a logo cannot be found:**
- Document all sources checked
- Provide alternative approaches (contact information, etc.)
- Suggest next steps for obtaining the logo

**Priority:**
Find all 7 logos. If some cannot be found through public sources, provide clear instructions on how to obtain them (contact information, request process, etc.).

Begin searching now and provide results for all 7 companies.

---

## PROMPT END

## Usage Instructions

1. Copy the prompt above (between "PROMPT START" and "PROMPT END")
2. Paste it into Claude, GPT-4, or another advanced LLM
3. The LLM will search for and provide the actual logo files
4. Download or copy the SVG code provided
5. Save each logo to `/public/images/logos/` with standardized naming:
   - `southwest-airlines.svg`
   - `alcon.svg`
   - `chick-fil-a.svg`
   - `ferrari.svg`
   - `luke-bryan.svg`
   - `triumph.svg`
   - `olipop.svg`

## After Obtaining Logos

Once you have the actual logo files:
1. Replace the placeholder SVGs I created
2. Follow the [STANDARDIZATION_GUIDE.md](./STANDARDIZATION_GUIDE.md) to standardize ALL 12 logos together
3. Ensure visual weight normalization through side-by-side comparison
4. Apply consistent containers and padding

## Alternative: Direct Source Links

If the LLM search doesn't work, try these direct sources:

**Logo Libraries:**
- **Simple Icons**: https://simpleicons.org/ (search each company name - many official logos)
- **GitHub Simple Icons**: https://github.com/simple-icons/simple-icons (raw SVG files)
- **Wikimedia Commons**: https://commons.wikimedia.org/ (search "[Company] logo" - verify official)
- **WorldVectorLogo**: https://worldvectorlogo.com/ (search company names)

**Company-Specific:**
- **Southwest Airlines**: https://www.swamedia.com/ → Brand Assets
- **Ferrari**: https://corporate.ferrari.com/en/media → Logo Downloads  
- **Triumph**: https://www.triumphmotorcycles.com/ → Check brand/PR section

**API Services (if available):**
- **Clearbit Logo API**: https://clearbit.com/docs#logo-api (programmatic access)
- **Logo.dev**: Logo API service

**GitHub Repositories to Check:**
- `simple-icons/simple-icons` - Large collection of brand logos
- Search: `"brand logos" OR "company logos" svg` on GitHub
- Search: `"[company name] logo" filetype:svg` on GitHub

## Quick Search Commands

For terminal/GitHub CLI:
```bash
# Search Simple Icons repository
gh search code "southwest airlines" --repo simple-icons/simple-icons

# Search Wikimedia Commons
# Visit: https://commons.wikimedia.org/wiki/Category:Logos
```

## Browser Automation Approach

If using browser automation (Playwright, Puppeteer, etc.):

1. Navigate to each company's official brand assets page
2. Look for download buttons or direct SVG links
3. Extract SVG code from page source if embedded
4. Save with standardized naming

**Key Pages to Check:**
- Southwest: https://www.swamedia.com/ → Navigate to brand assets
- Ferrari: https://corporate.ferrari.com/en/media → Look for logo downloads
- Simple Icons: https://simpleicons.org/icons/[company].svg (direct SVG links)

## Verification Checklist

Before using any logo, verify:
- [ ] Source is official/authorized
- [ ] Logo matches official brand guidelines
- [ ] Colors are accurate
- [ ] File is high quality (not pixelated)
- [ ] Background is transparent
- [ ] No watermarks or modifications
- [ ] Usage is permitted for client showcase
- [ ] File format is SVG (preferred) or high-res PNG

## Expected File Locations After Download

Save all logos to: `/Users/ryan/gp-mentalist/public/images/logos/`

With these exact filenames:
- `southwest-airlines.svg`
- `alcon.svg`
- `chick-fil-a.svg`
- `ferrari.svg`
- `luke-bryan.svg`
- `triumph.svg`
- `olipop.svg`

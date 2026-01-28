# Client Logos

## Overview

All 12 client logos are standardized for consistent display and optimal performance. Logos follow best-in-class protocols for visual weight normalization, aspect ratio handling, and optical alignment.

## Logo List (12 total)

1. **Google** - `google.svg` (needs conversion from PNG)
2. **Microsoft** - `microsoft.svg` (needs conversion from PNG)
3. **Texas Health Resources** - `texas-health-resources.svg` (needs conversion from PNG)
4. **Dallas Cowboys** - `dallas-cowboys.svg` (needs conversion from PNG)
5. **US Air Force** - `us-air-force.svg` ✅
6. **Southwest Airlines** - `southwest-airlines.svg` ✅
7. **Alcon** - `alcon.svg` ✅
8. **Chick-fil-A** - `chick-fil-a.svg` ✅
9. **Ferrari** - `ferrari.svg` ✅
10. **Luke Bryan** - `luke-bryan.svg` ✅
11. **Triumph** - `triumph.svg` ✅
12. **Olipop** - `olipop.svg` ✅

## Standardization Protocols

All logos follow the protocols in [STANDARDIZATION_GUIDE.md](./STANDARDIZATION_GUIDE.md):

- **Container System**: Flexible containers respecting aspect ratios
- **Visual Weight**: Normalized through side-by-side comparison
- **Padding**: 20px minimum (or 5% of container dimension)
- **Color Profile**: sRGB, full color
- **Background**: Transparent
- **File Format**: SVG preferred, PNG fallback (800px width for 2x retina)

## Display Specifications

- **Desktop**: Height: 56px (`h-14`), width scales proportionally
- **Mobile**: Height: 48px (`h-12`), width scales proportionally
- **Container CSS**: `h-12 md:h-14 w-auto min-w-[100px] md:min-w-[120px]`
- **Object fit**: `object-contain` (maintains aspect ratio)

## File Naming

- Format: kebab-case
- Extension: `.svg` (preferred) or `.png` (fallback)
- Examples: `southwest-airlines.svg`, `chick-fil-a.svg`, `us-air-force.svg`

## Next Steps

1. **Replace placeholder SVGs** with official brand assets from:
   - Southwest: https://www.swamedia.com/
   - Ferrari: https://corporate.ferrari.com/en/media
   - Others: Check official brand/press pages

2. **Convert existing PNG logos** to SVG format

3. **Standardize ALL 12 logos together** using [STANDARDIZATION_GUIDE.md](./STANDARDIZATION_GUIDE.md)

## Important Notes

- ✅ All 12 logo files exist (some are placeholders awaiting official assets)
- ⚠️ **CRITICAL**: All logos must be standardized together in a design tool
- ⚠️ Visual weight normalization is essential for best-in-class results
- ⚠️ Existing PNG logos need conversion to SVG and re-standardization

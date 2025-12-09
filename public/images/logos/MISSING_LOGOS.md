# Missing Client Logos

The following logo files need to be added to display the full client roster. Until these are added, the company names will display as text fallbacks in the marquee.

## Required Logo Files

Add these files to `/public/images/logos/`:

1. **southwest.png** - Southwest Airlines logo
2. **alcon.png** - Alcon logo
3. **chickfila.png** - Chick-fil-A logo
4. **ferrari.png** - Ferrari logo
5. **artivion.png** - Artivion logo
6. **luke-bryan.png** - Luke Bryan logo
7. **triumph.png** - Triumph logo
8. **flexential.png** - Flexential logo
9. **infoimage.png** - InfoIMAGE logo
10. **idera.png** - Idera logo
11. **bazaarvoice.png** - BazaarVoice logo
12. **dynatron.png** - Dynatron logo
13. **olipop.png** - Olipop logo
14. **nutex-health.png** - Nutex Health logo
15. **ameriflex.png** - Ameriflex logo

## Logo Specifications

Follow the same format as existing logos:

### File Format
- **Format**: PNG with transparent background (or SVG)
- **Resolution**: ~200px width @ 2x for retina displays
- **File Size**: Optimize to <50KB per logo (use TinyPNG or similar)
- **Color**: Full color (grayscale filter applied by CSS)

### Dimensions
- **Width**: ~200px (can vary slightly based on logo aspect ratio)
- **Height**: Proportional to width
- **Display**: All logos normalize to same height (56px) on page

### Where to Find Official Logos

1. **Brand Press/Media Kits**: Most companies offer downloadable logos
   - Google: https://about.google/brand-resource-center/
   - Southwest: https://www.swamedia.com/
   - Chick-fil-A: Contact their PR team
   - Ferrari: https://corporate.ferrari.com/en/media

2. **Brandfetch**: https://brandfetch.com/ (unofficial but useful)

3. **Wikimedia Commons**: For some public brands

### Important Notes

- ✅ Ensure you have permission to use each logo
- ✅ Use official brand assets when possible
- ✅ Maintain proper spacing and don't modify logos
- ✅ Test each logo after adding to ensure it displays correctly

## Testing After Adding Logos

1. Add the logo file to `/public/images/logos/`
2. Refresh the page (hard refresh: Cmd+Shift+R or Ctrl+Shift+R)
3. Check that logo appears in:
   - Hero section (for top 5 logos)
   - Infinite marquee section
4. Verify logo is crisp on retina displays
5. Check mobile responsiveness

## Current Status

✅ **Available (5):**
- Google
- Microsoft
- Texas Health Resources
- Dallas Cowboys
- US Air Force

❌ **Missing (15):**
- All logos listed above

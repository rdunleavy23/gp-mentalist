# Client Logos

Add the following logo files to this directory:

1. **texas-health-resources.png** - Texas Health Resources logo
2. **us-air-force.png** - US Air Force logo  
3. **google.png** - Google logo
4. **dallas-cowboys.png** - Dallas Cowboys logo
5. **microsoft.png** - Microsoft logo

## Logo Requirements (Optimized)

All logos are standardized for consistent display and optimal performance:

### Standardized Dimensions (2x resolution for retina displays)

- **Texas Health Resources**: 200px × 67px (3:1 aspect ratio)
- **US Air Force**: 200px × 200px (1:1 aspect ratio - square)
- **Google**: 200px × 67px (3:1 aspect ratio)
- **Dallas Cowboys**: 200px × 114px (1.75:1 aspect ratio)
- **Microsoft**: 200px × 50px (4:1 aspect ratio)

### Display Size
- **Desktop**: Max height 64px (h-16), width scales proportionally
- **Mobile**: Max height 64px, max width 128px
- All logos appear at the same visual height for consistency

### File Format & Optimization

- **Format**: PNG with transparent background (preferred) or white background
- **Resolution**: 200px width @ 2x for crisp retina displays
- **File Size**: Optimize with tools like TinyPNG or ImageOptim (target: <50KB per logo)
- **Color**: Full color (component applies grayscale filter on hover)
- **Quality**: High resolution, web-optimized

### Technical Specifications

- Next.js Image component automatically:
  - Converts to WebP/AVIF formats
  - Generates responsive sizes
  - Lazy loads below the fold
  - Optimizes quality (85% for balance of quality/size)

## Logo Guidelines

- ✅ Ensure you have proper licensing/permission to use these logos
- ✅ Use official brand assets when available
- ✅ Maintain brand guidelines and proper spacing
- ✅ Logos will appear in grayscale by default, color on hover
- ✅ All logos display at consistent 64px height for visual harmony


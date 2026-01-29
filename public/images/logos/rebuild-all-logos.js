const fs = require('fs');
const path = require('path');

// Standard container: 400×80px (5:1 aspect ratio works well for marquee at 48-56px height)
const CONTAINER_WIDTH = 400;
const CONTAINER_HEIGHT = 80;
const PADDING = 10;

const logos = [
  'google.svg', 'microsoft.svg', 'texas-health-resources.svg',
  'dallas-cowboys.svg', 'southwest-airlines.svg', 'alcon.svg',
  'chick-fil-a.svg', 'ferrari.svg', 'luke-bryan.svg',
  'triumph.svg', 'olipop.svg'
];

console.log('🎨 Rebuilding all logos with consistent viewBox...\n');

logos.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipping ${filename} (not found)`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract everything between the opening <svg> and </svg>
  // We'll wrap it in our standardized viewBox
  const svgMatch = content.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!svgMatch) {
    console.log(`⚠️  Could not parse ${filename}`);
    return;
  }
  
  const innerContent = svgMatch[1].trim();
  
  // Create standardized wrapper
  const standardized = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${CONTAINER_WIDTH} ${CONTAINER_HEIGHT}">
  <!-- Standardized: ${CONTAINER_WIDTH}×${CONTAINER_HEIGHT}px -->
  ${innerContent}
</svg>`;
  
  fs.writeFileSync(filePath, standardized);
  console.log(`✅ ${filename}`);
});

console.log('\n✨ All logos rebuilt with 400×80px viewBox');

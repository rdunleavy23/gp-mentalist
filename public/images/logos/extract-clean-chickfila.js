const fs = require('fs');

// Extract just the <g fill="#e51636"> ... </g> content
// and wrap it in a clean SVG with NO transforms

const content = fs.readFileSync('chick-fil-a.svg', 'utf-8');

// Find the inner <g fill> tag
const startMarker = '<g fill="#e51636">';
const endMarker = '</g>\n  </g>\n</svg>';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find markers');
  process.exit(1);
}

const innerContent = content.substring(startIndex, endIndex + 4); // Include closing </g>

// Wrap in clean SVG - let browser handle the sizing
const cleanSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 753.99 391.67">
${innerContent}
</svg>`;

fs.writeFileSync('chick-fil-a.svg', cleanSVG);
console.log('✅ Chick-fil-A cleaned - viewBox set to logo natural size');

const fs = require('fs');

// For each logo, extract inner content and wrap properly
const logos = {
  'google.svg': { marker: '<style type="text/css">', viewBox: '0 0 139.9 44' },
  'microsoft.svg': { marker: '<path', viewBox: '0 0 604 129' },
  'dallas-cowboys.svg': { marker: '<path', viewBox: '0 0 500 84.67' },
  'southwest-airlines.svg': { marker: '<path', viewBox: '0 0 223 34' },
  'alcon.svg': { marker: '<path', viewBox: '0 0 204.7 55.9' },
  'ferrari.svg': { marker: '<path', viewBox: '0 0 2835 642.84' },
  'luke-bryan.svg': { marker: '<path', viewBox: '0 0 1873 313' },
  'triumph.svg': { marker: '<path', viewBox: '0 0 204 126' },
  'olipop.svg': { marker: '<path', viewBox: '0 0 80 22' }
};

Object.keys(logos).forEach(filename => {
  try {
    const content = fs.readFileSync(filename, 'utf-8');
    const config = logos[filename];
    
    // Find where our transform wrapper starts
    const transformStart = content.indexOf('<g transform="translate');
    if (transformStart === -1) {
      console.log(`⚠️  ${filename}: No transform wrapper found, skipping`);
      return;
    }
    
    // Find the inner content (after the transform tag)
    const innerStart = content.indexOf('>', transformStart) + 1;
    const innerEnd = content.lastIndexOf('</g>');
    
    let innerContent = content.substring(innerStart, innerEnd).trim();
    
    // Remove any remaining nested </g> from our wrappers
    innerContent = innerContent.replace(/<\/g>\s*$/, '');
    
    // Wrap in clean SVG
    const cleanSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${config.viewBox}">
${innerContent}
</svg>`;
    
    fs.writeFileSync(filename, cleanSVG);
    console.log(`✅ ${filename}`);
  } catch (err) {
    console.log(`❌ ${filename}: ${err.message}`);
  }
});

console.log('\n✨ All logos cleaned!');

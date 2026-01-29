const fs = require('fs');
const path = require('path');

const logos = [
  'google.svg', 'microsoft.svg', 'dallas-cowboys.svg',
  'southwest-airlines.svg', 'alcon.svg', 'chick-fil-a.svg',
  'ferrari.svg', 'luke-bryan.svg', 'triumph.svg', 'olipop.svg'
];

console.log('🔧 Unwrapping logos - removing standardization attempts...\n');

logos.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipping ${filename} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove our 400×80px wrapper if present
  if (content.includes('Standardized: 400×80px')) {
    // Extract everything between the comment and </svg>
    const match = content.match(/<!-- Standardized: 400×80px -->\s*([\s\S]*?)\s*<\/svg>/);
    if (match) {
      const innerContent = match[1];
      // Reconstruct with just the original SVG wrapper
      content = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n${innerContent}\n</svg>`;
    }
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ ${filename} - unwrapped`);
});

console.log('\n✨ All logos unwrapped - original content restored');

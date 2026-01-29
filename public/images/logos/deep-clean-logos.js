const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const logos = [
  'google.svg', 'microsoft.svg', 'dallas-cowboys.svg',
  'southwest-airlines.svg', 'alcon.svg', 'chick-fil-a.svg',
  'ferrari.svg', 'luke-bryan.svg', 'triumph.svg', 'olipop.svg'
];

console.log('🧹 Deep cleaning logos - extracting original content...\n');

logos.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipping ${filename} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  try {
    const dom = new JSDOM(content, { contentType: 'image/svg+xml' });
    const doc = dom.window.document;
    const svg = doc.querySelector('svg');
    
    if (!svg) {
      console.log(`⚠️  No SVG found in ${filename}`);
      return;
    }
    
    // Remove ALL transform groups we added
    const transformGroups = svg.querySelectorAll('g[transform*="translate"]');
    transformGroups.forEach(g => {
      // Get the content inside and move it up
      while (g.firstChild) {
        g.parentNode.insertBefore(g.firstChild, g);
      }
      g.remove();
    });
    
    // Remove our comment markers
    const comments = doc.evaluate('//comment()', doc, null, dom.window.XPathResult.ANY_TYPE, null);
    let comment = comments.iterateNext();
    while (comment) {
      if (comment.textContent.includes('Standardized')) {
        comment.remove();
      }
      comment = comments.iterateNext();
    }
    
    // Get clean SVG
    const cleanSVG = dom.serialize();
    fs.writeFileSync(filePath, cleanSVG);
    console.log(`✅ ${filename}`);
    
  } catch (err) {
    console.log(`❌ ${filename} - Error: ${err.message}`);
  }
});

console.log('\n✨ Deep clean complete');

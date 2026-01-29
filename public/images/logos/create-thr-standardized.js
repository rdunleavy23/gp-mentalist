#!/usr/bin/env node

/**
 * Create standardized SVG wrapper for Texas Health Resources PNG
 * Following STANDARDIZATION_GUIDE.md protocols
 */

const fs = require('fs');
const path = require('path');

// Texas Health Resources: 500×281 = 1.78:1 aspect ratio (wide)
const aspectRatio = 1.78;
const category = 'wide';

// Calculate standardized container (per guide)
// Wide logos (1.2:1 to 5:1): 400px width, height scales (max 200px)
const maxWidth = 400;
const maxHeight = 200;
const calculatedHeight = maxWidth / aspectRatio; // 400 / 1.78 = 224.72
const containerHeight = Math.min(calculatedHeight, maxHeight); // 200px (capped)
const containerWidth = containerHeight * aspectRatio; // 200 * 1.78 = 356px

// Calculate padding (20px minimum or 5% of container dimension)
const paddingX = Math.max(20, Math.round(containerWidth * 0.05));
const paddingY = Math.max(20, Math.round(containerHeight * 0.05));

// Content area (container minus padding)
const contentWidth = containerWidth - (paddingX * 2);
const contentHeight = containerHeight - (paddingY * 2);

// Create standardized SVG wrapper
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${containerWidth} ${containerHeight}">
  <!-- Standardized container: ${containerWidth}×${containerHeight}px, aspect ratio ${aspectRatio.toFixed(2)}:1 -->
  <!-- Padding: ${paddingX}px horizontal, ${paddingY}px vertical -->
  <!-- Following STANDARDIZATION_GUIDE.md protocols -->
  <image 
    x="${paddingX}" 
    y="${paddingY}" 
    width="${contentWidth}" 
    height="${contentHeight}" 
    href="texas-health-resources.png"
    preserveAspectRatio="xMidYMid meet"
  />
</svg>`;

// Save to standardized directory
const outputDir = path.join(__dirname, 'standardized');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'texas-health-resources.svg');
fs.writeFileSync(outputPath, svg);

console.log('✅ Texas Health Resources standardized!');
console.log(`   Container: ${containerWidth}×${containerHeight}px`);
console.log(`   Aspect ratio: ${aspectRatio.toFixed(2)}:1`);
console.log(`   Category: ${category}`);
console.log(`   Padding: ${paddingX}px horizontal, ${paddingY}px vertical`);
console.log(`   Saved to: ${outputPath}`);

#!/usr/bin/env node

/**
 * Logo Standardization Script
 * 
 * This script standardizes all 12 logos by:
 * 1. Creating standardized containers based on aspect ratios
 * 2. Adding consistent padding (20px minimum or 5% of container)
 * 3. Centering logos within their containers
 * 
 * Usage: node standardize-logos.js
 */

const fs = require('fs');
const path = require('path');

// Logo configuration based on CURRENT_STATE_ANALYSIS.md
const logoConfig = {
  'southwest-airlines.svg': { aspectRatio: 6.56, category: 'very-wide' },
  'luke-bryan.svg': { aspectRatio: 5.97, category: 'very-wide' },
  'triumph.svg': { aspectRatio: 4.68, category: 'wide' },
  'alcon.svg': { aspectRatio: 3.66, category: 'wide' },
  'olipop.svg': { aspectRatio: 3.64, category: 'wide' },
  'chick-fil-a.svg': { aspectRatio: 1.92, category: 'wide' },
  'google.svg': { aspectRatio: 3.18, category: 'wide' },
  'microsoft.svg': { aspectRatio: 4.68, category: 'wide' },
  'texas-health-resources.svg': { aspectRatio: 1.78, category: 'wide' },
  'dallas-cowboys.svg': { aspectRatio: 5.90, category: 'very-wide' },
  'us-air-force.svg': { aspectRatio: 1.27, category: 'square-ish' },
  'ferrari.svg': { aspectRatio: 4.41, category: 'wide' },
};

// Calculate standardized container dimensions
function calculateContainer(aspectRatio) {
  const maxHeight = 200;
  const maxWidth = 400;
  const minHeight = 100;
  
  let width, height;
  
  if (aspectRatio > 2) {
    // Very wide logos: 400px width, height scales (max 200px, min 100px)
    width = maxWidth;
    height = Math.max(minHeight, Math.min(maxWidth / aspectRatio, maxHeight));
  } else if (aspectRatio >= 0.8 && aspectRatio <= 1.2) {
    // Square logos: 200px × 200px, centered in 400px width
    width = 200;
    height = 200;
  } else if (aspectRatio < 0.8) {
    // Tall logos: height 200px, width scales, centered in 400px width
    height = maxHeight;
    width = maxHeight * aspectRatio;
  } else {
    // Wide logos (1.2:1 to 2:1): 400px width, height scales (max 200px)
    width = maxWidth;
    height = Math.min(maxWidth / aspectRatio, maxHeight);
  }
  
  // Ensure minimum height
  if (height < minHeight) {
    height = minHeight;
    width = height * aspectRatio;
  }
  
  return { width: Math.round(width), height: Math.round(height) };
}

// Calculate padding (20px minimum or 5% of container dimension)
function calculatePadding(containerSize) {
  const minPadding = 20;
  const percentPadding = containerSize * 0.05;
  return Math.max(minPadding, Math.round(percentPadding));
}

// Extract viewBox from SVG
function extractViewBox(svgContent) {
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']+)["']/);
  if (viewBoxMatch) {
    const [x, y, width, height] = viewBoxMatch[1].split(/\s+/).map(parseFloat);
    return { x, y, width, height };
  }
  
  // Fallback: try width/height attributes
  const widthMatch = svgContent.match(/width=["']([^"']+)["']/);
  const heightMatch = svgContent.match(/height=["']([^"']+)["']/);
  if (widthMatch && heightMatch) {
    return {
      x: 0,
      y: 0,
      width: parseFloat(widthMatch[1]),
      height: parseFloat(heightMatch[1])
    };
  }
  
  return null;
}

// Create standardized SVG container
function createStandardizedSVG(originalSvg, logoName, config) {
  const container = calculateContainer(config.aspectRatio);
  const padding = {
    x: calculatePadding(container.width),
    y: calculatePadding(container.height)
  };
  
  // Content area (container minus padding)
  const contentWidth = container.width - (padding.x * 2);
  const contentHeight = container.height - (padding.y * 2);
  
  // Extract original viewBox
  const originalViewBox = extractViewBox(originalSvg);
  if (!originalViewBox) {
    console.error(`⚠️  Could not extract viewBox from ${logoName}`);
    return null;
  }
  
  // Calculate scale to fit content area
  const scaleX = contentWidth / originalViewBox.width;
  const scaleY = contentHeight / originalViewBox.height;
  const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio
  
  // Calculate centered position
  const scaledWidth = originalViewBox.width * scale;
  const scaledHeight = originalViewBox.height * scale;
  const offsetX = padding.x + (contentWidth - scaledWidth) / 2;
  const offsetY = padding.y + (contentHeight - scaledHeight) / 2;
  
  // Remove existing viewBox, width, height from original SVG
  let cleanedSvg = originalSvg
    .replace(/viewBox=["'][^"']+["']/g, '')
    .replace(/width=["'][^"']+["']/g, '')
    .replace(/height=["'][^"']+["']/g, '')
    .replace(/<svg[^>]*>/, '<svg>');
  
  // Extract the content (everything between <svg> tags)
  const contentMatch = cleanedSvg.match(/<svg[^>]*>(.*?)<\/svg>/s);
  if (!contentMatch) {
    console.error(`⚠️  Could not extract content from ${logoName}`);
    return null;
  }
  
  const logoContent = contentMatch[1];
  
  // Create new standardized SVG
  const standardizedSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${container.width} ${container.height}">
  <!-- Standardized container: ${container.width}×${container.height}px, aspect ratio ${config.aspectRatio.toFixed(2)}:1 -->
  <!-- Padding: ${padding.x}px horizontal, ${padding.y}px vertical -->
  <g transform="translate(${offsetX.toFixed(2)}, ${offsetY.toFixed(2)}) scale(${scale.toFixed(4)})">
    ${logoContent}
  </g>
</svg>`;
  
  return standardizedSvg;
}

// Main function
function standardizeLogos() {
  const logosDir = __dirname;
  const outputDir = path.join(logosDir, 'standardized');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🎨 Starting logo standardization...\n');
  
  let processed = 0;
  let skipped = 0;
  
  for (const [filename, config] of Object.entries(logoConfig)) {
    const inputPath = path.join(logosDir, filename);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${filename} (file not found)`);
      skipped++;
      continue;
    }
    
    try {
      const originalContent = fs.readFileSync(inputPath, 'utf8');
      
      // Only process SVG files for now (PNG conversion needed separately)
      if (filename.endsWith('.svg')) {
        const standardized = createStandardizedSVG(originalContent, filename, config);
        
        if (standardized) {
          const outputPath = path.join(outputDir, filename);
          fs.writeFileSync(outputPath, standardized);
          
          const container = calculateContainer(config.aspectRatio);
          console.log(`✅ ${filename}`);
          console.log(`   Container: ${container.width}×${container.height}px`);
          console.log(`   Aspect ratio: ${config.aspectRatio.toFixed(2)}:1`);
          console.log(`   Category: ${config.category}\n`);
          
          processed++;
        } else {
          skipped++;
        }
      } else {
        console.log(`⏭️  Skipping ${filename} (PNG - needs SVG conversion first)\n`);
        skipped++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${filename}:`, error.message);
      skipped++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Processed: ${processed} logos`);
  console.log(`   Skipped: ${skipped} logos`);
  console.log(`\n✨ Standardized logos saved to: ${outputDir}`);
  console.log(`\n⚠️  Note: PNG logos need to be converted to SVG first.`);
  console.log(`   Next: Visual weight normalization in design tool.`);
}

// Run the script
standardizeLogos();

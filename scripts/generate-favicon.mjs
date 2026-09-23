import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// High-impact, luxury QDelta monogram favicon SVG
// Designed to be crisp and legible even at 16x16 and 32x32 in browser tabs
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bg" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#181510" />
      <stop offset="60%" stop-color="#070605" />
      <stop offset="100%" stop-color="#000000" />
    </radialGradient>

    <!-- Metallic Luxury Gold Gradient -->
    <linearGradient id="gold" x1="20%" y1="10%" x2="80%" y2="90%">
      <stop offset="0%" stop-color="#FFF8E7" />
      <stop offset="25%" stop-color="#F5D082" />
      <stop offset="55%" stop-color="#E5B869" />
      <stop offset="85%" stop-color="#B8860B" />
      <stop offset="100%" stop-color="#7A5600" />
    </linearGradient>

    <!-- Subtle Golden Border Gradient -->
    <linearGradient id="border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5B869" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#B8860B" stop-opacity="0.5" />
    </linearGradient>

    <!-- Glow Filter -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#E5B869" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Deep Obsidian Squircle Container -->
  <rect x="16" y="16" width="480" height="480" rx="120" fill="url(#bg)" stroke="url(#border)" stroke-width="12" />

  <!-- Inner Ambient Perimeter Line -->
  <rect x="34" y="34" width="444" height="444" rx="104" fill="none" stroke="#E5B869" stroke-width="2" stroke-opacity="0.25" />

  <!-- Monogram: Iconic Italic Serif Q with Golden Period Mark -->
  <g filter="url(#glow)">
    <!-- Main Oval of 'Q' with high contrast luxury calligraphic weight -->
    <path
      d="M 248,110 
         C 162,110 102,174 102,260 
         C 102,346 162,410 248,410 
         C 285,410 320,396 348,372 
         L 378,404 
         C 386,412 398,412 406,404 
         C 414,396 414,384 406,376 
         L 374,342 
         C 388,318 396,290 396,260 
         C 396,174 334,110 248,110 Z
         M 252,168 
         C 304,168 342,208 342,260 
         C 342,284 334,306 318,324 
         L 298,302 
         C 292,295 281,295 275,301 
         C 269,307 269,318 275,324 
         L 294,345 
         C 281,350 267,352 252,352 
         C 200,352 162,312 162,260 
         C 162,208 200,168 252,168 Z"
      fill="url(#gold)"
    />

    <!-- Delta (Δ) Geometric Core Accent -->
    <polygon
      points="252,205 214,285 290,285"
      fill="none"
      stroke="url(#gold)"
      stroke-width="10"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    
    <!-- Central Golden Spark -->
    <circle cx="252" cy="255" r="6" fill="#FFF8E7" />

    <!-- Iconic Golden Brand Dot '.' -->
    <circle cx="415" cy="385" r="14" fill="url(#gold)" />
  </g>
</svg>`;

async function generate() {
  const qdeltaDir = 'c:/Users/saipr/Downloads/responsive-layout-update/Qdelta';
  const nestedDir = 'c:/Users/saipr/Downloads/responsive-layout-update/Qdelta/Qdelta';

  const targets = [qdeltaDir, nestedDir];

  for (const baseDir of targets) {
    if (!fs.existsSync(baseDir)) continue;

    const appDir = path.join(baseDir, 'app');
    const pubDir = path.join(baseDir, 'public');

    if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

    // 1. Write SVG to app/icon.svg and public/icon.svg
    fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent);
    fs.writeFileSync(path.join(pubDir, 'icon.svg'), svgContent);
    console.log(`Saved icon.svg in ${appDir} and ${pubDir}`);

    // 2. Generate PNGs using Sharp
    const svgBuffer = Buffer.from(svgContent);

    // 32x32 for favicon.png and favicon.ico
    const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
    fs.writeFileSync(path.join(pubDir, 'favicon.ico'), png32);
    fs.writeFileSync(path.join(appDir, 'favicon.ico'), png32);
    fs.writeFileSync(path.join(pubDir, 'favicon-32x32.png'), png32);

    // 180x180 for apple-touch-icon
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(pubDir, 'apple-touch-icon.png'));

    // 512x512 icon.png
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(pubDir, 'icon-512.png'));

    console.log(`Successfully generated favicons for ${baseDir}`);
  }
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});

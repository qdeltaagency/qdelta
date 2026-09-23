import fs from 'fs';
import sharp from 'sharp';

async function processRealPhoto() {
  const inputPath = 'C:/Users/saipr/.gemini/antigravity-ide/brain/3577eafb-6074-4342-89f3-1eeaebd2db92/.user_uploaded/media_1788764855121.png';
  const outCustomPng = 'c:/Users/saipr/Downloads/responsive-layout-update/Qdelta/public/team/md-fazeel-custom.png';
  const outStudioJpg = 'c:/Users/saipr/Downloads/responsive-layout-update/Qdelta/public/team/md-fazeel.jpg';

  const srcImg = sharp(inputPath);
  const { data, info } = await srcImg.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width: sW, height: sH } = info;

  const targetW = 800;
  const targetH = 1067; // 3:4 ratio

  // Head center in original: (345, 260)
  // Target head center: (400, 310)
  const scale = 1.45;
  const srcCenterX = 345;
  const srcCenterY = 260;
  const targetCenterX = 400;
  const targetCenterY = 310;

  const outBuffer = Buffer.alloc(targetW * targetH * 4);

  for (let y = 0; y < targetH; y++) {
    for (let x = 0; x < targetW; x++) {
      const outIdx = (y * targetW + x) * 4;

      const sx = Math.round(srcCenterX + (x - targetCenterX) / scale);
      const sy = Math.round(srcCenterY + (y - targetCenterY) / scale);

      let pixelLum = 0;
      let hasSource = false;

      if (sx >= 0 && sx < sW && sy >= 0 && sy < sH) {
        hasSource = true;
        const sIdx = (sy * sW + sx) * 4;
        const r = data[sIdx];
        const g = data[sIdx + 1];
        const b = data[sIdx + 2];
        const srcLum = 0.299 * r + 0.587 * g + 0.114 * b;

        // Rich studio S-curve tonal grading
        const norm = srcLum / 255;
        let graded;
        if (norm < 0.5) {
          graded = Math.pow(norm * 2, 1.35) / 2;
        } else {
          graded = 1 - Math.pow((1 - norm) * 2, 1.25) / 2;
        }
        pixelLum = graded * 255;
      }

      // Smooth studio spotlight mask centered at (400, 330)
      const dx = (x - 400) / 360;
      const dy = (y - 360) / 440;
      const distNorm = Math.sqrt(dx * dx + dy * dy);

      // Smooth cosine falloff from center to edge
      let spotWeight = 0;
      if (distNorm < 0.55) {
        spotWeight = 1.0;
      } else if (distNorm < 1.0) {
        const t = (distNorm - 0.55) / 0.45;
        spotWeight = 0.5 * (1 + Math.cos(Math.PI * t));
      }

      if (!hasSource) {
        spotWeight = 0;
      }

      // Smooth top fade
      if (y < 60) {
        spotWeight *= Math.max(0, y / 60);
      }

      // Subtle bottom shadow fade so the text overlay stays readable
      if (y > 700) {
        const botT = (y - 700) / (targetH - 700);
        pixelLum *= (1 - 0.45 * botT);
      }

      const finalLum = Math.max(0, Math.min(255, Math.round(pixelLum * spotWeight)));

      outBuffer[outIdx] = finalLum;
      outBuffer[outIdx + 1] = finalLum;
      outBuffer[outIdx + 2] = finalLum;
      outBuffer[outIdx + 3] = 255;
    }
  }

  // Save to both PNG and JPG
  await sharp(outBuffer, {
    raw: {
      width: targetW,
      height: targetH,
      channels: 4,
    }
  })
  .png({ quality: 98 })
  .toFile(outCustomPng);

  await sharp(outBuffer, {
    raw: {
      width: targetW,
      height: targetH,
      channels: 4,
    }
  })
  .jpeg({ quality: 98 })
  .toFile(outStudioJpg);

  console.log('Successfully refined real photo of MD Fazeel!');
}

processRealPhoto().catch(err => console.error(err));

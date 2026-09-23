import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function blendStudioPortrait() {
  const userPhotoPath = 'C:/Users/saipr/.gemini/antigravity-ide/brain/3577eafb-6074-4342-89f3-1eeaebd2db92/.user_uploaded/media_1788764855121.png';
  const studioBasePath = 'C:/Users/saipr/.gemini/antigravity-ide/brain/3577eafb-6074-4342-89f3-1eeaebd2db92/portrait_md_fazeel_1788749958792.jpg';
  
  const outCustomPng = 'c:/Users/saipr/Downloads/responsive-layout-update/Qdelta/public/team/md-fazeel-custom.png';
  const outStudioJpg = 'c:/Users/saipr/Downloads/responsive-layout-update/Qdelta/public/team/md-fazeel.jpg';

  // Load base studio portrait
  const baseImg = sharp(studioBasePath);
  const baseMeta = await baseImg.metadata();
  const { width: bW, height: bH } = baseMeta;
  const baseBuffer = await baseImg.raw().toBuffer();

  // Load user photo
  const userImg = sharp(userPhotoPath);
  const { data: uData, info: uInfo } = await userImg.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width: uW, height: uH } = uInfo;

  // Let's create an aligned overlay of user's face
  // Target face in base:
  // Center of eyes in base: (465, 305)
  // Chin in base: (465, 480)
  //
  // Eyes in user photo: (350, 245)
  // Chin in user photo: (350, 420)
  // Distance between eyes and chin in user: ~175px
  // Distance in base: ~175px (scale is almost exactly 1.05)

  const scale = 1.08;
  const baseEyeX = 468;
  const baseEyeY = 320;
  const userEyeX = 348;
  const userEyeY = 250;

  // Output buffer initialized with base studio portrait
  const outBuf = Buffer.from(baseBuffer);

  for (let y = 0; y < bH; y++) {
    for (let x = 0; x < bW; x++) {
      const bIdx = (y * bW + x) * 3;

      // Transform (x, y) in base image to (uX, uY) in user image
      const uX = Math.round(userEyeX + (x - baseEyeX) / scale);
      const uY = Math.round(userEyeY + (y - baseEyeY) / scale);

      if (uX >= 0 && uX < uW && uY >= 0 && uY < uH) {
        // Compute distance from face center for elliptical feathering
        // Face center in base: (468, 355)
        const dx = (x - 468) / 125; // horizontal radius ~125
        const dy = (y - 355) / 155; // vertical radius ~155
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 1.0) {
          // Smooth cosine feathering from center (1.0) to edge (0.0)
          let weight = 0.5 * (1 + Math.cos(Math.PI * dist));
          // Boost core facial features
          if (dist < 0.65) {
            weight = 1.0;
          } else {
            weight = Math.pow(0.5 * (1 + Math.cos(Math.PI * ((dist - 0.65) / 0.35))), 1.2);
          }

          const uIdx = (uY * uW + uX) * 4;
          const uR = uData[uIdx];
          const uG = uData[uIdx + 1];
          const uB = uData[uIdx + 2];
          let uLum = 0.299 * uR + 0.587 * uG + 0.114 * uB;

          // Match base lighting and contrast curve (studio chiaroscuro)
          // Base image average luminance in face region is around ~110 with deep shadows on left (x < 460) and highlight on right
          const xGrad = (x - 468) / 130; // -1 to +1
          const lightAdjust = 0.85 + 0.35 * xGrad; // chiaroscuro directional studio light

          // Contrast curve
          const norm = uLum / 255;
          let graded;
          if (norm < 0.5) {
            graded = Math.pow(norm * 2, 1.3) / 2;
          } else {
            graded = 1 - Math.pow((1 - norm) * 2, 1.2) / 2;
          }
          uLum = graded * 255 * lightAdjust;
          uLum = Math.max(0, Math.min(255, Math.round(uLum)));

          const bR = outBuf[bIdx];
          const bG = outBuf[bIdx + 1];
          const bB = outBuf[bIdx + 2];
          const bLum = 0.299 * bR + 0.587 * bG + 0.114 * bB;

          // Blend seamlessly
          const finalVal = Math.round(bLum * (1 - weight) + uLum * weight);

          outBuf[bIdx] = finalVal;
          outBuf[bIdx + 1] = finalVal;
          outBuf[bIdx + 2] = finalVal;
        }
      }
    }
  }

  // Save the result
  await sharp(outBuf, {
    raw: {
      width: bW,
      height: bH,
      channels: 3,
    }
  })
  .png({ quality: 95 })
  .toFile(outCustomPng);

  await sharp(outBuf, {
    raw: {
      width: bW,
      height: bH,
      channels: 3,
    }
  })
  .jpeg({ quality: 95 })
  .toFile(outStudioJpg);

  console.log('Successfully generated blended studio portrait for MD Fazeel!');
}

blendStudioPortrait().catch(err => console.error(err));

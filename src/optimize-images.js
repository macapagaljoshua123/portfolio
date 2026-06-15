// scripts/optimize-images.js - CREATE THIS NEW FILE
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/webp');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(png|jpg|jpeg)$/i)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
    
    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Converted: ${file} -> WebP`))
      .catch(err => console.error(`❌ Error converting ${file}:`, err));
  }
});
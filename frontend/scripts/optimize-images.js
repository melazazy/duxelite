import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const IMAGES_DIR = path.join(__dirname, '../public/images');
const QUALITY = 80;
const WIDTHS = [320, 640, 960, 1280, 1920];

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const fileName = path.basename(filePath, ext);
    const outputDir = path.dirname(filePath);
    
    // Skip if already optimized
    if (fileName.endsWith('-optimized')) {
      console.log(`Skipping already optimized: ${filePath}`);
      return;
    }

    console.log(`Optimizing: ${filePath}`);
    
    // Create optimized version with WebP format
    const optimizedPath = path.join(outputDir, `${fileName}-optimized.webp`);
    
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(optimizedPath);
    
    console.log(`Created: ${optimizedPath}`);
    
    // Create responsive versions
    for (const width of WIDTHS) {
      const resizedPath = path.join(outputDir, `${fileName}-${width}w.webp`);
      
      await sharp(filePath)
        .resize({ width })
        .webp({ quality: QUALITY })
        .toFile(resizedPath);
      
      console.log(`Created: ${resizedPath}`);
    }
    
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
  }
}

async function optimizeImages() {
  try {
    console.log('Starting image optimization...');
    
    // Get all image files
    const files = await glob(`${IMAGES_DIR}/**/*.{jpg,jpeg,png,gif,webp}`, {
      nodir: true,
      ignore: ['**/node_modules/**', '**/dist/**']
    });
    
    console.log(`Found ${files.length} images to optimize`);
    
    // Process images in parallel
    await Promise.all(files.map(file => optimizeImage(file)));
    
    console.log('Image optimization completed!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

// Run the optimization
optimizeImages();

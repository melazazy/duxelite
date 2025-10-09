import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import prettyBytes from 'pretty-bytes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Analyze the build output
const distDir = path.join(__dirname, '../dist');

// Get all JS and CSS files
const files = [];

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
      const size = stat.size;
      
      files.push({
        name: path.relative(distDir, filePath),
        size,
        prettySize: prettyBytes(size)
      });
    }
  });
}

// Run the production build
console.log('Building production bundle...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  
  // Analyze the build
  walkDir(distDir);
  
  // Sort by size (largest first)
  files.sort((a, b) => b.size - a.size);

  console.log('\nBundle Size Analysis');
  console.log('==================\n');

  // Print table header
  console.log(
    'File'.padEnd(50) + 
    'Size'.padStart(15) + 
    '  % of Total'
  );
  console.log('-'.repeat(67));

  // Calculate total size
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  // Print each file
  files.forEach(file => {
    const percentage = ((file.size / totalSize) * 100).toFixed(1);
    
    console.log(
      file.name.padEnd(50) + 
      file.prettySize.padStart(15) + 
      `  ${percentage}%`
    );
  });

  // Print totals
  console.log('\n' + '='.repeat(67));
  console.log(
    'Total'.padEnd(50) + 
    prettyBytes(totalSize).padStart(15)
  );

  // Analyze potential issues
  console.log('\nAnalysis:');
  console.log('=========');
  
  // Check for large files (> 200KB)
  const largeFiles = files.filter(file => file.size > 200 * 1024);
  if (largeFiles.length > 0) {
    console.log('\nLarge files (>200KB):');
    largeFiles.forEach(file => {
      console.log(`- ${file.name}: ${file.prettySize}`);
    });
    
    console.log('\nRecommendations:');
    console.log('- Consider code splitting for large JavaScript files');
    console.log('- Optimize images and assets');
    console.log('- Use lazy loading for non-critical components');
  } else {
    console.log('\nNo unusually large files found.');
  }
  
  // Check vendor bundle size
  const vendorFiles = files.filter(file => file.name.includes('vendor'));
  if (vendorFiles.length > 0) {
    const vendorTotal = vendorFiles.reduce((sum, file) => sum + file.size, 0);
    const vendorPercentage = (vendorTotal / totalSize * 100).toFixed(1);
    
    console.log(`\nVendor code: ${prettyBytes(vendorTotal)} (${vendorPercentage}% of total)`);
    if (vendorPercentage > 40) {
      console.log('Warning: Vendor bundle is quite large. Consider:');
      console.log('- Reviewing third-party dependencies');
      console.log('- Using dynamic imports for less critical features');
    }
  }
  
  console.log('\nAnalysis complete!');
  
} catch (error) {
  console.error('Build or analysis failed:', error);
  process.exit(1);
}

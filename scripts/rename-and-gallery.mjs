import fs from 'fs';
import path from 'path';

const SRC_DIR = 'd:/projects/gqs-project/gqs/public/assets/images';
const ARTIFACT_DIR = 'C:/Users/suhail ahamed/.gemini/antigravity-ide/brain/10ee19a1-b3a6-4647-aec6-1607a6916a85';

function getJpegDimensions(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    if (buffer[0] !== 0xFF || buffer[1] !== 0xD8) {
      return null; // Not a JPEG
    }
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xFF) {
        offset++;
        continue;
      }
      const marker = buffer[offset + 1];
      if (marker === 0xD9) {
        break; // End of image
      }
      // SOF markers
      if ((marker >= 0xC0 && marker <= 0xC3) || (marker >= 0xC5 && marker <= 0xC7) || (marker >= 0xC9 && marker <= 0xCB) || (marker >= 0xCD && marker <= 0xCF)) {
        const height = buffer.readUInt16BE(offset + 5);
        const width = buffer.readUInt16BE(offset + 7);
        return { width, height };
      }
      if (offset + 3 >= buffer.length) break;
      const length = buffer.readUInt16BE(offset + 2);
      offset += 2 + length;
    }
  } catch (err) {
    console.error(`Error reading dimensions of ${filePath}:`, err);
  }
  return null;
}

async function run() {
  console.log('Starting image processing...');
  
  if (!fs.existsSync(ARTIFACT_DIR)) {
    fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(SRC_DIR);
  // Filter for WhatsApp images
  const waFiles = files.filter(f => f.startsWith('WhatsApp Image') && (f.endsWith('.jpeg') || f.endsWith('.jpg')));
  
  // Sort them alphabetically (WhatsApp names contain dates and times, so alphabetical sorting is chronological)
  waFiles.sort();

  console.log(`Found ${waFiles.length} WhatsApp images.`);
  
  const galleryItems = [];

  for (let i = 0; i < waFiles.length; i++) {
    const originalName = waFiles[i];
    const originalPath = path.join(SRC_DIR, originalName);
    
    const newName = `image_${i + 1}.jpeg`;
    const newPath = path.join(SRC_DIR, newName);
    
    // Rename/copy in source
    fs.renameSync(originalPath, newPath);
    console.log(`Renamed: ${originalName} -> ${newName}`);
    
    // Copy to artifact directory for rendering in markdown
    const artifactPath = path.join(ARTIFACT_DIR, newName);
    fs.copyFileSync(newPath, artifactPath);
    
    // Get info
    const dimensions = getJpegDimensions(newPath);
    const stats = fs.statSync(newPath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    
    galleryItems.push({
      index: i + 1,
      name: newName,
      originalName,
      width: dimensions ? dimensions.width : 'Unknown',
      height: dimensions ? dimensions.height : 'Unknown',
      sizeKB,
      artifactPath: `file:///C:/Users/suhail%20ahamed/.gemini/antigravity-ide/brain/10ee19a1-b3a6-4647-aec6-1607a6916a85/${newName}`
    });
  }

  // Generate image_gallery.md
  let galleryMd = `# GQS Image Gallery - Review WhatsApp Assets

Use this gallery to review the 18 renamed WhatsApp images. You can see their dimensions, sizes, and a visual preview of each image below.

---

## 📸 Image Directory Inventory

| Image ID | Original Filename | Dimensions | Size | Status |
| :--- | :--- | :---: | :---: | :--- |
`;

  galleryItems.forEach(item => {
    galleryMd += `| **image_${item.index}.jpeg** | \`${item.originalName}\` | ${item.width} x ${item.height} | ${item.sizeKB} KB | Ready for mapping |\n`;
  });

  galleryMd += `\n---\n\n## 🖼️ Visual Preview Carousel\n\n`;
  
  galleryMd += `\`\`\`carousel\n`;
  galleryItems.forEach((item, idx) => {
    galleryMd += `![image_${item.index}.jpeg (Dimensions: ${item.width}x${item.height})](${item.artifactPath})\n`;
    if (idx < galleryItems.length - 1) {
      galleryMd += `<!-- slide -->\n`;
    }
  });
  galleryMd += `\`\`\`\n\n`;

  galleryMd += `---\n\n## 📝 Visual Preview List\n\n`;
  galleryItems.forEach(item => {
    galleryMd += `### 🌟 image_${item.index}.jpeg\n`;
    galleryMd += `- **Original File**: \`${item.originalName}\`\n`;
    galleryMd += `- **Resolution**: ${item.width}x${item.height} pixels\n`;
    galleryMd += `- **File Size**: ${item.sizeKB} KB\n\n`;
    galleryMd += `![image_${item.index}.jpeg](${item.artifactPath})\n\n`;
    galleryMd += `---\n\n`;
  });

  const galleryPath = path.join(ARTIFACT_DIR, 'image_gallery.md');
  fs.writeFileSync(galleryPath, galleryMd);
  console.log(`Generated gallery artifact at ${galleryPath}`);
}

run().catch(console.error);

import fs from 'fs';
import path from 'path';

const SRC_DIR = 'd:/projects/gqs-project/gqs/public/assets/images';
const ARTIFACT_DIR = 'C:/Users/suhail ahamed/.gemini/antigravity-ide/brain/10ee19a1-b3a6-4647-aec6-1607a6916a85';

const filesToCopy = [
  {
    src: path.join(ARTIFACT_DIR, 'image_8_fresh_1779275245574.png'),
    destName: 'image_8.png',
    oldJpeg: 'image_8.jpeg'
  },
  {
    src: path.join(ARTIFACT_DIR, 'image_9_clean_1779275187187.png'),
    destName: 'image_9.png',
    oldJpeg: 'image_9.jpeg'
  },
  {
    src: path.join(ARTIFACT_DIR, 'image_11_clean_1779275211137.png'),
    destName: 'image_11.png',
    oldJpeg: 'image_11.jpeg'
  }
];

function run() {
  console.log('Copying cleaned images...');
  for (const item of filesToCopy) {
    if (fs.existsSync(item.src)) {
      const destPath = path.join(SRC_DIR, item.destName);
      fs.copyFileSync(item.src, destPath);
      console.log(`Copied ${item.src} -> ${destPath}`);

      // Copy to artifact directory with clean name for markdown gallery
      const artifactDest = path.join(ARTIFACT_DIR, item.destName);
      fs.copyFileSync(item.src, artifactDest);
      console.log(`Copied for gallery -> ${artifactDest}`);

      // Delete old watermarked JPEG
      const oldPath = path.join(SRC_DIR, item.oldJpeg);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
        console.log(`Deleted old JPEG: ${oldPath}`);
      }

      const oldArtifactPath = path.join(ARTIFACT_DIR, item.oldJpeg);
      if (fs.existsSync(oldArtifactPath)) {
        fs.unlinkSync(oldArtifactPath);
        console.log(`Deleted old artifact JPEG: ${oldArtifactPath}`);
      }
    } else {
      console.error(`Source not found: ${item.src}`);
    }
  }
  console.log('Done cleaning images!');
}

run();

import fs from 'fs';
import path from 'path';

const ARTIFACT_PATH = 'C:/Users/suhail ahamed/.gemini/antigravity-ide/brain/10ee19a1-b3a6-4647-aec6-1607a6916a85/image_gallery.md';

function run() {
  if (fs.existsSync(ARTIFACT_PATH)) {
    let content = fs.readFileSync(ARTIFACT_PATH, 'utf8');
    // Replace all file:///C:/Users/suhail%20ahamed/ with /C:/Users/suhail ahamed/
    // or with /C:/Users/suhail%20ahamed/
    // Let's replace file:///C:/Users/suhail%20ahamed/ with /C:/Users/suhail ahamed/
    content = content.replace(/file:\/\/\/C:\/Users\/suhail%20ahamed\//g, '/C:/Users/suhail ahamed/');
    content = content.replace(/file:\/\/\/C:\/Users\/suhail ahamed\//g, '/C:/Users/suhail ahamed/');
    fs.writeFileSync(ARTIFACT_PATH, content, 'utf8');
    console.log('Fixed paths in image_gallery.md');
  } else {
    console.error('Artifact not found!');
  }
}

run();

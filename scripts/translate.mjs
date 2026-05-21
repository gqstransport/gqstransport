import fs from 'fs';
import { translate } from '@vitalets/google-translate-api';

async function translateText(text) {
  if (!text) return text;
  if (Array.isArray(text)) {
    const results = [];
    for (const t of text) {
      results.push(await translateText(t));
    }
    return results;
  }
  try {
    const res = await translate(text, { to: 'ar' });
    return res.text;
  } catch (error) {
    console.error(`Failed to translate: ${text}`, error);
    return text;
  }
}

async function run() {
  console.log("Starting translation...");
  const data = JSON.parse(fs.readFileSync('./data/services.json', 'utf8'));
  for (const service of data) {
    console.log(`Translating ${service.title}...`);
    service.titleAr = await translateText(service.title);
    service.descriptionAr = await translateText(service.description);
    service.overviewAr = await translateText(service.overview);
    service.applicationsAr = await translateText(service.applications);
    service.featuresAr = await translateText(service.features);
    
    if (service.fleetDetails) {
      service.fleetDetailsAr = {
        types: await translateText(service.fleetDetails.types),
        capacity: await translateText(service.fleetDetails.capacity),
        availability: await translateText(service.fleetDetails.availability)
      };
    }
  }

  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync('./data/services.json', json);
  fs.writeFileSync('../gqs-backend/data/services.json', json);
  
  // Update generate-services.mjs so that it contains the translations
  let scriptContent = fs.readFileSync('./scripts/generate-services.mjs', 'utf8');
  const servicesArrayRegex = /const services = \[\s*([\s\S]*?)\s*\];\s*const json = JSON.stringify/;
  scriptContent = scriptContent.replace(servicesArrayRegex, `const services = ${JSON.stringify(data, null, 2)};\n\nconst json = JSON.stringify`);
  fs.writeFileSync('./scripts/generate-services.mjs', scriptContent);
  
  console.log("Translation completed and saved.");
}

run();

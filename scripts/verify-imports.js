#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check if all component files exist
const componentsDir = path.join(__dirname, '../app/components');
const requiredFiles = [
  'SoraChatbot.tsx',
  'layout/Header.tsx',
  'layout/Footer.tsx',
  'layout/Sidebar.tsx'
];

console.log('🔍 Verifying component files...');
console.log(`📁 Checking directory: ${componentsDir}`);

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(componentsDir, file);
  try {
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      console.log(`✅ ${file} exists (${stats.size} bytes)`);
    } else {
      console.log(`❌ ${file} missing`);
      allFilesExist = false;
    }
  } catch (error) {
    console.log(`❌ ${file} error: ${error.message}`);
    allFilesExist = false;
  }
});

// List actual files in components directory for debugging
console.log('\n📋 Files in components directory:');
try {
  const files = fs.readdirSync(componentsDir, { recursive: true });
  files.forEach(file => console.log(`  - ${file}`));
} catch (error) {
  console.log(`  Error reading directory: ${error.message}`);
}

if (allFilesExist) {
  console.log('\n🎉 All component files exist!');
  process.exit(0);
} else {
  console.log('\n💥 Some component files are missing!');
  process.exit(1);
}
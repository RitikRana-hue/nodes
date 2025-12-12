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

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log('🎉 All component files exist!');
  process.exit(0);
} else {
  console.log('💥 Some component files are missing!');
  process.exit(1);
}
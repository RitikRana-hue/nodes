#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Checks if the application is ready for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 NodesIO Deployment Verification');
console.log('='.repeat(40));

let allChecks = true;

// Check 1: Required files
const requiredFiles = [
    'package.json',
    'next.config.mjs',
    'server.js',
    'proxy.ts',
    'app/layout.tsx',
    'app/page.tsx'
];

console.log('\n📋 Checking required files...');
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - MISSING`);
        allChecks = false;
    }
});

// Check 2: Build output
console.log('\n📋 Checking build output...');
if (fs.existsSync('.next')) {
    console.log('✅ .next directory exists');

    const buildManifest = path.join('.next', 'build-manifest.json');
    if (fs.existsSync(buildManifest)) {
        console.log('✅ Build manifest exists');
    } else {
        console.log('❌ Build manifest missing - run npm run build');
        allChecks = false;
    }
} else {
    console.log('❌ .next directory missing - run npm run build');
    allChecks = false;
}

// Check 3: Dependencies
console.log('\n📋 Checking dependencies...');
if (fs.existsSync('node_modules')) {
    console.log('✅ node_modules exists');

    try {
        require.resolve('next');
        console.log('✅ Next.js available');
    } catch (error) {
        console.log('❌ Next.js not found - run npm install');
        allChecks = false;
    }

    try {
        require.resolve('react');
        console.log('✅ React available');
    } catch (error) {
        console.log('❌ React not found - run npm install');
        allChecks = false;
    }
} else {
    console.log('❌ node_modules missing - run npm install');
    allChecks = false;
}

// Check 4: Package.json scripts
console.log('\n📋 Checking package.json scripts...');
try {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const requiredScripts = ['build', 'start', 'server'];

    requiredScripts.forEach(script => {
        if (pkg.scripts && pkg.scripts[script]) {
            console.log(`✅ Script: ${script}`);
        } else {
            console.log(`❌ Script missing: ${script}`);
            allChecks = false;
        }
    });
} catch (error) {
    console.log('❌ Error reading package.json');
    allChecks = false;
}

// Final result
console.log('\n' + '='.repeat(40));
if (allChecks) {
    console.log('🎉 DEPLOYMENT READY!');
    console.log('\nTo deploy, run on your server:');
    console.log('1. npm install');
    console.log('2. npm run build');
    console.log('3. node server.js');
    console.log('\nOr use: npm run deploy:safe');
} else {
    console.log('❌ DEPLOYMENT NOT READY');
    console.log('\nFix the issues above before deploying.');
}

process.exit(allChecks ? 0 : 1);
#!/usr/bin/env node

/**
 * NodesIO Deployment Server
 * Comprehensive deployment script that handles all common deployment issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 NodesIO Deployment Script Starting...');
console.log('='.repeat(50));

// Step 1: Check Node.js version
console.log('📋 Step 1: Checking Node.js version...');
const nodeVersion = process.version;
console.log(`✅ Node.js version: ${nodeVersion}`);

if (parseInt(nodeVersion.slice(1)) < 18) {
    console.error('❌ Node.js 18+ required. Current version:', nodeVersion);
    process.exit(1);
}

// Step 2: Check if package.json exists
console.log('\n📋 Step 2: Checking package.json...');
if (!fs.existsSync('package.json')) {
    console.error('❌ package.json not found');
    process.exit(1);
}
console.log('✅ package.json found');

// Step 3: Install dependencies if node_modules doesn't exist
console.log('\n📋 Step 3: Checking dependencies...');
if (!fs.existsSync('node_modules')) {
    console.log('📦 Installing dependencies...');
    try {
        execSync('npm install --production', { stdio: 'inherit' });
        console.log('✅ Dependencies installed');
    } catch (error) {
        console.error('❌ Failed to install dependencies:', error.message);
        process.exit(1);
    }
} else {
    console.log('✅ node_modules found');
}

// Step 4: Check if Next.js is available
console.log('\n📋 Step 4: Checking Next.js...');
try {
    require.resolve('next');
    console.log('✅ Next.js found');
} catch (error) {
    console.error('❌ Next.js not found. Installing...');
    try {
        execSync('npm install next react react-dom', { stdio: 'inherit' });
        console.log('✅ Next.js installed');
    } catch (installError) {
        console.error('❌ Failed to install Next.js:', installError.message);
        process.exit(1);
    }
}

// Step 5: Build the application if .next doesn't exist
console.log('\n📋 Step 5: Checking build...');
if (!fs.existsSync('.next')) {
    console.log('🔨 Building application...');
    try {
        execSync('npm run build', { stdio: 'inherit' });
        console.log('✅ Build completed');
    } catch (error) {
        console.error('❌ Build failed:', error.message);
        process.exit(1);
    }
} else {
    console.log('✅ Build found');
}

// Step 6: Start the server
console.log('\n📋 Step 6: Starting server...');
console.log('='.repeat(50));

// Set production environment
process.env.NODE_ENV = 'production';

// Import and start the server
try {
    require('./server.js');
} catch (error) {
    console.error('❌ Failed to start server:', error.message);

    // Fallback to Next.js built-in server
    console.log('🔄 Trying fallback server...');
    try {
        execSync('npm start', { stdio: 'inherit' });
    } catch (fallbackError) {
        console.error('❌ Fallback server also failed:', fallbackError.message);
        process.exit(1);
    }
}
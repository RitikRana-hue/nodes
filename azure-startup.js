#!/usr/bin/env node

/**
 * Azure-Optimized Startup Script for NodesIO
 * Handles Azure-specific deployment requirements
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Azure NodesIO Startup Script');
console.log('================================');

// Azure-specific environment detection
const isAzure = process.env.WEBSITE_SITE_NAME || process.env.APPSETTING_WEBSITE_SITE_NAME;
const azurePort = process.env.PORT || process.env.WEBSITES_PORT || 8080;

if (isAzure) {
    console.log('🌐 Azure App Service detected');
    console.log(`📍 Site Name: ${process.env.WEBSITE_SITE_NAME || 'Unknown'}`);
    console.log(`🔌 Port: ${azurePort}`);

    // Set Azure-specific environment variables
    process.env.PORT = azurePort;
    process.env.NODE_ENV = 'production';
    process.env.HOSTNAME = '0.0.0.0';
} else {
    console.log('💻 Local/Other environment detected');
}

// Check Node.js version
const nodeVersion = process.version;
console.log(`📋 Node.js version: ${nodeVersion}`);

const majorVersion = parseInt(nodeVersion.slice(1));
if (majorVersion < 18) {
    console.warn('⚠️  Warning: Node.js 18+ recommended for optimal performance');
}

// Azure-specific checks
if (isAzure) {
    console.log('\n🔍 Azure-specific checks...');

    // Check if running in Azure build environment
    if (process.env.SCM_DO_BUILD_DURING_DEPLOYMENT) {
        console.log('✅ Build during deployment enabled');
    }

    // Check Oryx build
    if (process.env.ENABLE_ORYX_BUILD) {
        console.log('✅ Oryx build enabled');
    }

    // Check for Azure-specific paths
    const azurePaths = [
        '/home/site/wwwroot',
        '/tmp',
        '/home/LogFiles'
    ];

    azurePaths.forEach(azurePath => {
        if (fs.existsSync(azurePath)) {
            console.log(`✅ Azure path exists: ${azurePath}`);
        }
    });
}

// Standard deployment checks
console.log('\n📋 Standard deployment checks...');

// Check package.json
if (!fs.existsSync('package.json')) {
    console.error('❌ package.json not found');
    process.exit(1);
}
console.log('✅ package.json found');

// Check Next.js
try {
    require.resolve('next');
    console.log('✅ Next.js available');
} catch (error) {
    console.error('❌ Next.js not found');

    if (isAzure) {
        console.log('🔄 Attempting to install Next.js...');
        try {
            execSync('npm install next react react-dom', { stdio: 'inherit' });
            console.log('✅ Next.js installed');
        } catch (installError) {
            console.error('❌ Failed to install Next.js:', installError.message);
            process.exit(1);
        }
    } else {
        console.error('Please run: npm install');
        process.exit(1);
    }
}

// Check build output
if (!fs.existsSync('.next')) {
    console.log('🔨 Build output not found, building...');
    try {
        execSync('npm run build', { stdio: 'inherit' });
        console.log('✅ Build completed');
    } catch (buildError) {
        console.error('❌ Build failed:', buildError.message);
        process.exit(1);
    }
} else {
    console.log('✅ Build output found');
}

// Start the server
console.log('\n🚀 Starting NodesIO server...');
console.log('================================');

try {
    require('./server.js');
} catch (error) {
    console.error('❌ Failed to start server:', error.message);

    // Azure fallback
    if (isAzure) {
        console.log('🔄 Trying Azure fallback...');
        try {
            execSync('npm start', { stdio: 'inherit' });
        } catch (fallbackError) {
            console.error('❌ Fallback also failed:', fallbackError.message);
            process.exit(1);
        }
    } else {
        process.exit(1);
    }
}
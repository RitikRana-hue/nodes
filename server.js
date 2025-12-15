#!/usr/bin/env node

/**
 * NodesIO Production Server
 * This file is required for deployment on traditional Node.js hosting platforms
 */

// Check if required modules exist
try {
    require.resolve('next');
} catch (error) {
    console.error('❌ Next.js not found. Please run: npm install');
    console.error('Error:', error.message);
    process.exit(1);
}

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8080;

// Create Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

console.log('🚀 Starting NodesIO server...');
console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`🌐 Hostname: ${hostname}`);
console.log(`🔌 Port: ${port}`);

// Check if .next directory exists
const fs = require('fs');
const path = require('path');
const nextDir = path.join(process.cwd(), '.next');

if (!fs.existsSync(nextDir)) {
    console.error('❌ .next directory not found. Please run: npm run build');
    process.exit(1);
}

console.log('✅ .next directory found');
console.log('🔄 Preparing Next.js application...');

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error occurred handling', req.url, err);
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    })
        .once('error', (err) => {
            console.error('❌ Server error:', err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`✅ NodesIO server ready on http://${hostname}:${port}`);
            console.log(`📱 Local: http://localhost:${port}`);
            console.log(`🌍 Network: http://${hostname}:${port}`);
        });
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received, shutting down gracefully');
    process.exit(0);
});
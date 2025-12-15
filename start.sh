#!/bin/bash

# NodesIO Startup Script
echo "🚀 Starting NodesIO Application..."

# Set environment variables
export NODE_ENV=production
export PORT=${PORT:-8080}
export HOSTNAME=${HOSTNAME:-0.0.0.0}

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --production
fi

# Check if .next exists
if [ ! -d ".next" ]; then
    echo "🔨 Building application..."
    npm run build
fi

# Start the application
echo "✅ Starting server on port $PORT..."
exec node server.js
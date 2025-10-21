#!/bin/bash

# Deployment Verification Script for NodesIO
# Run this after deploying to Vercel to verify everything works

echo "🚀 NodesIO Deployment Verification Script"
echo "=========================================="
echo ""

# Check if URL is provided
if [ -z "$1" ]; then
    echo "❌ Error: Please provide your Vercel deployment URL"
    echo "Usage: ./verify-deployment.sh https://your-domain.vercel.app"
    exit 1
fi

DOMAIN=$1
echo "🔍 Testing deployment at: $DOMAIN"
echo ""

# Function to test URL
test_url() {
    local url=$1
    local name=$2
    
    echo -n "Testing $name... "
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status_code" -eq 200 ]; then
        echo "✅ OK ($status_code)"
        return 0
    else
        echo "❌ FAILED ($status_code)"
        return 1
    fi
}

# Test public pages
echo "📄 Testing Public Pages:"
test_url "$DOMAIN/" "Homepage"
test_url "$DOMAIN/about" "About Page"
test_url "$DOMAIN/services" "Services Page"
test_url "$DOMAIN/blog" "Blog Page"
test_url "$DOMAIN/contact" "Contact Page"
test_url "$DOMAIN/careers" "Careers Page"
echo ""

# Test dashboard pages
echo "🎛️  Testing Dashboard Pages:"
test_url "$DOMAIN/dashboard/login" "Dashboard Login"
test_url "$DOMAIN/dashboard" "Dashboard Home"
test_url "$DOMAIN/dashboard/bins" "Bins Management"
test_url "$DOMAIN/dashboard/users" "Users Management"
echo ""

# Test HQ pages
echo "🏢 Testing HQ Pages:"
test_url "$DOMAIN/hq/login" "HQ Login"
test_url "$DOMAIN/hq" "HQ Dashboard"
test_url "$DOMAIN/hq/alerts" "HQ Alerts"
test_url "$DOMAIN/hq/ai" "HQ AI Analytics"
echo ""

# Test user pages
echo "👤 Testing User Pages:"
test_url "$DOMAIN/user/login" "User Login"
test_url "$DOMAIN/user/signup" "User Signup"
test_url "$DOMAIN/user" "User Dashboard"
echo ""

# Test static files
echo "📁 Testing Static Files:"
test_url "$DOMAIN/sitemap.xml" "Sitemap"
test_url "$DOMAIN/robots.txt" "Robots.txt"
test_url "$DOMAIN/favicon.ico" "Favicon"
echo ""

# Test images
echo "🖼️  Testing Images:"
test_url "$DOMAIN/images/landingpageIMG.png" "Landing Page Image"
test_url "$DOMAIN/images/logo.png" "Logo"
echo ""

# Test API endpoints
echo "🔌 Testing API Endpoints:"
echo -n "Testing API Login endpoint... "
api_response=$(curl -s -X POST "$DOMAIN/api/auth/login" \
    -H "Content-Type: application/json" \
    -d '{"username":"test","password":"test"}' \
    -w "%{http_code}" -o /dev/null)

if [ "$api_response" -eq 401 ] || [ "$api_response" -eq 400 ]; then
    echo "✅ OK (API responding correctly)"
else
    echo "⚠️  Unexpected response ($api_response)"
fi
echo ""

# Summary
echo "=========================================="
echo "✅ Deployment verification complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Test login with credentials:"
echo "   - Admin: admin@nodesio.com / admin"
echo "   - Demo: demo@nodesio.com / demo"
echo ""
echo "2. Check browser console for errors"
echo "3. Test forms and interactions"
echo "4. Verify analytics tracking"
echo ""
echo "🎉 Your site is live at: $DOMAIN"

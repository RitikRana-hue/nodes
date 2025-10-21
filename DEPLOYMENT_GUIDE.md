# NodesIO Vercel Deployment Guide

## Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- Vercel account (free tier available)
- Git repository

### Step 1: Local Build Test

```bash
# Install dependencies
npm install

# Run type checking
npm run type-check

# Run linting
npm run lint

# Build the project
npm run build

# Start production server (optional)
npm start
```

If all commands succeed without errors, proceed to deployment.

---

## Deployment Methods

### Method 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

### Method 2: GitHub Integration (Recommended for Teams)

1. Push code to GitHub:
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

2. Connect to Vercel:
   - Go to https://vercel.com/new
   - Select "Next.js" template
   - Import your GitHub repository
   - Click "Deploy"

### Method 3: Manual Upload

```bash
# Build the project
npm run build

# Upload the `.next` folder and `public` folder to Vercel
# Or use Vercel dashboard to upload
```

---

## Environment Variables

### Create `.env.local` for local development:
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Set in Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_APP_URL`: Your production domain (e.g., `https://nodesio.vercel.app`)

---

## Build Configuration

### Build Command
```
npm run build
```

### Start Command
```
npm start
```

### Install Command
```
npm install
```

### Output Directory
```
.next
```

These are already configured in `vercel.json`.

---

## Post-Deployment Verification

### 1. Check Deployment Status
```bash
vercel status
```

### 2. Test Key Routes
- Landing page: `https://your-domain.vercel.app/`
- Dashboard: `https://your-domain.vercel.app/dashboard`
- Dashboard Login: `https://your-domain.vercel.app/dashboard/login`
- User Dashboard: `https://your-domain.vercel.app/user`
- HQ Dashboard: `https://your-domain.vercel.app/hq`

### 3. Demo Credentials

**Dashboard:**
- Email: `admin@nodesio.com`
- Password: `NodesIO@2024`

Or:
- Email: `demo@nodesio.com`
- Password: `Demo@123`

**User Dashboard:**
- Email: `demo@nodesio.com`
- Password: `demo123`

**HQ Dashboard:**
- Email: `admin@nodesio.com`
- Password: `admin123`

---

## Troubleshooting

### Build Fails

**Error: "Module not found"**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**Error: "TypeScript error"**
```bash
# Check for type errors
npm run type-check

# Fix ESLint issues
npm run lint:fix
```

### Deployment Fails

**Check Vercel logs:**
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments"
4. Click on failed deployment
5. Check "Build Logs" tab

**Common issues:**
- Node.js version mismatch: Ensure 20.x in `vercel.json`
- Missing environment variables: Check Vercel dashboard settings
- Build timeout: Increase timeout in `vercel.json`

### Runtime Issues

**Hydration errors:**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

**API errors:**
- Check network tab in DevTools
- Verify environment variables
- Check Vercel function logs

---

## Performance Optimization

### Already Configured:
- ✅ Image optimization (WebP, AVIF)
- ✅ SWC minification
- ✅ Package import optimization
- ✅ Security headers
- ✅ Caching strategy

### Additional Optimizations:

1. **Enable Vercel Analytics:**
   - Vercel Dashboard → Settings → Analytics
   - Enable "Web Analytics"

2. **Enable Vercel Speed Insights:**
   - Vercel Dashboard → Settings → Speed Insights
   - Enable "Speed Insights"

3. **Monitor Performance:**
   - Use Vercel Dashboard
   - Check Core Web Vitals
   - Monitor build times

---

## Monitoring & Maintenance

### Weekly Checks
- [ ] Check Vercel deployment status
- [ ] Review error logs
- [ ] Monitor performance metrics
- [ ] Check for security updates

### Monthly Checks
- [ ] Update dependencies: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Review analytics
- [ ] Check for breaking changes in Next.js

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update to latest major versions (careful!)
npm install -g npm-check-updates
ncu -u
npm install
```

---

## Rollback Procedure

If deployment has issues:

```bash
# List recent deployments
vercel list

# Rollback to previous deployment
vercel rollback

# Or manually redeploy previous version
git checkout <previous-commit>
vercel --prod
```

---

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Project Settings → Domains
   - Add custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variables:**
   - Set `NEXT_PUBLIC_APP_URL` to your custom domain

3. **SSL Certificate:**
   - Automatically provisioned by Vercel
   - Usually takes 5-10 minutes

---

## Security Checklist

- ✅ HTTPS enabled (automatic with Vercel)
- ✅ Security headers configured
- ✅ Environment variables secured
- ✅ No sensitive data in code
- ✅ Demo credentials only for development
- ✅ Rate limiting configured (if needed)

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support
- **GitHub Issues:** Check project repository

---

## Deployment Checklist

Before deploying to production:

- [ ] Run `npm run build` locally - succeeds
- [ ] Run `npm run type-check` - no errors
- [ ] Run `npm run lint` - no errors
- [ ] Test all main routes locally
- [ ] Test authentication flows
- [ ] Verify environment variables
- [ ] Check `.env.local.example` is up to date
- [ ] Review `BUILD_FIXES_SUMMARY.md`
- [ ] Commit all changes to git
- [ ] Push to main branch
- [ ] Deploy to Vercel
- [ ] Test deployed site
- [ ] Verify analytics working
- [ ] Monitor error logs

---

## Success Indicators

✅ Build completes without errors
✅ All pages load correctly
✅ Authentication works
✅ No console errors
✅ Performance metrics are good
✅ Security headers present
✅ Analytics tracking works

**Your NodesIO application is now ready for production!** 🚀

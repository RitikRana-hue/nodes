# 🚀 Fix Vercel Deployment - Environment Variables

## 🔧 **Issue**: Forms not working on Vercel

**Problem**: Environment variables from `.env.local` are not available on Vercel.

## ✅ **Solution**: Add Environment Variables to Vercel Dashboard

### **Step 1: Go to Vercel Dashboard**
1. Visit [vercel.com](https://vercel.com)
2. Open your **nodes-lemon-pi** project
3. Go to **Settings** → **Environment Variables**

### **Step 2: Add These Variables**

Click **Add** for each variable:

**Variable 1:**
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://jmwlcjlwsjovxjblapwr.supabase.co`
- **Environment**: Production, Preview, Development (select all)

**Variable 2:**
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imptd2xjamx3c2pvdnhqYmxhcHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMDQ0NTQsImV4cCI6MjA4MTg4MDQ1NH0.3YK4Npv6D2hIFNDN4zgdFGwnFHNncvL8TUwmSpvKsjc`
- **Environment**: Production, Preview, Development (select all)

**Variable 3:**
- **Name**: `NEXT_PUBLIC_SITE_URL`
- **Value**: `https://nodes-lemon-pi.vercel.app`
- **Environment**: Production, Preview, Development (select all)

### **Step 3: Redeploy**

After adding all variables:
1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **⋯** menu → **Redeploy**
4. Wait for deployment to complete

### **Step 4: Test**

Visit your site and test:
- ✅ Contact form at: https://nodes-lemon-pi.vercel.app/contact
- ✅ Career applications at: https://nodes-lemon-pi.vercel.app/careers

## 🎯 **Expected Result**

After redeployment:
- ✅ Contact form will save to Supabase
- ✅ Career applications will save to Supabase
- ✅ Resume uploads will work
- ✅ Success messages will appear

## 🔍 **How to Verify It's Working**

1. **Submit Contact Form**:
   - Go to `/contact`
   - Fill out form
   - Should see "Message submitted successfully!"

2. **Apply for Job**:
   - Go to `/careers`
   - Click "Apply Now"
   - Upload resume and submit
   - Should see "Application submitted successfully!"

3. **Check Supabase**:
   - Go to your Supabase dashboard
   - Check `nodesio_contacts` table for contact submissions
   - Check `career_bucket` table for job applications
   - Check `resume` storage for uploaded files

## 🆘 **If Still Not Working**

1. **Check Browser Console**:
   - Open Developer Tools (F12)
   - Look for error messages
   - Check Network tab for failed requests

2. **Check Vercel Function Logs**:
   - Go to Vercel dashboard → Functions
   - Check logs for API errors

3. **Verify Environment Variables**:
   - Make sure all 3 variables are set
   - Check for typos in variable names
   - Ensure values are correct

## ✅ **Success Indicators**

You'll know it's working when:
- ✅ No console errors
- ✅ Forms show success messages
- ✅ Data appears in Supabase tables
- ✅ Resume files appear in Supabase storage

---

**The issue is simply missing environment variables on Vercel. Once you add them and redeploy, everything will work perfectly!** 🚀
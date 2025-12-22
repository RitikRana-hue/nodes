# 🗄️ Supabase Setup Guide - NodesIO Contact Form (Updated for Your Table)

## ✅ **Supabase Integration Updated for Your Table Structure!**

The contact form has been updated to work with your existing `nodesio_contacts` table structure.

## 🏗️ **Your Existing Table Structure**

```sql
CREATE TABLE public.nodesio_contacts (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    first_name text NULL,
    last_name text NULL,
    email_address text NULL,
    "company / organization" text NULL,
    subject text NULL,
    message text NULL,
    CONSTRAINT nodesio_contacts_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;
```

## 🚀 **Setup Instructions**

### 1. Environment Variables

Update your `.env.local` file with your actual Supabase project URL:

```bash
# Supabase Configuration
# Replace 'your-project-id' with your actual Supabase project ID
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_K7vB980576iKJnEsJLBBMw_wmhS9cfPapi
SUPABASE_SERVICE_ROLE_KEY=sb_secret_N2w-yb2yAsTiH3UkZJlUog_RtZ-gqKY
```

### 2. Optional Enhancements (Run in Supabase SQL Editor)

You can run the SQL from `supabase-schema-updated.sql` to add:
- Performance indexes
- Row Level Security (RLS) policies
- Optional status tracking column
- Analytics tracking columns

## 📋 **Updated Features**

### ✅ **Contact Form Processing**
- Form validation (required fields, email format)
- Automatic data saving to your `nodesio_contacts` table
- Fallback to local file if Supabase is unavailable
- Proper column mapping:
  - `email` → `email_address`
  - `company` → `company / organization`

### ✅ **Database Integration**
- **Table**: `nodesio_contacts` (your existing table)
- **Columns Mapped**:
  - `id` (UUID, Primary Key)
  - `first_name`, `last_name` (TEXT)
  - `email_address` (TEXT) - mapped from form's email field
  - `company / organization` (TEXT) - mapped from form's company field
  - `subject` (TEXT)
  - `message` (TEXT)
  - `created_at` (TIMESTAMP)

### ✅ **Admin Dashboard**
- View all contact submissions at `/admin/contact-submissions`
- Updated to use correct column names
- Statistics overview
- Responsive design
- Note: Status functionality is display-only since your table doesn't have a status column

## 🔍 **API Endpoints**

### POST `/api/contact`
Submit a new contact form (saves to your table):
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "company": "Example Corp",
  "subject": "General Inquiry",
  "message": "Hello, I have a question..."
}
```

### GET `/api/contact`
Get all submissions from your table:
```bash
curl -H "Authorization: Bearer admin-token" http://localhost:3000/api/contact
```

## 🎯 **Testing Your Setup**

### 1. Update Environment Variables
Replace `your-project-id` in `.env.local` with your actual Supabase project ID.

### 2. Test the Contact Form
- Go to: `http://localhost:3000/contact`
- Fill out and submit the form
- Check your Supabase dashboard to see the new record

### 3. Use Debug Page
- Go to: `http://localhost:3000/debug/contact`
- Click "Test Supabase" to verify connection
- Click "Test Submit" to test form submission

### 4. Check Admin Dashboard
- Go to: `http://localhost:3000/admin/contact-submissions`
- View submissions from your `nodesio_contacts` table

## 🔧 **Column Mapping**

| Form Field | Your Table Column | Type |
|------------|------------------|------|
| firstName | first_name | text |
| lastName | last_name | text |
| email | email_address | text |
| company | "company / organization" | text |
| subject | subject | text |
| message | message | text |
| - | id | uuid (auto) |
| - | created_at | timestamp (auto) |

## 🚀 **Benefits of Your Current Setup**

1. **Existing Data**: Works with your current table structure
2. **No Migration**: No need to change existing data
3. **Backward Compatible**: Maintains your current column names
4. **Flexible**: Can add optional columns later if needed

## 📊 **Optional Enhancements**

If you want additional features, you can add these columns to your table:

```sql
-- Add status tracking
ALTER TABLE public.nodesio_contacts 
ADD COLUMN status text DEFAULT 'new' 
CHECK (status IN ('new', 'read', 'replied', 'resolved'));

-- Add analytics tracking
ALTER TABLE public.nodesio_contacts 
ADD COLUMN ip_address inet,
ADD COLUMN user_agent text;
```

## ✅ **Ready to Use!**

Your contact form is now configured to work with your existing `nodesio_contacts` table. Just update the Supabase URL in your environment variables and you're ready to go! 🎉
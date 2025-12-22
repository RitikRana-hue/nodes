-- Simple Career Schema - Run this if the main one fails
-- Run each section separately in Supabase SQL Editor

-- 1. Create basic table first
CREATE TABLE IF NOT EXISTS public.career_bucket (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    position text NOT NULL,
    full_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    experience text NOT NULL,
    message text NOT NULL,
    resume text NULL,
    CONSTRAINT career_bucket_pkey PRIMARY KEY (id)
);

-- 2. Add status column (run this separately)
ALTER TABLE public.career_bucket ADD COLUMN IF NOT EXISTS status text DEFAULT 'new';

-- 3. Disable RLS temporarily to avoid issues
ALTER TABLE public.career_bucket DISABLE ROW LEVEL SECURITY;

-- 4. Test the table by inserting a dummy record (optional)
-- INSERT INTO public.career_bucket (position, full_name, email, phone, experience, message) 
-- VALUES ('Test Position', 'Test User', 'test@example.com', '1234567890', '2', 'Test message');

-- 5. Enable RLS and create policies
ALTER TABLE public.career_bucket ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all operations for now" ON public.career_bucket
    FOR ALL 
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);
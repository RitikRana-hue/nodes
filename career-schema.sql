-- SQL Schema for Career Applications
-- Run this in your Supabase SQL Editor

-- Step 1: Create the career_bucket table (basic structure first)
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
) TABLESPACE pg_default;

-- Step 2: Add status column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'career_bucket' AND column_name = 'status') THEN
        ALTER TABLE public.career_bucket ADD COLUMN status text DEFAULT 'new';
    END IF;
END $$;

-- Step 3: Add constraint for status column
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.check_constraints 
                   WHERE constraint_name = 'career_bucket_status_check') THEN
        ALTER TABLE public.career_bucket 
        ADD CONSTRAINT career_bucket_status_check 
        CHECK (status IN ('new', 'reviewed', 'shortlisted', 'rejected'));
    END IF;
END $$;

-- Step 4: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_career_bucket_email ON public.career_bucket(email);
CREATE INDEX IF NOT EXISTS idx_career_bucket_created_at ON public.career_bucket(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_career_bucket_position ON public.career_bucket(position);
CREATE INDEX IF NOT EXISTS idx_career_bucket_status ON public.career_bucket(status);

-- Step 5: Enable Row Level Security
ALTER TABLE public.career_bucket ENABLE ROW LEVEL SECURITY;

-- Step 6: Create policies
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous career applications" ON public.career_bucket;
DROP POLICY IF EXISTS "Allow authenticated reads" ON public.career_bucket;
DROP POLICY IF EXISTS "Allow authenticated updates" ON public.career_bucket;

-- Create new policies
CREATE POLICY "Allow anonymous career applications" ON public.career_bucket
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated reads" ON public.career_bucket
    FOR SELECT 
    TO authenticated 
    USING (true);

CREATE POLICY "Allow authenticated updates" ON public.career_bucket
    FOR UPDATE 
    TO authenticated 
    USING (true);
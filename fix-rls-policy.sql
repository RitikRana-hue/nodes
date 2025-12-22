-- Fix Row Level Security for nodesio_contacts table
-- Run this in your Supabase SQL Editor

-- Option 1: Allow anonymous users to insert contact forms (RECOMMENDED)
CREATE POLICY "Allow anonymous contact form submissions" ON public.nodesio_contacts
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

-- Option 2: Allow authenticated users to read all records (for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON public.nodesio_contacts
    FOR SELECT 
    TO authenticated 
    USING (true);

-- Option 3: If you want to disable RLS completely (NOT RECOMMENDED for production)
-- ALTER TABLE public.nodesio_contacts DISABLE ROW LEVEL SECURITY;

-- Check current policies (optional - for debugging)
-- SELECT * FROM pg_policies WHERE tablename = 'nodesio_contacts';
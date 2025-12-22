-- Updated SQL Schema for NodesIO Contact Form
-- This matches your existing table structure

-- Your existing table (for reference):
-- CREATE TABLE public.nodesio_contacts (
--     id uuid NOT NULL DEFAULT gen_random_uuid(),
--     created_at timestamp with time zone NOT NULL DEFAULT now(),
--     first_name text NULL,
--     last_name text NULL,
--     email_address text NULL,
--     "company / organization" text NULL,
--     subject text NULL,
--     message text NULL,
--     CONSTRAINT nodesio_contacts_pkey PRIMARY KEY (id)
-- ) TABLESPACE pg_default;

-- Optional: Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_nodesio_contacts_email ON public.nodesio_contacts(email_address);
CREATE INDEX IF NOT EXISTS idx_nodesio_contacts_created_at ON public.nodesio_contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_nodesio_contacts_subject ON public.nodesio_contacts(subject);

-- Optional: Add Row Level Security (RLS) policies
ALTER TABLE public.nodesio_contacts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (submit contact forms)
CREATE POLICY "Allow anonymous inserts" ON public.nodesio_contacts
    FOR INSERT 
    TO anon 
    WITH CHECK (true);

-- Policy: Allow authenticated users to read all records (for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON public.nodesio_contacts
    FOR SELECT 
    TO authenticated 
    USING (true);

-- Policy: Allow authenticated users to update records (for status changes)
-- Note: Your table doesn't have a status column, so this is for future use
CREATE POLICY "Allow authenticated updates" ON public.nodesio_contacts
    FOR UPDATE 
    TO authenticated 
    USING (true);

-- Optional: Add a status column if you want to track submission status
-- ALTER TABLE public.nodesio_contacts 
-- ADD COLUMN status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'resolved'));

-- Optional: Add tracking columns for better analytics
-- ALTER TABLE public.nodesio_contacts 
-- ADD COLUMN ip_address inet,
-- ADD COLUMN user_agent text;

-- Create a view for easier querying (optional)
CREATE OR REPLACE VIEW public.contact_submissions_view AS
SELECT 
    id,
    first_name,
    last_name,
    email_address,
    "company / organization" as company,
    subject,
    message,
    created_at,
    -- Add computed fields
    CONCAT(first_name, ' ', last_name) as full_name,
    DATE(created_at) as submission_date
FROM public.nodesio_contacts
ORDER BY created_at DESC;

-- Grant permissions on the view
GRANT SELECT ON public.contact_submissions_view TO anon, authenticated;
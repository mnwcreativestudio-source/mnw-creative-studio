-- ============================================================
-- MNW Creative Studio: Inquiries Table & Row Level Security
-- ============================================================

-- 1. Create inquiries table
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business_name TEXT,
  project_type TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow public/anonymous and authenticated users to INSERT inquiries only
DROP POLICY IF EXISTS "Allow public insert only" ON public.inquiries;
CREATE POLICY "Allow public insert only"
  ON public.inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 4. Grant table privileges to anon and authenticated roles
-- (Required by PostgreSQL before Row Level Security policies can take effect)
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON TABLE public.inquiries TO anon, authenticated;

-- 5. Disallow public SELECT, UPDATE, DELETE
-- (By default, when RLS is enabled, any operation without an explicit policy is denied.
-- Thus, anon/public users can ONLY insert. They cannot read, edit, or delete any records.)

-- 5. Optional: Helpful indexes for dashboard query performance
CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS inquiries_email_idx ON public.inquiries (email);

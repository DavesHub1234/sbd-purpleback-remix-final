-- Create a table to store contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  read BOOLEAN NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for service role to insert (edge function uses service role)
CREATE POLICY "Service role can insert contact submissions"
ON public.contact_submissions
FOR INSERT
TO service_role
WITH CHECK (true);

-- Create policy for service role to select all submissions
CREATE POLICY "Service role can select contact submissions"
ON public.contact_submissions
FOR SELECT
TO service_role
USING (true);

-- Create policy for service role to update submissions (mark as read)
CREATE POLICY "Service role can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO service_role
USING (true);

-- Add index for faster queries by date
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
-- Add explicit deny policies for anon and authenticated users to protect sensitive contact data
-- The existing service_role policies will continue to allow the Edge Function to work

-- Deny anonymous users from reading contact submissions
CREATE POLICY "Deny anon SELECT on contact_submissions"
ON public.contact_submissions
FOR SELECT
TO anon
USING (false);

-- Deny authenticated users from reading contact submissions (only service_role should access)
CREATE POLICY "Deny authenticated SELECT on contact_submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (false);

-- Deny anonymous users from inserting contact submissions directly (must go through Edge Function)
CREATE POLICY "Deny anon INSERT on contact_submissions"
ON public.contact_submissions
FOR INSERT
TO anon
WITH CHECK (false);

-- Deny authenticated users from inserting contact submissions directly
CREATE POLICY "Deny authenticated INSERT on contact_submissions"
ON public.contact_submissions
FOR INSERT
TO authenticated
WITH CHECK (false);

-- Deny anonymous users from updating contact submissions
CREATE POLICY "Deny anon UPDATE on contact_submissions"
ON public.contact_submissions
FOR UPDATE
TO anon
USING (false);

-- Deny authenticated users from updating contact submissions
CREATE POLICY "Deny authenticated UPDATE on contact_submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (false);

-- Deny anonymous users from deleting contact submissions
CREATE POLICY "Deny anon DELETE on contact_submissions"
ON public.contact_submissions
FOR DELETE
TO anon
USING (false);

-- Deny authenticated users from deleting contact submissions
CREATE POLICY "Deny authenticated DELETE on contact_submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (false);
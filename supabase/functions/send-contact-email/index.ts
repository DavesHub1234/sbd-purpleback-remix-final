import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.1";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client with service role key for database operations
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Allowed origins for CORS - restrict to trusted domains
const allowedOrigins = [
  'https://studiosbydave.com',
  'https://www.studiosbydave.com',
  'https://tkkqlidhwbdaqramfixu.lovableproject.com', // Lovable preview
];

// Get CORS headers with origin validation
function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  business?: string;
  message: string;
  honeypot?: string;
}

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in ms
const MAX_SUBMISSIONS = 5; // per IP per hour
const submissionLog = new Map<string, number[]>();

// HTML escape function to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const submissions = submissionLog.get(ip) || [];
  const recentSubmissions = submissions.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    console.log(`Rate limit exceeded for IP: ${ip}`);
    return false;
  }
  
  recentSubmissions.push(now);
  submissionLog.set(ip, recentSubmissions);
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { firstName, lastName, email, phone, business, message, honeypot }: ContactEmailRequest = await req.json();

    // Honeypot protection - reject if filled
    if (honeypot) {
      console.log("Honeypot triggered - potential bot submission");
      return new Response(
        JSON.stringify({ error: "Invalid submission" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Contact form submission received from:", email);

    // Server-side validation
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Input length validation
    if (firstName.length > 100 || lastName.length > 100 || 
        email.length > 255 || phone.length > 50 || 
        message.length > 5000 || (business && business.length > 200)) {
      return new Response(
        JSON.stringify({ error: "Input exceeds maximum length" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Save submission to database
    const { data: savedSubmission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        business: business?.trim() || null,
        message: message.trim(),
      })
      .select()
      .single();

    if (dbError) {
      console.error("Error saving to database:", dbError);
      // Continue with email sending even if DB fails
    } else {
      console.log("Submission saved to database:", savedSubmission?.id);
    }

    // Send notification email to business owner (with XSS protection)
    const notificationEmail = await resend.emails.send({
      from: "Studios by Dave Contact Form <onboarding@resend.dev>",
      to: ["david.richardson@studiosbydave.com"],
      subject: `New Contact Form Submission from ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${business ? `<p><strong>Business Type:</strong> ${escapeHtml(business)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        ${savedSubmission ? `<p><em>Submission ID: ${savedSubmission.id}</em></p>` : ''}
      `,
    });

    // Send confirmation email to customer (with XSS protection)
    const confirmationEmail = await resend.emails.send({
      from: "Studios by Dave <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message!",
      html: `
        <h1>Thank you for contacting Studios by Dave, ${escapeHtml(firstName)}!</h1>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our services at <a href="https://studiosbydave.com">studiosbydave.com</a>.</p>
        <hr>
        <p><strong>Your message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>David<br>Studios by Dave<br>(704) 473-8188</p>
      `,
    });

    console.log("Emails sent successfully");

    return new Response(
      JSON.stringify({ 
        success: true,
        notificationId: notificationEmail.data?.id,
        confirmationId: confirmationEmail.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    const corsHeaders = getCorsHeaders(req);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again or contact us directly." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
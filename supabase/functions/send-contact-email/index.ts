import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  business?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, business, message }: ContactEmailRequest = await req.json();

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

    // Send notification email to business owner
    const notificationEmail = await resend.emails.send({
      from: "Studios by Dave Contact Form <onboarding@resend.dev>",
      to: ["dx1creations25@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${business ? `<p><strong>Business Type:</strong> ${business}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to customer
    const confirmationEmail = await resend.emails.send({
      from: "Studios by Dave <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message!",
      html: `
        <h1>Thank you for contacting Studios by Dave, ${firstName}!</h1>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our services at <a href="https://studiosbydave.com">studiosbydave.com</a>.</p>
        <hr>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
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

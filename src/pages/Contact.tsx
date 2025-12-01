import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { trackFormSubmission } from "@/components/GoogleAnalytics";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/data/structuredData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, "First name is required")
    .max(100, "First name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z.string()
    .trim()
    .min(1, "Last name is required")
    .max(100, "Last name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[\d\s()+-]+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 characters")
    .max(20, "Phone number must be less than 20 characters"),
  business: z.string()
    .trim()
    .max(100, "Business type must be less than 100 characters")
    .optional(),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
  honeypot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      business: "",
      message: "",
      honeypot: "",
    },
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://studiosbydave.com" },
    { name: "Contact", url: "https://studiosbydave.com/contact" }
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Studios by Dave",
    "description": "Get in touch with Studios by Dave for professional web design, SEO, AI automations, and branding services. Free consultations available.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Studios by Dave",
      "telephone": "+1-704-473-8188",
      "email": "dx1creations25@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "125 S. Toney Street",
        "addressLocality": "Shelby",
        "addressRegion": "NC",
        "addressCountry": "US"
      }
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        const errorMessage = error.message?.includes("Too many requests") || error.message?.includes("429")
          ? "You've submitted too many requests. Please try again in an hour."
          : "Failed to send message. Please try again or contact us directly at dx1creations25@gmail.com";
        
        throw new Error(errorMessage);
      }

      // Track successful form submission
      trackFormSubmission('contact_form');
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error: any) {
      console.error("Error sending message");
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again or contact us directly at dx1creations25@gmail.com",
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      <SEO
        title="Contact Studios by Dave - Get Your Free Quote Today"
        description="Contact Studios by Dave for professional web design, SEO, AI automations, and branding services. Free consultations available. Call (704) 473-8188 or email us today."
        keywords="contact studiosbydave, free web design quote, contractor web design consultation, SEO services quote, AI automation consultation, Shelby NC web design"
        structuredData={[breadcrumbs, contactSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24" role="banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 text-center">
            Let's Build Something{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              GREAT
            </span>{" "}
            Together
          </h1>
          <p className="text-xl text-white/90">
            Ready to take your business to the next level? Get in touch for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="get-in-touch" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help your business succeed online. Reach out through any of these channels:
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    description: "(704) 473-8188",
                    subtitle: "Mon-Fri 9AM-6PM EST"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    description: "dx1creations25@gmail.com",
                    subtitle: "We reply within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Service Area",
                    description: "Shelby, NC Surrounding Area",
                    subtitle: "Serving contractors nationwide"
                  },
                  {
                    icon: Clock,
                    title: "Response Time",
                    description: "Same Day Response",
                    subtitle: "Quick turnaround on all inquiries"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-card">
                    <div className="w-12 h-12 bg-gradient-primary-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{contact.title}</h3>
                      <p className="text-primary font-medium">{contact.description}</p>
                      <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Box */}
              <Card className="bg-gradient-primary text-white border-0">
                <CardHeader>
                  <CardTitle className="text-white">Ready to Start?</CardTitle>
                  <CardDescription className="text-white/80">
                    Schedule a free 30-minute consultation to discuss your project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="#contact-form">
                    <Button variant="hero" className="w-full">
                      Send Us a Message
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
      </section>

      {/* Contact Form Section with Background Image */}
      <section id="contact-form" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form - Left Side */}
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="business"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Landscaping, Roofing, HVAC" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Honeypot field - hidden from users */}
                  <FormField
                    control={form.control}
                    name="honeypot"
                    render={({ field }) => (
                      <FormItem className="hidden">
                        <FormControl>
                          <Input {...field} tabIndex={-1} autoComplete="off" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    {" "}and{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </p>
                </form>
              </Form>
            </div>

            {/* Background Image - Right Side */}
            <div className="relative h-full min-h-[600px] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/brick-building-backdrop.jpg"
                alt="Historic brick building in Shelby, NC"
                className="absolute inset-0 w-full h-full object-cover opacity-15"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
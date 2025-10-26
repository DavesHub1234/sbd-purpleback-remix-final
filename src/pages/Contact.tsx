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

      if (error) throw error;

      // Track successful form submission
      trackFormSubmission('contact_form');
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending message");
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly at dx1creations25@gmail.com",
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Studios by Dave - Get Your Free Quote Today"
        description="Contact Studios by Dave for professional web design, SEO, AI automations, and branding services. Free consultations available. Call (704) 473-8188 or email us today."
        keywords="contact studiosbydave, free web design quote, contractor web design consultation, SEO services quote, AI automation consultation, Shelby NC web design"
        structuredData={[breadcrumbs, contactSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
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

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">
                  Get Your Free Consultation
                </CardTitle>
                <CardDescription className="text-base">
                  Tell us about your project and we'll provide a custom solution for your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
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
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Smith" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
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
                          <FormLabel>Phone Number</FormLabel>
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
                            <Input placeholder="e.g., Roofing Contractor, Landscaping, Solar" {...field} />
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
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project, goals, and timeline..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
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
                  <Button variant="hero" className="w-full">
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
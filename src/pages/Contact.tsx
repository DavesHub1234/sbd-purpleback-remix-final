import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <Label htmlFor="business">Business Type</Label>
                  <Input id="business" placeholder="e.g., Roofing Contractor, Landscaping, Solar" />
                </div>
                
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
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
                    description: "hello@dx1solutions.com",
                    subtitle: "We reply within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Service Area",
                    description: "Shelby, NC 28152",
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
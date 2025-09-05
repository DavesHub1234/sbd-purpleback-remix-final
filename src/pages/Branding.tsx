import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Palette, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/data/structuredData";

const Branding = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://studiosbydave.com" },
    { name: "Logo Design & Branding", url: "https://studiosbydave.com/branding" }
  ]);

  const brandingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Logo Design and Branding Services",
    "description": "Professional logo design and complete branding packages for contractors and local businesses. Create memorable brands that build trust and credibility.",
    "provider": {
      "@type": "Organization", 
      "name": "StudiosbyDave"
    },
    "serviceType": "Logo Design and Brand Identity",
    "offers": {
      "@type": "Offer",
      "description": "Complete branding solutions including logo design, brand identity packages, business cards, and marketing materials."
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Professional Logo Design & Branding for Contractors - Brand Identity"
        description="Professional logo design and branding services for contractors and local businesses. Create memorable brand identity that builds trust with customers. Custom logos and complete branding packages."
        keywords="logo design contractors, branding for contractors, professional logo design, brand identity design, business logo design, contractor branding, marketing materials design"
        structuredData={[breadcrumbs, brandingSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Logo Design &{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Branding Solutions
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Professional branding that makes your business stand out. From logos to complete 
            brand identity packages, we create memorable brands for contractors and local businesses.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Start Your Brand Design
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Complete Branding Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: "Logo Design",
                description: "Custom logos that represent your business professionally"
              },
              {
                icon: Users,
                title: "Brand Identity",
                description: "Complete visual identity systems and brand guidelines"
              },
              {
                icon: Target,
                title: "Marketing Materials",
                description: "Business cards, brochures, and promotional materials"
              },
              {
                icon: Award,
                title: "Brand Strategy",
                description: "Strategic positioning to differentiate your business"
              }
            ].map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Showcase Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="relative">
            <div className="flex animate-scroll space-x-16 items-center">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-16 items-center">
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">BuildCorp</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">SolarMax</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">GreenScape</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">RoofPro</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">EliteWork</span>
                  </div>
                  <div className="flex-shrink-0 h-16 w-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">PowerGen</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Why Professional Branding Matters
              </h2>
              <div className="space-y-6">
                {[
                  "Builds trust and credibility with potential customers",
                  "Differentiates you from competitors in your market",
                  "Creates memorable first impressions",
                  "Increases perceived value of your services",
                  "Provides consistency across all marketing materials"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/1b899310-7b14-4da3-bf28-f2459baa928d.png" 
              alt="Successful contractor partnership celebration - team of professionals celebrating business growth and collaboration" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Branding;
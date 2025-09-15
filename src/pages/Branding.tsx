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
      "name": "Studios by Dave"
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

      {/* Services Overview Section */}
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
                description: "Custom logos crafted to capture your business essence and create lasting first impressions with professional, memorable designs."
              },
              {
                icon: Users,
                title: "Brand Identity",
                description: "Comprehensive visual identity systems including color palettes, typography, and brand guidelines for consistent messaging."
              },
              {
                icon: Target,
                title: "Marketing Materials",
                description: "Complete suite of print and digital materials from business cards to vehicle wraps that amplify your brand presence."
              },
              {
                icon: Award,
                title: "Brand Strategy",
                description: "Strategic positioning and messaging that differentiates your business and resonates with your target market."
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

      {/* Branding Packages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Choose Your Branding Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From essential brand basics to comprehensive marketing systems, we have the perfect package to establish and grow your business identity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Starter Brand Package</CardTitle>
                  <CardDescription className="text-lg mt-2 italic">Perfect for new businesses getting started</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Custom Logo Design (3 concepts)",
                    "Basic Brand Guidelines",
                    "Business Card Design",
                    "Letterhead Template",
                    "Email Signature Design",
                    "Social Media Profile Package",
                    "Basic Brand Color Palette"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="border-2 border-primary shadow-elegant relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                MOST POPULAR
              </div>
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Professional Brand Package</CardTitle>
                  <CardDescription className="text-lg mt-2 italic">Complete branding solution for established businesses</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Premium Logo Design (5 concepts + revisions)",
                    "Comprehensive Brand Guidelines",
                    "Business Cards & Stationery Suite",
                    "Brochure & Flyer Templates",
                    "Vehicle Decal/Wrap Design",
                    "Yard Sign & Banners",
                    "Website Header Graphics",
                    "Social Media Brand Kit",
                    "Invoice & Estimate Templates",
                    "Extended Brand Color System"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Enterprise Brand Package</CardTitle>
                  <CardDescription className="text-lg mt-2 italic">Complete marketing system for growing companies</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Premium Logo Suite (Multiple variations)",
                    "Complete Brand Manual & Guidelines",
                    "Full Stationery & Business Materials",
                    "Marketing Collateral Suite",
                    "Full Vehicle Wrap Design",
                    "Large Format Signage Package",
                    "Trade Show & Event Materials",
                    "Uniform & Apparel Designs",
                    "Complete Digital Brand Package",
                    "Brand Photography Guidelines",
                    "Ongoing Brand Consultation (3 months)",
                    "Brand Implementation Support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Started with Your Brand Package
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
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
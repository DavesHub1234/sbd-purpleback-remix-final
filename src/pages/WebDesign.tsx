import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InternalLinksFooter from "@/components/InternalLinks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/data/structuredData";

const WebDesign = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://studiosbydave.com" },
    { name: "Web Design", url: "https://studiosbydave.com/web-design" }
  ]);

  const webDesignSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Web Design for Contractors",
    "description": "Custom responsive websites designed specifically for roofing contractors, landscaping companies, and solar panel installers.",
    "provider": {
      "@type": "Organization", 
      "name": "Studios by Dave"
    },
    "areaServed": {
      "@type": "Country", 
      "name": "United States"
    },
    "serviceType": "Web Design and Development",
    "offers": {
      "@type": "Offer",
      "description": "Professional web design services including mobile-first design, SEO optimization, and lead generation systems."
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Professional Web Design for Contractors - Mobile-Responsive Websites"
        description="Custom web design for roofing contractors, landscaping companies, and solar installers. Mobile-first responsive websites that convert visitors into customers. Get your free quote today."
        keywords="contractor web design, roofing contractor websites, landscaping web design, solar installer websites, mobile responsive design, lead generation websites, professional web development"
        structuredData={[breadcrumbs, webDesignSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24" itemScope itemType="https://schema.org/WebPageElement">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" itemProp="headline">
            Professional Web Design{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              with You in Mind
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8" itemProp="description">
            Custom websites that turn visitors into paying customers—designed specifically 
            for local small businesses.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get Your Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section with Image */}
      <section className="py-24 bg-gradient-subtle" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16" itemProp="name">
            Everything Your Business Website Needs
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Smartphone,
                    title: "Mobile-First Design",
                    description: "Responsive designs that work perfectly on all devices"
                  },
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    description: "Optimized for speed to keep visitors engaged"
                  },
                  {
                    icon: Search,
                    title: "SEO Optimized",
                    description: "Built-in SEO to help you rank higher in search results"
                  },
                  {
                    icon: Globe,
                    title: "Lead Generation",
                    description: "Contact forms and CTAs designed to convert visitors"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="text-center border-0 shadow-card">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/cce00c4a-bc6a-4693-9858-9cc5970c8096-cropped.png" 
                alt="Mobile-first responsive web design mockup showcasing professional contractor websites optimized for desktop, tablet, and smartphone with SEO and lead generation" 
                className="w-full h-auto rounded-2xl shadow-elegant"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <InternalLinksFooter />
      <Footer />
    </div>
  );
};

export default WebDesign;
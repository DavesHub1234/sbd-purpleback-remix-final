import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Search } from "lucide-react";
import { Link } from "react-router-dom";

const WebDesign = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional Web Design for{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Contractors
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Custom websites that turn visitors into paying customers. Designed specifically 
            for roofing contractors, landscaping companies, and solar panel installers.
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
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
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
                alt="Responsive web design mockup showing professional websites on multiple devices" 
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

export default WebDesign;
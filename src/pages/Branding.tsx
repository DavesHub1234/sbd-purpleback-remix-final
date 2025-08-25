import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Palette, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Branding = () => {
  return (
    <div className="min-h-screen">
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
              alt="Celebrating contractors saying 'Yay Dx!' representing successful business partnerships" 
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
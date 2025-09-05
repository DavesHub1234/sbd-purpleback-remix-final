import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Search, MapPin, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/data/structuredData";

const GoogleOptimization = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://studiosbydave.com" },
    { name: "Google Optimization", url: "https://studiosbydave.com/google-optimization" }
  ]);

  const googleOptimizationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Optimization Services for Contractors",
    "description": "Complete Google ecosystem optimization including local SEO, Google My Business, review management, and Google Ads for contractor businesses.",
    "provider": {
      "@type": "Organization",
      "name": "StudiosbyDave"
    },
    "serviceType": "Google Optimization and Local SEO",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive Google optimization including local SEO, Google My Business optimization, review management, and Google Ads management."
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Google Optimization for Contractors - Local SEO & Google My Business"
        description="Dominate local search results with our Google optimization services. Local SEO, Google My Business optimization, review management, and Google Ads for contractors. Get more customers online."
        keywords="Google optimization contractors, local SEO contractors, Google My Business optimization, contractor SEO, Google Ads contractors, local search optimization, review management"
        structuredData={[breadcrumbs, googleOptimizationSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Google{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Optimization Services
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Dominate local search results and get more customers. Our Google optimization 
            services help contractors rank higher, get more reviews, and maximize their online visibility.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Boost Your Rankings
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Google Optimization Features with Visual */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/fcb1bb7e-61b9-4c5a-aea3-3eab98e83ebf.png" 
                alt="Futuristic Google search interface showing SEO optimization results" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Complete Google Optimization Suite
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: Search,
                    title: "SEO Optimization",
                    description: "Rank higher in Google search results for your target keywords"
                  },
                  {
                    icon: MapPin,
                    title: "Google My Business",
                    description: "Optimize your business profile for maximum local visibility"
                  },
                  {
                    icon: Star,
                    title: "Review Management",
                    description: "Get more 5-star reviews and manage your online reputation"
                  },
                  {
                    icon: TrendingUp,
                    title: "Local SEO",
                    description: "Dominate local search results in your service area"
                  }
                ].map((service, index) => (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="w-12 h-12 bg-gradient-primary-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Proven Google Optimization Results
              </h2>
              <div className="space-y-6">
                {[
                  "Average 300% increase in Google visibility within 90 days",
                  "75% more phone calls from local customers",
                  "Rank on page 1 for your most profitable keywords",
                  "Increase in qualified leads from Google searches",
                  "Higher conversion rates from optimized listings",
                  "Improved online reputation with more positive reviews"
                ].map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Dominate Google?</h3>
              <p className="text-white/90 mb-6">
                Start getting more customers from Google with our proven optimization strategies.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Get More Customers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-16">
            What's Included in Our Google Optimization
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Google My Business Setup",
                features: ["Profile optimization", "Photo management", "Post scheduling", "Review monitoring"]
              },
              {
                title: "SEO Optimization",
                features: ["Keyword research", "On-page optimization", "Content creation", "Technical SEO"]
              },
              {
                title: "Review Management",
                features: ["Review generation system", "Response management", "Reputation monitoring", "Review widgets"]
              }
            ].map((package_item, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{package_item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {package_item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleOptimization;
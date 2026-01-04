import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InternalLinksFooter from "@/components/InternalLinks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Search, FileText, Link2, BarChart3, MapPin, Image } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/data/structuredData";

const SEOPage = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://studiosbydave.com" },
    { name: "SEO Services", url: "https://studiosbydave.com/seo" }
  ]);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services for Contractors",
    "description": "Complete SEO services including on-page, off-page, local SEO, technical SEO, and image optimization for contractor businesses.",
    "provider": {
      "@type": "Organization",
      "name": "Studios by Dave"
    },
    "serviceType": "Search Engine Optimization",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive SEO services covering all aspects of search engine optimization including technical SEO, content optimization, and local search."
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="SEO Services for Contractors - Complete Search Engine Optimization"
        description="Professional SEO services for contractors including on-page SEO, local SEO, technical SEO, and content optimization. Rank higher in search results and get more customers online."
        keywords="SEO services contractors, contractor SEO, on-page SEO, local SEO, technical SEO, search engine optimization, image SEO, video SEO, off-page SEO"
        structuredData={[breadcrumbs, seoSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Complete{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              SEO Services
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive search engine optimization services that cover every aspect of SEO. 
            From technical optimization to content strategy, we help contractors dominate search results.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Start Ranking Higher
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* SEO Components with Visual */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Complete SEO Strategy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach covers all aspects of SEO to ensure maximum visibility and results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <img 
                src="/lovable-uploads/9df74cdb-0377-4984-bf94-7c061782a05a.png" 
                alt="SEO components diagram showing on-page SEO, local SEO, technical SEO, image SEO, video SEO, and off-page SEO interconnected" 
                className="w-full h-auto rounded-2xl shadow-elegant"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </div>
            
            <div className="grid gap-6">
              {[
                {
                  icon: FileText,
                  title: "On-Page SEO",
                  description: "Content optimization, keywords, meta data, internal linking, and URL structure"
                },
                {
                  icon: MapPin,
                  title: "Local SEO",
                  description: "Google My Business, local listings, reviews, and location-based optimization"
                },
                {
                  icon: Search,
                  title: "Technical SEO",
                  description: "Site speed, mobile optimization, indexation, accessibility, and schema markup"
                },
                {
                  icon: Image,
                  title: "Image & Video SEO",
                  description: "Image optimization, alt tags, video SEO, and multimedia content strategy"
                },
                {
                  icon: Link2,
                  title: "Off-Page SEO",
                  description: "Link building, guest posting, social signals, and domain authority building"
                },
                {
                  icon: BarChart3,
                  title: "SEO Analytics",
                  description: "Performance tracking, keyword monitoring, and detailed SEO reporting"
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
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                SEO Results That Drive Business Growth
              </h2>
              <div className="space-y-6">
                {[
                  "Average 400% increase in organic search traffic within 6 months",
                  "Rank on page 1 for high-converting contractor keywords",
                  "Improved local search visibility and Google My Business performance",
                  "Higher quality leads from targeted SEO strategies",
                  "Measurable ROI with detailed analytics and reporting",
                  "Long-term sustainable growth in search rankings"
                ].map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Dominate Search Results?</h3>
              <p className="text-white/90 mb-6">
                Let our SEO experts help you rank higher and get more customers from search engines.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Get SEO Analysis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Packages Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-16">
            Comprehensive SEO Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical SEO Foundation",
                features: ["Site speed optimization", "Mobile optimization", "Schema markup", "Crawl error fixes"]
              },
              {
                title: "Content & On-Page SEO",
                features: ["Keyword research & strategy", "Content optimization", "Meta tag optimization", "Internal linking"]
              },
              {
                title: "Local & Off-Page SEO",
                features: ["Local business optimization", "Link building campaigns", "Citation building", "Review management"]
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

      <InternalLinksFooter />
      <Footer />
    </div>
  );
};

export default SEOPage;
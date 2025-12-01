import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Search, Bot, TrendingUp, Globe } from "lucide-react";
import constructionWorker from "@/assets/construction-worker.jpg";
const StudiosWeb = () => {
  const services = [{
    title: "Web Design & Development",
    description: "Professional, responsive websites that convert visitors into customers",
    icon: Globe,
    path: "/studiosweb/web-design",
    features: ["Custom Design", "Mobile Responsive", "Fast Loading", "User-Friendly"]
  }, {
    title: "Logo Design & Branding",
    description: "Create a memorable brand identity that stands out from the competition",
    icon: Palette,
    path: "/studiosweb/branding",
    features: ["Logo Design", "Brand Guidelines", "Business Cards", "Marketing Materials"]
  }, {
    title: "SEO Services",
    description: "Get found by your ideal customers with proven SEO strategies",
    icon: Search,
    path: "/studiosweb/seo",
    features: ["Keyword Research", "On-Page SEO", "Local SEO", "Content Strategy"]
  }, {
    title: "Google Optimization",
    description: "Dominate local search results and attract more qualified leads",
    icon: TrendingUp,
    path: "/studiosweb/google-optimization",
    features: ["Google My Business", "Local Rankings", "Review Management", "Maps Optimization"]
  }, {
    title: "AI Automations",
    description: "Streamline your business processes with intelligent automation solutions",
    icon: Bot,
    path: "/studiosweb/ai-automations",
    features: ["Lead Generation", "Customer Support", "Workflow Automation", "Data Analysis"]
  }];
  return <div className="min-h-screen">
      <SEO title="StudiosWeb - Complete Digital Solutions for Your Business" description="Comprehensive web design, SEO, branding, and automation services for roofing contractors, landscaping companies, and solar panel installers. Transform your digital presence." keywords="web design services, SEO optimization, business branding, AI automation, digital marketing, contractor websites" />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Studios </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Web</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Complete digital solutions to grow your business. From stunning websites to powerful automation, 
              we provide everything you need to succeed online.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Project Today
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Digital Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions designed to elevate your business and drive results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
              const Icon = service.icon;
              return <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 mr-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>)}
                      </ul>
                      <Link to={service.path}>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
          
          {/* Construction Worker Image */}
          <div className="absolute bottom-0 right-0 hidden lg:block pointer-events-none">
            <div className="relative">
              <img src={constructionWorker} alt="Professional construction worker" className="w-64 h-auto animate-fade-in" style={{
              maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, transparent 100%), linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, transparent 100%), linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Get Your Free Quote
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default StudiosWeb;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Award, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Dx1 Solutions
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We don't just build websites. We build opportunity. We build something GREAT together!
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Start Building Together
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At Dx1 Solutions, we specialize in empowering local businesses with cutting-edge digital solutions. 
              We focus on roofing contractors, landscaping companies, and solar panel installers, helping them 
              reach their full potential through professional web design, powerful SEO, memorable branding, 
              and innovative AI automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Local Focus",
                description: "We understand local businesses and their unique challenges"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Track record of helping businesses grow their online presence"
              },
              {
                icon: Target,
                title: "Targeted Solutions",
                description: "Customized strategies for contractors and service businesses"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Cutting-edge AI and technology to give you the competitive edge"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                What We Do
              </h2>
              <div className="space-y-6">
                {[
                  "Professional web design that converts visitors into customers",
                  "Search engine optimization to dominate local search results",
                  "Logo design and complete branding packages",
                  "Google My Business and review optimization",
                  "Cutting-edge AI automations to streamline your business",
                  "Custom solutions tailored to contractor businesses"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{service}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something GREAT?</h3>
              <p className="text-white/90 mb-6">
                Let's work together to unlock your business's full potential and create something amazing.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Let's Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-16">
            Why Choose Dx1 Solutions?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "We specialize in contractors and understand your business inside and out. From roofing to landscaping to solar, we know what works.",
                features: ["Contractor-focused design", "Industry best practices", "Proven conversion strategies"]
              },
              {
                title: "Complete Solutions",
                description: "Everything you need under one roof. No need to work with multiple agencies - we handle it all from web design to AI automation.",
                features: ["Web design & development", "SEO & Google optimization", "Branding & AI solutions"]
              },
              {
                title: "Results-Driven",
                description: "We're not just building websites - we're building your business. Every solution is designed to generate leads and increase revenue.",
                features: ["Lead generation focus", "ROI-driven strategies", "Measurable results"]
              }
            ].map((reason, index) => (
              <Card key={index} className="border-0 shadow-card text-left">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{reason.title}</CardTitle>
                  <CardDescription className="text-base">{reason.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {reason.features.map((feature, featureIndex) => (
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

export default About;
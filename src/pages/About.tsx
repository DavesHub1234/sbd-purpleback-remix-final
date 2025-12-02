import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, Award, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { breadcrumbSchema, faqSchema } from "@/data/structuredData";
import webDesignBackdrop from "@/assets/web-design-backdrop.png";
import brandingBackdrop from "@/assets/branding-backdrop.jpeg";
import aiBackdrop from "@/assets/ai-backdrop.jpeg";
import googleBackdrop from "@/assets/google-backdrop.jpeg";

const About = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://studiosbydave.com" },
    { name: "About Us", url: "https://studiosbydave.com/about" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO
        title="About Studios by Dave - Web Design & Digital Marketing Experts"
        description="Learn about Studios by Dave, your trusted partner for web design, SEO, AI automations, and branding. Specialized in helping roofing contractors, landscaping companies, and solar installers grow their business online."
        keywords="about studiosbydave, web design company, digital marketing experts, contractor specialists, north carolina web design, local business marketing"
        structuredData={[breadcrumbs, faqSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            {/* Pixie Dust Effect */}
            <div className="absolute -top-8 -left-4 w-40 h-40 pointer-events-none">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full animate-dust-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: i % 4 === 0 
                      ? 'hsl(var(--trophy-gold))' 
                      : i % 4 === 1 
                      ? 'hsl(var(--accent) / 0.6)'
                      : 'hsl(0, 0%, 30%)',
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    filter: 'blur(0.5px)',
                    boxShadow: i % 4 === 0 ? '0 0 5px hsl(var(--trophy-gold))' : 'none'
                  }}
                />
              ))}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Studios by Dave
              </span>
            </h1>
          </div>
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
              At Studios by Dave, we specialize in empowering local businesses with cutting-edge digital solutions.
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

      {/* Meet Dave Section */}
      <section className="py-24 relative bg-white">
        {/* Layered Embossed Backgrounds */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${webDesignBackdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${brandingBackdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${aiBackdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${googleBackdrop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(85%) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-12">Meet Dave</h2>
            <div className="max-w-md mx-auto">
              <img 
                src="/lovable-uploads/d08deff8-3748-4ab1-be7c-1f0aa5062b8b.png" 
                alt="David Richardson - Founder and Lead Developer at Studios by Dave, web design expert and digital marketing specialist for contractors"
                className="w-64 h-auto mx-auto mb-4 shadow-lg rounded-lg"
                loading="lazy"
                decoding="async"
                width="256"
                height="auto"
              />
              <p className="text-2xl font-semibold text-foreground mb-6">"Dave" David Richardson</p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                "Dave" David Richardson is a seasoned-long veteran in the various fields of Technology. He attended The University of North Carolina at Charlotte in 1997 and transferred to ECPI College of Technology in 2001 where he earned President of the National Vocational Technical Honor Society along with his College Degree. He then ventured into various service positions, one being Broadband Specialist/Installer with Shelby's own Computer Connections Inc. "Hey Eddie! Hi Lynne!" 😄 And then eventually proceeded to become Network Engineer at several private IT Firms. Local firms all the way to the deserts of Las Vegas, NV. David is also a life long musician that started playing music at the age of 8. He took to the love of recording music starting back at the turn of 1999-2000 and continued this craft on the side of work for nearly over 3 decades. Eventually coined his own status of Audio Mastering Engineer. "Dave" has always had a love for building websites and learning code and has taken this road full on as a Web Designer/Developer. Here at Studios by Dave we wanna see you succeed. Because when our clients are happy, Everybody is Happy! 😁
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/3c4b682e-a53b-465e-811c-b2b12172b4fc.png" 
                alt="Studios by Dave philosophy - focused on maximizing client revenue through strategic web design and digital marketing solutions"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Our Philosophy
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Every day, we wake up asking ourselves one simple question: "How can we make our clients more money today?"
              </p>
              <p className="text-lg text-muted-foreground">
                This isn't just a catchy phrase - Your success is our success, 
                and we're committed to delivering results that directly impact your bottom line.
              </p>
            </div>
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
              <div className="mt-8">
                <img 
                  src="/lovable-uploads/dave-landscaping.jpg"
                  alt="Dave Richardson planting a tree, showcasing his passion for landscaping"
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-center text-sm text-muted-foreground mt-3 italic">
                  Dave has taken an actual love for landscaping itself!
                </p>
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

      {/* Our Core Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Studios by Dave.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Value",
                description: "We deliver exceptional results that exceed your investment, ensuring every dollar spent generates meaningful returns for your business."
              },
              {
                title: "Integrity",
                description: "We operate with complete honesty and transparency, building trust through consistent actions and reliable communication."
              },
              {
                title: "Trust",
                description: "We earn your confidence through proven expertise, dependable service, and a commitment to your long-term success."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-trophy-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-16">
            Why Choose Studios by Dave?
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
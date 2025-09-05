import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Bot, MessageSquare, Calendar, Phone, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/data/structuredData";

const AIAutomations = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://studiosbydave.com" },
    { name: "AI Automations", url: "https://studiosbydave.com/ai-automations" }
  ]);

  const aiAutomationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation Services for Contractors",
    "description": "Cutting-edge AI solutions including chatbots, automated scheduling, lead qualification, and process automation for contractor businesses.",
    "provider": {
      "@type": "Organization",
      "name": "StudiosbyDave"
    },
    "serviceType": "AI Automation and Business Intelligence",
    "offers": {
      "@type": "Offer",
      "description": "AI-powered business automation including chatbots, smart scheduling, lead qualification, and process automation."
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="AI Automations for Contractors - Chatbots & Business Automation"
        description="Transform your contractor business with AI automations. 24/7 chatbots, automated scheduling, lead qualification, and process automation. Save 20+ hours per week with intelligent business solutions."
        keywords="AI automation contractors, chatbots for contractors, automated scheduling, lead qualification AI, business process automation, contractor chatbots, AI solutions business"
        structuredData={[breadcrumbs, aiAutomationSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Cutting-Edge{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              AI Automations
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Transform your business with intelligent automation. From AI chatbots to automated 
            scheduling systems, we help contractors leverage technology to increase efficiency and profits.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Automate Your Business
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* AI Solutions with Visual */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                AI-Powered Business Solutions
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: Bot,
                    title: "AI Chatbots",
                    description: "24/7 customer support and lead qualification through intelligent chatbots"
                  },
                  {
                    icon: Calendar,
                    title: "Smart Scheduling",
                    description: "Automated appointment booking and calendar management"
                  },
                  {
                    icon: Target,
                    title: "Lead Qualification",
                    description: "AI-powered lead scoring and qualification to focus on your best prospects"
                  },
                  {
                    icon: Zap,
                    title: "Process Automation",
                    description: "Streamline repetitive tasks and workflows for maximum efficiency"
                  }
                ].map((solution, index) => (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="w-12 h-12 bg-gradient-primary-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <solution.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/c29af7c3-5a1b-4163-ace4-9e4709c6453b.png" 
                alt="AI automation workflow diagram - intelligent systems for phone calls, email automation, and chatbot customer service integration" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center order-2 lg:order-1">
            <img 
              src="/lovable-uploads/994de390-9bc5-4484-b50b-23d538286dc8.png" 
              alt="Brain lightbulb representing innovative AI solutions" 
              className="w-32 h-32 mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate?</h3>
            <p className="text-white/90 mb-6">
              Discover how AI can transform your business operations and boost your bottom line.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get AI Solutions
              </Button>
            </Link>
          </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Why Choose AI Automation?
              </h2>
              <div className="space-y-6">
                {[
                  "Save 20+ hours per week on routine tasks",
                  "Never miss a lead with 24/7 automated responses",
                  "Reduce human error in scheduling and follow-ups",
                  "Scale your business without hiring more staff",
                  "Provide instant customer service around the clock",
                  "Increase conversion rates with smart lead nurturing"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomations;
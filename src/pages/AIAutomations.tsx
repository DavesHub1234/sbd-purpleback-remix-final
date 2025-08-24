import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Bot, MessageSquare, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const AIAutomations = () => {
  return (
    <div className="min-h-screen">
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

      {/* AI Solutions Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            AI-Powered Business Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "AI Chatbots",
                description: "24/7 customer support that captures leads and answers questions"
              },
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "Automated appointment booking and calendar management"
              },
              {
                icon: Phone,
                title: "Lead Qualification",
                description: "AI-powered lead scoring and automatic follow-up systems"
              },
              {
                icon: Bot,
                title: "Process Automation",
                description: "Streamline workflows and eliminate repetitive tasks"
              }
            ].map((solution, index) => (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-primary rounded-2xl p-8 text-center order-2 lg:order-1">
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
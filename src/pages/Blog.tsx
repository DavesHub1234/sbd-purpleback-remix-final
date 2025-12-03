import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Bell, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog | Studios by Dave"
        description="Coming soon! Stay tuned for expert insights, tips, and industry news from Studios by Dave. Web design, branding, SEO, and digital marketing content for contractors."
        keywords="contractor blog, web design tips, SEO insights, digital marketing news, branding advice"
        canonical="https://studiosbydave.com/blog"
      />
      <Navigation />
      
      <main className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
            <BookOpen className="w-12 h-12 text-primary" />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Studios </span>
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Blog
            </span>
          </h1>
          
          {/* Coming Soon badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-primary font-semibold">Coming Soon</span>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We're crafting something special. Expert insights, industry tips, and valuable content for contractors — launching soon.
          </p>
          
          {/* Features preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['Web Design Tips', 'SEO Strategies', 'Branding Insights', 'Marketing News'].map((topic, index) => (
              <span 
                key={topic}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {topic}
              </span>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="group">
                <Bell className="w-5 h-5 mr-2" />
                Get Notified
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

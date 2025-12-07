import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import robotBg from "@/assets/robot-construction-bg.jpg";
import mascotHero from "@/assets/mascot-hero.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Embossed Robot Background */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{
      backgroundImage: `url(${robotBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'grayscale(100%) contrast(1.2)'
    }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-50" />
      
      {/* Phone Number Display */}
      <div className="absolute top-8 right-8 z-30">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 px-6 py-4 shadow-glow relative">
          {/* Pixie Dust Effect */}
          <div className="absolute -top-6 -right-6 w-28 h-28 pointer-events-none">
            {[...Array(10)].map((_, i) => <div key={i} className="absolute w-1 h-1 rounded-full animate-dust-float-right" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 4 === 0 ? 'hsl(var(--trophy-gold))' : i % 4 === 1 ? 'hsl(var(--accent) / 0.6)' : 'hsl(0, 0%, 30%)',
            animationDelay: `${i * 0.25}s`,
            animationDuration: `${2.5 + Math.random() * 1.5}s`,
            filter: 'blur(0.5px)',
            boxShadow: i % 4 === 0 ? '0 0 4px hsl(var(--trophy-gold))' : 'none'
          }} />)}
          </div>
          <div className="text-center">
            <p className="text-white/80 text-sm font-medium mb-1">                                    Call Us    --    TEXT US!          </p>
            <a href="tel:+17044738188" className="text-2xl font-bold transition-colors duration-300 text-yellow-300">
              (704) 473-8188
            </a>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-white/90">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-accent text-accent" />)}
              </div>
              <span className="text-sm font-medium">Trusted by 100+ Local Businesses</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <div className="relative">
                {/* Pixie Dust Effect */}
                <div className="absolute -top-8 -left-4 w-40 h-40 pointer-events-none">
                  {[...Array(18)].map((_, i) => <div key={i} className="absolute w-1.5 h-1.5 rounded-full animate-dust-float" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 4 === 0 ? 'hsl(var(--trophy-gold))' : i % 4 === 1 ? 'hsl(var(--accent) / 0.6)' : 'hsl(0, 0%, 30%)',
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  filter: 'blur(0.5px)',
                  boxShadow: i % 4 === 0 ? '0 0 5px hsl(var(--trophy-gold))' : 'none'
                }} />)}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  We Don't Just Build You a Website.{" "}
                  We Build Something <span className="text-trophy-gold font-bold">GREAT</span> Together!
                </h1>
              </div>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                <span className="font-bold text-white block mb-2">We build opportunity!</span>
                Specialized web development and digital marketing for YOUR local business. At Studios by Dave we want to see YOU succeed!
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              {["Custom websites that convert visitors into customers", "SEO optimization to dominate local search results", "AI automations that streamline your business operations"].map((benefit, index) => <div key={index} className="flex items-center space-x-3 text-white/90">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact#get-in-touch">
                <Button variant="hero" size="lg" className="group">
                  ​Get Started Today    
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary-outline" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm mb-4">Trusted by industry leaders:</p>
              <div className="flex items-center flex-wrap gap-x-8 gap-y-2 text-white/60">
                <span className="font-semibold">Local Roofing Co.</span>
                <span className="font-semibold">Green Landscapes LLC</span>
                <span className="font-semibold">Solar Solutions Pro</span>
                <span className="font-semibold">Elite Tree Services</span>
                <span className="font-semibold">​  </span>
              </div>
            </div>
          </div>

          {/* Right Column - Mascot Hero Image */}
          <div className="relative lg:pl-8 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Mascot Hero Image with fading edges */}
              <div className="relative">
                <img 
                  src={mascotHero} 
                  alt="Studios by Dave mascot - AI-powered lightbulb character launching into space representing innovative web solutions" 
                  className="w-full h-auto object-contain opacity-70"
                  style={{
                    maskImage: 'radial-gradient(ellipse 80% 80% at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                  }}
                  fetchPriority="high" 
                  decoding="sync" 
                  loading="eager" 
                />
              </div>

              {/* Subtle glow effects */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-trophy-gold/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
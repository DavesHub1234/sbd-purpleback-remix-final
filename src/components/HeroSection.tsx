import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import robotBg from "@/assets/robot-construction-bg.jpg";
import mascotPointing from "@/assets/mascot-pointing.png";
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
            <a href="tel:+17044738188" className="text-2xl font-bold transition-colors duration-300 text-amber-200">
              (704) 473-8188
            </a>
          </div>
        </div>
        {/* Mascot pointing to phone number */}
        <img src={mascotPointing} alt="Studios by Dave mascot pointing to phone number" loading="lazy" decoding="async" className="absolute -bottom-20 -left-16 w-24 h-24 drop-shadow-lg opacity-75 object-fill" />
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
                <h1 className="text-4xl font-bold text-white leading-tight lg:text-5xl">
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

          {/* Right Column - Hero Image */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Hero Image */}
              <div className="aspect-[4/3] sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3] xl:aspect-square rounded-2xl overflow-hidden shadow-glow border border-white/20 relative w-full max-w-full">
              <img src="/lovable-uploads/88912462-92f4-48cf-8aaf-c9507974f8ea-optimized.jpg" alt="Professional contractor website design showcase featuring responsive mobile-first websites for roofing, landscaping, and solar panel businesses with lead generation systems" className="w-full h-full object-cover object-center animate-gentle-sway" fetchPriority="high" decoding="sync" loading="eager" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10" />
                
                {/* Company Mascot in corner */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 animate-bounce z-20">
                  <img src="/lovable-uploads/8f46217d-91db-4458-96ee-0d61e8302830-optimized.jpg" alt="Studios by Dave AI-powered mascot delivering innovative web design, SEO, and digital marketing solutions for contractors" className="w-full h-full object-contain drop-shadow-lg" loading="lazy" decoding="async" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
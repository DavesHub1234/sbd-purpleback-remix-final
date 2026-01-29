import { Link } from "react-router-dom";
import { Rocket, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Pixie Dust Effect Component
const PixieDust = ({ count = 12 }: { count?: number }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full animate-dust-float"
        style={{
          left: `${10 + Math.random() * 80}%`,
          top: `${Math.random() * 100}%`,
          background: i % 3 === 0 
            ? 'hsl(var(--trophy-gold))' 
            : 'rgba(255, 255, 255, 0.6)',
          animationDelay: `${i * 0.2}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
          boxShadow: i % 3 === 0 ? '0 0 4px hsl(var(--trophy-gold))' : '0 0 3px rgba(255,255,255,0.5)'
        }}
      />
    ))}
  </div>
);

// Shimmer Effect Component
const ShimmerOverlay = ({ delay = "0s" }: { delay?: string }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div 
      className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" 
      style={{ animationDelay: delay }}
    />
  </div>
);

// Section 1: $199 to Start Your Project
export const StartProjectSection = () => {
  return (
    <section 
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(218 49% 18%) 0%, hsl(218 55% 22%) 25%, hsl(220 50% 25%) 50%, hsl(218 45% 20%) 75%, hsl(218 49% 15%) 100%)'
      }}
    >
      <ShimmerOverlay />
      <PixieDust count={16} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Rocket className="h-4 w-4" />
            Low Barrier to Entry
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Your Web or Custom App Project Today{" "}
            <span className="block mt-2">
              for as Low as{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, hsl(45 100% 75%) 0%, hsl(38 100% 65%) 25%, hsl(45 100% 85%) 50%, hsl(35 100% 55%) 75%, hsl(45 100% 70%) 100%)',
                  WebkitBackgroundClip: 'text',
                  textShadow: '0 0 30px hsl(45 100% 70% / 0.5)'
                }}
              >
                $199
              </span>
            </span>
          </h2>
          
          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Don't let budget hold you back. Get your professional website or custom application started immediately with our flexible down payment option.
          </p>
          
          {/* CTA Button */}
          <Link to="/contact#get-in-touch">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          {/* Fine Print */}
          <div className="mt-10 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 max-w-2xl mx-auto">
            <p className="text-xs text-white/70 leading-relaxed">
              <strong className="text-white/90">Down Payment Terms:</strong> The $199 is a down payment applied toward your total project cost, not a separate fee. 
              For example, if your project total is $998, the $199 down payment gets your project started immediately with the remaining balance due according to your project agreement terms. 
              Final pricing varies based on project scope and requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 2: $200 First Referral + $100 Unlimited
export const ReferralBonusSection = () => {
  return (
    <section 
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(218 55% 22%) 0%, hsl(220 50% 28%) 30%, hsl(218 45% 24%) 60%, hsl(218 49% 18%) 100%)'
      }}
    >
      <ShimmerOverlay delay="1.5s" />
      <PixieDust count={16} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Users className="h-4 w-4" />
            Upgraded Referral Program
          </div>
          
          {/* Two-Tier Bonus Display */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
            {/* First Referral */}
            <div className="text-center">
              <span 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, hsl(45 100% 75%) 0%, hsl(38 100% 65%) 25%, hsl(45 100% 85%) 50%, hsl(35 100% 55%) 75%, hsl(45 100% 70%) 100%)',
                  WebkitBackgroundClip: 'text',
                  textShadow: '0 0 40px hsl(45 100% 70% / 0.6)'
                }}
              >
                $200
              </span>
              <p className="text-white font-semibold text-lg mt-1">First Referral Bonus</p>
            </div>
            
            {/* Plus Sign */}
            <span className="text-4xl md:text-5xl text-white/60 font-light">+</span>
            
            {/* Unlimited Referrals */}
            <div className="text-center">
              <span 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, hsl(45 100% 75%) 0%, hsl(38 100% 65%) 25%, hsl(45 100% 85%) 50%, hsl(35 100% 55%) 75%, hsl(45 100% 70%) 100%)',
                  WebkitBackgroundClip: 'text',
                  textShadow: '0 0 40px hsl(45 100% 70% / 0.6)'
                }}
              >
                $100
              </span>
              <p className="text-white font-semibold text-lg mt-1">Unlimited After That</p>
            </div>
          </div>
          
          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Earn <strong>double the bonus</strong> on your first referral! After that, keep earning $100 for every successful referral—with absolutely no limits.
          </p>
          
          {/* CTA Button */}
          <Link to="/studiosweb/promos">
            <Button 
              size="lg" 
              className="bg-white text-accent hover:bg-white/90 font-semibold text-lg px-8 py-6 h-auto group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Referrals
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          {/* Fine Print */}
          <div className="mt-10 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 max-w-2xl mx-auto">
            <p className="text-xs text-white/70 leading-relaxed">
              <strong className="text-white/90">Referral Program Terms:</strong> Receive $200 for your first qualifying referral and $100 for each subsequent referral. 
              A qualifying referral is a new client who completes a purchase of any qualifying service. 
              Referral bonuses are typically paid within 1-14 business days of purchase confirmation. 
              See full terms on our Promos page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Combined Export
const PromotionalSections = () => {
  return (
    <>
      <StartProjectSection />
      <ReferralBonusSection />
    </>
  );
};

export default PromotionalSections;

import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import leadFerretImage from "@/assets/portfolio/lead-ferret.png";

const LeadFerretBanner = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-4xl mx-auto">
        <div 
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(145, 50%, 12%) 0%, hsl(160, 45%, 8%) 50%, hsl(145, 50%, 10%) 100%)',
            border: '1px solid hsl(145, 50%, 20%)',
          }}
        >
          {/* Gradient bottom border */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background: 'linear-gradient(90deg, hsl(145, 70%, 45%) 0%, hsl(170, 60%, 40%) 50%, hsl(145, 70%, 45%) 100%)',
            }}
          />
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8">
            {/* Mascot Image */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 bg-white">
                <img 
                  src={leadFerretImage} 
                  alt="Lead-Ferret mascot" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              {/* NOW LIVE Badge */}
              <div className="flex justify-center sm:justify-start mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Sparkles size={12} className="fill-current" />
                  NOW LIVE
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Introducing <span className="text-emerald-400">Lead-Ferret</span>
              </h3>
              
              {/* Subtitle */}
              <p className="text-white/70 text-sm sm:text-base mb-4">
                B2B Lead Generation with Built-in Warm Lead CRM
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-emerald-400" />
                  Verified Leads
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1.5">
                  <Zap size={14} className="text-emerald-400" />
                  AI Outreach
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.39 11.61c-0.1-0.2-0.3-0.3-0.5-0.3h-4.7l3.5-6c0.1-0.2 0.1-0.5 0-0.7s-0.4-0.4-0.6-0.4h-9c-0.3 0-0.6 0.2-0.7 0.5l-2.5 8.5c0 0.2 0 0.4 0.2 0.6 0.1 0.2 0.3 0.3 0.5 0.3h5.1l-3.7 8.3c-0.1 0.3 0 0.6 0.2 0.8 0.1 0.1 0.3 0.2 0.5 0.2 0.1 0 0.3 0 0.4-0.1l11-6.5c0.2-0.1 0.4-0.4 0.3-0.7l-0.1-0.1 0.1 0.1c0-0.1 0.1-0.2 0.1-0.3v-0.1c0-0.1 0-0.2 0-0.2l-0.1-0.2z"/>
                  </svg>
                  HubSpot Integration
                </span>
              </div>
              
              {/* CTA Button */}
              <a 
                href="https://lead-ferret.lovable.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition-all group"
                >
                  Start Finding Leads
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFerretBanner;

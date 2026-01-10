import { ExternalLink, Sparkles } from "lucide-react";
import hubspotIcon from "@/assets/hubspot-icon.png";
import leadFerretMascot from "@/assets/lead-ferret-mascot.jpeg";

const LeadFerretBanner = () => {
  return (
    <section className="relative py-4 bg-gradient-to-r from-primary via-primary/90 to-accent/80 overflow-hidden border-b border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--trophy-gold)) 0%, transparent 50%)'
        }} />
      </div>
      
      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-trophy-gold animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {/* Lead-Ferret Mascot */}
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-trophy-gold/60 shadow-lg">
            <img 
              src={leadFerretMascot} 
              alt="Lead-Ferret mascot" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width="56"
              height="56"
            />
          </div>

          {/* Banner Content */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-trophy-gold animate-pulse" />
              <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wide">
                New App Announcement!
              </span>
            </div>
            
            <span className="text-white/90 text-sm sm:text-base">
              <span className="font-semibold text-trophy-gold">Lead-Ferret</span> now integrates with
            </span>
            
            {/* HubSpot Icon */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
              <img 
                src={hubspotIcon} 
                alt="HubSpot integration" 
                className="w-6 h-6 rounded"
                loading="lazy"
                decoding="async"
                width="24"
                height="24"
              />
              <span className="text-white font-semibold text-sm">HubSpot</span>
            </div>
          </div>

          {/* CTA Link */}
          <a 
            href="https://www.lead-ferret.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-trophy-gold hover:bg-trophy-gold/90 text-primary font-bold text-sm px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg group"
          >
            Check It Out
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadFerretBanner;

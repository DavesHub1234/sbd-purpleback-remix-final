import rimberioLogo from "@/assets/client-logos/rimberio-logo.jpg";
import oneDesignLogo from "@/assets/client-logos/one-design-logo.png";
import borcelleLogo from "@/assets/client-logos/borcelle-creative-logo.png";
import padgsteenLogo from "@/assets/client-logos/padgsteen-guitars-logo.png";
import studiosByDaveLogo from "@/assets/client-logos/studios-by-dave-logo.jpg";
import pkLogo from "@/assets/client-logos/pk-logo.png";

const clientLogos = [
  { src: rimberioLogo, alt: "Rimberio y Asociados Logo" },
  { src: oneDesignLogo, alt: "One Design Logo" },
  { src: borcelleLogo, alt: "Borcelle Creative Logo" },
  { src: padgsteenLogo, alt: "Padgsteen Guitars Logo" },
  { src: studiosByDaveLogo, alt: "Studios by Dave Logo" },
  { src: pkLogo, alt: "PK Logo" },
];

const LogoMarquee = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-muted/30 via-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-2xl font-bold text-center text-foreground">
          Our Logo Portfolio
        </h3>
      </div>
      
      <div className="relative">
        <div className="flex animate-[logo-scroll_25s_linear_infinite]">
          {/* First set */}
          <div className="flex items-center gap-16 px-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={`set1-${index}`} 
                className="flex-shrink-0 h-24 w-32 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-24 max-w-32 w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex items-center gap-16 px-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={`set2-${index}`} 
                className="flex-shrink-0 h-24 w-32 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-24 max-w-32 w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Third set for extra coverage */}
          <div className="flex items-center gap-16 px-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={`set3-${index}`} 
                className="flex-shrink-0 h-24 w-32 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-24 max-w-32 w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;

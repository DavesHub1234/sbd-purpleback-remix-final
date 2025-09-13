import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import NonExclusiveSection from "@/components/NonExclusiveSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { organizationSchema, servicesSchema, localBusinessSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = [organizationSchema, servicesSchema, localBusinessSchema];
  
  return (
    <div className="min-h-screen">
      <SEO
        title="StudiosbyDave - Web Development & Digital Marketing for Local Businesses"
        description="Professional web design, SEO optimization, AI automations, and branding for roofing contractors, landscaping companies, and solar panel installers. We don't just build websites. We build opportunity."
        keywords="web design contractors, roofing contractor websites, landscaping web design, solar panel installer marketing, SEO for contractors, AI automation business, North Carolina web design"
        structuredData={structuredData}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <NonExclusiveSection />
      </main>
      <Footer />
      
      {/* Fixed YouTube Music Player */}
      <div className="fixed bottom-4 left-4 z-50 w-48 h-28 rounded-lg overflow-hidden shadow-xl border border-white/20 bg-black/20 backdrop-blur-sm">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/0ipv_l7KoSI?autoplay=1&loop=1&playlist=0ipv_l7KoSI&controls=1&rel=0&modestbranding=1"
          title="StudiosbyDave Background Music"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Index;

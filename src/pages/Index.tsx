import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { organizationSchema, servicesSchema, localBusinessSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = [organizationSchema, servicesSchema, localBusinessSchema];
  
  return (
    <div className="min-h-screen">
      <SEO
        title="Dx1 Solutions - Web Development & Digital Marketing for Local Businesses"
        description="Professional web design, SEO optimization, AI automations, and branding for roofing contractors, landscaping companies, and solar panel installers. We don't just build websites. We build opportunity."
        keywords="web design contractors, roofing contractor websites, landscaping web design, solar panel installer marketing, SEO for contractors, AI automation business, North Carolina web design"
        structuredData={structuredData}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InternalLinksFooter from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Portfolio screenshots
import studiosbydaveImg from "@/assets/portfolio/studiosbydave.png";
import padgsteenguitarsImg from "@/assets/portfolio/padgsteenguitars.png";
import shadesColorCraftImg from "@/assets/portfolio/shades-color-craft.png";
import leeBuildsShelbyImg from "@/assets/portfolio/lee-builds-shelby.png";
import odysseyHomeVisionsImg from "@/assets/portfolio/odyssey-home-visions.png";
import moleDetectiveImg from "@/assets/portfolio/mole-detective.png";
import melodyLockImg from "@/assets/portfolio/melody-lock.png";
import rifeWaveImg from "@/assets/portfolio/rife-wave.png";
import waveSpyImg from "@/assets/portfolio/wave-spy.png";

interface PortfolioProject {
  title: string;
  description: string;
  image: string;
  url: string;
  category: "website" | "webapp";
}

const webProjects: PortfolioProject[] = [
  {
    title: "Studios by Dave",
    description: "Our flagship website showcasing professional web development and digital marketing services for local businesses.",
    image: studiosbydaveImg,
    url: "https://www.studiosbydave.com",
    category: "website",
  },
  {
    title: "Padgsteen Guitars",
    description: "Handcrafted guitars & soulful Southern music from the heart of Appalachia. A beautiful showcase for a master luthier and musician.",
    image: padgsteenguitarsImg,
    url: "https://www.padgsteenguitars.com",
    category: "website",
  },
  {
    title: "Shades of Gray Painters",
    description: "Professional painting company website featuring interior, exterior, and specialty finishes with a texture gallery showcase.",
    image: shadesColorCraftImg,
    url: "https://shades-color-craft.lovable.app",
    category: "website",
  },
  {
    title: "Lee Construction",
    description: "Shelby's trusted general contractor since 1982. Commercial developments to custom homes with quality craftsmanship.",
    image: leeBuildsShelbyImg,
    url: "https://lee-builds-shelby.lovable.app",
    category: "website",
  },
  {
    title: "Odyssey Custom Renovations",
    description: "Home renovation specialists transforming kitchens, bathrooms, and complete home makeovers with expert craftsmanship.",
    image: odysseyHomeVisionsImg,
    url: "https://odyssey-home-visions.lovable.app",
    category: "website",
  },
];

const appProjects: PortfolioProject[] = [
  {
    title: "Mole Locator",
    description: "Subterranean detection system using seismic frequency analysis with real-time scanning capabilities.",
    image: moleDetectiveImg,
    url: "https://mole-detective-app.lovable.app",
    category: "webapp",
  },
  {
    title: "Musical Lock",
    description: "Revolutionary authentication system replacing passwords with memorable melodies for secure access.",
    image: melodyLockImg,
    url: "https://melody-lock-studio.lovable.app",
    category: "webapp",
  },
  {
    title: "RIFE Frequency Generator",
    description: "Professional 20 MHz sweep/function generator with audio samples and frequency generation capabilities.",
    image: rifeWaveImg,
    url: "https://rife-wave-studio.lovable.app",
    category: "webapp",
  },
  {
    title: "5G Spectrum Analyzer",
    description: "Professional RF spectrum analysis system for passive monitoring across multiple frequency bands.",
    image: waveSpyImg,
    url: "https://wave-spy-nexus.lovable.app",
    category: "webapp",
  },
];

const ProjectCard = ({ project }: { project: PortfolioProject }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-xl border border-border/50 bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={`${project.title} - ${project.category === 'website' ? 'Website' : 'Web Application'} preview`}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
          View Live <ExternalLink className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
        {project.description}
      </p>
    </div>
  </a>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Portfolio - Studios by Dave | Web Design & Development Projects"
        description="Explore our portfolio of professional websites and web applications. See real examples of our work for local businesses including contractors, musicians, and innovative apps."
        keywords="web design portfolio, website examples, web development projects, contractor websites, business websites, web applications"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Portfolio
              </h1>
              <p className="text-lg text-white/90">
                Explore our collection of websites and web applications. Each project is crafted with attention to detail, performance, and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Web Projects Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Websites
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Professional, responsive websites built for local businesses. From contractors to artisans, we create digital experiences that convert visitors into customers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Web Apps Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Web Applications
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Interactive web applications showcasing our technical expertise. From specialized tools to innovative solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {appProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss your project and create something that stands out.
            </p>
            <Link to="/contact">
              <Button variant="shimmer" size="lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <InternalLinksFooter />
      <Footer />
    </div>
  );
};

export default Portfolio;

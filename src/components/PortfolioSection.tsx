import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  url: string;
  category: "web" | "app";
}

const webProjects: Project[] = [
  {
    title: "Studios by Dave",
    description: "Full-service digital agency website",
    url: "https://www.studiosbydave.com",
    category: "web",
  },
  {
    title: "Padgsteen Guitars",
    description: "Custom guitar craftsmanship showcase",
    url: "https://www.padgsteenguitars.com",
    category: "web",
  },
  {
    title: "Lead Ferret",
    description: "Lead generation platform",
    url: "https://lead-ferret.lovable.app",
    category: "web",
  },
  {
    title: "Shades Color Craft",
    description: "Color design and palette tool",
    url: "https://shades-color-craft.lovable.app",
    category: "web",
  },
  {
    title: "Lee Builds Shelby",
    description: "Custom car restoration showcase",
    url: "https://lee-builds-shelby.lovable.app",
    category: "web",
  },
  {
    title: "Odyssey Home Visions",
    description: "Home design visualization",
    url: "https://odyssey-home-visions.lovable.app",
    category: "web",
  },
];

const appProjects: Project[] = [
  {
    title: "Mole Detective",
    description: "Skin analysis application",
    url: "https://mole-detective-app.lovable.app",
    category: "app",
  },
  {
    title: "Melody Lock Studio",
    description: "Music production tool",
    url: "https://melody-lock-studio.lovable.app",
    category: "app",
  },
  {
    title: "Rife Wave Studio",
    description: "Audio frequency generator",
    url: "https://rife-wave-studio.lovable.app",
    category: "app",
  },
  {
    title: "Wave Spy Nexus",
    description: "Signal monitoring dashboard",
    url: "https://wave-spy-nexus.lovable.app",
    category: "app",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
      <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
        {project.title.charAt(0)}
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs px-2 py-1 rounded-full ${
          project.category === "web" 
            ? "bg-primary/20 text-primary" 
            : "bg-accent/20 text-accent"
        }`}>
          {project.category === "web" ? "Website" : "Web App"}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        asChild
      >
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          View Live <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </div>
);

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-background" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects — from stunning business websites to powerful web applications.
          </p>
        </div>

        {/* Web Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Websites
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <ProjectCard key={project.url} project={project} />
            ))}
          </div>
        </div>

        {/* Web App Projects */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Web Applications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appProjects.map((project) => (
              <ProjectCard key={project.url} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

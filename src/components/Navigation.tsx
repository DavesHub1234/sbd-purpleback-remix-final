import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [studiosWebOpen, setStudiosWebOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const studiosWebServices = [
    { name: "Web Design", path: "/studiosweb/web-design", description: "Professional responsive websites" },
    { name: "Logo Design & Branding", path: "/studiosweb/branding", description: "Complete brand identity solutions" },
    { name: "SEO Services", path: "/studiosweb/seo", description: "Get found by your ideal customers" },
    { name: "Google Optimization", path: "/studiosweb/google-optimization", description: "Dominate local search results" },
    { name: "AI Automations", path: "/studiosweb/ai-automations", description: "Intelligent business automation" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isStudiosWebActive = () => location.pathname.startsWith('/studiosweb');

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/53e3faf8-91ca-4a91-841b-36561dcb91f1-optimized.jpg" 
                alt="StudiosbyDave logo - professional web design and digital marketing for contractors" 
                className="h-24 w-auto"
                width="96"
                height="96"
                loading="lazy"
                decoding="async"
              />
              <span className="text-2xl font-bold text-primary">StudiosbyDave</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* StudiosWeb Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setStudiosWebOpen(!studiosWebOpen);
                }}
                className={`text-sm font-bold transition-colors hover:text-primary flex items-center space-x-1 ${
                  isStudiosWebActive()
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-primary"
                }`}
              >
                <span>StudiosWeb</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${studiosWebOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {studiosWebOpen && (
                <div className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-lg shadow-lg border z-50 animate-fade-in">
                  <div className="grid gap-3 p-4">
                    <Link
                      to="/studiosweb"
                      onClick={() => setStudiosWebOpen(false)}
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-muted/80 transition-colors"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        StudiosWeb
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Complete digital solutions for your business growth
                      </p>
                    </Link>
                    {studiosWebServices.map((service, index) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setStudiosWebOpen(false)}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="text-sm font-medium leading-none">{service.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* StudiosInk - Coming Soon */}
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold text-primary">StudiosInk</span>
              <span className="text-xs text-muted-foreground">Coming Soon</span>
            </div>
            
            <Link to="/contact">
              <Button variant="primary" size="sm" className="ml-4">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-foreground/80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile StudiosWeb Section */}
            <div className="border-t pt-4">
              <Link
                to="/studiosweb"
                onClick={() => setIsOpen(false)}
                className={`block text-base font-bold transition-colors hover:text-primary mb-2 ${
                  isStudiosWebActive() ? "text-primary" : "text-primary"
                }`}
              >
                StudiosWeb
              </Link>
              <div className="ml-4 space-y-2">
                {studiosWebServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm text-muted-foreground hover:text-primary transition-colors ${
                      isActive(service.path) ? "text-primary" : ""
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile StudiosInk - Coming Soon */}
            <div className="border-t pt-4">
              <div className="block text-base font-bold text-primary mb-2">
                StudiosInk
              </div>
              <div className="ml-4 text-sm text-muted-foreground">
                Coming Soon
              </div>
            </div>
            
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [studiosWebOpen, setStudiosWebOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About Us",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const studiosWebServices = [{
    name: "Web Design",
    path: "/studiosweb/web-design",
    description: "Professional responsive websites"
  }, {
    name: "Logo Design & Branding",
    path: "/studiosweb/branding",
    description: "Complete brand identity solutions"
  }, {
    name: "SEO Services",
    path: "/studiosweb/seo",
    description: "Get found by your ideal customers"
  }, {
    name: "Google Optimization",
    path: "/studiosweb/google-optimization",
    description: "Dominate local search results"
  }, {
    name: "AI Automations",
    path: "/studiosweb/ai-automations",
    description: "Intelligent business automation"
  }];
  const isActive = (path: string) => location.pathname === path;
  const isStudiosWebActive = () => location.pathname.startsWith('/studiosweb');
  return <nav className="bg-white/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/53e3faf8-91ca-4a91-841b-36561dcb91f1-optimized.jpg" alt="Studios by Dave logo - professional web design and digital marketing for contractors" className="h-24 w-auto" width="96" height="96" loading="lazy" decoding="async" />
              <span className="text-2xl font-bold text-primary">Studios by Dave</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"}`}>
              Home
            </Link>
            
            {/* StudiosWeb Collapsible */}
            <div className="relative">
              <button 
                onClick={() => setStudiosWebOpen(!studiosWebOpen)} 
                className={`text-sm font-bold transition-colors hover:text-primary flex items-center space-x-1 ${isStudiosWebActive() ? "text-primary border-b-2 border-primary pb-1" : "text-primary"}`}
              >
                <span>Studios Web</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${studiosWebOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Fan-out dropdown underneath */}
              <div 
                className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-border/50 z-50 overflow-hidden transition-all duration-300 ${
                  studiosWebOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="p-2 flex flex-col">
                  {studiosWebServices.map((service, index) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => setStudiosWebOpen(false)}
                      className={`text-sm font-medium whitespace-nowrap px-4 py-2 rounded-md transition-all duration-300 hover:bg-muted hover:text-primary ${
                        isActive(service.path) ? "text-primary bg-muted/50" : "text-foreground/80"
                      } ${studiosWebOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      style={{
                        transitionDelay: studiosWebOpen ? `${index * 60}ms` : '0ms',
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* StudiosInk */}
            <Link to="/studiosink" className={`text-sm font-bold transition-colors hover:text-primary ${isActive('/studiosink') ? "text-primary border-b-2 border-primary pb-1" : "text-primary"}`}>
              Studios Ink
            </Link>

            {/* StudiosGear */}
            <Link to="/studiosgear" className={`text-sm font-bold transition-colors hover:text-primary ${isActive('/studiosgear') ? "text-primary border-b-2 border-primary pb-1" : "text-primary"}`}>
              Studios Gear
            </Link>

            <Link to="/about" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/about') ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"}`}>
              About Us
            </Link>

            <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/contact') ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/80"}`}>
              Contact
            </Link>
            
            <Link to="/contact">
              <Button variant="primary" size="sm" className="ml-4 bg-ring">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-foreground/80">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden pb-6 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className={`block text-base font-medium transition-colors hover:text-primary ${isActive('/') ? "text-primary" : "text-foreground/80"}`}>
              Home
            </Link>
            
            {/* Mobile StudiosWeb Section */}
            <div className="border-t pt-4">
              <Link to="/studiosweb" onClick={() => setIsOpen(false)} className={`block text-base font-bold transition-colors hover:text-primary mb-2 ${isStudiosWebActive() ? "text-primary" : "text-primary"}`}>
                Studios Web
              </Link>
              <div className="ml-4 space-y-2">
                {studiosWebServices.map(service => <Link key={service.name} to={service.path} onClick={() => setIsOpen(false)} className={`block text-sm text-muted-foreground hover:text-primary transition-colors ${isActive(service.path) ? "text-primary" : ""}`}>
                    {service.name}
                  </Link>)}
              </div>
            </div>

            {/* Mobile StudiosInk */}
            <div className="border-t pt-4">
              <Link to="/studiosink" onClick={() => setIsOpen(false)} className={`block text-base font-bold transition-colors hover:text-primary ${isActive('/studiosink') ? "text-primary" : "text-primary"}`}>
                Studios Ink
              </Link>
            </div>

            {/* Mobile StudiosGear */}
            <div className="border-t pt-4">
              <Link to="/studiosgear" onClick={() => setIsOpen(false)} className={`block text-base font-bold transition-colors hover:text-primary ${isActive('/studiosgear') ? "text-primary" : "text-primary"}`}>
                Studios Gear
              </Link>
            </div>

            <Link to="/about" onClick={() => setIsOpen(false)} className={`block text-base font-medium transition-colors hover:text-primary ${isActive('/about') ? "text-primary" : "text-foreground/80"}`}>
              About Us
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)} className={`block text-base font-medium transition-colors hover:text-primary ${isActive('/contact') ? "text-primary" : "text-foreground/80"}`}>
              Contact
            </Link>
            
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
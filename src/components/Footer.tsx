import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Design", href: "/web-design" },
      { name: "Logo Design & Branding", href: "/branding" },
      { name: "AI Automations", href: "/ai-automations" },
      { name: "Google Optimization", href: "/google-optimization" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    industries: [
      { name: "Roofing Contractors", href: "/industries/roofing" },
      { name: "Landscaping Companies", href: "/industries/landscaping" },
      { name: "Solar Panel Installers", href: "/industries/solar" },
    ],
  };

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6f340fde-df82-49e6-8e98-735c38a18099.png" 
                alt="StudiosbyDave Logo" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              We don't just build websites. We build opportunity. We build something GREAT together!
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone size={18} className="text-accent" />
                <span>(704) 473-8188</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail size={18} className="text-accent" />
                <span>dx1creations25@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin size={18} className="text-accent" />
                <span>Shelby, NC 28152</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ready to Get Started?</h3>
            <p className="text-white/80 mb-6">
              Let's discuss how we can help grow your business online.
            </p>
            <Link to="/contact">
              <Button variant="hero" className="w-full mb-6">
                Get Free Consultation
              </Button>
            </Link>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} StudiosbyDave. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <span>Built with ❤️ for local businesses</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
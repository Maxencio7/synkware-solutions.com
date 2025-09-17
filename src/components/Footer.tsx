import { Link } from 'react-router-dom';
import { Mail, Linkedin,Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/31a64750-09a3-46f5-af3d-990734b9dfcc.png" 
                alt="SYNKWARE Solutions Logo" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Secure. Scale. Synk. Modern software and AI systems for a smarter Africa.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Company Reg No: 320251049126 </p>
              <p>Tax ID: 2889085869</p>
              <p>PACRA Registered | ZRA Compliant</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-primary-foreground/80 text-sm">synkwaresolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-primary-foreground/80 text-sm">+260 7766 14614</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-primary-foreground/80 text-sm">Lusaka, Zambia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin size={16} />
                <a 
                  href="https://www.linkedin.com/company/synkware-solutions" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram size={16} />
                <a 
                  href="s" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 SYNKWARE Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="https://www.synkwaresolutions.com/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-xs transition-colors">
              Privacy & Data Policy
            </Link>
            <Link to="#" className="text-primary-foreground/60 hover:text-primary-foreground text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

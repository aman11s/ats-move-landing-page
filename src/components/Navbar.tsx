
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-ats-black">
            <span className="text-ats-orange">ATS</span> Packers & Movers
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium text-ats-black hover:text-ats-orange transition-colors">Home</a>
          <a href="#whyus" className="font-medium text-ats-black hover:text-ats-orange transition-colors">Why Us</a>
          <a href="#services" className="font-medium text-ats-black hover:text-ats-orange transition-colors">Services</a>
          <a href="#process" className="font-medium text-ats-black hover:text-ats-orange transition-colors">How It Works</a>
          <a href="#testimonials" className="font-medium text-ats-black hover:text-ats-orange transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary">Get a Quote</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-ats-black"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-slide-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="font-medium text-ats-black hover:text-ats-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#whyus" 
              className="font-medium text-ats-black hover:text-ats-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a 
              href="#services" 
              className="font-medium text-ats-black hover:text-ats-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#process" 
              className="font-medium text-ats-black hover:text-ats-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-ats-black hover:text-ats-orange transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

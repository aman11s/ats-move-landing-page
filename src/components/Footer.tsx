
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ats-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-ats-orange">ATS</span> Packers & Movers
            </h3>
            <p className="mb-4 text-gray-300">
              Your trusted partner for safe and reliable relocation services. We make moving simple!
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-ats-orange transition-colors">Home</a></li>
              <li><a href="#whyus" className="text-gray-300 hover:text-ats-orange transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-ats-orange transition-colors">Our Services</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-ats-orange transition-colors">How It Works</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-ats-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-ats-orange transition-colors">Home Shifting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ats-orange transition-colors">Office Relocation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ats-orange transition-colors">Storage Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ats-orange transition-colors">Vehicle Transport</a></li>
              <li><a href="#" className="text-gray-300 hover:text-ats-orange transition-colors">Packing Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Relocation Street</p>
              <p className="mb-2">Transport Nagar</p>
              <p className="mb-2">Mumbai, Maharashtra - 400001</p>
              <p className="mb-2">Phone: +91 98765 43210</p>
              <p className="mb-2">Email: info@atspackersmovers.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} ATS Packers & Movers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, HeartPulse } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 mb-6 relative group">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent shadow-md overflow-hidden">
                <div className="absolute inset-0 bg-white/20"></div>
                <HeartPulse size={26} className="text-white relative z-10" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-none group-hover:text-primary transition-colors">
                  Popular <span className="text-primary">Medicals</span>
                </h2>
                <p className="text-[10px] text-secondary font-bold tracking-[0.2em] mt-0.5">TRUSTED PHARMACY</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Your trusted medical store in Coimbatore, offering authentic medicines, Ayurvedic products, and personal care items with home delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Contact', 'Order Medicines'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 shadow-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="p-2 bg-white rounded-md text-primary shrink-0 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div className="text-sm text-gray-600">
                  <span className="block font-semibold text-gray-900 mb-0.5">Address</span>
                  Ponviza Nagar, 1st Street, Ukkadam, Coimbatore – 641023
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div className="text-sm">
                  <a href="tel:09677356640" className="font-semibold text-gray-900 hover:text-primary transition-colors">09677356640</a>
                  <p className="text-gray-500 mt-0.5 text-xs">Mon-Sun (9 AM - 1 AM)</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div className="text-sm">
                  <a href="mailto:info@popularmedicals.in" className="font-semibold text-gray-900 hover:text-primary transition-colors">info@popularmedicals.in</a>
                  <p className="text-gray-500 mt-0.5 text-xs">Send us your query</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative inline-block">
              Working Hours
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Clock size={24} />
                <span className="font-bold text-lg">We are Open</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center pb-2 border-b border-primary/10">
                  <span className="font-semibold">Mon - Sun</span>
                  <span className="font-bold text-primary">09:00 AM - 01:00 AM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold">Night Delivery</span>
                  <span className="text-accent font-bold">Available</span>
                </li>
              </ul>
              
              <Link to="/order" className="mt-6 w-full flex items-center justify-center gap-2 bg-white text-primary border border-primary px-4 py-2.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors">
                Request Delivery
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Popular Medicals. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

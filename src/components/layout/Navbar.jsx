import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, HeartPulse } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden">
              <div className="absolute inset-0 bg-white/20"></div>
              <HeartPulse size={26} className="text-white relative z-10" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-none group-hover:text-primary transition-colors">
                Popular <span className="text-primary">Medicals</span>
              </h1>
              <p className="text-[10px] text-secondary font-bold tracking-[0.2em] mt-0.5">TRUSTED PHARMACY</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href="tel:09677356640"
              className="hidden lg:flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <PhoneCall size={18} />
              <span>09677356640</span>
            </a>
            
            <Link 
              to="/order"
              className="bg-accent text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-amber-600 transition-all transform hover:-translate-y-0.5"
            >
              Order Medicines
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-semibold ${location.pathname === link.path ? 'bg-primary/5 text-primary' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a 
                href="tel:09677356640"
                className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-900 border border-gray-200 px-4 py-3 rounded-xl font-semibold active:bg-gray-100"
              >
                <PhoneCall size={18} className="text-primary" />
                <span>Call: 09677356640</span>
              </a>
              <Link 
                to="/order"
                className="w-full text-center bg-primary text-white px-4 py-3 rounded-xl font-bold active:bg-blue-600"
              >
                Request Delivery
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { PhoneCall, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919677356640"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Phone CTA (Visible primarily on mobile) */}
      <a
        href="tel:09677356640"
        className="md:hidden w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-300 relative group"
        aria-label="Call Now"
      >
        {/* Pulse Effect */}
        <span className="absolute w-full h-full bg-primary rounded-full animate-ping opacity-40"></span>
        <PhoneCall size={26} className="relative z-10" />
      </a>
    </div>
  );
};

export default FloatingContact;

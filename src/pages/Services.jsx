import { Pill, Leaf, Heart, Truck, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesList = [
    {
      id: "medicines",
      icon: Pill,
      color: "bg-blue-100 text-blue-600",
      title: "Prescription & OTC Medicines",
      desc: "We stock a comprehensive range of allopathic medicines from top pharmaceutical companies. All our medicines are 100% genuine and stored under optimal conditions.",
      benefits: ["All major brands available", "Temperature-controlled storage", "Proper pharmacist guidance", "Discounts on regular refills"],
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "ayurvedic",
      icon: Leaf,
      color: "bg-green-100 text-green-600",
      title: "Ayurvedic Products",
      desc: "For those who prefer natural remedies, we provide an extensive selection of trusted Ayurvedic medicines, health supplements, and organic wellness products.",
      benefits: ["Trusted Ayurvedic brands", "Immunity boosters", "Herbal supplements", "Skin and hair care remedies"],
      image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800" // Natural healthcare visual
    },
    {
      id: "personal-care",
      icon: Heart,
      color: "bg-purple-100 text-purple-600",
      title: "Personal Care Products",
      desc: "From baby care essentials to daily hygiene items, we carry standard high-quality consumer healthcare goods for your entire family.",
      benefits: ["Baby care products", "Oral hygiene", "Nutritional supplements", "First-aid kits & essentials"],
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800" // Skincare/personal care
    },
    {
      id: "delivery",
      icon: Truck,
      color: "bg-orange-100 text-orange-600",
      title: "Home Delivery Service",
      desc: "Can't visit the store? We offer fast and reliable home delivery for medicines across Coimbatore. Just send us your prescription and address.",
      benefits: ["Quick dispatch", "Secure packaging", "Contactless delivery", "Late-night order support"],
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">Comprehensive healthcare solutions and products for all your medical needs.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        <div className="space-y-24">
          {servicesList.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className={`${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 inline-block border-b-2 border-primary pb-1">Key Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-secondary flex items-center justify-center">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="font-semibold">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {service.id === "delivery" ? (
                  <Link to="/order" className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-md">
                    <Truck size={20} /> Request Delivery Now
                  </Link>
                ) : null}
              </div>

              <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-xl"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Services;

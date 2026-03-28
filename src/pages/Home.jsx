import { ArrowRight, Star, Clock, HeartPulse, ShieldCheck, Truck, PhoneCall, Pill, Leaf, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.15 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="pt-20 bg-white">
      {/* 1. Hero Section - Premium Spacing & Typography */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1600" 
            alt="Pharmacy Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm shadow-inner pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-primary font-semibold text-sm mb-8 shadow-sm border border-blue-200"
              >
                <Clock size={16} /> Open till 1 AM Everyday
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
                Your Trusted <br/><span className="text-primary bg-clip-text">Medical Store</span> 
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Providing ultimate care through authentic medicines, Ayurvedic products, and premium personal care essentials delivered right to your doorstep in Coimbatore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:09677356640"
                  className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-float"
                >
                  <PhoneCall size={22} />
                  Call Now
                </motion.a>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link 
                    to="/order"
                    className="inline-flex justify-center items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-colors shadow-soft"
                  >
                    Order Medicines
                    <ArrowRight size={22} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800" 
                alt="Friendly Professional" 
                className="relative z-10 rounded-[32px] shadow-float object-cover h-[550px] w-full"
              />
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 z-20 bg-white p-5 rounded-2xl shadow-float flex items-center gap-4 border border-gray-100"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-secondary">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">100% Genuine</p>
                  <p className="text-sm text-gray-500 font-medium">Quality Assured</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Quick Trust Section - Clean look */}
      <section className="py-16 bg-white shrink-0 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="bg-white rounded-[32px] shadow-soft border border-gray-100 p-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-50"
          >
            {[
              { label: "Years Experience", value: "12+", textClass: "text-primary" },
              { label: "Customer Rating", value: "4.5", textClass: "text-accent", icon: <Star size={24} className="fill-accent text-accent inline ml-1 -translate-y-1" /> },
              { label: "Fast Delivery", iconOnly: <Truck size={38} className="text-primary mx-auto mb-3" /> },
              { label: "Trusted Locally", iconOnly: <HeartPulse size={38} className="text-secondary mx-auto mb-3" /> }
            ].map((stat, i) => (
              <motion.div key={i} variants={staggerItem} className="text-center px-4 flex flex-col justify-center">
                {stat.iconOnly ? (
                  stat.iconOnly
                ) : (
                  <div className={`text-4xl md:text-5xl font-extrabold mb-3 tracking-tight ${stat.textClass}`}>
                    {stat.value}{stat.icon}
                  </div>
                )}
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Services Section - Hover Lifts */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-primary">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e166946c9eb9?auto=format&fit=crop&q=80&w=1600" 
            alt="Healthcare Solutions Background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-black text-blue-300 uppercase tracking-widest mb-3">Our Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Complete Healthcare Solutions</h3>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Prescription Medicines", desc: "100% authentic and verified medicines.", icon: Pill, color: "bg-blue-50 text-blue-600" },
              { title: "Ayurvedic Products", desc: "Natural remedies and wellness items.", icon: Leaf, color: "bg-green-50 text-green-600" },
              { title: "Healthcare Products", desc: "Daily essentials and personal care.", icon: Sparkles, color: "bg-purple-50 text-purple-600" },
              { title: "Home Delivery", desc: "Fast and secure delivery to your door.", icon: Truck, color: "bg-orange-50 text-orange-600" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 hover:shadow-soft transition-shadow cursor-default group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-300 ${service.color}`}>
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. About & Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1 relative"
            >
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=600" 
                  alt="Medicines Profile" 
                  className="rounded-[32px] object-cover h-[340px] w-full shadow-float mt-12 hover:scale-[1.02] transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" 
                  alt="Pharmacy Professional" 
                  className="rounded-[32px] object-cover h-[340px] w-full shadow-soft hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full p-4 shadow-float z-20">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex flex-col items-center justify-center font-extrabold text-2xl tracking-tighter">
                  12+<span className="text-sm font-medium tracking-normal mt-0.5">Yrs</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-sm font-black text-primary uppercase tracking-widest mb-3">About Popular Medicals</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">Your Health is Our Priority</h3>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed font-light">
                For over a decade, Popular Medicals has been a reliable cornerstone of the Ukkadam community in Coimbatore. We prioritize accessibility and premium quality, ensuring you always get the right care when you need it.
              </p>
              
              <div className="space-y-6 bg-gray-50/50 p-8 rounded-[32px] border border-gray-100 mb-10">
                <h4 className="font-extrabold text-xl text-gray-900 tracking-tight">Why Choose Us?</h4>
                <ul className="space-y-5">
                  {[
                    { title: "Open Till Late Night", desc: "Accessible till 1 AM every day.", icon: Clock },
                    { title: "Convenient Location", desc: "Heart of Ukkadam, easily reachable.", icon: MapPin },
                    { title: "Reliable Service", desc: "Expert staff to guide you accurately.", icon: ShieldCheck }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-center group">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <item.icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block text-lg">{item.title}</span>
                        <span className="text-gray-500 text-sm font-medium">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/about" className="font-bold text-primary hover:text-blue-700 inline-flex items-center gap-2 group text-lg relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                Read our full story 
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-24 bg-gray-50/80 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-black text-primary uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">What Our Customers Say</h3>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { text: "Very reliable service, especially late at night. Glad they are open till 1 AM when emergencies happen.", author: "Rajesh K.", role: "Local Resident" },
              { text: "Convenient and trusted store. The pharmacists are knowledgeable and always polite.", author: "Meena S.", role: "Regular Customer" },
              { text: "Good availability of medicines. I generally just WhatsApp my prescription and get it delivered.", author: "Kumar M.", role: "Verified Buyer" }
            ].map((review, i) => (
              <motion.div 
                key={i} 
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[32px] shadow-soft border border-gray-100 flex flex-col h-full relative"
              >
                <div className="text-primary/10 absolute top-8 right-8">
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={20} className="fill-accent text-accent" />)}
                </div>
                <p className="text-gray-600 text-lg mb-8 flex-grow leading-relaxed font-light">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-400 font-medium">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-700/80 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=1600" 
            alt="Delivery Packaging" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Need medicines urgently?<br/>We are just a call away.
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-light">
            Get your prescription medicines delivered safely to your home. Open until 1 AM for absolute convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:09677356640" 
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-3 shadow-float"
            >
              <PhoneCall size={22} />
              Call 09677356640
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/order" 
                className="bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-amber-600 transition-colors inline-flex items-center justify-center gap-3 shadow-float border border-amber-500/50"
              >
                <Truck size={22} />
                Request Delivery
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;

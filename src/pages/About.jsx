import { CheckCircle2, Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Popular Medicals</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">12 Years of Trust, Care, and Reliable Healthcare Delivery</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey in Ukkadam, Coimbatore</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Started 12 years ago, Popular Medicals was founded with a simple mission: to make healthcare accessible, affordable, and reliable. Over the years, we have grown from a small neighborhood pharmacy to one of the most trusted medical stores in Coimbatore.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We understand that emergencies don’t have regular hours. That is why we stay open till 1 AM every single day, ensuring that our community always has access to vital medicines and healthcare products when they need them the most.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm font-semibold text-gray-700">Years Serving</div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <div className="text-3xl font-bold text-secondary mb-2">50k+</div>
                <div className="text-sm font-semibold text-gray-700">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800"
              alt="Inside Popular Medicals"
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100 hidden sm:block">
              <div className="flex text-accent mb-2">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>)}
              </div>
              <p className="font-bold text-gray-900 leading-tight">"The most reliable pharmacy in the area."</p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We are driven by a customer-first approach, prioritizing well-being above everything else.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle2, title: "100% Authentic", desc: "Every medicine is verified and sourced from trusted distributors." },
              { icon: Users, title: "Customer First", desc: "Friendly guidance from experienced pharmacists on every visit." },
              { icon: Clock, title: "Accessibility", desc: "Open late nights till 1 AM for absolute convenience." },
              { icon: Award, title: "Fair Pricing", desc: "Affordable healthcare without compromising on quality." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <val.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need assistance from our pharmacists?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us Today
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

export default About;

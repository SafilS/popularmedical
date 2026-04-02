import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Phone number validation (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    // Simulate submission
    const loadingToast = toast.loading('Sending your message...');
    
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.', {
        id: loadingToast,
      });
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      
      {/* Header */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">We're here to help you with your health and medicine needs.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Store</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Ponviza Nagar, 1st Street, Ukkadam<br/>
                    Coimbatore – 641023, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-green-50 text-secondary rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-green-100">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
                  <p className="text-gray-600 text-lg mb-1">Main: <a href="tel:09677356640" className="text-primary hover:underline font-semibold">09677356640</a></p>
                  <p className="text-gray-500 text-sm">For orders and general inquiries</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-orange-50 text-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-orange-100">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-600 text-lg font-medium">Monday – Sunday</p>
                  <p className="text-primary font-bold text-xl">09:00 AM – 01:00 AM</p>
                  <p className="text-gray-500 text-sm mt-1">Late night delivery available</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-purple-100">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Options</h3>
                  <p className="text-gray-600 text-lg"><a href="mailto:info@popularmedicals.in" className="text-primary hover:underline font-semibold">info@popularmedicals.in</a></p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white"
                  placeholder="9876543210"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-md transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Google Maps Map Placeholder */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-bold text-center">Find Us on the Map</h2>
          <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-inner border border-gray-200 relative">
            <iframe 
              src="https://maps.google.com/maps?q=Ukkadam,+Coimbatore&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Popular Medicals Location Map"
            ></iframe>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;

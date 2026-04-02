import React, { useState } from 'react';
import { Upload, Truck, Phone, PackageCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    remarks: ''
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
    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Phone number validation (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    // Simulate submission
    const loadingToast = toast.loading('Placing your order request...');
    
    setTimeout(() => {
      toast.success('Order request sent! Our pharmacist will call you shortly.', {
        id: loadingToast,
      });
      console.log('Order submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        address: '',
        remarks: ''
      });
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20 bg-gray-50 min-h-screen"
    >
      
      {/* Header */}
      <div className="bg-primary text-white py-14 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Order Medicines Online</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">Fast, reliable home delivery across Coimbatore. Open till 1 AM.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-5 gap-10">
          
          {/* Form Section */}
          <div className="lg:col-span-3 bg-white p-6 sm:p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Delivery Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address <span className="text-red-500">*</span></label>
                <textarea 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                  placeholder="Enter full address with landmark and pincode"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Medicines / Remarks (Optional)</label>
                <textarea 
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                  placeholder="Type medicine names or alternative instructions..."
                ></textarea>
              </div>

              <div className="border-2 border-dashed border-primary/30 bg-blue-50/50 p-6 rounded-2xl text-center group cursor-pointer hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  <Upload size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Upload Prescription (Optional)</h3>
                <p className="text-sm text-gray-500 mt-1">PNG, JPG or PDF formats (Max 5MB)</p>
                <button type="button" className="mt-4 px-6 py-2 bg-white text-primary text-sm font-bold rounded-full shadow-sm border border-gray-200 hover:bg-gray-50">
                  Select File
                </button>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-600 transition-colors shadow-md mt-4 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Truck size={22} />
                Request Delivery
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">
                By clicking "Request Delivery", you confirm that the prescription provided is valid. A pharmacist may call to verify your order.
              </p>
            </form>
          </div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <PackageCheck className="text-secondary" /> How It Works
              </h3>
              <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                <li className="relative flex gap-4 text-sm text-gray-600">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 relative z-10 shadow-sm">1</div>
                  <div><strong className="text-gray-900">Fill the Form:</strong> Enter your details and attach a prescription.</div>
                </li>
                <li className="relative flex gap-4 text-sm text-gray-600">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 relative z-10 shadow-sm">2</div>
                  <div><strong className="text-gray-900">Pharmacist Review:</strong> We verify stock and call to confirm the order amount.</div>
                </li>
                <li className="relative flex gap-4 text-sm text-gray-600">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 relative z-10 shadow-sm">3</div>
                  <div><strong className="text-gray-900">Fast Delivery:</strong> Order is dispatched directly to your doorstep.</div>
                </li>
              </ul>
            </div>

            <div className="bg-primary p-6 rounded-3xl shadow-lg border border-blue-600 text-white text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Prefer to call?</h3>
              <p className="text-blue-100 mb-4 text-sm">Skip the form and place your order directly via phone or WhatsApp.</p>
              <a href="tel:09677356640" className="inline-block bg-white text-primary px-6 py-3 rounded-xl font-bold w-full mb-3 hover:bg-gray-100">
                Call: 09677356640
              </a>
              <a href="https://wa.me/919677356640" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl font-bold w-full hover:bg-green-600 shadow-sm">
                WhatsApp Order
              </a>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Order;

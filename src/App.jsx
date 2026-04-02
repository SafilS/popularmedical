import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/layout/FloatingContact';
import ScrollToTop from './components/layout/ScrollToTop';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Order from './pages/Order';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-medicines" element={<Order />} />
          </Routes>
        </main>

        <Footer />
        <FloatingContact />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </Router>
  );
}

export default App;

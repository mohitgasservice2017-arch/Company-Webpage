import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md text-body-md antialiased relative">
      <nav className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md sticky top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-800 shadow-sm flex justify-between items-center px-6 md:px-12 py-4 max-w-full">
        <Link to="/" className="text-2xl font-black text-orange-600 dark:text-orange-500 italic">Mohit Gas Service</Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" to="/">Home</Link>
          <Link className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" to="/services">Services</Link>
          <Link className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" to="/services/residential-pipeline">Residential</Link>
          <Link className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" to="/services/commercial-infrastructure">Commercial</Link>
        </div>
        <div className="flex gap-4">
          <a href="https://wa.me/918570972010" target="_blank" rel="noopener noreferrer">
            <button className="font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm text-orange-600 dark:text-orange-500 active:scale-95 transition-transform duration-150 py-2">
              CLICK HERE TO CONTACT
            </button>
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>

      <footer className="w-full border-t-8 border-orange-600 bg-zinc-50 dark:bg-zinc-900 flex flex-col md:flex-row justify-between items-start px-8 py-16 gap-10">
        <div className="flex flex-col items-start gap-6 max-w-sm">
          <div className="text-2xl font-black text-orange-600 dark:text-orange-500 italic">Mohit Gas Service</div>
          <div className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
            <span className="material-symbols-outlined mt-1">location_on</span>
            <p className="font-['Plus_Jakarta_Sans'] text-sm font-medium leading-relaxed">
              Main road Rai, Near Bank of India.<br />Rai, sonipat.H.R. 131029.
            </p>
          </div>
          <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
            <span className="material-symbols-outlined">phone</span>
            <p className="font-['Plus_Jakarta_Sans'] text-sm font-medium">+91 85709 72010</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a aria-label="Facebook" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-100 hover:text-orange-600 transition-colors" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a aria-label="Instagram" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-100 hover:text-orange-600 transition-colors" href="#">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-orange-100 hover:text-orange-600 transition-colors" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-wider text-sm">Quick Links</h4>
          <Link className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" to="/services">All Services</Link>
          <Link className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" to="/services/residential-pipeline">Residential Services</Link>
          <Link className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" to="/services/commercial-infrastructure">Commercial Solutions</Link>
          <Link className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" to="/services/industrial-systems">Industrial Infrastructure</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-wider text-sm">Support</h4>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Safety Standards</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Emergency Services</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Terms of Service</a>
          <a className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">Need a Consultation?</h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">Our experts are ready to design the perfect gas infrastructure for your specific needs.</p>
          <a href="https://wa.me/918570972010" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-sm px-8 py-3 rounded-md hover:bg-orange-700 active:scale-95 transition-all duration-150 shadow-md w-fit">
              Contact Us Now
            </button>
          </a>
        </div>
      </footer>
      <div className="w-full bg-zinc-200 dark:bg-zinc-950 px-8 py-4 text-center">
        <p className="font-['Plus_Jakarta_Sans'] text-xs font-medium text-zinc-500 dark:text-zinc-500">© 2024 Mohit Gas Service. All Rights Reserved. ISO 9001 Certified Safety Standards.</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 bg-primary text-on-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:bg-primary/90 focus:outline-none ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        onClick={scrollToTop}
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    </div>
  );
}

export default App;

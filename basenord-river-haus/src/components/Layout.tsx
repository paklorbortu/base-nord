import { Link, Outlet, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import FooterSoldier from "./FooterSoldier";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Layout() {
  const footerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F9F9F7] font-sans text-[#1A1A1A] selection:bg-[#A3B18A] selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 md:gap-8">
            <span className="text-base md:text-xl font-bold tracking-tighter uppercase relative z-50">BaseNord</span>
            <span className="text-[#1A1A1A]/30 text-base md:text-xl relative z-50 hidden sm:block">/</span>
            <span className="text-base md:text-xl font-light tracking-widest uppercase relative z-50">River Haus</span>
          </Link>
          <div className="hidden md:flex gap-10 text-[11px] font-semibold uppercase tracking-[0.2em] items-center">
            <Link to="/workspace" className="hover:text-[#A3B18A] transition-colors">Workspace</Link>
            <Link to="/cafe" className="hover:text-[#A3B18A] transition-colors">Café</Link>
            <Link to="/events" className="hover:text-[#A3B18A] transition-colors">Events</Link>
            <Link to="/workspace" className="px-6 py-2 border border-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors">
              Book a Tour
            </Link>
          </div>
          <button 
            className="md:hidden p-2 text-[#1A1A1A] relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-24 px-6 flex flex-col gap-8 md:hidden h-screen"
          >
            <div className="flex flex-col gap-6 text-sm font-semibold uppercase tracking-[0.2em] mt-10">
              <Link to="/" className="hover:text-[#A3B18A] transition-colors py-2">Home</Link>
              <Link to="/workspace" className="hover:text-[#A3B18A] transition-colors py-2">Workspace</Link>
              <Link to="/cafe" className="hover:text-[#A3B18A] transition-colors py-2">Café</Link>
              <Link to="/events" className="hover:text-[#A3B18A] transition-colors py-2">Events</Link>
            </div>
            <Link to="/workspace" className="p-4 text-center border border-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors mt-auto mb-12">
              Book a Tour
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer ref={footerRef} className="bg-[#1A1A1A] text-[#F9F9F7] py-16 px-10 relative overflow-hidden">
        {/* Watermark Crest */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.12] pointer-events-none w-full max-w-3xl px-10 mix-blend-screen">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Great_coat_of_arms_of_Sweden.svg" 
            alt="Swedish Royal Crest Watermark" 
            className="w-full h-full object-contain filter grayscale"
          />
        </div>

        <FooterSoldier footerRef={footerRef} />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-8 relative z-10">
          <div className="md:col-span-2">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 mb-6">
              <span className="font-bold text-base md:text-xl tracking-tighter uppercase text-white">BaseNord</span>
              <span className="text-white/30 text-base md:text-xl hidden sm:block">/</span>
              <span className="font-light tracking-widest uppercase text-base md:text-xl text-white">River Haus</span>
            </div>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              A collaborative ecosystem pairing premium workspace with Nordic culinary excellence in East Legon.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>East Legon</li>
              <li>Accra, Ghana</li>
              <li>info@basenord-gh.com</li>
              <li>+233 55 123 4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="https://www.instagram.com/riverhaus.gh/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/basenord/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between gap-4 text-[10px] font-bold tracking-widest uppercase text-white/40 relative z-10 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} BaseNord & River Haus.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}



import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, ArrowUpRight, Wine, ChefHat, MapPin, Clock } from 'lucide-react';

// Pages Imps
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import About from './pages/About';
import Contact from './pages/Contact';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'The Story', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-noir-bg text-noir-muted selection:bg-noir-primary/30 selection:text-noir-fg flex flex-col relative w-full overflow-hidden">
      
      {/* Background Blobs - Noir & Gold System */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#c9a84c] blur-[150px] opacity-[0.08] mix-blend-screen animate-blob-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#1a1a1a] blur-[150px] opacity-[0.9] mix-blend-screen animate-blob-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Sticky Horizontal Nav w/ Gold Underline */}
      <header className="fixed top-0 inset-x-0 z-50 bg-noir-bg/80 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-serif text-2xl tracking-wide text-noir-fg group-hover:text-white transition-colors">La Maison</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-[13px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-noir-fg"
                  style={{ color: isActive ? '#f0d78c' : 'rgba(240,215,140,0.55)' }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-noir-primary"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
             <Link to="/reservations" className="text-[11px] uppercase tracking-[0.2em] text-noir-bg bg-noir-primary px-6 py-3 hover:bg-noir-fg transition-colors">
                Book a Table
             </Link>
          </div>
          
          {/* Mobile menu stub (keeping focused on desktop for scale) */}
          <button className="md:hidden text-noir-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col mt-24">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Large Editorial Footer */}
      <footer className="border-t border-white/[0.04] pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
            <div className="md:col-span-2">
              <h3 className="font-serif text-3xl text-noir-fg mb-6">La Maison</h3>
              <p className="max-w-sm text-sm leading-relaxed mb-8">
                A sanctuary of Mediterranean gastronomy, where ancient traditions meet contemporary luxury. Defined by an uncompromising dedication to excellence.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-noir-ring flex items-center justify-center hover:bg-noir-primary hover:text-noir-bg transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-noir-ring flex items-center justify-center hover:bg-noir-primary hover:text-noir-bg transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-noir-ring flex items-center justify-center hover:bg-noir-primary hover:text-noir-bg transition-colors">
                  <Twitter size={16} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-noir-primary mb-6">Experience</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/menu" className="hover:text-noir-fg transition-colors flex items-center gap-1 group">Menu <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/reservations" className="hover:text-noir-fg transition-colors flex items-center gap-1 group">Reservations <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/about" className="hover:text-noir-fg transition-colors flex items-center gap-1 group">Our Story <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><a href="#" className="hover:text-noir-fg transition-colors flex items-center gap-1 group">Private Dining <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-noir-primary mb-6">Visit Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-noir-primary shrink-0 mt-0.5" />
                  <span>1420 Avenue de l'Océan,<br/>Monaco, 98000</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-noir-primary shrink-0 mt-0.5" />
                  <span>Tue - Sun: 17:30 - 23:00<br/>Closed Mondays</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.04] text-xs font-medium tracking-widest uppercase">
            <span>&copy; {new Date().getFullYear()} La Maison. All Rights Reserved.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-noir-fg transition-colors">Privacy</a>
               <a href="#" className="hover:text-noir-fg transition-colors">Terms</a>
            </div>
          </div>

          <div className="mt-20 flex justify-center opacity-10 pointer-events-none select-none">
             <h1 className="text-[15vw] font-serif leading-none tracking-tighter text-noir-primary">LA MAISON</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

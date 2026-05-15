
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Info } from 'lucide-react';

export default function Reservations() {
  const [step, setStep] = useState(1);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex-1 flex"
    >
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-y-auto min-h-[calc(100vh-6rem)] shadow-[20px_0_50px_rgba(0,0,0,0.5)] z-10 bg-noir-bg">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-4xl font-serif text-white mb-4">Reserve Your Table</h1>
            <p className="text-sm text-white/50">Reservations open 30 days in advance at 10:00 AM local time.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            
            {step === 1 ? (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                {/* Guest Count */}
                <div className="mb-6">
                  <label className="block text-[11px] uppercase tracking-widest text-noir-primary mb-3">Party Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4, 5, 6, "7+"].map(num => (
                      <button key={num} type="button" className={`h-12 border border-white/10 hover:border-noir-primary text-sm flex items-center justify-center transition-colors ${num === 2 ? 'bg-white/5 border-noir-primary text-noir-fg' : 'text-white/70'}`}>
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-noir-primary mb-3 flex items-center gap-2"><Calendar size={12}/> Date</label>
                    <input type="date" className="w-full h-12 bg-white/[0.02] border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-noir-primary transition-colors [color-scheme:dark]" defaultValue="2024-12-01" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-noir-primary mb-3 flex items-center gap-2"><Clock size={12}/> Time</label>
                    <select className="w-full h-12 bg-white/[0.02] border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-noir-primary transition-colors appearance-none cursor-pointer">
                      <option className="bg-noir-bg">18:00</option>
                      <option className="bg-noir-bg">18:30</option>
                      <option className="bg-noir-bg">19:00</option>
                      <option className="bg-noir-bg" selected>19:30</option>
                      <option className="bg-noir-bg">20:00</option>
                      <option className="bg-noir-bg">20:30</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full btn-primary h-14 text-sm mt-4">Find Availability</button>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="p-4 border border-noir-primary/30 bg-noir-primary/5 mb-6 flex items-start gap-4">
                  <Info size={20} className="text-noir-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-white mb-1">Table Available</h4>
                    <p className="text-xs text-white/60">Main Dining Room • Friday, Dec 1st at 19:30 • 2 Guests</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <input type="text" placeholder="First Name" required className="w-full h-12 bg-transparent border-b border-white/20 px-0 text-white placeholder:text-white/30 focus:outline-none focus:border-noir-primary transition-colors" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" required className="w-full h-12 bg-transparent border-b border-white/20 px-0 text-white placeholder:text-white/30 focus:outline-none focus:border-noir-primary transition-colors" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" required className="w-full h-12 bg-transparent border-b border-white/20 px-0 text-white placeholder:text-white/30 focus:outline-none focus:border-noir-primary transition-colors" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" required className="w-full h-12 bg-transparent border-b border-white/20 px-0 text-white placeholder:text-white/30 focus:outline-none focus:border-noir-primary transition-colors" />
                  </div>
                </div>

                <button type="button" className="w-full btn-primary h-14 text-sm mb-4">Confirm Reservation</button>
                <button type="button" onClick={() => setStep(1)} className="w-full btn-secondary h-14 text-sm border-transparent hover:border-transparent hover:text-white">Back</button>
              </motion.div>
            )}
          </form>

          <div className="mt-16 pt-8 border-t border-white/10">
             <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4">Policies</h4>
             <ul className="text-xs text-white/40 space-y-3">
               <li>Cancellations within 24 hours are subject to a $50/person fee.</li>
               <li>Dress code is elegant casual. Jackets preferred, athletic wear prohibited.</li>
               <li>Valet parking available at the main entrance.</li>
             </ul>
          </div>
        </div>
      </div>

      {/* Right side Image (Desktop only) */}
      <div className="hidden lg:block w-1/2 relative bg-black">
        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" alt="Cocktail making" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[50%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir-bg to-transparent" />
      </div>
    </motion.div>
  );
}

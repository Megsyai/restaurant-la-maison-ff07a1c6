
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Wine, ChefHat, Play, Leaf, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';

// Utility for dummy images that look good if aiImage isn't fetched
const img = (seed: string, w: number, h: number) => `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  
  // Real high-end unsplash photos for Noir & Gold vibe
  const heroImg = "1414235077428-9711655ed466"; // Dark restaurant interior / table
  const statImg1 = "1550966871-3ed3cdb5ce0c"; // Plated food
  const statImg2 = "1559339352-11d035aa65de"; // Wine pouring
  
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden" className="flex flex-col">
      
      {/* SECTION 1: Cinematic Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img src={img(heroImg, 1920, 1080)} alt="Dining Room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-bg via-transparent to-noir-bg/50" />
        </motion.div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-12">
          <motion.div variants={FADE_UP} className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-noir-primary flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-noir-primary/50"></span>
              EST. 2024
              <span className="w-12 h-[1px] bg-noir-primary/50"></span>
            </span>
          </motion.div>
          <motion.h1 variants={FADE_UP} className="text-[clamp(44px,8vw,120px)] leading-[0.9] tracking-[-0.02em] font-serif text-noir-fg mb-6">
            A Symphony of the <br/><span className="italic text-noir-primary font-light">Mediterranean</span>
          </motion.h1>
          <motion.p variants={FADE_UP} className="max-w-xl text-[15px] md:text-lg text-noir-muted mb-12 font-light">
            Experiential gastronomy forged in absolute darkness and illuminated by the vibrant, sun-drenched flavors of the Mediterranean coast.
          </motion.p>
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-6 items-center">
            <Link to="/reservations" className="btn-primary">
              Reserve Antiquity <ArrowUpRight size={16} />
            </Link>
            <Link to="/menu" className="btn-secondary group">
              View The Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Signature Moves (Roman numerals, full bleed B&W concept) */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="order-2 md:order-1 relative">
               <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] grayscale contrast-125 group">
                  <div className="absolute inset-0 bg-noir-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img src={img(statImg1, 800, 1000)} alt="Plating" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" />
               </div>
               {/* Gold Caption */}
               <div className="absolute -bottom-8 -right-8 glass-card p-6 w-64 backdrop-blur-xl z-20 border-l-2 border-l-noir-primary hidden md:block">
                  <p className="font-serif text-noir-fg text-lg leading-tight">"Where precision meets primal fire."</p>
                  <span className="text-[10px] uppercase tracking-widest text-noir-primary mt-2 block">— Chef Antoine</span>
               </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="order-1 md:order-2 space-y-8">
              <span className="font-serif text-3xl text-noir-primary/30">I.</span>
              <h2 className="text-[clamp(32px,4vw,56px)] leading-tight font-serif text-white">
                The Anatomy of <br/>a Masterpiece.
              </h2>
              <div className="w-full h-[1px] bg-white/[0.04] relative">
                 <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-noir-primary to-transparent" />
              </div>
              <p className="text-white/60 leading-relaxed text-[15px]">
                Every dish at La Maison is a calculated risk, a balance between heritage and hyper-modern technique. We source exclusively from independent coastal farmers and deep-water foragers. 
              </p>
              <ul className="space-y-4 pt-4">
                 {[
                   { icon: Leaf, text: "Foraged botanicals from the Grecian hills." },
                   { icon: Diamond, text: "Truffles unearthed in the Umbrian dawn." },
                   { icon: ChefHat, text: "Technique refined in the world's most exacting kitchens." }
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm text-noir-muted">
                      <div className="w-8 h-8 rounded-full border border-noir-ring flex items-center justify-center bg-noir-surface text-noir-primary">
                        <item.icon size={14} />
                      </div>
                      <span className="border-b border-transparent hover:border-noir-primary transition-colors cursor-default">{item.text}</span>
                    </li>
                 ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Curated Bento Grid (Signature Dishes) */}
      <section className="py-24 bg-black/50 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="font-serif text-3xl text-noir-primary/30 block mb-4">II.</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">The Collection</h2>
            </div>
            <Link to="/menu" className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-widest text-noir-primary hover:text-white transition-colors group">
              Explore Menu
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {/* Main large card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="md:col-span-2 glass-card relative overflow-hidden group">
              <img src={img("1544025162-836e52c80325", 1000, 800)} alt="Dish" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-bg via-noir-bg/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-noir-primary mb-2">Signature</span>
                <h3 className="text-2xl font-serif text-white mb-2">Ibérico Pluma, Burnt Grape, Ash</h3>
                <p className="text-sm text-white/50 max-w-md">Cooked over ancient olive wood, resting on a bed of heavily charred grapes and a stark reduction of Pedro Ximénez.</p>
              </div>
            </motion.div>

            {/* Wine pairing card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} variants={FADE_UP} className="glass-card relative overflow-hidden group flex flex-col items-center justify-center text-center p-8 bg-black/40">
               <div className="w-16 h-16 rounded-full border border-noir-primary/30 flex items-center justify-center mb-6 text-noir-primary group-hover:scale-110 transition-transform duration-500">
                 <Wine size={24} />
               </div>
               <h3 className="text-xl font-serif text-noir-fg mb-4">The Cellar</h3>
               <p className="text-xs text-white/50 leading-relaxed mb-6">
                 A subterranean vault housing over 2,000 labels, focusing strictly on minimal intervention Mediterranean varietals.
               </p>
               <Link to="/menu" className="border-b border-noir-primary text-[10px] uppercase tracking-[0.2em] pb-1 hover:text-white transition-colors">Wine List</Link>
            </motion.div>

            {/* Small card 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={FADE_UP} className="glass-card relative overflow-hidden group p-8 flex flex-col justify-end">
              <img src={img("1600891964092-4b11e773be82", 500, 500)} alt="Starter" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
              <div className="relative z-10">
                <h3 className="text-xl font-serif text-white mb-1">Hiramasa Crudo</h3>
                <p className="text-xs text-white/50">White soy, fermented chili, finger lime.</p>
              </div>
            </motion.div>

            {/* Small card 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} variants={FADE_UP} className="md:col-span-2 glass-card relative p-8 flex border border-white/[0.02] bg-gradient-to-br from-white/[0.04] to-transparent items-center">
               <div className="flex-1">
                 <h3 className="text-2xl font-serif text-noir-fg mb-3">Tasting Menu Exclusivity</h3>
                 <p className="text-sm text-white/60 max-w-md line-clamp-2 mb-6">Experience the undisputed zenith of our kitchen. A 12-course blind progression through the land and sea, dictated entirely by the micro-seasons.</p>
                 <Link to="/reservations" className="text-[11px] uppercase tracking-widest font-medium py-3 px-6 bg-white text-black hover:bg-noir-primary transition-colors inline-block">Book The Chef's Counter</Link>
               </div>
               <div className="w-1/3 hidden md:flex justify-end">
                 <div className="w-24 h-24 rounded-full border border-dashed border-noir-primary/40 animate-[spin_60s_linear_infinite] flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full border border-noir-primary/20 flex flex-col items-center justify-center uppercase text-[8px] tracking-[0.3em] text-noir-primary text-center leading-tight">
                     <span>Epicurean</span>
                     <span className="text-white">Journey</span>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The Atmosphere Quote */}
      <section className="py-40 relative flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
             <Wine className="mx-auto text-noir-primary/50 mb-8" size={32} />
             <h2 className="text-[clamp(24px,4vw,48px)] font-serif leading-snug text-white/90">
               "Dining here feels less like a meal and more like being read a very elegant, very dangerous secret."
             </h2>
             <span className="block mt-8 text-[11px] uppercase tracking-[0.2em] text-noir-primary">
                — Le Guide Gastronomique
             </span>
             {/* Hairline gold underline */}
             <div className="w-12 h-[1px] bg-noir-primary mx-auto mt-6" />
           </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

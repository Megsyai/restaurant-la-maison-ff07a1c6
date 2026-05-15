
import React from 'react';
import { motion } from 'framer-motion';

const MENU_CATEGORIES = [
  {
    title: "To Commence",
    tagline: "Raw, cured, and lightly touched by smoke.",
    items: [
      { name: "Hiramasa Crudo", desc: "White soy, fermented green chili, finger lime, cold-pressed olive oil.", price: "28" },
      { name: "Wagyu Beef Tartare", desc: "Smoked bone marrow emulsion, cured egg yolk, house-made carta di musica.", price: "34" },
      { name: "Charred Octopus", desc: "Nduja vinaigrette, smoked potato, pickled sea fennel.", price: "32" },
      { name: "Heirloom Tomato Tart", desc: "Whipped feta, basil oil, aged balsamic caviar, black olive dust.", price: "24", vegan: true },
    ]
  },
  {
    title: "The Fire",
    tagline: "Proteins rested over ancient olive wood embers.",
    items: [
      { name: "Ibérico Pluma", desc: "Burnt grapes, ash, Pedro Ximénez reduction, roasted shallot.", price: "55" },
      { name: "Dry-Aged Duck Breast", desc: "Fig mostarda, endive, spiced duck jus.", price: "48" },
      { name: "Whole Dover Sole", desc: "Caper brown butter, preserved lemon, parsley root purée. (For Two)", price: "120" },
      { name: "Lamb Saddle", desc: "Smoked eggplant caponata, mint gremolata, lamb sauce.", price: "60" },
    ]
  },
  {
    title: "From the Earth",
    tagline: "Grains, pastas, and vegetables treated with reverence.",
    items: [
      { name: "Acquerello Risotto", desc: "Saffron, bone marrow, 36-month Parmigiano-Reggiano, gold leaf.", price: "38" },
      { name: "Hand-Rolled Cavatelli", desc: "Wild boar ragout, pecorino romano, black truffle shavings.", price: "42" },
      { name: "Coal-Roasted Leeks", desc: "Hazelnut romesco, sherry vinegar, cured egg yolk.", price: "22", vegan: true },
    ]
  },
  {
    title: "The Final Act",
    tagline: "Dark, bitter, sweet.",
    items: [
      { name: "Valrhona 70% Soufflé", desc: "Smoked vanilla bean ice cream, cacao nib tuile. (Allow 20 mins)", price: "24" },
      { name: "Olive Oil Cake", desc: "Lemon curd, rosemary Chantilly, pistachio crumb.", price: "18" },
      { name: "Artisanal Cheese Selection", desc: "Honeycomb, fig preserve, seeded crackers.", price: "30" },
    ]
  }
];

export default function Menu() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="pt-20 pb-32 max-w-5xl mx-auto px-6 md:px-10 w-full"
    >
      <div className="text-center mb-24">
        <span className="text-[12px] uppercase tracking-[0.3em] text-noir-primary mb-4 block">A La Carte</span>
        <h1 className="text-5xl md:text-7xl font-serif text-noir-fg mb-6">The Menu</h1>
        <div className="w-16 h-[1px] bg-noir-primary mx-auto mb-6" />
        <p className="max-w-xl mx-auto text-sm text-white/50">
          Rooted in tradition, stripped of pretense. A precise execution of Mediterranean seasonality.
        </p>
      </div>

      <div className="space-y-32">
        {MENU_CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12 text-center md:text-left">
              <span className="font-serif text-2xl text-noir-primary/40 block mb-2">{"IV".substring(0, (idx % 3) + 1)}.</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">{cat.title}</h2>
              <p className="text-[13px] uppercase tracking-widest text-noir-primary">{cat.tagline}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {cat.items.map((item, i) => (
                <div key={i} className="relative group flex flex-col">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-lg text-noir-fg tracking-wide bg-noir-bg pr-4 z-10">{item.name}</h3>
                    <div className="flex-1 border-b border-dashed border-white/[0.15] mx-4 relative top-[-6px]" />
                    <span className="text-white font-medium bg-noir-bg pl-4 z-10">${item.price}</span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed pr-8">{item.desc}</p>
                  {item.vegan && (
                     <span className="text-[9px] uppercase tracking-widest text-noir-primary mt-2 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-noir-primary block" /> Plant Based
                     </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 pt-16 border-t border-white/[0.04] text-center">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-6">A 20% gratuity is automatically added to parties of 6 or more.</p>
        <p className="text-xs text-white/40 mb-8">Please inform your server of any severe allergies. We politely decline substitutions.</p>
        <button className="btn-secondary">Download PDF Menu</button>
      </div>
    </motion.div>
  );
}

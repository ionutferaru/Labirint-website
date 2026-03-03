import { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

// Background image for menu header
const HEADER_IMG = "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=2000&auto=format&fit=crop";

const MENU_CATEGORIES = [
  {
    title: "Champagne",
    items: [
      { name: "Dom Pérignon Brut", desc: "Vintage excellence, floral and bright" },
      { name: "Dom Pérignon Rosé", desc: "Sensual, radiant, and complex" },
      { name: "Armand de Brignac Ace of Spades", desc: "Gold Brut, the pinnacle of luxury" },
      { name: "Louis Roederer Cristal", desc: "Exquisite texture, notes of white flowers" },
      { name: "Moët & Chandon Nectar Impérial", desc: "Vibrant, generous and alluring" }
    ]
  },
  {
    title: "Premium Spirits",
    items: [
      { name: "Macallan 25 Year Old", desc: "Single Malt Scotch Whisky" },
      { name: "Johnnie Walker Blue Label", desc: "Blended Scotch Whisky" },
      { name: "Clase Azul Tequila Reposado", desc: "Ultra-premium, aged 8 months" },
      { name: "Don Julio 1942", desc: "Extra Añejo Tequila" },
      { name: "Louis XIII Cognac", desc: "A blend of up to 1,200 eaux-de-vie" },
      { name: "Belvedere 10", desc: "Exceptionally rare vodka" }
    ]
  },
  {
    title: "Signature Cocktails",
    items: [
      { name: "The Labirint Reserve", desc: "Clase Azul, Agave, Fresh Lime, Gold Leaf" },
      { name: "Midnight Velvet", desc: "Belvedere, Espresso, Vanilla liqueur, Cacao" },
      { name: "Crimson Silk", desc: "Hendrick's, Pomegranate, Rose water, Citrus" },
      { name: "Smoked Old Fashioned", desc: "Woodford Reserve, Bitters, Hickory smoke" }
    ]
  }
];

export default function Menu() {
  useEffect(() => {
    document.title = "Menu | LABIRINT Gentlemen's Club";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      
      {/* Menu Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
          <img 
            src={HEADER_IMG} 
            alt="Bar selection" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-30 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-white tracking-widest mb-4"
          >
            THE CELLAR
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary text-xs tracking-[0.3em] uppercase"
          >
            Curated Pours & Vintages
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-white/60 font-sans text-sm italic">
            "Prices are available upon request. For bottle service and VIP packages, please consult your host."
          </p>
        </div>

        <div className="space-y-24">
          {MENU_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading title={category.title} centered={true} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-12">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border-b border-white/10 pb-4 group">
                    <h4 className="font-serif text-xl text-white group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-white/50 text-sm mt-1 font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

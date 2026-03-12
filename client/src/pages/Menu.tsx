import { motion } from "framer-motion";
import { Link } from "wouter";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const MenuSection = ({ title, items, delay }: { title: string; items: any[]; delay: number }) => (
  <FadeIn delay={delay}>
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-serif text-gold-gradient mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="group p-4 border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] hover:border-gold-light/30 transition-all duration-300 rounded-xl">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg md:text-xl font-serif text-white group-hover:text-gold-light transition-colors">{item.name}</h3>
              <span className="text-lg md:text-xl font-serif text-white group-hover:text-gold-light transition-colors">{item.price}</span>
            </div>
            {item.desc && (
              <p className="text-white/50 text-sm font-light leading-snug">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </FadeIn>
);

export default function Menu() {
  const menuData = [
    {
      title: "WHISKY (50ml)",
      items: [
        { name: "Jack Daniel’s", price: "35 lei" },
        { name: "Jameson", price: "30 lei" },
        { name: "Chivas Regal 12", price: "40 lei" },
        { name: "Johnnie Walker Black Label", price: "40 lei" },
      ]
    },
    {
      title: "WHISKY - Bottle (700ml)",
      items: [
        { name: "Jack Daniel’s", price: "450 lei" },
        { name: "Jameson", price: "350 lei" },
        { name: "Chivas Regal 12", price: "500 lei" },
        { name: "Black Label", price: "500 lei" },
      ]
    },
    {
      title: "VODKA (50ml)",
      items: [
        { name: "Absolut", price: "35 lei" },
        { name: "Finlandia", price: "35 lei" },
        { name: "Grey Goose", price: "45 lei" },
        { name: "Belvedere", price: "50 lei" },
      ]
    },
    {
      title: "VODKA - Bottle (700ml)",
      items: [
        { name: "Absolut", price: "350 lei" },
        { name: "Finlandia", price: "350 lei" },
        { name: "Grey Goose", price: "550 lei" },
        { name: "Belvedere", price: "600 lei" },
      ]
    },
    {
      title: "TEQUILA (50ml)",
      items: [
        { name: "Camino", price: "30 lei" },
        { name: "Patron", price: "35 lei" },
      ]
    },
    {
      title: "Wine - Bottle",
      items: [
        { name: "Castel Huniade", price: "160 lei" },
        { name: "Caii de la Letea", price: "180 lei" },
        { name: "Purcari 1827", price: "200 lei" },
        { name: "Recas Muse", price: "250 lei" },
      ]
    },
    {
      title: "LADIES DRINKS",
      items: [
        { name: "Asti Martini", price: "600 lei" },
        { name: "Angelli Cuvee Imperial", price: "500 lei" },
        { name: "Moet", price: "1300 lei" },
        { name: "Ladies Cocktail", price: "100 lei" },
        { name: "Pahar Sampanie + fi-GA", price: "150 lei" },
      ]
    },
    {
      title: "SHOTS",
      items: [
        { name: "B52", price: "30 lei" },
        { name: "Baby Guinness", price: "30 lei" },
        { name: "Kamikaze", price: "30 lei" },
        { name: "Goodfather", price: "30 lei" },
        { name: "Blowjob Shot", price: "30 lei" },
      ]
    },
    {
      title: "LONG DRINKS",
      items: [
        { name: "Vodka + Cola", price: "50 lei" },
        { name: "Vodka + Sprite", price: "50 lei" },
        { name: "Vodka + Red Bull", price: "50 lei" },
        { name: "Vodka + Tonic", price: "50 lei" },
        { name: "Whisky + Cola", price: "50 lei" },
        { name: "Whisky + Red Bull", price: "50 lei" },
        { name: "Gin + Tonic", price: "50 lei" },
        { name: "Gin + Tonic + Lime", price: "50 lei" },
        { name: "Gin + Tonic + Portocala", price: "50 lei" },
        { name: "Gin + Sprite + Lime", price: "50 lei" },
        { name: "Cuba Libre", price: "50 lei" },
      ]
    },
    {
      title: "BEER",
      items: [
        { name: "Heineken", price: "25 lei" },
        { name: "Ursus", price: "20 lei" },
        { name: "Corona", price: "30 lei" },
      ]
    },
    {
      title: "SOFT DRINKS",
      items: [
        { name: "Cola", price: "20 lei" },
        { name: "Pepsi", price: "20 lei" },
        { name: "Sprite", price: "20 lei" },
        { name: "Santal (1L)", price: "35 lei" },
        { name: "Apa Plata 0.5L", price: "15 lei" },
        { name: "Apa Minerala 1L", price: "25 lei" },
      ]
    },
    {
      title: "Energy Drinks",
      items: [
        { name: "Red Bull", price: "25 lei" },
        { name: "fi-GA", price: "35 lei" },
      ]
    }
  ];

  return (
    <div className="w-full pt-24 pb-16 px-4 min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-900/15 via-black to-black"></div>
      
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">The Menu</h1>
            <div className="w-16 h-[1px] bg-gold-gradient mx-auto mb-6"></div>
            <p className="text-white/60 tracking-widest uppercase text-sm">Curated Selection</p>
          </div>
        </FadeIn>

        <div className="space-y-8 md:space-y-10">
          {menuData.map((section, index) => (
            <MenuSection 
              key={index} 
              title={section.title} 
              items={section.items} 
              delay={0.15 + (index * 0.08)} 
            />
          ))}
        </div>

        <FadeIn delay={0.7}>
          <div className="mt-16 text-center">
            <Link href="/">
              <a className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white uppercase tracking-widest text-sm hover:bg-white/5 transition-colors rounded-lg">
                <span className="text-gold-light">←</span> Back to Home
              </a>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

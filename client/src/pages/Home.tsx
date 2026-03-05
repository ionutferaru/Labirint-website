import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import SectionHeading from "@/components/ui/SectionHeading";

// Unsplash Image References
const HERO_IMG = "images/IMG_5841.jpeg"; // dark luxury champagne
const ABOUT_IMG = "images/5B7B9FB3-7FBC-4338-B67A-AB2537A51C3A.png"; // elegant dark lounge
const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595919318182-14a51e604f2f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=600&auto=format&fit=crop",
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  useEffect(() => {
    document.title = "Labirint Gentlemen's Club - Strip Club Bucharest | VIP Nightlife";
  }, []);

  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-20" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={HERO_IMG}
            alt="Luxury Club Ambiance" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-30 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-widest mb-6 drop-shadow-2xl"
          >
            ENTER THE <span className="text-gold-gradient">LABIRINT</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/80 font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The epitome of luxury, discretion, and unmatched entertainment.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a 
              href="https://wa.me/YOUR_NUMBER_HERE" 
              target="_blank"
              className="inline-block px-10 py-4 bg-green-500 text-white font-sans tracking-widest uppercase text-sm hover:bg-green-600 transition-all duration-500 hover-glow"
            >
              Contact via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-black relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <img 
                src={ABOUT_IMG} 
                alt="Elegant Lounge" 
                className="w-full h-auto aspect-[4/5] object-cover border border-white/10 shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeading title="Unrivaled Elegance" subtitle="The Experience" centered={false} />
              
              <motion.div variants={fadeUp} className="space-y-6 text-white/70 font-sans leading-loose text-sm md:text-base">
                <p>
                  LABIRINT transcends the traditional gentlemen's club experience. Designed for those who demand excellence, we offer an opulent sanctuary where discretion meets breathtaking entertainment.
                </p>
                <p>
                  From the moment you step through our doors, you are enveloped in an atmosphere of curated luxury. Enjoy world-class spirits, intimate VIP lounges, and the company of the city's most captivating performers.
                </p>
                <Link href="/menu" className="inline-block mt-8 text-primary border-b border-primary pb-1 tracking-widest uppercase text-xs hover:text-white hover:border-white transition-colors duration-300">
                  Explore Our Menu
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIP & EVENTS */}
      <section id="events" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Private Events" subtitle="Exclusive" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Corporate", desc: "Sophisticated settings for discerning professionals and client entertainment." },
              { title: "Bachelor Parties", desc: "Unforgettable celebrations tailored to your exact specifications." },
              { title: "Private Suites", desc: "Ultimate discretion in our secluded, fully-serviced VIP lounges." }
            ].map((event, i) => (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group p-10 bg-black border border-white/5 hover:border-primary/50 transition-all duration-500 cursor-default"
              >
                <div className="h-12 w-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="text-primary text-xl font-serif">{i + 1}</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">{event.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <SectionHeading title="The Atmosphere" subtitle="Gallery" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {GALLERY_IMGS.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative group overflow-hidden ${i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={src} 
                  alt="Gallery image" 
                  className="w-full h-full object-cover aspect-square md:aspect-auto transform group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl text-white mb-2">Contact</h2>
              <p className="text-primary text-xs tracking-[0.2em] uppercase mb-10">
                Reach out via WhatsApp for reservations or inquiries.
              </p>
              <a 
                href="https://wa.me/YOUR_NUMBER_HERE" 
                target="_blank"
                className="inline-block px-10 py-4 bg-green-500 text-white font-sans tracking-widest uppercase text-sm hover:bg-green-600 transition-all duration-500 hover-glow"
              >
                WhatsApp
              </a>
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="p-10 border border-white/10 bg-black/50 backdrop-blur-sm">
                <h3 className="font-serif text-2xl text-white mb-8">Location & Rules</h3>
                
                <div className="space-y-6 text-white/70 text-sm">
                  <div>
                    <h4 className="text-primary font-semibold tracking-wider uppercase mb-1">Address</h4>
                    <p>Clopotarii Vechi 3</p>
                  </div>
                  
                  <div>
                    <h4 className="text-primary font-semibold tracking-wider uppercase mb-1">Dress Code</h4>
                    <p>Smart Elegant. No sportswear, shorts, or open-toe shoes. Management reserves the right of admission.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-primary font-semibold tracking-wider uppercase mb-1">Entry Policy</h4>
                    <p>Strictly 21+ with valid physical ID. Discretion guaranteed.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}

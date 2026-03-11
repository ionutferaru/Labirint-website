import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImg from "@/assets/images/hero.png";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import gallery4 from "@/assets/images/gallery-4.png";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="LABIRINT Club Interior"
            className="w-full h-full object-cover opacity-60 scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 mt-20">

          <motion.p
            initial={{ opacity: 0, tracking: "0em" }}
            animate={{ opacity: 1, tracking: "0.2em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-gold-light text-sm md:text-base uppercase mb-4"
          >
            Premium Nightlife Experience
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-[Cinzel] text-white mb-6 tracking-wider drop-shadow-2xl"
          >
            ENTER LABIRINT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-white/80 font-light tracking-wide mb-4"
          >
            Luxury Gentlemen's Club in Bucharest
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm md:text-base text-gold-light tracking-[0.25em] uppercase mb-12"
          >
            VIP Nightlife • Private Events • Bachelor Parties
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gold-gradient text-black font-semibold tracking-widest uppercase text-sm hover:scale-105 transition-transform duration-300"
            >
              Reserve Now
            </a>

            <Link href="/menu">
              <a className="px-8 py-4 border border-white/30 text-white font-semibold tracking-widest uppercase text-sm hover:bg-white/10 transition-colors duration-300">
                View Menu
              </a>
            </Link>
          </motion.div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 bg-black relative">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-gold-gradient mb-8">
              About LABIRINT
            </h2>

            <div className="w-12 h-[1px] bg-gold-gradient mx-auto mb-10"></div>

            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
              LABIRINT is an exclusive gentlemen’s club offering a premium nightlife experience in Bucharest.
              Enjoy signature drinks, elegant atmosphere, beautiful performers and unforgettable nights in one of the most exclusive VIP nightlife destinations in the city.
            </p>

            <p className="mt-8 text-gold-light/60 tracking-widest uppercase text-sm font-semibold">
              18+ Only
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRIVATE EVENTS */}
      <section id="events" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>

            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Private Events & Bachelor Parties
            </h2>

            <ul className="space-y-6 text-white/70 text-lg">
              <li>• Bachelor Parties</li>
              <li>• Private Events</li>
              <li>• Birthday Celebrations</li>
              <li>• VIP Group Nights</li>
            </ul>

          </FadeIn>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">

          <h2 className="text-4xl md:text-5xl font-serif text-center text-white mb-16">
            The Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative aspect-square overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
import { Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">

          {/* Brand /}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-3xl tracking-[0.2em] text-gold-gradient mb-2">
              LABIRINT
            </span>

            <span className="text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
              Gentlemen's Club
            </span>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium nightlife experience in the heart of Bucharest.
              Luxury atmosphere, VIP tables and unforgettable nights.
            </p>
          </div>

          {/ Contact /}
          <div className="flex flex-col items-center md:items-start space-y-5">

            <h4 className="font-serif text-xl text-white tracking-widest mb-2">
              Contact
            </h4>

            <a
              href="tel:+40768526104"
              className="flex items-center space-x-3 text-white/70 hover:text-primary transition-colors text-sm"
            >
              <Phone size={16} className="text-primary" />
              <span>+40 768 526 104</span>
            </a>

            <div className="flex items-center space-x-3 text-white/70 text-sm">
              <MapPin size={16} className="text-primary" />
              <span>Clopotarii Vechi 3, Bucharest</span>
            </div>

            <a
              href="https://www.instagram.com/club.lab1rint"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/70 hover:text-primary transition-colors text-sm"
            >
              <Instagram size={16} className="text-primary" />
              <span>@club_lab1rint</span>
            </a>

          </div>

          {/ Map /}
          <div className="flex flex-col items-center md:items-start">

            <h4 className="font-serif text-xl text-white tracking-widest mb-6">
              Location
            </h4>

            <div className="relative w-full aspect-video border border-primary/20 overflow-hidden">

              <iframe
                title="Labirint Location"
                src="https://www.google.com/maps?q=Clopotarii+Vechi+3+Bucuresti&output=embed"
                className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-75"
                loading="lazy"
              ></iframe>

              <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

              <a
                href="https://maps.google.com/?q=Clopotarii+Vechi+3+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1 text-[11px] tracking-widest uppercase bg-black/70 border border-primary/40 text-white hover:bg-primary hover:text-black transition-all"
              >
                Open Maps
              </a>

            </div>

          </div>

        </div>

        {/ Bottom bar */}

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40 tracking-wider">
          <p>
            © {new Date().getFullYear()} LABIRINT Gentlemen's Club
          </p>
        </div>

      </div>
    </footer>
  );
}
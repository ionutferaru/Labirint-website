import { Link } from "wouter";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-3xl tracking-[0.2em] text-gold-gradient mb-2">
              LABIRINT
            </span>
            <span className="text-xs tracking-[0.3em] text-white/50 uppercase mb-6">
              Gentlemen's Club
            </span>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              The premier destination for luxury entertainment, sophisticated ambiance, and unforgettable nights.
            </p>
          </div>

          {/* Contact Info with Map */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-serif text-xl text-white tracking-widest mb-2">Contact</h4>
            <a href="tel:+1234567890" className="flex items-center space-x-3 text-white/70 hover:text-primary transition-colors text-sm">
              <Phone size={16} className="text-primary" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:vip@labirint.com" className="flex items-center space-x-3 text-white/70 hover:text-primary transition-colors text-sm">
              <Mail size={16} className="text-primary" />
              <span>vip@labirint.com</span>
            </a>
            <div className="flex items-center space-x-3 text-white/70 text-sm">
              <MapPin size={16} className="text-primary" />
              <span>Clopotarii Vechi 3, Bucuresti</span>
            </div>
            
            {/* Google Maps Iframe */}
            <iframe
              title="Labirint Location"
              src="https://www.google.com/maps?q=Clopotarii+Vechi+3+Bucuresti&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md mt-4"
            />
          </div>

          {/* Hours & Social */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-serif text-xl text-white tracking-widest mb-2">Hours</h4>
            <div className="text-white/70 text-sm space-y-2 text-center md:text-left">
              <p>Mon - Wed: 10:00 PM - 4:00 AM</p>
              <p>Thu - Sat: 10:00 PM - 6:00 AM</p>
              <p>Sunday: Closed for Private Events</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 tracking-wider">
          <p>&copy; {new Date().getFullYear()} LABIRINT Gentlemen's Club. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

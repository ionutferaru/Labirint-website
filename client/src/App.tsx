import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/40768526104?text=Hello!%20I%20would%20like%20to%20book%20a%20VIP%20table%20at%20LABIRINT%20Gentlemen's%20Club%20Bucharest."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 px-7 py-4 rounded-full text-black font-semibold tracking-widest text-sm uppercase shadow-2xl transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg,#d4af37,#f6e27a,#d4af37)",
        boxShadow: "0 0 20px rgba(212,175,55,0.6)"
      }}
    >
      💎 BOOK VIP TABLE
    </a>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Router />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
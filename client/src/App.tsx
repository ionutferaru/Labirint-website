import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import WhatsAppButton from "@/components/ui/WhatsAppButton"; // șters

// Pages
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />

      {/* VIP GOLD Floating Button */}
      <a
        href="https://wa.me/40768526104?text=Hello!%20I%20want%20to%20book%20a%20VIP%20table%20at%20LABIRINT%20Gentlemen's%20Club%20in%20Bucharest."
        target="_blank"
        rel="noopener noreferrer"
        className="vip-button"
      >
        Book VIP Table
      </a>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
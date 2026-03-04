import React from "react";

const menu = [
  {
    category: "WHISKY (50ml)",
    items: [
      { name: "Jack Daniel’s", price: "35 lei" },
      { name: "Jameson", price: "30 lei" },
      { name: "Chivas Regal 12", price: "40 lei" },
      { name: "Johnnie Walker Black Label", price: "40 lei" },
    ],
  },
  {
    category: "VODKA (50ml)",
    items: [
      { name: "Absolut", price: "35 lei" },
      { name: "Finlandia", price: "35 lei" },
      { name: "Grey Goose", price: "45 lei" },
      { name: "Belvedere", price: "50 lei" },
    ],
  },
  {
    category: "GIN (50ml)",
    items: [
      { name: "Beefeater", price: "30 lei" },
      { name: "Tanqueray", price: "35 lei" },
      { name: "Hendrick's", price: "40 lei" },
    ],
  },
  {
    category: "TEQUILA (50ml)",
    items: [
      { name: "Jose Cuervo", price: "30 lei" },
      { name: "Patrón Silver", price: "50 lei" },
    ],
  },
  {
    category: "RON (50ml)",
    items: [
      { name: "Bacardi", price: "30 lei" },
      { name: "Havana Club", price: "35 lei" },
    ],
  },
  {
    category: "COCKTAILS",
    items: [
      { name: "Mojito", price: "40 lei" },
      { name: "Margarita", price: "45 lei" },
      { name: "Long Island Iced Tea", price: "50 lei" },
    ],
  },
  {
    category: "CHAMPAGNE / VIN",
    items: [
      { name: "Moët & Chandon", price: "350 lei" },
      { name: "Veuve Clicquot", price: "400 lei" },
      { name: "Vin roșu / alb / rose", price: "100 lei sticla" },
    ],
  },
  {
    category: "SOFT DRINKS",
    items: [
      { name: "Coca-Cola / Fanta / Sprite", price: "10 lei" },
      { name: "Apă minerală / plată", price: "10 lei" },
    ],
  },
  {
    category: "VIP TABLES & SERVICES",
    items: [
      { name: "Rezervare masă VIP", price: "200 lei" },
      { name: "Șampanie la masă", price: "la cerere" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-serif text-white mb-10">Our Menu</h1>
      {menu.map((section, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl text-gold-gradient font-semibold mb-6">
            {section.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-black/50 border border-white/10 rounded-lg flex justify-between"
              >
                <span className="text-white">{item.name}</span>
                <span className="text-white font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

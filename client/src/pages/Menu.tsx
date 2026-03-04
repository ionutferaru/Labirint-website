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
    category: "WHISKY - STICLA (700ml)",
    items: [
      { name: "Jack Daniel’s", price: "400 lei" },
      { name: "Jameson", price: "350 lei" },
      { name: "Chivas Regal 12", price: "500 lei" },
      { name: "Black Label", price: "500 lei" },
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
    category: "VODKA - STICLA (700ml)",
    items: [
      { name: "Absolut", price: "350 lei" },
      { name: "Finlandia", price: "350 lei" },
      { name: "Grey Goose", price: "550 lei" },
      { name: "Belvedere", price: "600 lei" },
    ],
  },
  {
    category: "TEQUILA (50ml)",
    items: [
      { name: "Camino", price: "30 lei" },
      { name: "Patron", price: "35 lei" },
    ],
  },
  {
    category: "VIN - STICLA",
    items: [
      { name: "Castel Huniade", price: "160 lei" },
      { name: "Caii de la Letea", price: "180 lei" },
      { name: "Purcari 1827", price: "200 lei" },
      { name: "Recas Muse", price: "250 lei" },
    ],
  },
  {
    category: "LADIES DRINKS",
    items: [
      { name: "Asti Martini", price: "600 lei" },
      { name: "Angelli Cuvee Imperial", price: "500 lei" },
      { name: "Moet", price: "1300 lei" },
      { name: "Ladies Cocktail", price: "100 lei" },
      { name: "Pahar Sampanie + fi-GA", price: "150 lei" },
    ],
  },
  {
    category: "SHOTS",
    items: [
      { name: "B52", price: "30 lei" },
      { name: "Baby Guinness", price: "30 lei" },
      { name: "Kamikaze", price: "30 lei" },
      { name: "Goodfather", price: "30 lei" },
      { name: "Blowjob Shot", price: "30 lei" },
    ],
  },
  {
    category: "LONG DRINKS",
    items: [
      { name: "Vodka + Cola", price: "45 lei" },
      { name: "Vodka + Sprite", price: "45 lei" },
      { name: "Vodka + Red Bull", price: "45 lei" },
      { name: "Vodka + Tonic", price: "45 lei" },
      { name: "Whisky + Cola", price: "45 lei" },
      { name: "Whisky + Red Bull", price: "45 lei" },
      { name: "Gin + Tonic", price: "45 lei" },
      { name: "Gin + Tonic + Lime", price: "45 lei" },
      { name: "Gin + Tonic + Portocala", price: "45 lei" },
      { name: "Gin + Sprite + Lime", price: "45 lei" },
      { name: "Cuba Libre", price: "45 lei" },
    ],
  },
  {
    category: "BERE",
    items: [
      { name: "Heineken", price: "25 lei" },
      { name: "Ursus", price: "20 lei" },
      { name: "Corona", price: "30 lei" },
    ],
  },
  {
    category: "SOFT DRINKS",
    items: [
      { name: "Cola", price: "20 lei" },
      { name: "Pepsi", price: "20 lei" },
      { name: "Sprite", price: "20 lei" },
      { name: "Santal (1L)", price: "35 lei" },
    ],
  },
  {
    category: "APA",
    items: [
      { name: "Apa Plata 0.5L", price: "15 lei" },
      { name: "Apa Minerala 1L", price: "25 lei" },
    ],
  },
  {
    category: "ENERGIZANT",
    items: [
      { name: "Red Bull", price: "25 lei" },
      { name: "fi-GA", price: "35 lei" },
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

// js/buildData.js
export const carDatabase = [
  { id: "bmw-e46-330i", make: "BMW", model: "3 Series", generation: "E46", trim: "330i", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80" },
  { id: "honda-civic-fk8", make: "Honda", model: "Civic Type R", generation: "FK8", trim: "2.0T", img: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800&q=80" },
  { id: "toyota-gr86", make: "Toyota", model: "GR86", generation: "ZN8", trim: "Premium", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80" }
];

export const buildStyles = [
  { id: "performance", name: "Performance", icon: "🏁" },
  { id: "oem-plus", name: "OEM+", icon: "⚪" },
  { id: "street", name: "Street", icon: "🛣️" },
  { id: "show-car", name: "Show Car", icon: "🔥" },
  { id: "stance", name: "Stance", icon: "📐" },
  { id: "daily", name: "Daily", icon: "🚗" }
];

export const modificationsData = {
  wheels: [
    { id: "w-oem", name: "OEM Wheels", spec: "Factory Spec", price: 0, img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=300&q=80" },
    { id: "w-bbs-lm", name: "BBS LM", spec: "18 x 8.5 ET35", price: 2200, img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=300&q=80" },
    { id: "w-te37", name: "VOLK TE37", spec: "18 x 9.5 ET22", price: 3400, img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=300&q=80" }
  ],
  tires: [
    { id: "t-michelin-ps4", name: "Michelin Pilot Sport 4S", spec: "235/40/R18", price: 900, img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=300&q=80" }
  ],
  suspension: [
    { id: "s-kw-v3", name: "KW Coilovers Variant 3", spec: "Adjustable Damping", price: 2100, img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=300&q=80" }
  ],
  exhaust: [
    { id: "e-remus", name: "REMUS Cat-Back Exhaust", spec: "Stainless Steel", price: 1400, img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=300&q=80" }
  ]
};

export const styleRecommendations = {
  performance: [
    { step: "1. Tires", desc: "Improve grip and power delivery." },
    { step: "2. Suspension", desc: "Sharpen cornering dynamics." },
    { step: "3. Brakes & Tune", desc: "Handle higher speed safely." }
  ],
  default: [
    { step: "1. Tires", desc: "Essential foundation for driving feel." },
    { step: "2. Suspension", desc: "Improves stance and body control." },
    { step: "3. Wheels", desc: "Completes the aesthetic look." }
  ]
};

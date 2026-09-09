export const photoIds = {
  ganesh: "https://m.media-amazon.com/images/I/51DSGUeVt4L._SY300_SX300_QL70_ML2_.jpg",
  hanuman: "1564984069790-2d0767de5856",
  krishna: "1641730259879-ad98e7db7bcb",
  shiva: "1614836978715-21d79e427450",
  durga: "1761471658017-3d58f3840e6f",
};

export const photoUrl = (cat, w = 500) => {
  const id = photoIds[cat];
  // If it's the full Amazon link, return it. Otherwise, build the Unsplash URL.
  return id.startsWith("http") 
    ? id 
    : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
};

export const categories = [
  { cat: "ganesh", name: "Ganesh", tagline: "Vighnaharta, remover of obstacles" },
  { cat: "hanuman", name: "Hanuman", tagline: "Strength, devotion and courage" },
  { cat: "krishna", name: "Krishna", tagline: "The playful, divine flute-player" },
  { cat: "shiva", name: "Shiva", tagline: "The ascetic, lord of transformation" },
  { cat: "durga", name: "Durga", tagline: "Shakti, the fierce protective mother" },
];

export const products = [
  { cat: "ganesh", name: "Ekdant Ganesh", mat: "White Marble · 12 in", price: "₹6,800", tag: "Bestseller" },
  { cat: "ganesh", name: "Modak Ganpati", mat: "Panchdhatu · 8 in", price: "₹4,200" },
  { cat: "ganesh", name: "Bal Ganesh Playing", mat: "Fibre, Gold Finish · 10 in", price: "₹2,600" },
  { cat: "ganesh", name: "Riddhi-Siddhi Ganesh", mat: "Brass · 14 in", price: "₹7,900", tag: "Temple Size" },
  { cat: "hanuman", name: "Panchmukhi Hanuman", mat: "Brass · 16 in", price: "₹9,400", tag: "Bestseller" },
  { cat: "hanuman", name: "Veer Hanuman Flying", mat: "Marble · 13 in", price: "₹8,100" },
  { cat: "hanuman", name: "Bal Hanuman with Gada", mat: "Fibre · 9 in", price: "₹2,300" },
  { cat: "hanuman", name: "Sankat Mochan Hanuman", mat: "Panchdhatu · 11 in", price: "₹5,600" },
  { cat: "krishna", name: "Radha Krishna Yugal", mat: "White Marble · 15 in", price: "₹11,500", tag: "Bestseller" },
  { cat: "krishna", name: "Bansuri Krishna Standing", mat: "Brass · 10 in", price: "₹4,900" },
  { cat: "krishna", name: "Laddu Gopal", mat: "Panchdhatu · 6 in", price: "₹3,200" },
  { cat: "krishna", name: "Krishna on Lotus", mat: "Marble · 12 in", price: "₹7,300" },
  { cat: "shiva", name: "Mahadev Meditating", mat: "Black Marble · 14 in", price: "₹9,900", tag: "Bestseller" },
  { cat: "shiva", name: "Shiv Parivar", mat: "Panchdhatu · 12 in", price: "₹8,700" },
  { cat: "shiva", name: "Nataraja Cosmic Dance", mat: "Brass · 16 in", price: "₹10,200" },
  { cat: "shiva", name: "Shivling with Naag", mat: "Marble · 9 in", price: "₹5,400" },
  { cat: "durga", name: "Ashtabhuja Durga", mat: "Marble · 18 in", price: "₹13,600", tag: "Temple Size" },
  { cat: "durga", name: "Sherawali Maa on Lion", mat: "Brass · 12 in", price: "₹7,800" },
  { cat: "durga", name: "Durga Mahishasura Mardini", mat: "Panchdhatu · 14 in", price: "₹9,100", tag: "Bestseller" },
  { cat: "durga", name: "Maa Durga Face Panel", mat: "Fibre, Gold Finish · 10 in", price: "₹3,400" },
];
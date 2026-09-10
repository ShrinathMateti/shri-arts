export const photoIds = {
  ganesh: "https://m.media-amazon.com/images/I/81fJZEVmvtL._AC_UF894,1000_QL80_.jpg",
  hanuman: "https://m.media-amazon.com/images/I/81v2v+iF+HL._SL1500_.jpg",
  krishna: "https://m.media-amazon.com/images/I/71hCiovx5AL._SL1402_.jpg",
  shiva: "https://m.media-amazon.com/images/I/71b-PBOQVuL._SL1500_.jpg",
  durga: "https://m.media-amazon.com/images/I/61HfWmpZYrL._AC_UF350,350_QL80_.jpg",
};

export const photoUrl = (cat, w = 500) => {
  const id = photoIds[cat];
 
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
  { cat: "ganesh", name: "Ekdant Ganesh", mat: "Marble · 12 in", price: "₹6,800", tag: "Bestseller",img: "https://m.media-amazon.com/images/I/81fJZEVmvtL._AC_UF894,1000_QL80_.jpg" },
  { cat: "ganesh", name: "Modak Ganpati", mat: "Panchdhatu · 8 in", price: "₹4,200",img:"https://m.media-amazon.com/images/I/71Yl26JeTpL._SL1254_.jpg" },
  { cat: "ganesh", name: "Bal Ganesh", mat: "Fibre, Gold Finish · 10 in", price: "₹2,600",img:"https://m.media-amazon.com/images/I/51J4xettZ0L._SX679_.jpg" },
  { cat: "ganesh", name: "Riddhi-Siddhi Ganesh", mat: "Brass · 14 in", price: "₹7,900", tag: "Bestseller" ,img:"https://m.media-amazon.com/images/I/815Vmblsf-L._SL1500_.jpg"},
  { cat: "hanuman", name: "Panchmukhi Hanuman", mat: "Brass · 16 in", price: "₹9,400", tag: "Bestseller" ,img:"https://m.media-amazon.com/images/I/81v2v+iF+HL._SL1500_.jpg"},
  { cat: "hanuman", name: "Veer Hanuman Flying", mat: "Marble · 13 in", price: "₹8,100",img:"https://m.media-amazon.com/images/I/71fN51LtLeL._SL1500_.jpg" },
  { cat: "hanuman", name: "Bal Hanuman with Gada", mat: "Fibre · 9 in", price: "₹2,300",img:"https://m.media-amazon.com/images/I/71FkVqFH9RL._SL1254_.jpg"},
  { cat: "hanuman", name: "Sankat Mochan Hanuman", mat: "Panchdhatu · 11 in", price: "₹5,600" ,img:"https://m.media-amazon.com/images/I/81TA8mDET+L._SL1500_.jpg"},
  { cat: "krishna", name: "Radha Krishna Yugal", mat: "Marble · 15 in", price: "₹11,500", tag: "Bestseller",img:"https://m.media-amazon.com/images/I/71hCiovx5AL._SL1402_.jpg" },
  { cat: "krishna", name: "Bansuri Krishna Standing", mat: "Brass · 10 in", price: "₹4,900" ,img:"https://m.media-amazon.com/images/I/71n-QlNI-XL._SL1500_.jpg"},
  { cat: "krishna", name: "Laddu Gopal", mat: "Panchdhatu · 6 in", price: "₹3,200",img:"https://m.media-amazon.com/images/I/71fRfXWDXaL._SL1500_.jpg" },
  { cat: "krishna", name: "Krishna on Lotus", mat: "Marble · 12 in", price: "₹7,300" ,img:"https://m.media-amazon.com/images/I/61H3b2qOU-L._SL1100_.jpg"},
  { cat: "shiva", name: "Mahadev Meditating", mat: "Marble · 14 in", price: "₹9,900", tag: "Bestseller",img:"https://m.media-amazon.com/images/I/71b-PBOQVuL._SL1500_.jpg" },
  { cat: "shiva", name: "Shiv Parivar", mat: "Panchdhatu · 12 in", price: "₹8,700" ,img:"https://m.media-amazon.com/images/I/71WMoD7f5KL._SL1312_.jpg"},
  { cat: "shiva", name: "Nataraja Cosmic Dance", mat: "Brass · 16 in", price: "₹10,200",img:"https://m.media-amazon.com/images/I/81AP7ethAsL._SL1500_.jpg" },
  { cat: "shiva", name: "Shivling with Naag", mat: "Marble · 9 in", price: "₹5,400",img:"https://m.media-amazon.com/images/I/51wK0OeL0tL._SL1080_.jpg" },
  { cat: "durga", name: "Ashtabhuja Durga", mat: "Marble · 18 in", price: "₹13,600", tag: "Bestseller",img:"https://m.media-amazon.com/images/I/61HfWmpZYrL._AC_UF350,350_QL80_.jpg" },
  { cat: "durga", name: "Sherawali Maa on Lion", mat: "Brass · 12 in", price: "₹7,800" ,img:"https://m.media-amazon.com/images/I/71NH+CX1XQL._SL1254_.jpg"},
  { cat: "durga", name: "Durga Mahishasura Mardini", mat: "Panchdhatu · 14 in", price: "₹9,100", tag: "Bestseller" ,img:"https://m.media-amazon.com/images/I/71QCpItzfrL._SL1500_.jpg"},
  { cat: "durga", name: "Maa Durga Face Panel", mat: "Fibre, Gold Finish · 10 in", price: "₹3,400",img:"https://m.media-amazon.com/images/I/51YNvTJX5aL.jpg" }
];
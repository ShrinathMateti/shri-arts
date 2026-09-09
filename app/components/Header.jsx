"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav-row">
        <div className="brand">
          <svg className="mark" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" stroke="#C6972E" strokeWidth="1.5" />
            <path
              d="M24 10 L24 38 M14 16 Q24 10 34 16 M12 26 Q24 20 36 26 M15 33 Q24 27 33 33"
              stroke="#6E1423"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>
          <div className="brand-text">
            Shri Arts
            <span>MURTI ATELIER &amp; SHOWROOM</span>
          </div>
        </div>

        <nav className={`links${open ? " open" : ""}`}>
          <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
          <a href="#collection" onClick={() => setOpen(false)}>Collection</a>
          <a href="#craft" onClick={() => setOpen(false)}>Craftsmanship</a>
          <a href="#custom" onClick={() => setOpen(false)}>Custom Order</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">Enquire Now</a>

        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

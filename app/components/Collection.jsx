"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, products, photoUrl } from "../data";

const filters = [
  { key: "all", label: "All Murtis" },
  { key: "ganesh", label: "Ganesh" },
  { key: "hanuman", label: "Hanuman" },
  { key: "krishna", label: "Krishna" },
  { key: "shiva", label: "Shiva" },
  { key: "durga", label: "Durga" },
];

export default function Collection() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? products : products.filter((p) => p.cat === active);

  const selectCategory = (cat) => {
    setActive(cat);
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ---------- category strip ---------- */}
      <section className="cat-section" id="categories">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-line">
              <span className="rule"></span>Choose a deity<span className="rule"></span>
            </div>
            <h2>Five collections, one lineage of craft</h2>
            <p>
              Every category spans multiple sizes, materials and finishes — from a compact
              desk murti to a temple centrepiece.
            </p>
          </div>

          <div className="cat-grid">
            {categories.map((c) => (
              <div
                key={c.cat}
                className={`cat-card${active === c.cat ? " active" : ""}`}
                onClick={() => selectCategory(c.cat)}
              >
                <div className="cat-photo">
                  <Image
                    src={photoUrl(c.cat, 200)}
                    alt={`${c.name} murti`}
                    fill
                    sizes="64px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3>{c.name}</h3>
                <span>{c.tagline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- products ---------- */}
      <section className="products" id="collection">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-line">
              <span className="rule"></span>The collection<span className="rule"></span>
            </div>
            <h2>Every murti, by category</h2>
            <p>
              Filter by deity to explore sizes, materials and finishes across our full
              showroom inventory.
            </p>
          </div>

          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn${active === f.key ? " active" : ""}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="prod-grid">
            {visible.map((p, i) => (
              <div className="prod-card" key={`${p.cat}-${i}`}>
                <div className="prod-media">
                  {p.tag && <span className="prod-tag">{p.tag}</span>}
                  <Image
                    src={photoUrl(p.cat, 500)}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 980px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="prod-body">
                  <h3>{p.name}</h3>
                  <div className="prod-meta">{p.mat}</div>
                  <div className="prod-foot">
                    <div className="prod-price">
                      {p.price}
                      <span>incl. packaging</span>
                    </div>
                    <button className="icon-btn" aria-label={`Enquire about ${p.name}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

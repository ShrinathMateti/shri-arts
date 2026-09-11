import Image from "next/image";

export default function CraftBand() {
  return (
    <section className="band" id="craft">
      <div className="wrap">
        <div>
          <div className="eyebrow-line" style={{ color: "var(--saffron)" }}>
            <span className="rule" style={{ background: "var(--saffron)" }}></span>Our craft
          </div>
          <h2>Every murti passes through six pairs of hands</h2>
          <p>
            From clay model to final gilding, our karigars in Solapur follow Shilpa Shastra
            proportions — the traditional canon of measurement for sacred sculpture.
          </p>
          <div className="feat-list">
            <div className="feat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12l6 6L20 6" />
              </svg>
              <div>
                <h4>Shastra-accurate proportions</h4>
                <p>Measurements checked against traditional iconometric texts.</p>
              </div>
            </div>
            <div className="feat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12l6 6L20 6" />
              </svg>
              <div>
                <h4>Marble, brass, panchdhatu &amp; fibre</h4>
                <p>Choose the material that suits your temple, home or gifting need.</p>
              </div>
            </div>
            <div className="feat-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12l6 6L20 6" />
              </svg>
              <div>
                <h4>Insured, cushioned shipping</h4>
                <p>Every murti travels in a custom wooden crate with foam bracing.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="band-art">
          <Image
            src="https://images.unsplash.com/photo-1422246358533-95dcd3d48961?auto=format&fit=crop&w=800&q=80"
            alt="Artisan's hands shaping a murti in clay"
            fill
            sizes="(max-width: 980px) 90vw, 500px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

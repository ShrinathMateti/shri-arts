import Image from "next/image";
import { photoUrl } from "../data";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow-line">
            <span className="rule"></span>Handcrafted since three generations
          </div>
          <h1>Murtis carved with devotion, finished for your home.</h1>
          <p className="lead">
            Here in Solapur, we believe a murti is more than just art—it is the soul of your sacred space. Our local artisans pour their hearts into crafting beautiful idols of Ganesh, Shiva, and other beloved deities, shaping every piece of marble, brass, and panchdhatu with patience, prayer, and pure devotion.
          </p>
          <div className="hero-ctas">
            <a href="#collection" className="btn-primary">Browse the Collection</a>
            <a href="#custom" className="btn-outline">Request a Custom Murti</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><b>5</b><span>Deity collections</span></div>
            <div className="stat"><b>120+</b><span>Murti designs in stock</span></div>
            <div className="stat"><b>100%</b><span>Handmade in Solapur</span></div>
          </div>
        </div>

        <div className="hero-art">
          <div className="arch">
            <Image
              src={photoUrl("ganesh")}
              alt="Handcrafted Ganesh murti"
              fill
              sizes="(max-width: 980px) 80vw, 380px"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
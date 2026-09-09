import Header from "./components/Header";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import CraftBand from "./components/CraftBand";
import CustomCta from "./components/CustomCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bell-strip">
        Free pran-pratishtha guidance with every idol &nbsp;•&nbsp; Ships pan-India, insured
        packaging &nbsp;•&nbsp; Custom sizes on request
      </div>

      <Header />
      <Hero />
      <Collection />
      <CraftBand />
      <CustomCta />
      <Footer />
    </>
  );
}

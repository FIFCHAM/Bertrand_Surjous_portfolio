import Header from "../components/Header/Header.jsx";
import Branding from "../components/Branding/Branding.jsx";
import Profil from "../components/Profil/Profil.jsx";
import Status from "../components/Status/Status.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import "./App.scss";
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="branding"className="branding">
          <Branding />
        </section>
        <section id="profil" className="profil">
          <Profil />
        </section>
        <section id="status" className="status">
          <Status />
        </section>
        <section id="skills" className="skills">
          <Skills />
        </section>
        <section className="carousel">
          <Carousel />

        </section>
        <section id="portfolio" className="portfolio">
          <Portfolio />
        </section>
      </main>
    </>
  );
}

export default App;

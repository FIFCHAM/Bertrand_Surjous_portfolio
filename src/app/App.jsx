import Header from "../components/Header/Header.jsx";
import Branding from "../components/Branding/Branding.jsx";
import Profil from "../components/Profil/Profil.jsx";
import "./App.scss";
function App() {
  return (
    <>
      <Header />
      <main>
        <section className="branding">
          <Branding />
        </section>
        <section className="profil">
          <Profil />
        </section>
      </main>
    </>
  );
}

export default App;

import  { useState } from "react";
import "./Header.scss";
import logobs from "../../assets/images/logobs.webp";
import Burgermenu from "./Burgermenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false); // Ferme le menu burger
  };

  return (
    <header>
      <nav>
        <a href="#branding">
          <img src={logobs} alt="logo bs" />
        </a>
        <ul className={isMenuOpen ? "menu active" : "menu"}>
          <li>
            <a href="#branding" onClick={closeMenu}>Acceuil</a>
          </li>
          <li>
            <a href="#profil" onClick={closeMenu}>Profil</a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>Compétences</a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
        <Burgermenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
}

export default Header;

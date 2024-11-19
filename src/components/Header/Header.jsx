import "./Header.scss";
import logobs from "../../assets/images/logobs.webp";

function Header() {
  return (
    <header>
      <nav>
        <a href="#branding">
          <img src={logobs} alt="logo bs" />
        </a>
        <ul>
          <li>
            <a href="#branding">À propos</a>
          </li>
          <li>
            <a href="#profil">Profil</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

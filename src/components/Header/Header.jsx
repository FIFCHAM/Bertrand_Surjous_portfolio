import "./Header.scss";
import logobs from "../../assets/images/logobs.png";

function Header() {
  return (
    <header>
      <nav>
      <a href="#branding-container">
      <img src={logobs} alt="logo bs" />
      </a>
        <ul>
          <li>
            <a href="#branding-container">A propos</a>
          </li>
          <li>
            <a href="#profil-container">Profil</a>
          </li>
          <li>
            <a href="">Compétences</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

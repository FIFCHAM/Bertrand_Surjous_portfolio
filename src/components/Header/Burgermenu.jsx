
import "./burgermenu.scss";

// eslint-disable-next-line react/prop-types
function Burgermenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`burger-menu-container ${isMenuOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <span className="burger-menu-line"></span>
      <span className="burger-menu-line"></span>
      <span className="burger-menu-line"></span>
    </div>
  );
}

export default Burgermenu;

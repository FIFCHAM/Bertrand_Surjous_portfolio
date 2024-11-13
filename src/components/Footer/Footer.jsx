import "./footer.scss";
import githublogo from '../../assets/images/github-brands-solid.svg'
import linkedinlogo from '../../assets/images/linkedin-brands-solid.svg' ;


function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Réseaux sociaux</h3>
        
        
          <a href="https://github.com/FIFCHAM">
          <img src={githublogo} alt="github-logo"  />
          </a>
        
        
          <a href="https://www.linkedin.com/in/fifcham/">
          <img src={linkedinlogo} alt="linkedin-logo"  />
          </a>
        
      </div>
      <div className="footer-content">
        <h3>© 2023 Copyright</h3>
      </div>
      </footer>
      );
}

export default Footer;
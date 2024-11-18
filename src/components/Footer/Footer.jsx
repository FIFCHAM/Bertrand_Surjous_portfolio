import "./footer.scss";
import githublogo from '../../assets/images/github.webp'
import linkedinlogo from '../../assets/images/linkedin.webp' ;
import logosbs from '../../assets/images/logobs.webp' ;


function Footer() {
  return (
    <footer className="footer-container">
        <h4>Réseaux sociaux</h4>
      <div className="footer-content">
        
        
          <a href="https://github.com/FIFCHAM" target="blank">
          <img src={githublogo} alt="github-logo"  />
          </a>
        
        
          <a href="https://www.linkedin.com/in/bertrand-surjous-78b2452ab" target="blank">
          <img src={linkedinlogo} alt="linkedin-logo"  />
          </a>
        
      </div>
      <div className="footer-info">
        <p>Tous droits réservés © 2024</p>
        <a href="#branding">

        <img src={logosbs} alt="logosbs" />
        </a>

      </div>
      
      </footer>
      );
}

export default Footer;
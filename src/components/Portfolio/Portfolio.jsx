import "./portfolio.scss";
import PropTypes from "prop-types";
function Portfolio({ title, description, logos, image, links }) {
  return (
    <>
      <div className="portfolio-card-container">
        <img src={image} className="portfolio-image" alt={title} />
          <h4>{title}</h4>
        <p>{description}</p>
        <div className="porfolio-skilllogos">
          {logos.map((logos, index) => (
            <img key={index} src={logos} alt="logos" />
          ))}
        </div>
        <div className="portfolio-links">
          {links.map((link, index) => (
            <a key={index} target="blank" href={link.link}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
export default Portfolio;
Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logos: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

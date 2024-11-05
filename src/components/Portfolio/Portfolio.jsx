import "./portfolio.scss";
import { Porfoliocards } from "../../data/Porfoliocards";
function Portfolio() {
    return (
        <div className="portfolio-container">
            <h3>Portfolio</h3>
            <div className="portfolio-card">
                {Porfoliocards.map((card) => (
                    <div key={card.title} className="portfolio-card-container">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                        <img src={card.image} alt={card.title} />
                    </div>
                ))}
            </div>
            
        </div>
    )
    
}
export default Portfolio;
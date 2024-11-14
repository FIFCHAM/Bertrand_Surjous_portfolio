import "./carousel.scss";
import { Famousquotes } from "../../data/Famousquotes";
import { useState } from "react";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour changer de citation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Famousquotes.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Famousquotes.length - 1 ? 0 : prevIndex + 1));
  };

  // Fonction pour sélectionner une citation avec les bullets
  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };
    

  
  
  return (
    <div className="carousel-container">
        <p>{Famousquotes[currentIndex].text}</p>
        <div className="fa-chevron">
      <i className="fas fa-chevron-left" onClick={handlePrev} />
      <i className="fas fa-chevron-right" onClick={handleNext} />

        </div>
      <p>{Famousquotes[currentIndex].author}</p>
      <div className="bullets">
        {Famousquotes.map((_, index) => (
          <span key={index}
          className={`bullet ${index === currentIndex ? "active" : ""}`}
          onClick={() => handleBulletClick(index)} />
        ))}
      </div>
        </div>
        )
}
        export default Carousel;

        
import "./carousel.scss";
import { Famousquotes } from "../../data/Famousquotes";
import { useState ,useRef} from "react";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fonction pour changer de citation
  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Famousquotes.length - 1 : prevIndex - 1
    );
    setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Famousquotes.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  // Fonction pour sélectionner une citation avec les bullets
 /* const handleBulletClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };*/

  return (
    <div
        className="carousel-track"
        ref={carouselRef}
        onScroll={(e) => {
          const { scrollLeft, offsetWidth } = e.target;
          const newIndex = Math.round(scrollLeft / offsetWidth);
          setCurrentIndex(newIndex);
        }}
      >
    
    <div className={`quote ${isTransitioning ? "fade-out" : "fade-in"}`}>

      <p>{Famousquotes[currentIndex].text}</p>
      <div className="fa-chevron">
        <i className="fas fa-chevron-left" onClick={handlePrev} />
        <i className="fas fa-chevron-right" onClick={handleNext} />
      </div>
      <p>{Famousquotes[currentIndex].author}</p>


      <div className="bullets">
        {Famousquotes.map((_, index) => (
          <span
          key={index}
          className={`bullet ${index === currentIndex ? "active" : ""}`}
          //onClick={() => handleBulletClick(index)}
          onClick={() => {
            const offset = carouselRef.current.offsetWidth * index;
            carouselRef.current.scrollTo({ left: offset, behavior: "smooth" });
            setCurrentIndex(index);
          }}
          />
        ))}
      </div>
    </div>
        </div>
    
    
    
  );
}
export default Carousel;

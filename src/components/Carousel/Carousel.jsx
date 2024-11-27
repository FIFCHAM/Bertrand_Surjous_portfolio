import "./carousel.scss";
import { Famousquotes } from "../../data/Famousquotes";
import { useState, useRef, useEffect } from "react";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Détecte si on est sur un appareil mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fonction pour changer de citation (desktop uniquement)
  const handlePrev = () => {
    if (!isMobile) {
      const newIndex =
        currentIndex === 0 ? Famousquotes.length - 1 : currentIndex - 1;
      scrollToIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (!isMobile) {
      const newIndex =
        currentIndex === Famousquotes.length - 1 ? 0 : currentIndex + 1;
      scrollToIndex(newIndex);
    }
  };

  // Scroll à un index particulier
  const scrollToIndex = (index) => {
    const offset = carouselRef.current.offsetWidth * index;
    carouselRef.current.scrollTo({
      left: offset,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  // Gestion du défilement pour mobile
  const handleScroll = (e) => {
    if (isMobile) {
      const { scrollLeft, offsetWidth } = e.target;
      const newIndex = Math.round(scrollLeft / offsetWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={carouselRef} onScroll={handleScroll}>
        {Famousquotes.map((quote, index) => (
          <div
            key={index}
            className={`quote ${index === currentIndex ? "active" : ""}`}
            style={{ scrollSnapAlign: "center" }}
          >
            <p className="quote-text">{quote.text}</p>
            <p className="quote-author">{quote.author}</p>
          </div>
        ))}
      </div>
      {!isMobile && (
        <div className="fa-chevron">
          <i className="fas fa-chevron-left" onClick={handlePrev} />
          <i className="fas fa-chevron-right" onClick={handleNext} />
        </div>
      )}
      <div className="bullets">
        {Famousquotes.map((_, index) => (
          <span
            key={index}
            className={`bullet ${index === currentIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

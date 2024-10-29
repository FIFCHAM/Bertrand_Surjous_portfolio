import  { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./skills.scss";

const SkillBar = ({ skill, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Lancer l'animation au montage du composant
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100); // Délai léger pour activer l'animation CSS

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="skill">
      <span className="skill-title">{skill}</span>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};
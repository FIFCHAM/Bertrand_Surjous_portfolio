import "./skills.scss";
import { Skillslogos } from "../../data/Skillslogos";

function Skills() {
  const handlePdfClick = () => {
    window.open("/CV_2024-12-05_BERTRAND_SURJOUS.pdf", "_blank");
  };

  return (
    <div className="skills-container">
      <h3 className="section-title">Compétences </h3>
      <div className="skills-logo">
        {Skillslogos.map((skill) => (
          <div key={skill.name} className="logo-container">
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <button onClick={handlePdfClick}>Télécharger mon CV</button>
    </div>
  );
}
export default Skills;

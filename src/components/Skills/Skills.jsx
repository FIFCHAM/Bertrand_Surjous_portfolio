import "./skills.scss";
import SkillBar from "./skillbar";

const skillsData = [
    { skill: "JavaScript", level: 70 },
    { skill: "HTML", level: 90 },
    { skill: "CSS / SCSS", level: 80 },
    { skill: "React", level: 70 },
    
  ];
function Skills() {
    const handlePdfClick = () => {
        // Le chemin vers le fichier PDF dans le dossier public
        window.open(`/CV BERTRAND.pdf`, '_blank');
      };
    return (
        <div className="skills-container">
            <h3>Compétences </h3>
            <div className="skillbar-container">
            {skillsData.map((skill, index) => (
        <SkillBar key={index} skill={skill.skill} level={skill.level} />
      ))}
  </div>
  <button onClick={handlePdfClick}>Télécharger mon CV</button>
</div>

            
    )
}
export default Skills;
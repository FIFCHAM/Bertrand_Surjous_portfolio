import "./Profil.scss";
import photobs from "../../assets/images/WIN_20240312_11_02_30_Pro.jpg";

function Profil() {
  return (
    <div  className="profil-container">
        <h3>A propos de moi</h3>

        <img src={photobs} alt="photo bs"  />
        <p>



Fort d&apos;une expérience de près de 30 ans dans le commerce et mû par une passion pour les nouvelles technologies, je me suis reconverti avec succès dans le développement web front-end. Mon parcours atypique témoigne de ma détermination et de ma capacité d&apos;adaptation. Curieux, logique et pragmatique, je suis désireux d&apos;intégrer une équipe dynamique où je pourrai perfectionner mes compétences techniques et contribuer à des projets stimulants.
</p>

    </div>
  )
}

export default Profil;
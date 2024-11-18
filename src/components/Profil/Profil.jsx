import "./profil.scss";
import photobs from "../../assets/images/WIN_20240312_11_02_30_Pro.jpg";

function Profil() {
  return (
    <div  className="profil-container">
        <h3>À propos de moi</h3>

        <img src={photobs} alt="photo bs"  />
        <p>


Fort d&apos;une solide expérience de 30 ans dans le commerce, j&apos;ai choisi de me tourner vers ma passion pour les nouvelles technologies en me reconvertissant dans le développement web front-end.<br /> Ma formation de 9 mois avec Openclassrooms (2023-2024) m&apos;a permis d&apos;acquérir les compétences nécessaires pour intégrer une équipe dynamique et contribuer à des projets stimulants.<br/>  Curieux, logique et pragmatique, je suis déterminé à  perfectionner mes compétences et à apporter une valeur ajoutée à chaque projet. 



</p>

    </div>
  )
}

export default Profil;
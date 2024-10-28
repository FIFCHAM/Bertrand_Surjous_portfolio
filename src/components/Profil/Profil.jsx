import "./Profil.scss";
import photobs from "../../assets/images/WIN_20240312_11_02_30_Pro.jpg";

function Profil() {
  return (
    <div id="profil-container" className="profil-container">
        <h3>A propos de moi</h3>

        <img src={photobs} alt="photo bs"  />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ducimus ut aliquam laboriosam praesentium doloremque repellendus omnis quae id aspernatur sint dolor ipsa, iure optio sequi, quasi in accusantium autem dignissimos aut reiciendis tempore atque! Qui numquam esse ipsum eos facilis hic exercitationem, quo quam dolore laudantium aperiam eveniet voluptates?</p>

    </div>
  )
}

export default Profil;
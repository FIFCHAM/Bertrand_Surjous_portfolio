import sophiebuelimg from "../assets/images/sophiebuelxl.png";
import omyfoodimg from "../assets/images/ohmyfoodxl.png";
import kasaimg from "../assets/images/kasaxl.png";
import javascriptlogo from "../assets/images/js.webp";
import reactlogo from "../assets/images/atom_9791305.webp";
import htmllogo from "../assets/images/html.webp";
import csslogo from "../assets/images/css.webp";
export const Porfoliocards = [
  {
    title: "ohmyfood",
    description:
      "Développez un site “mobile first” qui répertorie les menus de restaurants gastronomiques.",
    image: omyfoodimg,
    logos:[
         htmllogo,
         csslogo,

    ],
    links:[
      {
        title:"lien github",
        link:"https://github.com/FIFCHAM/Projet_openclassrooms_Omyfood"
      },
      {
        title:"site ohmyfood",
        link:"https://fifcham.github.io/Projet_openclassrooms_Omyfood/"
      }
    ],

  },

  {
    title: "Sophie Bluel",
    description:
      "Créez une page web dynamique avec JavaScript et en communiquant avec une API.",
    image: sophiebuelimg,
    logos:[
         javascriptlogo,

    ],
    links:[
      {
        title:"lien github",
        link:"https://github.com/FIFCHAM/Projet_openclassrooms_Sophie_bluel"
      },
      
    ],
  },   
    
     
    
  
  {
    title: "Kasa",
    description:
      "Créez une application web de location immobilière avec React.",
    image: kasaimg,
    logos:[
         
         reactlogo,

    ],
    links:[
      {
        title:"lien github",
        link:"https://github.com/FIFCHAM/Projet_openclassrooms_kaza"
      },
      {
        title:"site kasa",
        link:"https://kaza-three.vercel.app/"
      }
    ],
    
  },
];

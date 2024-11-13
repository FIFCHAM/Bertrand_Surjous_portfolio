import sophiebuelimg from "../assets/images/sophiebuelxl.png";
import omyfoodimg from "../assets/images/ohmyfoodxl.png";
import kasaimg from "../assets/images/kasaxl.png";
import javascriptlogo from "../assets/images/java-script_721671.png";
import reactlogo from "../assets/images/atom_9791305.png";
import htmllogo from "../assets/images/html_1051328.png";
import csslogo from "../assets/images/css-3_732007.png";
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

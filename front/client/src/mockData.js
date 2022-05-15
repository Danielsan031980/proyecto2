import bublepareja from "./img/pareja.jpeg"
import bar from "./img/bar.jpeg"
//import basicaparejacarpa from "./img/basicapareja.jpeg"
import bublesingle from "./img/BBsingle.jpeg"
import telescopica from "./img/telescopica.jpeg"
import bubleparejaplus from "./img/parejaplus.jpeg"
import piscina from "./img/piscina.jpeg"
import bublefamiliar from "./img/familiar.jpeg"
import luna from "./img/lunaluxury.jpeg"


 const mockData = [
    {
        src: bublesingle,
        title: "Burbuja Sencilla",
        description: "burbuja sencilla y comoda para 1 persona",
        cat:"room",
        price: "100",
        stock: "5",
        notAvalablestart: new Date(2022,5,10).getTime(),
        notAvalableend: new Date(2022,5,10).getTime(),
    },
    {
        src: bublepareja,
        title: "Burubuja Pareja ",
        description: "burbuja amplia y comoda para 2 persona",
        cat: "room",
        price: "250",
        stock: "8",
        notAvalablestart: new Date(2022,5,10).getTime(),
        notAvalableend: new Date(2022,5,10).getTime(),
    },
    {
        src: bubleparejaplus,
        title: "Burubuja pareja plus",
        description: "burbuja con piscina privada",
        cat: "room",
        price: "350",
        stock: "8",
        notAvalablestart: new Date(2022,5,10).getTime(),
        notAvalableend: new Date(2022,5,10).getTime(),
    },
    {
        src: bublefamiliar,
        title: "burubuja familiar",
        description: "burbuja gigante,  2 pisos ..ideal para familias",
        cat: "room",
        price: "500",
        stock: "3",
        notAvalablestart: new Date(2022,5,10).getTime(),
        notAvalableend: new Date(2022,5,10).getTime(),
    },
    {
        src: bar,
        title: "Bar",
        description: "Ecpacio comun para comer y beber en barra libre",
    },
    {
        src: telescopica,
        title: "zona de estrellas",
        description: "Ecpacio comun para ir a ver las estrellas",
    },
    {
        src: piscina,
        title: "piscina",
        description: "piscina, sauna y turco",
    },
    {
        src: luna,
        title: "luna",
        description: "piscina, sauna y turco",
    },  
   
];

export const chips =[
    { key: 0, label: "cancelacion"},
    { key: 1, label: "sencilla"},
    { key: 2, label: "pareja "},
    { key: 3, label: "familiar"},
    { key: 4, label: "more filters"},
];

export default mockData; 
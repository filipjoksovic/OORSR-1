//Uvoz modulov
import {Funkcionar, Igralec} from "./modules/Oseba";
import Ekipa from "./modules/Ekipa";
import VlogaEnum from "./modules/defaults/VlogaEnum";
import EkipaDTO from "./modules/defaults/EkipaDTO";


//Deklaracija splosnih podatkov
const trener: Funkcionar = {
    id: 1,
    ime: "Jan",
    priimek: "Novak",
    letoRojstva: 1987,
    krajRojstva: "Maribor",
    vloga: VlogaEnum.TRENER,
    veljavnost: 5
}

const direktor: Funkcionar = {
    id: 2,
    ime: "Jan",
    priimek: "Drobnik",
    letoRojstva: 1967,
    vloga: VlogaEnum.DIREKTOR,
    veljavnost: 10
}

const ekipaDTO: EkipaDTO = {
    ime: "Maribor fudbalski klub",
    letoUstanovitve: 1987,
    direktor: direktor,
    trener: trener,
    igralci: []
}

const igralec1:Igralec = {
    id:3,
    ime:"Peter",
    priimek:"Jarin",
    letoRojstva:1999,
    visina:190,
    teza:80,
    poskodovan:false
};
const igralec2:Igralec={
    id:4,
    ime:"Igor",
    priimek:"Kraner",
    letoRojstva:2000,
    visina:193,
    teza:84,
    poskodovan:true
};
const igralec3:Igralec = {
    id:5,
    ime:"Aljaz",
    priimek:"Cep",
    letoRojstva:1997,
    visina:184,
    teza:85,
    poskodovan:false
};

const ekipa: Ekipa = new Ekipa(ekipaDTO);
//Dodajanje igralev
ekipa.dodajIgralca(igralec1);
ekipa.dodajIgralca(igralec2);
ekipa.dodajIgralca(igralec3);

//posodobitev igralca
const posodobljenIgralec:Igralec = {...igralec1};
posodobljenIgralec.poskodovan=true;
posodobljenIgralec.visina=170;

ekipa.posodobiIgralca(posodobljenIgralec);

//odstranitev igralca
ekipa.odstraniIgralca(igralec2.id);

//izpis podatkov
console.log(ekipa.izpisiPodatke());

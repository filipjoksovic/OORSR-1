import {Funkcionar, Igralec} from "../Oseba";

export default interface EkipaDTO {
    ime: string,
    letoUstanovitve: number,
    direktor: Funkcionar,
    trener: Funkcionar,
    igralci: Igralec[]
}
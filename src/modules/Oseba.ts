import VlogaEnum from "./defaults/VlogaEnum";

interface Oseba{
    id:number
    ime:string,
    priimek:string,
    letoRojstva:number,
    krajRojstva?:string
}

interface Igralec extends Oseba{
    visina:number,
    teza:number,
    poskodovan:boolean

}

interface Funkcionar extends Oseba{
    vloga:VlogaEnum,
    veljavnost:number
}



export {Igralec,Funkcionar}
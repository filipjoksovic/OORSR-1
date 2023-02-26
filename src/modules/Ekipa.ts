import {Funkcionar, Igralec} from "./Oseba";
import EkipaDTO from "./defaults/EkipaDTO";


export default class Ekipa {
    private _ime: string;
    private _letoUstanovitve: number;
    private _direktor: Funkcionar;
    private _trener: Funkcionar;
    private _igralci: Igralec[];


    get ime(): string {
        return this._ime;
    }

    set ime(value: string) {
        this._ime = value;
    }

    get letoUstanovitve(): number {
        return this._letoUstanovitve;
    }

    set letoUstanovitve(value: number) {
        this._letoUstanovitve = value;
    }

    get direktor(): Funkcionar {
        return this._direktor;
    }

    set direktor(value: Funkcionar) {
        this._direktor = value;
    }

    get trener(): Funkcionar {
        return this._trener;
    }

    set trener(value: Funkcionar) {
        this._trener = value;
    }

    get igralci(): Igralec[] {
        return this._igralci;
    }

    set igralci(value: Igralec[]) {
        this._igralci = value;
    }

    constructor(obj: EkipaDTO) {
        this._ime = obj.ime;
        this._letoUstanovitve = obj.letoUstanovitve;
        this._direktor = obj.direktor;
        this._trener = obj.trener;
        this._igralci = obj.igralci;
    }

    public dodajIgralca(igralec: Igralec): void {
        this.igralci.push(igralec);
    }

    public posodobiIgralca(igralec: Igralec): void {
        this.igralci = this.igralci.map(i =>
            i.id === igralec.id ? {...igralec} as Igralec : i,
        )
    }

    public odstraniIgralca(igralecId: number): void {
        this.igralci = this.igralci.filter(i => i.id !== igralecId);
    }

    public izpisiPodatke(): string {
        return (`***Izpis podatkov o klubu***

Ime kluba: ${this.ime} 

Leto ustanovitve: ${this.ime} 

Direktor kluba: ${this.direktor.ime} ${this.direktor.priimek} \r

Trener kluba: ${this.trener.ime} ${this.direktor.priimek} 

***Igralci kluba***
${this.igralci.map(igralec => `${igralec.ime} ${igralec.priimek}: v: ${igralec.visina} t: ${igralec.teza} p: ${igralec.teza}`)}`)
    }
}
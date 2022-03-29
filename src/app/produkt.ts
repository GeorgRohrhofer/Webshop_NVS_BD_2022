export class Produkt {
    constructor (id:any, bezeichnung:string, nummer: string, preis: number, bestellungen: number)
    {
        this.id = id;
        this.bezeichnung = bezeichnung;
        this.nummer = nummer;
        this.preis = preis;
        this.bestellungen = bestellungen;
    }
    public id: number; 
    public bezeichnung: string;
    public nummer: string;
    public preis : number
    public bestellungen: number;
}

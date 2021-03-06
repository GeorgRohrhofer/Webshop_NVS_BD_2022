import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
//import { Subject } from 'rxjs';
import { Produkt } from './produkt';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private http: HttpClient) { }

    private warenkorb : Produkt[] = [];
    //public subject = new Subject<void>();
    uri= 'http://localhost:2403/produkte';

    getProducts(): Observable<Produkt[]>{
       return this.http.get<Produkt[]>(this.uri);// Observable 
    }

    addProduct(product: string, nummer: string,  price: number) : Observable<Produkt>{
        return this.http.post<Produkt>(this.uri, {bezeichnung:product, nummer:nummer, preis:price, bestellungen:0}, httpOptions)
      
    } 

    deleteProduct(Artikelnummer: string ) {
        this.getProducts().subscribe((data : Produkt[]) => {data.forEach(e => {if(e.nummer == Artikelnummer){this.http.delete(this.uri + '/' + e.id, httpOptions).subscribe();}})})
    }

    getWarenkorb(){
        return this.warenkorb;
    }

    addToWarenkorb(product: Produkt){
        this.warenkorb.push(product);
    }
    removeFromWarenkorb(product: Produkt){
        for (var i = 0; i < this.warenkorb.length; i++) {
        if (this.warenkorb[i] === product){
            this.warenkorb.splice(i,1);
            break;
        }
        }

    }

    purchase(){

        for (var i = 0; i < this.warenkorb.length; i++) {
            this.http.get<Produkt>(this.uri + '/' + this.warenkorb[i].id).subscribe((data : Produkt) => {this.http.put(this.uri + '/' + data.id, {bestellungen : data.bestellungen + 1}, httpOptions).subscribe();});
        }
        this.warenkorb = [];
    }

  }

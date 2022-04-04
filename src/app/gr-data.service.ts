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

    addTodo(product: string, nummer: string,  price: number) : Observable<Produkt>{
        return this.http.post<Produkt>(this.uri, {bezeichnung:product, nummer:nummer, preis:price, bestellungen:0}, httpOptions)
      
    } 

    deleteTodo(Artilelnummer: string ) {
        this.getProducts().subscribe((data : Produkt[]) => {data.forEach(e => {if(e.nummer == Artilelnummer){this.http.delete(this.uri + '/' + e.id, httpOptions).subscribe();}})})
    }

    getWarenkorb(){
        return this.warenkorb;
    }

    addToWarenkorb(id: number){
        this.http.get<Produkt>(this.uri + '/' + id).subscribe((data: Produkt) => this.warenkorb.push(data));
    }
    removeFromWarenkorb(id: number){
        //this.warenkorb = this.warenkorb.filter(obj => {return obj.id !== id});
        /*
        this.warenkorb.forEach( (item, index) => {
            if(item.id === id){ this.warenkorb.splice(index,1); break}
          });
        */

        for (var i = 0; i < this.warenkorb.length; i++) {
        if (this.warenkorb[i].id ===id){
            this.warenkorb.splice(i,1);
            break;
        }
        }

    }

  }

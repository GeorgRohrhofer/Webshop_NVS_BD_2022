import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Produkt } from './produkt';

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private http: HttpClient) { }
    public subject = new Subject<void>();
    uri= 'http://localhost:2403/produkte';

    getProducts(): Observable<Produkt[]>{
       return this.http.get<Produkt[]>(this.uri);// Observable 
   }

  }

import { Component, OnInit } from '@angular/core';
import { DataService } from '../gr-data.service';
import { Produkt } from '../produkt';

@Component({
  selector: 'app-gr-shop',
  templateUrl: './gr-shop.component.html',
  styleUrls: ['./gr-shop.component.css']
})
export class GrShopComponent implements OnInit {

  constructor(private ds: DataService) { }
  
  products: Produkt[] = [];
  
  ngOnInit(){
    this.ds.getProducts().subscribe((data: Produkt[])=> this.products = data)
  }

  purchaseProduct(product: Produkt){
    console.log("Purchase item");
    this.ds.addToWarenkorb(product);
  }

}

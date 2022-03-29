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
  
  ngOnInit(): void {
    this.ds.getProducts().subscribe((data: Produkt[])=> this.products = data)
  }

  purchaseProduct(id:number){
    console.log("Purchase item");
}

}

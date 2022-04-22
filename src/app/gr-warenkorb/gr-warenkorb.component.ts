import { Component, OnInit } from '@angular/core';
import { DataService } from '../gr-data.service';
import { Produkt } from '../produkt';

@Component({
  selector: 'app-gr-warenkorb',
  templateUrl: './gr-warenkorb.component.html',
  styleUrls: ['./gr-warenkorb.component.css']
})
export class GrWarenkorbComponent implements OnInit {

  constructor(private ds: DataService) { }
  
  warenkorb: Produkt[] = [];
  msg = '';
  cl = '';
  prodcount = 0;

  ngOnInit(){
    this.warenkorb = this.ds.getWarenkorb();
    this.prodcount = this.warenkorb.length;
  }

  removeFromWarenkorb(product: Produkt){
    this.ds.removeFromWarenkorb(product);
    this.ngOnInit();
  }

  purchase(){
    this.ds.purchase();
    this.ngOnInit();
    this.msg = 'Die Bestellung wurde aufgebeben';
    this.cl = 'alert alert-success';
  }

}

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
  
  ngOnInit(){
    this.warenkorb = this.ds.getWarenkorb();
  }

  removeFromWarenkorb(id: number){
    this.ds.removeFromWarenkorb(id);
    this.ngOnInit();
  }

}

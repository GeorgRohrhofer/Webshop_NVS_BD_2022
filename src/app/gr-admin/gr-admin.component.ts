import { Component, OnInit } from '@angular/core';
import { DataService } from '../gr-data.service';

@Component({
  selector: 'app-gr-admin',
  templateUrl: './gr-admin.component.html',
  styleUrls: ['./gr-admin.component.css']
})
export class GrAdminComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }
  newEntry = '';
  newArtikelnummer = '';
  newPrice = 0;
  msg = '';
  Artikelnummer = ''
  addProduct(): void {
  this.ds.addProduct(this.newEntry, this.newArtikelnummer, this.newPrice).subscribe(); // Service-Methode
  this.msg = 'Item created'
  this.newEntry = '';
  this.newPrice = 0;
  this.newArtikelnummer = '';
 }
 deleteProduct(): void {
  this.ds.deleteProduct(this.Artikelnummer) // Service-Methode
  this.Artikelnummer = '';
 }
}

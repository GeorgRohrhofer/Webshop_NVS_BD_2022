import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrHeaderComponent } from './gr-header/gr-header.component';
import { GrShopComponent } from './gr-shop/gr-shop.component';
import { GrWarenkorbComponent } from './gr-warenkorb/gr-warenkorb.component';
import { GrAdminComponent } from './gr-admin/gr-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    GrHeaderComponent,
    GrShopComponent,
    GrWarenkorbComponent,
    GrAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

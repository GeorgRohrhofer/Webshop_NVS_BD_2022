import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrAdminComponent } from './gr-admin/gr-admin.component';
import { GrShopComponent } from './gr-shop/gr-shop.component';
import { GrWarenkorbComponent } from './gr-warenkorb/gr-warenkorb.component';

const routes: Routes = [
  { path: '', component: GrShopComponent },
  { path: 'warenkorb', component: GrWarenkorbComponent },
  { path: 'admin', component: GrAdminComponent }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

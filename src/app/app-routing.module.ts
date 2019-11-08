import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KatalogComponent } from './pages/katalog/katalog.component';
import { BasketComponent } from './pages/basket/basket.component';

const routes: Routes = [
  {path: '', redirectTo: '/katalog', pathMatch: 'full'},
  {path: 'katalog', component: KatalogComponent },
  {path: 'basket', component: BasketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

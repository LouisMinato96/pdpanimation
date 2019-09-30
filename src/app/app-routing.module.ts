import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:index',
    component: ProductCardComponent,
    data: {animation: 'Product'}
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

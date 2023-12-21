import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { BuildpizzaComponent } from './buildpizza/buildpizza.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'order',
    component: OrderpizzaComponent,
  },
  {
    path:'build',
    component: BuildpizzaComponent,
  },
  {
    path:'cart',
    component: CartComponent
  }
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

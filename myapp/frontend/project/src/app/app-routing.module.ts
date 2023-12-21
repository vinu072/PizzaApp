import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'pizzas', component:PizzasComponent},
  {path:'Ingredients', component:IngredientsComponent},
  {path:'shoppingcart', component: CartComponent },
  {path:'**', component:ErrorpageComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FooterComponent } from './footer/footer.component';
import { CarttestComponent } from './carttest/carttest.component';
@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    NavbarComponent,
    IngredientsComponent,
    HomeComponent,
    CartComponent,
    ErrorpageComponent,
    FooterComponent,
    CarttestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

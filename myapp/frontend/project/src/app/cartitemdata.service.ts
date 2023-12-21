import { Injectable } from '@angular/core';
import { TotalcostService } from './totalcost.service';
import { pizza } from './pizzainterface';

@Injectable({
  providedIn: 'root'
})
export class CartitemdataService{
  cartItems: pizza[]=[]; // Array to store cart items

  constructor(private tot:TotalcostService) { }

  addToCart(pizza: any) {
      this.cartItems.push(pizza);
    
}


  getCartItems() {
    return this.cartItems; // Return cart items
  }
  getCartTotal() {
    let total:number = 0;
    for (const item of this.cartItems) {
      total += parseInt(item.price); 
    }
    return total;
  }
  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  emptyCart() {
    this.cartItems = [];
  }
 
}

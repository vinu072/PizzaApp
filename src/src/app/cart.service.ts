import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[]=[];
  toppings: any[]=[];
  total:number=0;
  toppingtotal:number=0;
  private cartlength = new BehaviorSubject(this.cart.length);
  

  constructor() { }

  clearCart(){
    this.cart=[];
    this.toppings=[];
    this.cartlength.next(this.cart.length);
  }

  addToCart(pizza : any){
    pizza.qty=1;
    this.cart.push(pizza);
    this.cartlength.next(this.cart.length);
  }

  removeFromCart(pizza:any){
    let index=this.cart.indexOf(pizza);
    this.cart.splice(index,1);
    this.cartlength.next(this.cart.length);
  }

  addToppings(topping : any){
    this.toppings.push(topping);
  }

  removeToppings(topping  : any){
    let index=this.toppings.indexOf(topping);
    this.toppings.splice(index,1);
  }

  getLength(){
     return this.cartlength.asObservable();
  }

  increse(pizza  : any ) {
    let index=this.cart.indexOf(pizza);
    this.cart[index].qty+=1;
  }

  decrese(pizza : any) {
    let index=this.cart.indexOf(pizza);
    this.cart[index].qty-=1;
  }

  getTotal(){
    this.total=0;
    for(let item of this.cart)
    {
      this.total=this.total +(parseInt(item.qty)*parseInt(item.price));
    }

  }
    

  getToppingsTotal(){
    this.toppingtotal=0;
    for(let item of this.toppings)
    {
      this.toppingtotal=this.toppingtotal + parseInt(item.price);
    }
  }

  

}

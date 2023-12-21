import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart: any[] = [];
  total:number = 0;
  toppingtotal:number = 0;

  constructor(private cartservice: CartService, private router: Router){}
  ngOnInit(): void {
    this.cart = this.cartservice.cart;
    this.total=this.cartservice.total;
    this.toppingtotal=this.cartservice.toppingtotal;
  }

  remove(pizza : any ) {
    this.cartservice.removeFromCart(pizza);
    this.cartservice.getTotal();
    this.total=this.cartservice.total;
    
  }
  onPlus(pizza : any ){
    this.cartservice.increse(pizza);
    this.cartservice.getTotal();
    
    this.total=this.cartservice.total;
  }
  onMinus(pizza : any ){
    this.cartservice.decrese(pizza);
    this.cartservice.getTotal();
    
    this.total=this.cartservice.total;
  }
  clear(){
    this.cartservice.clearCart();
    this.cart = this.cartservice.cart;
    this.cartservice.getTotal();
    this.cartservice.getToppingsTotal();
    this.total=this.cartservice.total;
    this.toppingtotal=this.cartservice.toppingtotal;
  }

  paylo(){
    this.clear();
    this.router.navigateByUrl('/pay');
  }

  
}


  




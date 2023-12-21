import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent implements OnInit{

  pizzas: any = [];
  f: boolean[] = [];
  constructor(private orderservice:OrderService, private cartservice:CartService){


  }

  ngOnInit(): void {
    this.orderservice.getPizzas().subscribe((data: any) => {
      this.pizzas = data;
      console.log(data);
      
    
  });

  for (let i = 0; i < this.cartservice.cart.length; i++) {
    this.f[this.cartservice.cart[i].id] = true;
  }
}

add(pizza : any) {
  this.cartservice.addToCart(pizza);
  this.cartservice.getTotal();
  this.f[pizza.id] = !this.f[pizza.id];
}

remove(pizza : any ) {
  this.cartservice.removeFromCart(pizza);
  this.cartservice.getTotal();
  this.f[pizza.id] = !this.f[pizza.id];
}

}



import { Component, OnInit } from '@angular/core';
import { CartitemdataService } from '../cartitemdata.service';
import { TotalcostService } from '../totalcost.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;

  constructor(private cartitiem:CartitemdataService, private tot:TotalcostService){}
  ngOnInit(): void {
    this.totalPrice = this.tot.getTotalPrice();
  }

  getCartItems() {
    return this.cartitiem.getCartItems(); // Retrieve cart items
  }
  Total()
  {
    return this.cartitiem.getCartTotal();
  }
  GrandTotal(){
    return (this.totalPrice+this.cartitiem.getCartTotal());
  }
  onEmptyCartClick() {
    this.totalPrice=0;
    this.cartitiem.emptyCart();
    alert('Cart Cleared'); // Call the emptyCart() method from CartService
  }
}

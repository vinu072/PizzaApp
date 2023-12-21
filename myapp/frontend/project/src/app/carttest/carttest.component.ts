import { Component ,OnInit} from '@angular/core';
import { CartitemdataService } from '../cartitemdata.service';
@Component({
  selector: 'app-carttest',
  templateUrl: './carttest.component.html',
  styleUrls: ['./carttest.component.css']
})
export class CarttestComponent implements OnInit {
  cartItems: any[] = []; // Array to store cart items with toppings and quantities
  totalPizzaPrice: number = 0; // Total price of pizzas
  totalToppingsPrice: number = 0; // Total price of toppings
  grandTotal: number = 0; // Grand total of the cart

  constructor(private cartService: CartitemdataService) { }

  ngOnInit(): void {
    this.updateCartDetails();
  }

  updateCartDetails() {
    this.cartItems = this.cartService.getCartItems(); // Fetch cart items from the service

    // Calculate total prices
    this.totalPizzaPrice = this.cartService.getCartTotal(); // Total price of pizzas
    this.totalToppingsPrice = this.calculateTotalToppingsPrice(); // Total price of toppings

    // Calculate grand total
    this.grandTotal = this.totalPizzaPrice + this.totalToppingsPrice;
  }

  calculateTotalToppingsPrice(): number {
    let totalToppingsPrice: number = 0;

    // Calculate total price of toppings for each pizza in the cart
    for (const item of this.cartItems) {
      totalToppingsPrice += item.toppingsPrice * (item.qty);
    }

    return totalToppingsPrice;
  }

  

}

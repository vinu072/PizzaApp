import { Component, OnInit } from '@angular/core';
import { FetchingService } from '../fetching.service';
import { TotalcostService } from '../totalcost.service';
import { CartitemdataService } from '../cartitemdata.service';
import { Toppings } from '../toppinginterface';
@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  toppings: any;
  selectedToppings: Toppings[] = [];
  isCartEmpty: boolean = false; 

  constructor(private http:FetchingService, private tot:TotalcostService, private cartitem:CartitemdataService){}
  ngOnInit(): void {
    
    this.http.getIng().subscribe(data =>{
      this.toppings = data;
            console.log(this.toppings)
  })
  this.isCartEmpty = this.cartitem.isCartEmpty();}


  toggleSelection(topping: any): void {
    if (this.selectedToppings.includes(topping)) {
      this.selectedToppings = this.selectedToppings.filter(t => t !== topping);
    } else {
      this.selectedToppings.push(topping);
    }
  }

  calculateTotalPrice(): number {
    const totalPrice = this.selectedToppings.reduce((acc, topping) => acc + topping.price, 0);
    this.tot.setTotalPrice(totalPrice); // Set the total price in the service
    return totalPrice;
  }
  
}


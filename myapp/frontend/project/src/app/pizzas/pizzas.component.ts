import { Component } from '@angular/core';
import {FetchpizzaService} from '../fetchpizza.service';
import { CartitemdataService } from '../cartitemdata.service';
import { pizza } from '../pizzainterface';
@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
pizzas:any;
  constructor(private http:FetchpizzaService, private cartitiem:CartitemdataService){}
  ngOnInit(): void {
    this.http.getPizza().subscribe(data =>{
       this.pizzas=data;
       console.log(this.pizzas);
    });
  }
  addtocart(pizzas: any)
{ 
  console.log("button works");
  alert("Item added to cart");
  this.cartitiem.addToCart(pizzas); 
}

}
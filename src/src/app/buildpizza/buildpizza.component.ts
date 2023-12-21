import { Component } from '@angular/core';
import { BuildService } from '../build.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})
export class BuildpizzaComponent {

  constructor(private buildservice: BuildService,private cartservice: CartService) { }

  toppings:any=[];
  toppingtotal:number = 0;
  flags: boolean[] = [];
  cartlength:number=0;

  ngOnInit(): void {
    this.buildservice.getToppings().subscribe((data) => {
    this.toppings = data;
    });

    this.toppingtotal=this.cartservice.toppingtotal;
      
    
    console.log("Inside ngoninit length of pizzas array is "+this.cartservice.toppings.length);
    for (let i = 0; i < this.cartservice.toppings.length; i++) {
      this.flags[this.cartservice.toppings[i].id] = true;
    }
  }

  checkUncheck(e:any,topping:any){
    if(e.target.checked)
    {
    this.cartservice.addToppings(topping);
    this.flags[topping.id] = !this.flags[topping.id];
    }
    else
    {
    this.cartservice.removeToppings(topping);
    this.flags[topping.id] = !this.flags[topping.id];
    }
  }

  getTotal(){
    if(this.cartlength==0)
     this.cartservice.getToppingsTotal();
     this.toppingtotal=this.cartservice.toppingtotal;
  }

  

}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalcostService {
  totalPrice: number = 0;

  constructor() { }

  setTotalPrice(price: number): void {
    this.totalPrice = price;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
 
}

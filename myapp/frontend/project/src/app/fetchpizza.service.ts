import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchpizzaService {

  constructor(private http: HttpClient) { }

  getPizza(){
    return this.http.get('http://localhost:3000/pizzas/pizza');
  }
  
}

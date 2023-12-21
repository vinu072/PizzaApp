import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private http:HttpClient) { }

  getToppings(){
    return this.http.get("http://localhost:3000/getingredients");
  }
}

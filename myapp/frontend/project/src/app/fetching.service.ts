import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  constructor(private http: HttpClient) { }
  getIng(){
    return this.http.get('http://localhost:3000/ingredients/ing');
  }
}

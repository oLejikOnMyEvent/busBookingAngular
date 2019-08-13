import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  deleteTrip(item){
    return this.http.delete(`http://localhost:4200/booking/cancel/${item}`)
  }
}

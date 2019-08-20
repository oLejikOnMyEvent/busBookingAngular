import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  deleteTrip(item){
    return this.http.delete(`http://localhost:8080/booking/cancel/${item}`)
  }

  payTrp(item){
    let objData ={
        id: parseInt(item),
        paid: true
    }
    // let newObjDAta = JSON.stringify(objData)
    return this.http.patch(`http://localhost:8080/booking/pay/${item}`, objData)
  }
}

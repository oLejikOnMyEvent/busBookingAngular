import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  deleteTrip(item){
    return this.http.delete(`http://192.168.2.220:8080/api/booking/cancel/${item}`)
  }

  payTrp(item){
    let objData ={
        id: parseInt(item),
        paid: true
    }
    // let newObjDAta = JSON.stringify(objData)
    return this.http.patch(`http://192.168.2.220:8080/api/booking/pay/${item}`, objData)
  }
}

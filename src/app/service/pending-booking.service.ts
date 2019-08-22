import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PendingBookingService {

  constructor(private http: HttpClient) { }

  checkPending(){
    return this.http.get(`http://192.168.2.220:8080/api/booking/pay`);
  }

  payPending(item){
    let objData ={
      id: parseInt(item),
      paid: true
  }
    return this.http.patch(`http://192.168.2.220:8080/api/booking/pay/${item}`, objData)
  }

  deletePending(item){
      return this.http.delete(`http://192.168.2.220:8080/api/booking/cancel/${item}`)
    }
  }



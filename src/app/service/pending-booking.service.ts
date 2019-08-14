import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PendingBookingService {

  constructor(private http: HttpClient) { }

  checkPending(){
    return this.http.get(`http://localhost:4200/booking/pay`);
  }

  payPending(item){
    let objData ={
      id: parseInt(item),
      paid: true
  }
    return this.http.patch(`http://localhost:4200/booking/pay/${item}`, objData)
  }

  deletePending(item){
      return this.http.delete(`http://localhost:4200/booking/cancel/${item}`)
    }
  }



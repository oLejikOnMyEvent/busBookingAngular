import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusHistoryService {

  constructor(private http: HttpClient) { }



  checkBusHistory(){
   return this.http.get('http://localhost:8080/booking/story')
  }
}
//[{"bookingId":168,"tripNumber":17,"tripTitle":"Москва - Махачкала","departure":"2019-07-10T09:00:00","arrival":"2019-07-11T18:40:00","price":4900,"seatNum":14,"bookingDate":"2019-07-26T16:59:14.541"}]
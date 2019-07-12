import { map, filter } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
// import { resultCityTo } from '../search-bus-to/search-bus-to.component';
// import { resultCityFrom} from '../search-bus/search-bus.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyTicketListService {

  localUrlFlight = 'http://localhost:3000/flight';
  stableUrlFlight = 'http://192.168.2.11:8080/schedule?start=1&finish=2';

  stableUrlFlightData: any

  constructor(private http: HttpClient) { }

  

  checkFlights(cityFrom, cityTo, date) {
    return this.http.get(`http://192.168.2.11:8080/schedule?start=${cityFrom}&finish=${cityTo}&Date=${date}`)
  }

 checkSeats(cityFrom, cityTo){
     return this.stableUrlFlightData = this.http.get(`http://192.168.2.11:8080/booking?schedStartId=${cityFrom}&schedFinishId=${cityTo}`);
   }



}

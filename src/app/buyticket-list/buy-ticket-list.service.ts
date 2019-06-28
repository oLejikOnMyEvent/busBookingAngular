import { map, filter } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
// import { resultCityTo } from '../search-bus-to/search-bus-to.component';
// import { resultCityFrom} from '../search-bus/search-bus.component';

@Injectable({
  providedIn: 'root'
})
export class BuyTicketListService {

  localUrlFlight = 'http://localhost:3000/flight';
  stableUrlFlight = 'http://192.168.2.11:8080/schedule?start=1&finish=2';

  constructor(private http: HttpClient) { }

  flightList: any;

  checkFlights(cityFrom, cityTo) {
    return this.flightList = this.http.get(`http://192.168.2.11:8080/schedule?start=${cityFrom}&finish=${cityTo}`)
  }



}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { resultCityTo } from '../search-bus-to/search-bus-to.component';
// import { resultCityFrom} from '../search-bus/search-bus.component';

@Injectable({
  providedIn: 'root'
})
export class BuyTicketListService {

  localUrlFlight = 'http://localhost:3000/flight';
  stableUrlFlight = "http://localhost:8080/schedule?start=1&finish=2";

  constructor(private http: HttpClient) { }


  postData() {

  }

  checkFlights(cityFrom, cityTo) {
    const dataObj = {
      cityFrom,
      cityTo
    }
    return this.http.post(`http://localhost:8080/schedule?start=${cityFrom}&finish=${cityTo}`, { dataObj });
  }
  
}

import { map, filter } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
// import { resultCityTo } from '../search-bus-to/search-bus-to.component';
// import { resultCityFrom} from '../search-bus/search-bus.component';
import { BehaviorSubject } from 'rxjs';


// export class SeasAll {
//   constructor(
//     private id: any,
//     private seatsCount: any,
//     private freeSeats,
//     private price,
//     private stationFinish,
//     private stationStart,
//     private title)
// }


@Injectable({
  providedIn: 'root'
})
export class BuyTicketListService {

  // private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
  // currentApprovalStageMessage = this.approvalStageMessage.asObservable();


  // stableUrlFlightData: any

  constructor(private http: HttpClient) { }



  checkFlights(cityFrom, cityTo, date) {
    return this.http.get(`http://localhost:8080/schedule?start=${cityFrom}&finish=${cityTo}&Date=${date}`)
  }


  checkSeats(cityFrom, cityTo) {
    return this.http.get(`http://localhost:8080/booking?schedStartId=${cityFrom}&schedFinishId=${cityTo}`);
  }

  // getCookie(){
  //   const user = {
  //     username: "rafa",
  //     password: "mendes"
  //   }
  //   return this.http.get(`http://192.168.2.11:8080/secured`, user )
  // }

  postBookedSeat(seatNumber, tripNumber, stationStart, stationFinish, date, price){
      const body = {
        seatNumber,
        tripNumber,
        stationStart,
        stationFinish,
        date,
        price
      }
     return this.http.post(`http://localhost:8080/booking/`, body)
  }

  checkBusHistory(){
    return this.http.get('http://localhost:8080/booking/story/')
   }

}
// bus:
// id: 1
// seatsCount: 60
// title: "Hyundai"
// __proto__: Object
// freeSeats: Array(60)
// 0: 1
// length: 60
// __proto__: Array(0)
// price: 4300
// stationFinish:
// id: 11
// title: "Махачкала"
// __proto__: Object
// stationStart:
// id: 1
// title: "Москва"
// __proto__: Object
// timeArrival: "2019-07-11T07:10:00"
// timeDeparture: "2019-07-10T17:00:00"
// tripNum: 15
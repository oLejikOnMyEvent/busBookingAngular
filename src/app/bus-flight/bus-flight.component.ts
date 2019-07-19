import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { BuyticketListComponent } from '../buyticket-list/buyticket-list.component';
import { BuyTicketListService } from '../buyticket-list/buy-ticket-list.service';
import { SeatsService } from '../seats/seats.service';



@Component({
  selector: 'app-bus-flight',
  templateUrl: './bus-flight.component.html',
  styleUrls: ['./bus-flight.component.css']
})
export class BusFlightComponent implements OnInit {

  @Input() responseStations: any;


  @Output() seatsObj: any;
  constructor(private BuyTicketListService: BuyTicketListService, private SeatsService: SeatsService) { }



  ngOnInit() {

  }

  getSeats(stationStart, stationFinish) {
    this.BuyTicketListService.checkSeats(stationStart, stationFinish)
      .subscribe(
        (response) => {
        this.seatsObj = response;
          this.SeatsService.getDataSeats(this.seatsObj);
          console.log(this.seatsObj, 'this variable from SeatObj bus-flight component')
        },
        (error) => console.log(error)
      )

  }

}


// bus:
// id: 1
// seatsCount: 60
// title: "Hyundai"
// __proto__: Object
// freeSeats: Array(60)
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
// 6: 7
// 7: 8
// 8: 9
// 9: 10
// 10: 11
// 11: 12
// 12: 13
// 13: 14
// 14: 15
// 15: 16
// 16: 17
// 17: 18
// 18: 19
// 19: 20
// 20: 21
// 21: 22
// 22: 23
// 23: 24
// 24: 25
// 25: 26
// 26: 27
// 27: 28
// 28: 29
// 29: 30
// 30: 31
// 31: 32
// 32: 33
// 33: 34
// 34: 35
// 35: 36
// 36: 37
// 37: 38
// 38: 39
// 39: 40
// 40: 41
// 41: 42
// 42: 43
// 43: 44
// 44: 45
// 45: 46
// 46: 47
// 47: 48
// 48: 49
// 49: 50
// 50: 51
// 51: 52
// 52: 53
// 53: 54
// 54: 55
// 55: 56
// 56: 57
// 57: 58
// 58: 59
// 59: 60
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
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BuyticketListComponent } from '../buyticket-list/buyticket-list.component';
import { BuyTicketListService } from '../buyticket-list/buy-ticket-list.service';
import {SeatsService} from '../seats/seats.service';



@Component({
  selector: 'app-bus-flight',
  templateUrl: './bus-flight.component.html',
  styleUrls: ['./bus-flight.component.css']
})
export class BusFlightComponent implements OnInit {

  @Input() responseStations: any;


  seatsObj: any;
  constructor(private BuyTicketListService: BuyTicketListService, private SeatsService: SeatsService) { }



  ngOnInit() {

  }

  getSeats(stationStart, stationFinish) {

    this.BuyTicketListService.checkSeats(stationStart, stationFinish)
      .subscribe(
        (response) => {this.seatsObj = response;
          this.SeatsService.getDataSeats(this.seatsObj);
    console.log(this.seatsObj)},
      (error) => console.log(error)
      )

  }

}

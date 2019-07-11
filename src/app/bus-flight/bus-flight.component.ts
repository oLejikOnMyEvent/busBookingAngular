import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BuyticketListComponent } from '../buyticket-list/buyticket-list.component';
import { BuyTicketListService } from '../buyticket-list/buy-ticket-list.service';


import * as moment from 'moment';

// interface busFlight{
//   title: string;
//   id: number;
//   titleOfBus: string;
//   countsOfSeats: number;

// }


@Component({
  selector: 'app-bus-flight',
  templateUrl: './bus-flight.component.html',
  styleUrls: ['./bus-flight.component.css']
})
export class BusFlightComponent implements OnInit {

  @Input() responseStations: any;


  // busFlights = [{
  //   title: 'msk-je',
  //   id: '1488',
  //   titleOfBus: "Hyndai",
  //   countsOfSeats: "60",
  // },
  // {
  //   title: 'msk-je-nrg',
  //   id: '1487',
  //   titleOfBus: "Hyndai-lada",
  //   countsOfSeats: "6005",
  // },
  // ]

  // responseStations = this.busFlights;

  seats: any;
  constructor(private BuyTicketListService: BuyTicketListService) { }



  // sendSeatsData() {
  //   let cityTo = this.responseStations.start;
  //   let cityFrom = this.responseStations.finish;
  //   let date = this.responseStations.timeDeparture;
  //   let id = this.responseStations.route

  //   this.BuyTicketListService.checkSeats(cityFrom, cityTo, date, id)
  //     .subscribe(
  //       (response) => this.seats = response,

  //       (error) => console.log(error)
  //     )
  //   console.log(this.seats);
  // }



  ngOnInit() {

  }

  getSeats(stationTrip, stationStart, stationFinish, stationDate){
    stationDate = moment(stationDate).format("YYYY-MM-DD");
      console.log(stationTrip,stationStart, stationFinish, stationDate );
  }

}

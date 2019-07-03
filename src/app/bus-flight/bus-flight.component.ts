import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BuyticketListComponent } from '../buyticket-list/buyticket-list.component';
import { BuyTicketListService } from '../buyticket-list/buy-ticket-list.service';


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

  Seats: any;
  constructor(private BuyTicketListService: BuyTicketListService) { }



  sendSeatsData() {
    let cityTo = this.responseStations;
    let cityFrom = this.responseStations
    let date = this.responseStations
    let id = this.responseStations

    this.BuyTicketListService.checkSeats(cityFrom, cityTo, date, id)
      .subscribe(
        (response) => this.Seats = response,

        (error) => console.log(error)
      )
    console.log(this.Seats);
  }



  ngOnInit() {

  }

}

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
export class BusFlightComponent implements OnInit, OnChanges {

  @Input() responseStations: BuyticketListComponent;
  busFlights = [{
    title: 'msk-je',
    id: '1488',
    titleOfBus: "Hyndai",
    countsOfSeats: "60",
  },
  {
    title: 'msk-je-nrg',
    id: '1487',
    titleOfBus: "Hyndai-lada",
    countsOfSeats: "6005",
  },
  ]
  testBusflight;
  constructor(private BuyTicketListService: BuyTicketListService) { }



  ngOnChanges() {
    this.BuyTicketListService.checkFlights(1, 2)
      .subscribe(
        (response) => this.testBusflight = response,
        (error) => console.log(error)
      )


  }

  ngOnInit() {

    console.log(this.responseStations, this.testBusflight, 'responeStations from bus-flight component');

    // console.log(this.stations, 'this.responseStations from busFlight component');
  }

}

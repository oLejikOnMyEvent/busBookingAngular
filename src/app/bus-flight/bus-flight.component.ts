import { Component, OnInit, Input } from '@angular/core';
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

    // @Input() stations: BuyticketListComponent;
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
  constructor(private BuyTicketListService: BuyTicketListService) { }


  

  ngOnInit() {
     console.log(this.BuyTicketListService.flightList);
      // console.log(this.stations, 'this.responseStations from busFlight component');
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { BuyticketListComponent } from '../buyticket-list/buyticket-list.component';



interface busFlight{
  title: string;
  id: number;
  titleOfBus: string;
  countsOfSeats: number;

}


@Component({
  selector: 'app-bus-flight',
  templateUrl: './bus-flight.component.html',
  styleUrls: ['./bus-flight.component.css']
})
export class BusFlightComponent implements OnInit {

    @Input() stations: BuyticketListComponent;
  busFlight: busFlight[] =[];

  constructor() { }

  ngOnInit() {
      console.log(this.stations, 'this.responseStations from busFlight component');
  }

}

import { Injectable, OnInit } from '@angular/core';
import { SearchBusComponent } from '../search-bus/search-bus.component';
import { SearchBusToComponent } from '../search-bus-to/search-bus-to.component';
import { DatapickerComponent } from '../datapicker/datapicker.component';

@Injectable({
  providedIn: 'root'
})
export class BusFlightService implements OnInit {

  searchFrom: string;
  searchTo: string;
  dataFlight: string;


  constructor(private  SearchBusComponent:  SearchBusComponent, private SearchBusToComponent: SearchBusToComponent,  private DatapickerComponent: DatapickerComponent) { }

  ngOnInit(){
 
  }
}

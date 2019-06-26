import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusFlightService implements OnInit {

  searchFrom: string;
  searchTo: string;
  dataFlight: string;


  constructor() { }

  ngOnInit(){
 
  }
}

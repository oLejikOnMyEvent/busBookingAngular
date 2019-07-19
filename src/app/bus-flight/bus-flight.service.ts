import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';


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

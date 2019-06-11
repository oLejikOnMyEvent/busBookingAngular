import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusSearchService {

  
   stationUrl = 'http://192.168.2.11:8080/stations'

  constructor(private http: HttpClient){}


  getServers(){
  return this.http.get(this.stationUrl)
  }




}

